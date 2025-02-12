import React, {useState} from 'react'
import { Header, TaskTimer, BackButton } from '../components'
import { FaTasks } from "react-icons/fa";
import { RiInformationLine } from "react-icons/ri";
import { LuExternalLink } from "react-icons/lu";
import { FaCheck } from "react-icons/fa";
import { Tooltip } from 'react-tooltip';
import { IoMdInformationCircleOutline } from "react-icons/io";
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom'
import { submitTask } from '../services/TasksService';


const CompleteTask = () => {

    const [taskStart, setTaskStart] = useState(null);
    const [socialMediaAccount, setSocialMediaAccount] = useState('');
    const [socialMediaAcctError, setSocialMediaAcctError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    const navigate = useNavigate();

    // submit tasks
    const submitCompletedTask = async () => {

        const data = {

            taskID :"f422777b-fc55-44da-bae9-7626b78435bc",
            socialMediaAccount : "tunslike/facebook.com", 
            taskCompletedBy : "Ajayi Ahmed",
            proofOfWork : "Work is completed"

          }

          //set isLoading
         setIsLoading(true);

          //post to API
          try {

                setIsLoading(false);
                const response = await submitTask(data);

                if(response != '') {

                    Swal.fire({
                        title: "Submit Completed Task!",
                        text: "Your task was submitted successfully",
                        icon: "success",
                        confirmButtonText: "OK",
                      });

                      // navigate
                      navigate("/");

                    return;
                }
                
              

          }catch(e) {
            setIsLoading(false);
            alert(e + e.message);
          }
    }

    const promptCompleteTask = () => {

        Swal.fire({
            title: "Submit Completed Task?",
            text: "Do you want to submit your completed task for verification?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#0ad13f",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Proceed!",
          }).then((result) => {
            if (result.isConfirmed) {
            
                //submit completed task
                submitCompletedTask();
                return;
              
            }
          });
    }

    const showStartTaskAlert = () => {
        Swal.fire({
            title: "Start Task Now?",
            text: "Do you want to complete the task now?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#0ad13f",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Proceed!",
          }).then((result) => {
            if (result.isConfirmed) {
            
                setTaskStart(true);
              //Swal.fire("Deleted!", "Your item has been deleted.", "success");
              
            }
          });
      };

      
    const handleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
        console.log(files);
    };


    return (
        <div className='md:max-w-[1250px] mx-auto my-6 mb-10'>
            <Header />
            <div className='mt-[85px] ml-[70px] mb-[10px]'>
            <BackButton />
          </div>
            <div className='inner-display-box'>
                <div className='bg-[#f3f3f3] p-3 rounded-[1rem] mr-5'>
                    <FaTasks className='text-primaryOrange text-[2rem]' />
                </div>
                <div className='flex-1'>
                    <h1>Complete Social Media Task</h1>
                    <h4 className='text-primaryBlue text-[0.7rem] font-[500]'>Task ID: <span className='text-primaryOrange'>TE00920</span></h4>
                </div>
                <div>
                    <ul className='bd-crumb'>
                        <li className='text-copyrightBlue'>Home</li>
                        <li>Buy Engagement Post</li>
                    </ul>
                </div>
            </div>

            <div className='inner-body'>
                <div className='pl-7 pb-7'>

                {taskStart &&

                    <div className='text-[#0e5461] bg-[#d1ecf1] w-[80%] mb-8 mr-10 border border-[#bfe5eb] px-2 py-[2px] rounded-[1rem] text-[0.73rem] flex items-start gap-x-3'><IoMdInformationCircleOutline className='text-[2rem]' /> Kindly note that you can only perform this task as long as available. This task will be saved on your dashboard once you start and available for you to continue as long as it is available and valid</div>
                }
            
                    <div className='mt-4 mb-10 flex items-center gap-x-6'>
                        <div className='preview-platform-icon'>
                            <img width={110} src="./you_tube.png" />
                        </div>
                        <div className='flex-1'>
                        <h6 className='text-[0.75rem] text-primaryOrange mb-2'>Social Media Tasks</h6>
                        <h3 className='text-copyrightBlue font-[600] text-[1.3rem]'>Follow Tunslike on X</h3>
                        <div className='bg-[#f8d7db] w-[55%] px-3 py-1 text-[0.7rem] mt-2 border border-[#f5c6cc] flex items-center gap-x-1 rounded-[1rem] text-[#721c25]'>
                            <RiInformationLine className='text-[1rem]' /> Please do not unfollow this profile or account after you follow it
                        </div>
                        </div>
                        <div className='pr-7'>
                            {taskStart ? (

                                <TaskTimer startTime="00:10:00" start={taskStart} endTime="00:00:00" />
                
                            ) : (
                
                                <button
                                    onClick={() => showStartTaskAlert()}
                                    className="px-7 py-3 text-[0.9rem] flex items-center gap-x-2 bg-green-500 text-white rounded-[2rem] hover:bg-green-600 transition"
                                >
                                    Start Task Now <FaCheck className='text-[1rem]' />
                                </button> 
                            )
                            }
                        </div>
                    </div>

                        <h4 className='mt-5'>Social Media Page/Profile Link</h4>  
                        <div className='bg-[#f9f9f9] w-[70%] py-3 mt-2 rounded-lg mb-8 px-3 flex justify-between items-center'>
                            <h6 className='text-primaryOrange text-[0.75rem] font-[400]'>https://www.facebook.com/profile.php?id=61563070051221& mibextid=ZbWkwL</h6>
                            <a href="#" className='text-[#006ce8] hover:bg-[#006ce8] hover:text-white text-[0.72rem] border border-[#006ce8] px-3 py-[4px] rounded-[1rem] flex items-center gap-x-1'>Open Link <LuExternalLink /></a>
                        </div>


                        <h4>Task Instruction</h4> 
                        <div className='overflow-scroll mb-10 min-h-[120px] w-[70%] mt-2 p-4 rounded-[1rem] bg-[#f9f9f9]'>
                        <h6 className='text-black font-[500] text-[0.8rem] mb-5'>Please follow the step-by-step instructions below to do your task:</h6>
                            <ul className='text-[0.75rem] leading-6 font-[400] text-[#262525]'>  
                              
                                <li><b>Step 1:</b> Open the Task Link above on your Facebook Mobile App or browser</li>
                                <li><b>Step 2:</b> The link will direct you to a Facebook Page which you are meant to like and follow.</li>
                                <li><b>Step 3:</b> Click on the Like or Follow button on the Facebook Page to start liking or following the page. You MUST NOT Unfollow the account after you have followed the account.</li>
                                <li><b>Step 4:</b> Create a screenshot of the page that shows you have liked or followed the page and upload the screenshot under the Proof of Work Form below. You are also required to enter your Facebook Username or Name which you used to perform the task</li>
                            </ul>
                        </div>

                          {taskStart &&

                            <div>


                        <div className=''>
                        <div className='flex gap-x-4 -mt-1'>
                            <h4 className='text-primaryOrange'>Facebook Account used to peform the task</h4>
                            <a 
                            className='text-[0.7rem] mt-1 px-2 rounded-md bg-[#f5f5f5] h-[18px] text-primaryOrange cursor-pointer' 
                            data-tooltip-id="tip3" 
                            data-tooltip-place='right' 
                            data-tooltip-content="Upload a proof of work or screenshot showing that you can completed the task!"
                            >
                                Read Description here
                            </a>
                        </div>
                        <input type='text' value={socialMediaAccount} onChange={(e) => setSocialMediaAccount(e.target.value)} className='w-[70%] text-primaryBlue placeholder-[#a6a6a6] outline outline-[#e4e4e4] rounded-[0.7rem] my-2 p-3 text-[0.87rem]' placeholder='Enter facebook account you used to perform the task here' />
                        {(socialMediaAcctError) &&
                            <div className='flex items-center gap-x-1 mb-1'>
                                <RiErrorWarningLine className='text-red-600'/> <p className='text-red-600 text-[0.77rem]'>Social media page/profile link name is required</p>
                            </div>
                          }
                        </div>

                            <div className='flex gap-x-4 -mt-1'>
                        <h4 className='mt-8'>Upload Proof of Work or Screenshot</h4> 
                        <a 
                            className='tool-tip-text' 
                            data-tooltip-id="tip3" 
                            data-tooltip-place='right' 
                            data-tooltip-content="Upload a proof of work or screenshot showing that you can completed the task!"
                        >
                            Read Description here
                        </a>
                        <Tooltip id="tip3" style={{fontSize: 12}} className='text-[0.8rem]' />
                    </div>
                    <input 
                      type='file' 
                      multiple
                      onChange={handleFileChange} 
                      className='w-[70%] text-primaryBlue placeholder-[#a6a6a6] outline outline-[#e4e4e4] rounded-[0.7rem] my-2 p-3 text-[0.87rem]' />

                        </div>
                          }

                        
                        
                </div>


                <div className='cal-area-btn'>
                  
                <div className='flex gap-x-3 items-center'>
                    <h6>Earnings:</h6>
                    <h2 className='bg-primaryOrange text-[1.1rem] font-[500] px-3 py-[2px] rounded-[1rem] text-white'>₦ 50</h2>
                </div>

                {taskStart &&

                                 <button onClick={submitCompletedTask}>Complete Task</button>
                                 

                }

   
                
            </div>

            </div>


        </div>     
  )
}

export default CompleteTask
