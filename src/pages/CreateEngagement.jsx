import React, {useState, useEffect} from 'react'
import { Header, Footer, BackButton, EngagementItem, PlatformIcon } from '../components'
import { FaPeopleGroup } from "react-icons/fa6";
import { IoLogoWechat } from "react-icons/io5";
import { RiErrorWarningLine } from "react-icons/ri";
import { CgClose } from "react-icons/cg";
import { SlPicture } from "react-icons/sl";
import { Tooltip } from 'react-tooltip';
import { useSelector } from 'react-redux';
import Modal from 'react-modal';
import { fetchTaskTypes, postNewTask } from '../services/TasksService';

const CreateEngagement = () => {
  

    const subscriberData = useSelector((state) => state.subscriber.subscriberData)

    const [totalPrice, setTotalPrice] = useState(0.00);
    const [advertNo, setAdvertNo] = useState(1);
    const [captionError, setCaptionError] = useState(false);
    const [caption, setCaption] = useState('');
    const [adPrice, setAdPrice] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedTask, setSelectedTask] = useState(null);
    const [platformError, setPlatformError] = useState(false);
    const [files, setFiles] = useState([]);
    const [advertName, setAdvertName] = useState('');
    const [socialMediaLinkError, setSocialMediaLinkError] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [gender, setGender] = useState('');
    const [location, setLocation] = useState('');
    const [image_src, setImageSrc] = useState('');
    const [appName, setAppName] = useState('');
    const [description, setDescription] = useState('');
    const [taskTypes, setTaskTypes] = useState(['']);
    const [isLoading, setIsLoading] = useState(false);
    const [taskTypeID, setTaskTypeID] = useState('');
    const [taskName, setTaskName] = useState('');
    const [socialMediaLink, setSocialMediaLink] = useState('');

    
    // Functions to open and close the modal
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    // process submit 
    const processSubmit = () => {

      setPlatformError(false)
      setCaptionError(false)
      setSocialMediaLinkError(false)
    

        // check advert name 
        if(appName == '') {
            setPlatformError(true);
            return;
        }

        // check caption
        if(taskName == '') {
            setCaptionError(true);
            return;
        }

        if(socialMediaLink == '') {
          setSocialMediaLinkError(true);
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
            taskType : "Engagement",
            taskName : taskName,
            platform : appName,
            engagement_type : taskName,
            social_media_link: socialMediaLink,
            no_of_post : advertNo,
            price : adPrice,
            gender : gender,
            location : location
          }

          console.log(data);

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

    const handleEngagementSelect = (index, task, pricing) => {

        setSelectedTask(index);
        setTaskName(task);
        setAdPrice(pricing)
        calculatePrice(pricing, advertNo);
    };

    const handlePlatformSelect = (index, title, image) => {
      setSelectedImage(index);
      setAppName(title);
      setImageSrc(image)
    }

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

    
    const icons = [
        {src: './fb_icon.png', title: 'Facebook', pricing: 250},
        {src: './tw_icon.png', title: 'X (Twitter)', pricing: 150},
        {src: './inst_icon.png', title: 'Instagram', pricing: 200},
        {src: './whatsapp_icon.png', title: 'WhatsApp', pricing: 150},
        {src: './tiktok_icon.png', title: 'TikTok', pricing: 150},
        {src: './apple_store.png', title: 'Apple Store', pricing: 150},
        {src: './play_store.png', title: 'Play Store', pricing: 150},
        {src: './telegram.png', title: 'Telegram', pricing: 150},
        {src: './you_tube.png', title: 'Youtube', pricing: 150},
    ]

    const engagements = [
      {task: 'Follow', desc: 'Get real people to follow a page or account', pricing: 250},
      {task: 'Likes', desc: 'Get real people to like a page or account', pricing: 150},
      {task: 'Share', desc: 'Get real people to share a page or content', pricing: 200},
      {task: 'Comment', desc: 'Get real people to comment a page or content', pricing: 150},
      {task: 'Retweet', desc: 'Get real people to retweet a page or account', pricing: 150},
  ]

  const engagement = []

  return (
    <>
    <div className='md:max-w-[1250px] mx-auto my-6 mb-10'>
          <Header />

          <div className='mt-[85px] ml-[70px] mb-[10px]'>
          <BackButton />
        </div>
          <div className='inner-display-box'>

            <div className='bg-[#f3f3f3] p-3 rounded-[1rem] mr-5'>
                    <IoLogoWechat className='text-primaryOrange text-[2rem]' />
            </div>
            <div className='flex-1'>
                <h1>Buy Social Media Engagement</h1>
                <p>Engagement tasks are created to get people to perform simple tasks for you on their social media account. Check below to see the price of creating various engagement tasks:</p>
            </div>
             <div>
                <ul className='bd-crumb'>
                    <li className='text-copyrightBlue'>Home</li>
                    <li>Buy Engagement Post</li>
                </ul>
             </div>
          </div>
          <div>

          <div className='inner-body'>
          <div className='pl-7 pb-7'>
            

              <h4>Choose your preferred social media platform</h4>
              <div className='flex items-center gap-y-10 flex-wrap justify-start gap-x-12 py-5'>
  
                    { 
                       (icons.length > 0) && 

                       icons.map((type, index) => (
                            <PlatformIcon 
                                key={index}
                                img={type.src}
                                title={type.title}
                                isSelected={selectedImage === index}
                                onSelect={() => handlePlatformSelect(index, type.title, type.src)}
                            />
                    ))
                     }
              </div>
              {(platformError) &&
                <div className='flex items-center gap-x-1 mb-1'>
                    <RiErrorWarningLine className='text-red-600'/> <p className='text-red-600 text-[0.77rem]'>Social media platform is required</p>
                </div>
              }
              
              <div className='flex gap-x-4'>
                  <h4 className='mt-8'>Select Engagement Type</h4> 
  
                  <a 
                      className='tool-tip-text' 
                      data-tooltip-id="my-tooltip" 
                      data-tooltip-place='right' 
                      data-tooltip-content="Select the type of engagement you would want to get done by real people"
                  >
                      Read Description here
                  </a>
                  <Tooltip id="my-tooltip" style={{fontSize: 12}} className='text-[0.8rem]' />
              </div>

                <div className='max-h-[300px] h-[300px] mt-3 mb-3 border p-3 overflow-y-scroll text-[0.87rem] border-[#e4e4e4] w-[60%] rounded-[0.7rem]'>
                    
                

                    {
                      (engagements.length > 0) ?

                      engagements.map((engagement, index) => (

                        <EngagementItem 
                            key={index}
                            isSelected={selectedTask === index}
                            title={engagement.task}
                            desc={engagement.desc}
                            price={engagement.pricing}
                            onSelect={() => handleEngagementSelect(index, engagement.task, engagement.pricing)}
                        />

                      )) :

                      <div className='flex h-[120px] text-[#c0c0c0] text-[0.8rem] font-[400] items-center justify-center'>Select Platform to load engagement type</div>
                    }
                </div>
              {(captionError) &&
                <div className='flex items-center gap-x-1 mb-1'>
                    <RiErrorWarningLine className='text-red-600'/> <p className='text-red-600 text-[0.77rem]'>Select platform engagement type</p>
                </div>
              }

              <div className='mb-3 mt-10'>
              <h4>Social Media Page/Profile Link</h4>
              <input type='text' value={socialMediaLink} onChange={(e) => setSocialMediaLink(e.target.value)} className='form-input' placeholder='Enter social media link here' />
              {(socialMediaLinkError) &&
                  <div className='flex items-center gap-x-1 mb-1'>
                      <RiErrorWarningLine className='text-red-600'/> <p className='text-red-600 text-[0.77rem]'>Social media page/profile link name is required</p>
                  </div>
                }
              </div>
  
              <div className='flex gap-x-4 -mt-2'>
              <h4 className='mt-8'>Number of {(taskName == '') ? 'Post' : `${taskName} Post`}</h4> 
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

        <h4>Selected Social media platform</h4>  
        
        <div className='mt-4 mb-8 flex justify-start items-center gap-x-4'>
              <div className='preview-platform-icon'>
                <img width={110} src={image_src} />
              </div>
              <div>
                <h4 className='mb-2'><span className='bg-primaryOrange text-white px-2 py-1 text-[0.85rem] rounded-[1rem]'>₦ {adPrice}</span> <span className='font-[500] text-primaryBlue text-[0.85rem] ml-1'>Per {taskName}</span></h4>
              </div>
        </div>

        <h4>Engagement Type</h4>  
        <div className='bg-[#f9f9f9] w-full py-3 mt-2 rounded-lg mb-8 px-3'>
            <h6 className='text-primaryOrange text-[0.8rem] font-[400]'>{taskName}</h6>
            <p className='text-[#696969] font-[400] text-[0.78rem]'>Get real people to {taskName} a page or profile</p>
        </div>

        <h4>Social Media Page/Profile Link</h4>  
        <div className='bg-[#f9f9f9] w-full py-3 mt-2 rounded-lg mb-8 px-3'>
            <h6 className='text-primaryOrange text-[0.8rem] font-[400]'>{socialMediaLink}</h6>
        </div>
        
        <h4>Additional Details</h4> 
        <div className='flex justify-between items-start gap-x-4 mt-2 mb-8'>
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

export default CreateEngagement