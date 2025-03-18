import React, {useState, useEffect} from 'react';
import { Header, SideBar, ProgressBar } from '../../components';
import { RxDashboard } from "react-icons/rx";
import { GoInfo } from "react-icons/go";
import { FaTasks } from "react-icons/fa";
import { useSelector } from 'react-redux';
import axios from 'axios';
import moment from 'moment';


const Account = () => {

  const subscriberData = useSelector((state) => state.subscriber.subscriberData)
  const [completedTask, setCompletedTasks] = useState([]);
  const [loading, setLoading] = useState(false);


  // fetch data
  useEffect(() => {

    setLoading(true)
      
    axios.get(`http://localhost:9192/api/v1/tasks/loadCompletedTasks?subscriberId=${subscriberData.subscriberId}`)

      .then((response) => {

        setLoading(false)

        setCompletedTasks(response.data)

      })
      .catch((error) => {
        setLoading(false)
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
          <div className="w-full mt-[2rem]">

            <div className='flex gap-x-4 items-center mb-4 -mt-6'>
                <RxDashboard className='text-primaryOrange text-[1.3rem]'/>
                <h2 className="font-[500] text-[1.2rem]">My Completed Tasks</h2>
            </div>
            <div className='bg-white min-h-[300px] shadow-sm rounded-[1.5rem] p-4'>


            {completedTask.length > 0 && 

              <div class="relative overflow-y-auto rounded-lg">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead class="text-xs bg-[#f6f6f6] rounded-[1rem] text-primaryOrange uppercase bg-gray-10">
                      <tr>
                          <th scope="col" class="px-6 py-3">
                              Platform
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Task Name
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Task Type
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Price
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Date
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Action
                          </th>
                      </tr>
                  </thead>
                  <tbody>

                    {
                      completedTask.map((item) => (

                        <tr key={item.taskId} class="border-b border-[#ebebeb]">
                              <th scope="row" class="table-col-task flex items-center gap-x-2">
                                  <img src={item.taskThumbnail} width={30} />
                                  {item.platform}
                              </th>
                              <td class="table-col-task">
                                  {item.taskName}
                              </td>
                              <td class="table-col-task">
                                {item.taskType}
                              </td>
                              <td class="table-col-task">
                                  {item.price}
                              </td>
                              <td class="table-col-task w-[130px]">
                                {moment(item.dateCompleted).format("DD-MMM-yy")}
                              </td>
                              <td class="table-col-task">
                                  <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                              </td>
                        </tr>

                      ))
                    }

                  </tbody>
              </table>
              </div>

            }



            {completedTask.length == 0 && 

              <div className='flex justify-center items-center min-h-[300px]'>
              <div>
                <GoInfo className='text-[2.5rem] text-[#cfcfcf] mx-auto mb-2' />
                <h5 className='text-primaryOrange text-[0.8rem]'>You are yet to complete any task! Please see recommended tasks below</h5>
              </div>
            </div>

            }

          </div>

          <div className='flex gap-x-4 items-center ml-4 mt-11 mb-4'>
            <FaTasks className='text-primaryOrange text-[1.3rem]'/>
            <h2 className="font-[500] text-[1.2rem]">Recommended For You</h2>
          </div>

          <div className='bg-white min-h-[400px] shadow-sm rounded-[1.5rem] p-4'>
          <div className='flex justify-center items-center min-h-[300px]'>
            <div>
              <GoInfo className='text-[2.5rem] text-[#cfcfcf] mx-auto mb-2' />
              <h5 className='text-primaryOrange text-[0.8rem]'>You are yet to complete any task! Please see recommended tasks below</h5>
            </div>
          </div>
    </div>


          </div>
    </div>

    </div>
    </>
  )
}

export default Account;