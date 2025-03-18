import React, {useState, useEffect} from 'react';
import { Header, SideBar, BackButton, ProgressBar, SearchSelect, TruncatedText} from '../../components';
import { useSelector } from 'react-redux';
import axios from 'axios';
import moment from 'moment';
import { FaRegUser } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {format} from "date-fns"
import Swal from 'sweetalert2';
import { updateSubscriberProfile } from '../../services/SubscriberService';


const profileValidation = Yup.object({
    fname: Yup.string().min(3, "First Name must be at least 3 characters").required("First Name is required"),
    lname: Yup.string().min(3, "Last Name must be at least 3 characters").required("Last Name is required"),
    u_email: Yup.string().email("Invalid email").required("Email is required").required("Email is required"),
    u_phone: Yup.string().min(11, "Invalid Phone Number").max(11, "Invalid Phone Number").required("Mobile phone is required"),
  });

// manage profile component
const ManageProfile = () => {

    // states
    const subscriberData = useSelector((state) => state.subscriber.subscriberData)

    const [dob, setDob] = useState("");
    const [loading, setLoading] = useState(false);
    const [religion, setReligion] = useState("");
    const [gender, setGender] = useState("");
    const [location, setLocation] = useState("");
    const [bankName, setBankName] = useState('');
    const [bankSortCode, setBankSortCode] = useState('');
    const [accountNo, setAccountNo] = useState('');
    const [acctNoError, setAcctNoError] = useState('');
    const [profile, setProfile] = useState([]);
    const [accountDetails, setAccountDetails] = useState(null);
    const [initialValues, setInitialValues] = useState({
        fname: "", 
        lname: "", 
        u_email: "", 
        u_phone: ""
      });

      const handleBankChange = (event) => {
        setBankName(event.target.value);
      };

      const handleReligionChange = (event) => {
        setReligion(event.target.value);
      };

      const handleLocationChange = (event) => {
        setLocation(event.target.value);
    }

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    }

    const handleSelectSearch = (item) => {
        setBankSortCode(item.code);
    };

    // handle submit
    const handleSubmit = async (values, { setSubmitting }) => {
        promptProfileUpdate(values);
        setSubmitting(false);
    };


    const formatDob = (date) => {
        setDob(format(date,"dd-MMM-yyyy"))
    }


    // validate bank account details
    const BankAccountValidation = async () => {

        setAcctNoError(false);

       if(bankSortCode == '') {
            Swal.fire({
                title: "Bank Account Details!",
                text: "Please search and select your bank",
                icon: "error",
                confirmButtonText: "OK",
            });
            return;
       }

       if(accountNo == '') {
            setAcctNoError(true);
            return;
       }

    setLoading(true);

    try {
      
      await fetch(`https://app.nuban.com.ng/api/NUBAN-FTDUCUBB2208?acc_no=${accountNo}&bank_code=${bankSortCode}`)
      .then(response => response.json())
      .then(data => {

        setAccountDetails(data);

        if(data) {
            //update data
            processUpdateAccountDetails(data[0]);
        }else {
              setLoading(false);
        }
         
      });

    } catch (error) {
        setLoading(false);
        console.log(error)
    }
}

        // process to update account details
        const processUpdateAccountDetails = async (details) => {

             // data
        const data = {
            subscriberId : subscriberData.subscriberId,
            bankName : details.bank_name,
            accountName : details.account_name,
            accountNumber : details.account_number
          }

        try {

            //const response = await updateSubscriberProfile(data);
            axios.post('http://localhost:9190/api/v1/subscribers/updateAccountDetails', data)
            .then((response) => {

                setLoading(false);

                if(response.data != null) {
                    Swal.fire({
                        title: "Bank Account Details!",
                        text: "Your account details have been saved!",
                        icon: "success",
                        confirmButtonText: "OK",
                      });
                }

            });
            
         
            }catch(e) {
                setLoading(false);
                console.error(e.message);
            }

        }

        // end of process

      // process profile update
      const processProfileUpdate =  async (values) => {

        // data
        const data = {
            subscriberId : subscriberData.subscriberId,
            lastName : values.lname,
            firstName : values.fname,
            mobileNumber : values.u_phone,
            gender : gender,
            emailAddress : values.u_email,
            birthday : format(dob, "dd-MMM-yyyy"),
            religion : religion,
            location : location
          }

          console.log(data)

        try {

            //const response = await updateSubscriberProfile(data);
            axios.post('http://localhost:9190/api/v1/subscribers/updateAccountDetails', data)
            .then((response) => {

                if(response.data != null) {
                    Swal.fire({
                        title: "Bank Account Details!",
                        text: "Your account details have been successfully",
                        icon: "success",
                        confirmButtonText: "OK",
                      });
                }

            });
            
         
        }catch(e) {
            console.error(e.message);
        }
      }


    // prompt complete task
    const promptProfileUpdate = (values) => {

        Swal.fire({
            title: "Profile Update?",
            text: "Do you want to update your profile?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#0ad13f",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Proceed!",
          }).then((result) => {
            if (result.isConfirmed) {
            
                //submit completed task
                processProfileUpdate(values);
                return;
              
            }
          });
    }

    // useEffect
    useEffect(() => {

        setBankName('');

        setLoading(true);
      
        axios.get(`http://localhost:9190/api/v1/subscribers/fetchProfile?subscriberId=${subscriberData.subscriberId}`)
  
          .then((response) => {

            setLoading(false);

            setProfile(response.data);
            setBankName(response.data.bankName);
            setLocation(response.data.location);
            setReligion(response.data.religion);
            setDob(response.data.birthday);
            setGender(response.data.gender);

            setInitialValues({
                fname: response.data.firstName || "",
                lname: response.data.lastName || "",
                u_email: response.data.emailAddress || "",
                u_phone: response.data.mobileNumber || "",
              });
    
          })
          .catch((error) => {
            setLoading(false);
            console.error('Error fetching data:', error);
          });
    }, []); 

