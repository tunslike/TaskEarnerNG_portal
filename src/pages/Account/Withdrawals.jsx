import React, {useState, useEffect} from 'react';
import { Header, SideBar, BackButton, ProgressBar, Footer } from '../../components';
import { Link } from 'react-router-dom'
import { GoInfo } from "react-icons/go";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { fetchWithdrawalPayment } from '../../services/TasksService';
import { useSelector } from 'react-redux';
import moment from 'moment';

const Withdrawals = () => {

  const subscriberData = useSelector((state) => state.subscriber.subscriberData)
  const [loading, setLoading] = useState(false);
  const [withdrawal, setWithdrawal] = useState([])

    //load data
    const fetchWithdrawalRequest = async () => {
      try {

        setLoading(true)
        const response = await fetchWithdrawalPayment(subscriberData.subscriberId)

        const sortedData = [...response].sort((a, b) => new Date(b.withdrawalDate) - new Date(a.withdrawalDate));

        setWithdrawal(sortedData);
        setLoading(false)

      }catch(e) {
        setLoading(false)
          console.error(e + e.message);
      }
  }

    // fetch data
    useEffect(() => {
      fetchWithdrawalRequest();
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
                <SideBar active="withdrawal" />
            {/* Side Bar */}

          </div>

               {/* Right Column - 70% */}
      <div className="w-full mt-[2rem]">

      <div className='mb-4 -mt-6'>
          
      <BackButton />

          <div className='flex gap-x-2 items-center'>
            <LiaMoneyBillWaveSolid className='text-primaryOrange text-[1.6rem] ml-2'/>
            <h2 className="font-[500] text-[1.2rem]">My Withdrawals</h2>
          </div>
  </div>

          <div className='bg-white min-h-[500px] overflow-scroll shadow-sm rounded-[1.5rem] p-4'>


          {
            withdrawal.length > 0 && 

            <div class="relative overflow-y-scroll overflow-x-scroll rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs bg-[#f6f6f6] rounded-[1rem] text-primaryOrange uppercase bg-gray-10">
                    <tr>
                        <th scope="col" class="px-6 py-3 w-[180px]">
                            Withdrawal Date
                        </th>
                        <th scope="col" class="px-6 py-3 text-center">
                            Amount
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Channel
                        </th>
                        <th scope="col" class="px-6 py-3 w-[200px] text-center">
                          Payment Status
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Action
                       </th>
                    </tr>
                </thead>
                <tbody> 
            
                      {
                        withdrawal.map((item) => (

                              <tr key={item.withdrawalId} class="border-b border-[#ebebeb]">
                                    <td class="table-col-task w-[200px]">
                                    {moment(item.withdrawalDate).format("DD/MM/YY")}
                                    </td>
                              
                                    <td class="table-col-task  text-center">
                                        {item.amount}
                                    </td>
                                    <td class="table-col-task w-[150px]">
                                      {item.channel}
                                    </td>
                                    <td class="table-col-task w-[80px] text-center">
                                        <span className={(item.paymentStatus == 1) ? `text-green-600` : `text-red-600`}>{(item.paymentStatus == 1) ? 'Successful' : 'Pending'}</span>
                                    </td>
                                    <td class="table-col-task text-center text-blue-600 underline">
                                        <a href={`/${item.withdrawalDate}`}>View</a>
                                    </td>
                            </tr>
                        ))
                      }
                </tbody>
            </table>
            </div>
          }

          {withdrawal.length == 0 && 
            <div className='flex justify-center items-center min-h-[450px]'>
              <div>
                  <GoInfo className='text-[2.5rem] text-[#cfcfcf] mx-auto mb-2' />
                  <h5 className='text-primaryOrange text-[0.8rem]'>You do not have any withdrawals yet!</h5>
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

export default Withdrawals
