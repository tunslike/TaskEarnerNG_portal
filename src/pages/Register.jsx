import React, {useState, useEffect} from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import { Footer, ProgressBar } from '../components';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";
import { FiEyeOff } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { IoMdArrowForward } from "react-icons/io";
import { FaUserPlus } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { FiArrowRightCircle } from "react-icons/fi";
import { FaLongArrowAltRight } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { HiMiniGift } from "react-icons/hi2";
import { useLocation } from "react-router-dom";
import { BiSolidErrorCircle } from "react-icons/bi";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { updateClientIPAddress } from "../store/subscriberSlice";
import Modal from 'react-modal';


const Register = () => {

    

    const dispatch = useDispatch();
    const location = useLocation();
    const clientIPAddress = useSelector((state) => state.subscriber.clientIpAddress)

    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [clientIP, setClientIP] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [initialValues, setInitialValues] = useState({
        reg_name: "", 
        reg_email: "", 
        //reg_phone: "", 
        reg_password: "",
        referral_code: ""
      });

    const { register } = useAuth();
    const navigate = useNavigate();
  
    const validationSchema = Yup.object({
      reg_name: Yup.string().min(3, "Name must be at least 3 characters").required("Name is required"),
      reg_email: Yup.string().email("Invalid email").required("Email is required"),
      //reg_phone: Yup.string().min(11, "Invalid Phone Number").max(11, "Invalid Phone Number").required("Mobile phone is required"),
      reg_password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
      referral_code: Yup.string().min(5, "Referral code must be five characters").max(5, "Referral code must be five characters")
    });
  
    const handleSubmit = async (values, { setSubmitting }) => {

        // close error
        setIsError(false);

        setEmail(values.reg_email)

        const names = values.reg_name.trim().split(' ');

        const data = {
            username: values.reg_email,
            accessCode : values.reg_password,
            lastName : names[1],
            firstName : names[0],
            referredCode : values.referral_code,
            authType : "NATIVE",
            ipaddress : clientIPAddress == '' ? clientIP : clientIPAddress
        }

        // show loading true
        setLoading(true);

        // send request
      const response = await register(data);

      setSubmitting(false);
      setLoading(false);

      // check response
      if(response.responseCode == 200 && response.isActive == 0 && response.subscriberId != '') {
            openModal();
      }

      if(response.responseCode == 303) {
        setErrorMessage('Sorry, duplicate account already exists!')
        setIsError(true);
        return;
      }
      
    };


// Functions to open and close the modal
  const openModal = () => setIsOpen(true);
  const closeModal = () => {
        setIsOpen(false)
        navigate("/login")
  };


    // function to get client iP Address
    const getClientIPAddress = async () => {

        const res = await axios.get("https://api.ipify.org/?format=json");

        // store client IP
        dispatch(updateClientIPAddress(res.data.ip));

        setClientIP(res.data.ip);
    };

    // useEffect
    useEffect(() => {

        const queryParams = new URLSearchParams(location.search);
        const referralCode = queryParams.get("ref");

        setInitialValues({
            reg_name: "", 
            reg_email: "", 
            reg_phone: "", 
            reg_password: "",
            referral_code: referralCode || ""
          });

        // get client IP
        if(clientIPAddress == '') {

            getClientIPAddress();
        }

    }, [location.search])


  return (
    <>
    <ProgressBar loading={loading} />
    <header className="bg-[#ffffff] border-b border-[#f0f0f0] text-sm">
    <nav className="container mx-auto md:max-w-[1300px] flex justify-between items-center py-6">
        <img src="" alt="Task Earner Logo" />
        <ul className="hidden md:flex gap-10 font-[400] text-[0.9rem] text-[#202b45]">
            <Link className="navLinks" to="/">Home</Link>
            <Link className="navLinks" to="/how-it-works">How It Works</Link>
            <Link className="navLinks" to="/earnings">Earnings</Link>
            <Link className="navLinks" to="/pricing">Pricing</Link>
            <Link className="navLinks" to="/marketplace">Sell Out</Link>
            <Link className="navLinks" to="/resources">Resources</Link>
            {/** 
            <a href="#Header" className="">Home</a>
            <a href="#Header" className="cursor-pointer hover:text-[#f27a11]">How It Works</a>
            <a href="#Header" className="cursor-pointer hover:text-[#f27a11]">Earnings</a>
            <a href="#Header" className="cursor-pointer hover:text-[#f27a11]">Pricing</a>
            <a href="#Header" className="cursor-pointer hover:text-[#f27a11]">Marketplace</a>
            <a href="#Header" className="cursor-pointer hover:text-[#f27a11]">Resources</a>*/}
        </ul>
        <div className="flex gap-7">
            <button className="text-[#fa501b] text-[0.83rem]">Login</button>
            <button className="text-white bg-[#fa501b] text-[0.75rem] py-2 px-5 rounded-[4rem] font-sm">Create Account</button>
        </div>
        
    </nav>
</header>
<main className='flex justify-center -mt-10 items-center h-[90vh]'>
    <div className='w-[30%] shadow-lg mx-auto py-10 px-5 border-b border-[#ffffff] bg-white rounded-[1.3rem]'>
        <h1 className='font-[500] text-copyrightBlue text-center text-[1.2rem] flex items-center gap-x-[2px] justify-center'>Create a New Account <FaUserPlus className='text-primaryOrange text-[1.2rem] ml-2' /></h1>
        <p className='text-center text-primaryOrange text-[0.75rem] my-[10px]'>
        Enter your details below to create a new account</p>


        <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        > 
        {({ isSubmitting }) => (
            <Form>
                    <div className='mt-[40px]'>

                    {isError && 
                        <div className='text-center mb-3 bg-[#f8d7db] p-3 rounded-lg text-[#721c25] border border-[#f5c6cc] flex items-center gap-x-2 text-[0.8rem]'>
                            <BiSolidErrorCircle className='text-[1.1rem]' />     
                            {errorMessage}
                        </div>
                    }
            
                            <div className='auth-form-box'>
                                <FaUserAlt className='text-primaryOrange' />
                                <Field type='text' name='reg_name' placeholder='Full Name' />
                            </div>
                            <p className='flex items-center gap-x-2 text-[0.75rem] ml-10 mt-1 mb-2'>
                                <ErrorMessage name="reg_name" component="div" className="text-red-500" />
                            </p>

                            <div className='auth-form-box'>
                                <IoMail className='text-primaryOrange' />
                                <Field type='email' name='reg_email' placeholder='Email Address' />
                            </div>
                            <p className='flex items-center gap-x-2 text-[0.75rem] ml-10 mt-1 mb-2'>
                                <ErrorMessage name="reg_email" component="div" className="text-red-500" />
                            </p>

                            {/**
                            <div className='auth-form-box'>
                                <FaPhone className='text-primaryOrange' />
                                <Field type='number' name='reg_phone' placeholder='Mobile Phone' />
                            </div>
                            <p className='flex items-center gap-x-2 text-[0.75rem] ml-10 mt-1 mb-2'>
                                <ErrorMessage name="reg_phone" component="div" className="text-red-500" />
                            </p>**/}

                            <div className='auth-form-box'>
                                <IoMdLock className='text-primaryOrange text-[1.27rem]' />
                                <Field type={showPassword ? "text" : "password"} name='reg_password' placeholder='Enter Password' />

                                <button type='button' onClick={() => setShowPassword((prev) => !prev)}>
                                {showPassword ?
                                    <FiEye title='Hide Password' className='text-primaryOrange cursor-pointer text-[1.2rem]' /> :
        
                                    <FiEyeOff  title='Show Password' className='text-primaryOrange cursor-pointer text-[1.2rem]' /> 
                                }
                            </button>
                            </div>
                            <p className='flex items-center gap-x-2 text-[0.75rem] ml-10 mb-2'>
                            <ErrorMessage name="reg_password" component="div" className="text-red-500" />
                            </p>

                            <div className='auth-form-box mt-3'>
                                <HiMiniGift className='text-primaryOrange' />
                                <Field type='text' name='referral_code' placeholder='Referral Code' />
                            </div>
                            <p className='flex items-center gap-x-2 text-[0.75rem] ml-10 mt-1 mb-2'>
                                <ErrorMessage name="referral_code" component="div" className="text-red-500" />
                            </p>
                    
                            <p className='text-[0.75rem] ml-2 text-[#646265]'>By signing up, you agree to our <span className='text-primaryOrange'>Terms and Privacy Policy</span></p>

                        <div className='mt-8'>
                                <button type='submit' disabled={isSubmitting} className='bg-primaryOrange py-[15px] px-[5rem] hover:bg-[#ff862a] text-[0.8rem] font-[500] justify-center mx-auto flex items-center gap-x-1 rounded-[3rem] text-white'>Create Account <IoMdArrowForward className='text-[1rem]' />
                                </button>
                        </div>

                        <div className='mt-7 text-center'>
                            <p className='text-[0.85rem] text-copyrightBlue font-[400]'>Already have an account?
                                <Link to="/login" className='text-primaryOrange hover:underline ml-1'>Log In here</Link>
                            </p>
                        </div>
                    </div>
            </Form>
        )}
        </Formik>
    </div>            
</main>
<Footer />

 {/* Modal */}
 <Modal
    shouldCloseOnOverlayClick={false}
    isOpen={isOpen}
    onRequestClose={closeModal}
    overlayClassName="fixed z-40 inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    className="bg-white rounded-[1rem] shadow-lg w-[35%]"
>
  <div className='bg-gray-100 p-5 rounded-tl-[1rem] rounded-tr-[1rem] flex justify-between items-center'>
      <h2 className="font-[500] text-[1.1rem]">Verify Your Email</h2>
      <button onClick={closeModal} className='bg-primaryOrange rounded-full p-1'>
          <CgClose className='text-white text-[1.3rem]' />
      </button>
  </div>

  <div className='py-5 px-5 modal-inner-body overflow-scroll'>

            <h1 className='text-[0.85rem] text-gray-600 mb-3'>Thank you for creating an account with us.</h1>

            <p className="text-gray-600 mb-10 text-[0.85rem]">
            We’ve sent a verification link to <span className="font-semibold text-primaryOrange">{email}</span> <br /><br/>
            Please check your inbox and click the link to verify your account and complete your registration.
            </p>
     
            <button className="bg-primaryOrange text-white px-6 text-[0.85rem] py-2 rounded-[2rem] hover:bg-[#ff8139] transition duration-300">
            Resend Email
          </button>

  </div>


</Modal>
{/* Modal */}
</>
  )
}

export default Register;
