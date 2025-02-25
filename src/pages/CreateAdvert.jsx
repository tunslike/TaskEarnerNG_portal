import React, {useState, useEffect} from 'react'
import { Header, Footer, BackButton, PlatformIcon } from '../components'
import { FaPeopleGroup } from "react-icons/fa6";
import { RiErrorWarningLine } from "react-icons/ri";
import { CgClose } from "react-icons/cg";
import { SlPicture } from "react-icons/sl";
import { Tooltip } from 'react-tooltip';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import { fetchTaskTypes, postNewTask } from '../services/TasksService';

const CreateAdvert = () => {

   const subscriberData = useSelector((state) => state.subscriber.subscriberData)

    const [totalPrice, setTotalPrice] = useState(0.00);
    const [advertNo, setAdvertNo] = useState(1);
    const [captionError, setCaptionError] = useState(false);
    const [caption, setCaption] = useState('');
    const [adPrice, setAdPrice] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [platformError, setPlatformError] = useState(false);
    const [files, setFiles] = useState([]);
    const [advertName, setAdvertName] = useState('');
    const [advertError, setAdvertError] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [gender, setGender] = useState('');
    const [location, setLocation] = useState('');
    const [image_src, setImageSrc] = useState('');
    const [appName, setAppName] = useState('');
    const [description, setDescription] = useState('');
    const [taskTypes, setTaskTypes] = useState(['']);
    const [isLoading, setIsLoading] = useState(false);
    const [taskTypeID, setTaskTypeID] = useState('');

    
    // Functions to open and close the modal
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    // process submit 
    const processSubmit = () => {

        // check advert name 
        if(advertName == '') {
            setAdvertError(true);
            return;
        }

        // check caption
        if(caption == '') {
            setCaptionError(true);
            return;
        }

        if(selectedImage == null) {
            setPlatformError(true);
            return;
        }

        //open modal
        setIsOpen(true)

    }


    // function to process payment and submit
    const makePaymentAndSubmit = async () => {

        const data = {
          
            subscriberID : subscriberData.subscriberId,
            taskTypeID : taskTypeID,
            taskType : "Advert",
            taskName : advertName,
            platform : appName,
            caption_message : caption,
            no_of_post : advertNo,
            price : adPrice,
            gender : gender,
            location : location
          }

          // set isLoading
          setIsLoading(true);

          //post to API
          try {

                setIsLoading(false);
                const response = await postNewTask(data);
                
                if(response.status == 200) {
                    alert('Advert request has been submitted successfully!')
                    return;
                }

                setTotalPrice(0.00),
                setAdvertNo(1),
                setCaption('')
                setAdPrice(null),
                setAdvertName('')
                setLocation('')
                setGender('')
                setImageSrc('')
                setDescription('')
                setTaskTypeID('')

                setIsOpen(false)

          }catch(e) {
            setIsLoading(false);
            alert(e + e.message);
          }

    }
    // end of function

 

   
// function to fetch Task type
    const fetchTaskType = async () => {
      const data = await fetchTaskTypes();
      setTaskTypes(data)
      console.log(taskTypes.length)
    }
// end of function
  
    // useEffect 
    useEffect(() => {
  
      fetchTaskType();
  
    }, []);

    // change advert
    const onChangeAdvertName = (value) => {
        setAdvertName(value)
        if(value.length < 5) {
            setAdvertError(true)
        }else{
            setAdvertError(false)
        }
    }


    const handleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
        console.log(files);
      };


    const handleSelect = (index, taskID, title, price, image_src, Description) => {

        setSelectedImage(index);
        setAdPrice(price)
        setAppName(title)
        setImageSrc(image_src)
        setDescription(Description)
        calculatePrice(price, advertNo)
        setTaskTypeID(taskID)

    };

    const onChangeAdvertNo = (value) => {
        setAdvertNo(value)
        console.log(adPrice + '*' + value);

        let amount = adPrice * value;
        setTotalPrice(amount);
    }

    const onChangeCaption = (value) => {
        setCaption(value);
        if(value.length < 20 || value.length > 1000) {
            setCaptionError(true);
        }else{
            setCaptionError(false);
        }
    }

    const calculatePrice = (price, count) => {
        setTotalPrice(price * count);
    }

    {/** 
    const icons = [
        {src: './fb_icon.png', title: 'Facebook', pricing: 250},
        {src: './tw_icon.png', title: 'X (Twitter)', pricing: 150},
        {src: './inst_icon.png', title: 'Instagram', pricing: 200},
        {src: './whatsapp_icon.png', title: 'WhatsApp', pricing: 150},
        {src: './tiktok_icon.png', title: 'TikTok', pricing: 150},
    ]*/}

  return (
    <>
    <div className='md:max-w-[1250px] mx-auto my-6 mb-10'>
          <Header />


          <div className='mt-[85px] ml-[70px] mb-[10px]'>
            <BackButton />
          </div>
          <div className='inner-display-box'>

            <div className='bg-[#f3f3f3] p-3 rounded-[1rem] mr-5'>
                    <FaPeopleGroup className='text-primaryOrange text-[2rem]' />
            </div>
            <div className='flex-1'>
                <h1>Post Your Adverts on Social Media </h1>
                <p>Get social media people with at least 100 followers to repost your adverts and perform social tasks for you on their social media accounts</p>
            </div>
             <div>
                <ul className='bd-crumb'>
                    <li className='text-copyrightBlue'>Home</li>
                    <li>Post Advert</li>
                </ul>
             </div>
          </div>

          <div>

          <div className='inner-body'>
          <div className='pl-7 pb-7'>
            
          <div className='mb-6'>
                <h4>Enter Advert Name</h4>
                <input type='text' value={advertName} onChange={(e) => onChangeAdvertName(e.target.value)} className='form-input' placeholder='Enter Advert Name here...' />
                {(advertError) &&
                    <div className='flex items-center gap-x-1 mb-1'>
                        <RiErrorWarningLine className='text-red-600'/> <p className='text-red-600 text-[0.7rem]'>Advert name is required</p>
                    </div>
                  }
          </div>
              <h4>Choose your preferred social media platform</h4>
  
              <div className='flex items-center justify-start gap-x-12 py-5'>
  
                    { 
                       (taskTypes.length > 0) && 

                            taskTypes.map((type, index) => (
                            <PlatformIcon 
                                key={index}
                                img={type.image_src}
                                title={type.appName}
                                pricing={type.taskPrice}
                                isSelected={selectedImage === index}
                                onSelect={() => handleSelect(index, type.taskId, type.platform, type.taskPrice, type.image_src, type.taskDescription)}
                            />
                    ))
                     }
              </div>
              {(platformError) &&
                <div className='flex items-center gap-x-1 mb-1'>
                    <RiErrorWarningLine className='text-red-600'/> <p className='text-red-600 text-[0.7rem]'>Social media platform is required</p>
                </div>
              }
              
              <div className='flex gap-x-4'>
                  <h4 className='mt-8'>Advert Caption or Message</h4> 
  
                  <a 
                      className='tool-tip-text' 
                      data-tooltip-id="my-tooltip" 
                      data-tooltip-place='right' 
                      data-tooltip-content="Include important details, business contact and website link"
                  >
                      Read Description here
                  </a>
                  <Tooltip id="my-tooltip" style={{fontSize: 12}} className='text-[0.8rem]' />
              </div>
              <textarea rows={8} value={caption} onChange={(e) => onChangeCaption(e.target.value)} className='form-input' placeholder='Enter message or text here' />
              {(captionError) &&
                <div className='flex items-center gap-x-1 mb-1'>
                    <RiErrorWarningLine className='text-red-600'/> <p className='text-red-600 text-[0.7rem]'>Caption must be between 50 and 1000 characters</p>
                </div>
              }
  
              <div className='flex gap-x-4 -mt-2'>
              <h4 className='mt-8'>Number of Advert Post</h4> 
              <a 
                  className='tool-tip-text' 
                  data-tooltip-id="tip2" 
                  data-tooltip-place='right' 
                  data-tooltip-content="Enter total number of advert post you want to get"
              >
                  Read Description here
              </a>
              <Tooltip id="tip2" style={{fontSize: 12}} className='text-[0.8rem]' />
              </div>
              <input type='number' value={advertNo} min={1} onChange={(e) => onChangeAdvertNo(e.target.value)} className='form-input' placeholder='1' />
  
              <div className='flex gap-x-4 -mt-1'>
              <h4 className='mt-8'>Target Gender</h4> 
              <a 
                  className='tool-tip-text' 
                  data-tooltip-id="tip2" 
                  data-tooltip-place='right' 
                  data-tooltip-content="Your advert task will be shown to selected gender only. Choose All for everyone"
              >
                  Read Description here
              </a>
              <Tooltip id="tip2" style={{fontSize: 12}} className='text-[0.8rem]' />
              </div>
              <select onChange={(e) => setGender(e.target.value)} className='form-input'>
                  <option value="" selected="selected">Select here</option>
                  <option value="All Gender">All Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
              </select>
  
              <div className='flex gap-x-4 -mt-1'>
              <h4 className='mt-8'>Target Location</h4> 
              <a 
                  className='tool-tip-text' 
                  data-tooltip-id="tip2" 
                  data-tooltip-place='right' 
                  data-tooltip-content="Select your preferred location where you want your advert posted to"
              >
                  Read Description here
              </a>
              <Tooltip id="tip2" style={{fontSize: 12}} className='text-[0.8rem]' />
              </div>
              <select onChange={(e) => setLocation(e.target.value)} className='form-input'>
                  <option value="" selected="selected">Select here</option>
                  <option value="All location">All Location</option>
                  <option value="Lagos">Lagos</option>
                  <option value="Abuja">Abuja</option>
              </select>
  
              
              <div className='flex gap-x-4 -mt-1'>
              <h4 className='mt-8'>Upload Photo Advert</h4> 
  
              <a 
                  className='tool-tip-text' 
                  data-tooltip-id="tip3" 
                  data-tooltip-place='right' 
                  data-tooltip-content="Upload a photo or video format you want people to post with your advert"
              >
                  Read Description here
              </a>
              <Tooltip id="tip3" style={{fontSize: 12}} className='text-[0.8rem]' />
          </div>
              <input 
                type='file' 
                multiple
                onChange={handleFileChange} 
                className='form-input' />
              </div>
              <div className='mx-7'>
              {files.length > 0 && (
                <ul className="mb-4 flex items-center justify-start gap-x-5">
                  {files.map((file, index) => (
                    <li key={index} className="text-primaryOrange text-center text-[0.8rem]">
                        <div className='bg-[#f5f5f5] mx-auto w-[75px] h-[65px] p-4 rounded-[1rem] mb-2'>
                            <SlPicture  className='text-[#bdc7eb] mx-auto text-[2rem]'/>
                        </div>
                      {file.name}
                    </li>
                  ))}
                </ul>
              )}
              </div>
              
  
              <div className='cal-area-btn'>
                  
                  <div className='flex gap-x-3 items-center'>
                      <h6>Total Payment:</h6>
                      <h1>₦ {Intl.NumberFormat('en-US').format(totalPrice)}</h1>
                  </div>
  
                  <button onClick={processSubmit}>Make Payment</button>
                  
              </div>
          </div>
      </div>
    </div>

     {/* Modal */}
     <Modal
        shouldCloseOnOverlayClick={false}
        isOpen={isOpen}
        onRequestClose={closeModal}
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        className="bg-white rounded-[1rem] shadow-lg w-[50%]"
   >

     <div className='bg-gray-100 p-5 rounded-tl-[1rem] rounded-tr-[1rem] flex justify-between items-center'>
        <h2 className="font-[500] text-[1.1rem]">Review Your Order</h2>
        <button disabled={isLoading}  onClick={closeModal} className='bg-primaryOrange rounded-full p-1'>
            <CgClose className='text-white text-[1.3rem]' />
        </button>
     </div>
   
     <div className='py-5 px-10 modal-inner-body overflow-scroll'>

        <h4>Advert Name</h4>  
        <div className='bg-[#f9f9f9] w-full py-2 mt-2 rounded-xl mb-6 px-3'>
            <h6 className='text-primaryOrange text-[0.85rem] font-[400]'>{advertName}</h6>
        </div>

        <h4>Selected Social media platform</h4>  
        
        <div className='mt-4 mb-6 flex justify-start items-center gap-x-4'>
              <div className='preview-platform-icon w-[250px]'>
                <img width={110} src={image_src} />
              </div>
              <div>
                <h4 className='mb-2'><span className='bg-primaryOrange text-white px-2 py-1 text-[0.85rem] rounded-[1rem]'>₦ {adPrice}</span> <span className='font-[500] text-primaryBlue text-[0.85rem] ml-1'>Per Post</span></h4>
                <p className='text-[0.77rem] text-[#919195]'>{description}</p>
              </div>
        </div>
        
        <h4>Advert Caption or Message</h4> 
        <div className='overflow-scroll mb-6 min-h-[80px] w-full mt-2 p-4 rounded-[1rem] bg-[#f9f9f9]'>
            <p className='text-[0.8rem] text-[#919195]'>{caption}</p>
        </div>

        <h4>Additional Details</h4> 
        <div className='flex justify-between items-start gap-x-4 mt-2 mb-6'>
              <div className='preview-details-box'>
                    <h4>Number of Advert Post</h4>
                    <h6 className='preview-details-text'>{advertNo}</h6>
              </div>
              <div className='preview-details-box'>
                <h4>Target Gender</h4>
                <h6 className='preview-details-text'>{gender}</h6>
             </div>
             <div className='preview-details-box'>
                <h4>Target Location</h4>
                <h6 className='preview-details-text'>{location}</h6>
             </div>
        </div>

        <h4>Selected Photo Advert</h4> 
        <div className='overflow-scroll h-300px w-full mt-2 p-4 rounded-[1rem] bg-[#f9f9f9]'>
        <p className='text-[0.8rem] text-[#919195]'>

            {
                (files.length == 0) && 
                <p className='text-primaryOrange'>No file selected</p>
            }

            {files.length > 0 && (
                <ul className="text-primaryOrange flex-wrap flex gap-2">
                  {files.map((file, index) => (
                    <li key={index}>
                      {file.name}
                    </li>
                  ))}
                </ul>
              )}
        </p>
      </div>


        
     </div>
    
     <div className="flex justify-between items-center gap-2 p-4 border-t border-[#f0f0f0]">

       <h1 className='text-[1rem] ml-6 font-[500]'>Total Payment: <span className='bg-primaryOrange text-white py-1 px-4 rounded-[2rem]'>₦ {Intl.NumberFormat('en-US').format(totalPrice)}</span></h1>
       <button
         onClick={makePaymentAndSubmit}
         disabled={isLoading}
         className="px-7 py-3 text-[0.80rem] flex items-center gap-x-1 bg-green-500 text-white rounded-[2rem] hover:bg-green-600 transition"
       >

       
       {isLoading ? (
        <>
          <svg
            className="animate-spin h-5 w-5 mr-2 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            ></path>
          </svg>
          Processing, please wait...
        </>
      ) : (
        'Submit and Make Payment'
      )}
       
              
        
       </button>

     </div>
   </Modal>
 {/* Modal */}
    
    <Footer />
  </>
  )
}

export default CreateAdvert