// return 
  return (
    <>
    <ProgressBar loading={loading} />
    <div className='md:max-w-[1250px] mx-auto my-6 mb-10'>
    <Header />

    <div className="flex md:max-w-[1150px] mx-auto gap-x-8 mt-[8rem]">

        {/* Left Column - 30% */}
        <div className="w-[40%] bg-white shadow-sm rounded-[1.5rem] relative">

            {/* Side Bar */}
                <SideBar />
            {/* Side Bar */}

        </div>

        {/* Right Column - 70% */}
        <div className="w-full mt-1">

            <BackButton />

          <div className='flex gap-x-4 items-center mb-4'>
              <FaRegUser className='text-primaryOrange text-[1.3rem]'/>
              <h2 className="font-[500] text-[1.2rem]">Manage Profile</h2>
          </div>
          <div className='bg-white min-h-[300px] shadow-sm rounded-[1.5rem] p-4'>


                <h1 className='text-primaryOrange bg-[#f6f6f6] flex gap-x-2 items-center p-3 rounded-lg text-[0.8rem] m-5 mt-5'>
                    <FaLongArrowAltRight /> Update Personal Data
                </h1>


                <Formik
                    enableReinitialize
                    initialValues={initialValues}
                    validationSchema={profileValidation}
                    onSubmit={handleSubmit}
                > 
                {({ isSubmitting }) => (

                    <Form name='profile-form'>
                    
                            <div className='profile-field-row'>
                                <div className='mb-3'>
                                    <h4 className='profile-label-style'>First Name</h4>
                                    <Field type='text' className='profile-input-style' name='fname' placeholder='First Name' />
                                    <ErrorMessage name="fname" component="div" className="text-red-500 text-[0.7rem] ml-2 mt-2" />
                                </div>
                                <div className='mb-3'>
                                    <h4 className='profile-label-style'>Last Name</h4>
                                    <Field type='text' className='profile-input-style' name='lname' placeholder='Last Name' />
                                    <ErrorMessage name="lname" component="div" className="text-red-500 text-[0.7rem] ml-2 mt-2" />
                                </div>
                            </div>

                            <div className='profile-field-row'>
                                <div className='mb-3'>
                                    <h4 className='profile-label-style'>Date of Birth</h4>
                                    <DatePicker
                                        selected={dob}
                                        value={dob}
                                        onChange={(date) => setDob(date)}
                                        dateFormat="dd-MMM-yyyy"
                                        className="profile-input-style"
                                        placeholderText="Date of Birth"
                                        showPopperArrow={false}
                                    />
                                </div>
                                <div className='mb-1'>
                                    <h4 className='text-[0.83rem] mb-1 ml-2 text-[#a7a7a7]'>Gender</h4>
                                    <select value={gender} onChange={handleGenderChange} className='profile-input-style'>
                                        <option value="" selected="selected">Select here</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                            </div>
                            </div>

                            <div className='profile-field-row'>
                                <div className='mb-3'>
                                    <h4 className='profile-label-style'>Phone Number</h4>
                                    <Field type='number' className='profile-input-style' name='u_phone' placeholder='Phone Number' />
                                    <ErrorMessage name="u_phone" component="div" className="text-red-500 text-[0.7rem] ml-2 mt-2" />
                                </div>
                                <div className='mb-3'>
                                    <h4 className='profile-label-style'>Email Address</h4>
                                    <Field type='email' className='profile-input-style' name='u_email' placeholder='Email Address' />
                                    <ErrorMessage name="u_email" component="div" className="text-red-500 text-[0.7rem] ml-2 mt-2" />
                                </div>
                            </div>

                            <div className='profile-field-row'>
                                <div>
                                    <h4 className='text-[0.83rem] mb-1 mt-3 ml-2 text-[#a7a7a7]'>Religion</h4>
                                    <select value={religion} onChange={handleReligionChange} className='profile-input-style mb-1'>
                                        <option value="" selected="selected">Select here</option>
                                        <option value="Christian">Christianity</option>
                                        <option value="Islam">Islam</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div> 
                                <div>
                                    <h4 className='profile-label-style'>Location</h4>
                                    <select value={location} onChange={handleLocationChange} className='profile-input-style mb-1'>
                                        <option value="" selected="selected">Select here</option>
                                        <option value="Lagos">Lagos</option>
                                        <option value="Abuja">FCT Abuja</option>
                                        <option value="Port Harcourt">Port Harcourt</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>
                            </div>

                            <button type='submit' className='m-6 bg-[#e3ebf5] flex items-center gap-x-1 text-[0.85rem] py-[12px] hover:text-white hover:bg-primaryOrange rounded-xl px-[40px]'>
                                Save <IoArrowForwardCircleOutline className='text-[1.3rem]' />
                            </button>

                    </Form>
                )}
                </Formik>
              

                <h1 className='text-primaryOrange bg-[#f6f6f6] flex gap-x-2 items-center p-3 rounded-lg text-[0.8rem] m-5 mt-14'>
                    <FaLongArrowAltRight /> Update Bank Account Details
                </h1>


                {accountDetails &&
                    <div className='mb-5 ml-6'>
                        <h4 className='text-[0.83rem] mt-2 mb-1 ml-2 text-[#155724]'>Account Details Saved!</h4>
                        <div className='w-full text-[#155724] bg-[#d4eddb] outline outline-[#c3e7cb] rounded-[0.7rem] p-3 text-[0.87rem]'>
                            <TruncatedText text={accountDetails[0].bank_name} /> <span className='ml-2 mr-2'>|</span>
                            <TruncatedText text={accountDetails[0].account_name} maxLength={20} /> <span className='ml-2 mr-2'>|</span>
                            <TruncatedText text={accountDetails[0].account_number} maxLength={9} />
                        </div>
                    </div>
                }

                {profile.accountName != '' &&
                    <div className='mb-5 ml-6'>
                    <h4 className='text-[0.83rem] mt-2 mb-1 ml-2 text-[#155724]'>Account Details Saved!</h4>
                    <div className='w-[96.3%] text-[#155724] bg-[#d4eddb] outline outline-[#c3e7cb] rounded-[0.7rem] p-3 text-[0.87rem]'>
                        <TruncatedText text={profile.bankName} /> <span className='ml-2 mr-2'>|</span>
                        <TruncatedText text={profile.accountName} maxLength={20} /> <span className='ml-2 mr-2'>|</span>
                        <TruncatedText text={profile.accountNumber} maxLength={9} />
                    </div>
                </div>
                }

                        <div className='profile-field-row'>
                            <div>
                                <h4 className='text-[0.83rem] mb-1 ml-2 text-[#a7a7a7]'>Bank Name</h4>
                                <SearchSelect text_value={bankName} onSelect={handleSelectSearch} />
                                {/**
                                <select onChange={handleBankChange} value={bankName} className='profile-input-style mb-1'>
                                    <option value="" selected="selected">Select here</option>
                                    <option value="First Bank">First Bank</option>
                                    <option value="Stanbic IBTC Bank">Stanbic IBTC Bank</option>
                                    <option value="GTB Bank">GTB Bank</option>
                                </select> */}
                            </div>
                            <div className='mb-3'>
                            <h4 className='profile-label-style'>Account Number</h4>
                            <input type='text' maxlength="10" value={accountNo} onChange={(e) => setAccountNo(e.target.value)} className='profile-input-style' name='acctName' placeholder='Enter here' />
                            {acctNoError && 
                                <p className="text-red-500 text-[0.7rem] ml-2 mt-2">Account number is required!</p>
                            }
                            </div>                    
                        </div>



                        <button onClick={BankAccountValidation} className='m-6 bg-[#e3ebf5] flex items-center gap-x-1 text-[0.85rem] py-[12px] hover:text-white hover:bg-primaryOrange rounded-xl px-[40px]'>
                        {loading ? 'Validating...' : 'Validate & Save'}
                            <IoArrowForwardCircleOutline className='text-[1.3rem]' />
                        </button>
             
                <div>

                </div>

        </div>


        </div>
  </div>

  </div>
  </>
  )
}

export default ManageProfile
