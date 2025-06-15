import React, {useState, useEffect} from 'react';
import { Header, SideBar, BackButton, ProgressBar, Footer } from '../../components';
import { Link } from 'react-router-dom'
import { GoInfo } from "react-icons/go";
import { BsBasket3 } from "react-icons/bs";
import { LiaMoneyBillAltSolid } from "react-icons/lia";
import { loadTaskPayments } from '../../services/TasksService';
import { useSelector } from 'react-redux';
import moment from 'moment';

const Earnings = () => {

  const subscriberData = useSelector((state) => state.subscriber.subscriberData)
  const [loading, setLoading] = useState(false);
  const [earnings, setEarnings] = useState([]);


    //load data
    const fetchTaskPayments = async () => {
      try {

        setLoading(true)
        const response = await loadTaskPayments(subscriberData.subscriberId)

        setEarnings(response);
        setLoading(false)

      }catch(e) {
        setLoading(false)
          console.error(e + e.message);
      }
  }

    // fetch data
    useEffect(() => {
      fetchTaskPayments();
    }, []);

  
  return (
    <>
        <ProgressBar loading={loading} />

        <div className='md:max-w-[1250px] mx-auto my-6 mb-10'>
            <Header active="home" />

            <div className="flex md:max-w-[1150px] mx-auto gap-x-8 mt-[8rem]">

                {/* Left Column - 30% */}
                <div className="w-[40%] bg-white shadow-sm rounded-[1.5rem] relative">

                {/* Side Bar */}
                    <SideBar active="earnings" />
                {/* Side Bar */}

              </div>

                   {/* Right Column - 70% */}
          <div className="w-full mt-[2rem]">

          <div className='mb-4 -mt-6'>
              
          <BackButton />

              <div className='flex gap-x-2 items-center'>
                <LiaMoneyBillAltSolid className='text-primaryOrange text-[1.6rem] ml-2'/>
                <h2 className="font-[500] text-[1.2rem]">My Earnings</h2>
              </div>
      </div>

              <div className='bg-white min-h-[500px] overflow-scroll shadow-sm rounded-[1.5rem] p-4'>

              {
                earnings.length > 0 && 

                <div class="relative overflow-y-scroll overflow-x-scroll rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs bg-[#f6f6f6] rounded-[1rem] text-primaryOrange uppercase bg-gray-10">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Platform
                            </th>
                            <th scope="col" class="px-6 py-3 w-[180px]">
                                Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Type
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Earnings
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Payment Date
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Action
                           </th>
                        </tr>
                    </thead>
                    <tbody> 
                
                          {
                            earnings.map((item) => (
                              
                                  <tr key={item.taskId} class="border-b border-[#ebebeb]">
                            
                                  <th scope="row" class="table-col-task">
                                    <Link to="/account" title='View Details' className='flex items-center gap-x-2'>
                                      <img src={item.icon} width={30} />
                                      <span className='text-red-500 hover:underline'>{item.platform}</span></Link>
                                  </th>
                                  <td class="table-col-task w-[200px]">
                                      {item.taskName}
                                  </td>
                                  <td class="table-col-task">
                                    {item.taskType}
                                  </td>
                                  <td class="table-col-task w-[80px] text-center">
                                      {item.price}
                                  </td>
                                  <td class="table-col-task w-[150px] text-center">
                                    {moment(item.dateCreated).format("DD/MM/YY")}
                                  </td>
                            
                                  <td class="table-col-task text-center text-blue-600 underline">
                                      <a href={`/${item.taskId}`}>View</a>
                                  </td>
                              </tr>
                            ))
                          }
                    </tbody>
                </table>
                </div>
              }
                    
              {earnings.length == 0 && 
                <div className='flex justify-center items-center min-h-[450px]'>
                  <div>
                      <GoInfo className='text-[2.5rem] text-[#cfcfcf] mx-auto mb-2' />
                      <h5 className='text-primaryOrange text-[0.8rem]'>You do not have any earnings yet!</h5>
                  </div>
                </div>
              }
              </div>
          
          </div>
            
            </div>
        </div>

        <Footer />
  
    </>
  )
}

export default Earnings
