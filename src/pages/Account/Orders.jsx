import React, {useState, useEffect} from 'react'
import { Header, SideBar, BackButton, ProgressBar, Footer } from '../../components';
import { Link } from 'react-router-dom'
import { GoInfo } from "react-icons/go";
import { BsBasket3 } from "react-icons/bs";
import { loadSubscribedTask } from '../../services/TasksService';
import { useSelector } from 'react-redux';
import moment from 'moment';

const Orders = () => {

  const subscriberData = useSelector((state) => state.subscriber.subscriberData)
  const [orderList, setOrderList] = useState([]);
  const [loading, setLoading] = useState(false);

  //load data
  const loadSubscribedTaskData = async () => {
      try {

        setLoading(true)
        const response = await loadSubscribedTask(subscriberData.subscriberId)

        setOrderList(response);
        setLoading(false)

      }catch(e) {
        setLoading(false)
          console.error(e + e.message);
      }
  }

    // fetch data
    useEffect(() => {
      loadSubscribedTaskData();
    },[]);
  
  return (
    <>
    <ProgressBar loading={loading} />
    <div className='md:max-w-[1250px] mx-auto my-6 mb-10'>
    <Header active="home" />

    <div className="flex md:max-w-[1150px] mx-auto gap-x-8 mt-[8rem]">

        {/* Left Column - 30% */}
        <div className="w-[40%] bg-white shadow-sm rounded-[1.5rem] relative">

            {/* Side Bar */}
                <SideBar active="orders" />
            {/* Side Bar */}

        </div>

        {/* Right Column - 70% */}
        <div className="w-full mt-[2rem]">

          <div className='mb-4 -mt-6'>
              
              <BackButton to="/account" />

              <div className='flex gap-x-2 items-center'>
                <BsBasket3 className='text-primaryOrange text-[1.3rem]'/>
                <h2 className="font-[500] text-[1.2rem]">My Orders</h2>
              </div>
          </div>
          <div className='bg-white min-h-[500px] overflow-scroll shadow-sm rounded-[1.5rem] p-4'>

          {
            orderList.length > 0 && 

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
                              Price
                          </th>
                          <th scope="col" class="px-6 py-3">
                           Post
                      </th>
                          <th scope="col" class="px-6 py-3">
                            Date
                          </th>
                          <th scope="col" class="px-6 py-3">
                          Payment
                        </th>
                        <th scope="col" class="px-6 py-3">
                        Status
                      </th>
                
                      </tr>
                  </thead>
                  <tbody> 

                    {
                      orderList.length > 0 &&

                        orderList.map((item) => (

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
                              <td class="table-col-task w-[80px]">
                                  {item.price}
                              </td>
                              <td class="table-col-task w-[80px]">
                              {item.NoOfPost}
                          </td>
                              <td class="table-col-task w-[150px]">
                                {moment(item.dateCreated).format("DD/MM/YY")}
                              </td>
                              <td class="table-col-task">
                              {item.paymentStatus == 0  ? 'Pending' : 'Paid'}
                            </td>
                              <td class="table-col-task">
                                  {item.status == 0 ? 'Pending' : 'Completed'}
                              </td>
                          </tr>
                        ))
                    }
                      
                  </tbody>
              </table>
              </div>
          }


          {orderList.length == 0 && 

            <div className='flex justify-center items-center min-h-[450px]'>
              <div>
              <GoInfo className='text-[2.5rem] text-[#cfcfcf] mx-auto mb-2' />
              <h5 className='text-primaryOrange text-[0.8rem]'>You haven't made any order yet!</h5>
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

export default Orders
