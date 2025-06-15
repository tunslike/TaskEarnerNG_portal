import React from 'react'
import { Header, Footer, BackButton, PlatformIcon } from '../components'
import { Tooltip } from 'react-tooltip';
import { useSelector } from 'react-redux';
import { TiStarFullOutline } from "react-icons/ti";
import { BsTrophyFill } from "react-icons/bs";
import { TiStar } from "react-icons/ti";
import { FaRegStar } from "react-icons/fa";
import { GiChampions } from "react-icons/gi";

const Leaderboard = () => {
  return (
    <>
      <div className='md:max-w-[1250px] mx-auto my-6 mb-10'>

          <Header active="leaderboard" />

          <div className='mt-[85px] ml-[70px] mb-[10px]'>
            <BackButton to="/home" />
          </div>

          
          <div className='inner-display-box'>
            <div className='bg-[#f3f3f3] p-3 rounded-[1rem] mr-5'>
                <GiChampions className='text-primaryOrange text-[2rem]' />
            </div>
            <div className='flex-1'>
                <h1>Leaderboard </h1>
                <p className='text-[1.4rem] font-[400]'>List of this week's top 20 earners</p>
            </div>
            <div>
                <ul className='bd-crumb'>
                <li className='text-copyrightBlue'>Home</li>

        </ul>
     </div>
          
          </div>


          <div className='flex mx-auto w-[90%] mt-6 gap-x-6'>
                <div className='leadboard-div w-[65%]'>
                    <h4>20 Leaderboard ranking and earnings for the week</h4>

                    <table class="w-full mt-5 text-sm text-left rounded-[1.5rem] rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs bg-[#f6f6f6] text-[#4d4e50] uppercase bg-gray-10">
                        <tr>
                        <th scope="col" class="px-6 py-3">
                            Rank
                        </th>
                        <th scope="col" class="px-6 py-3 w-[180px]">
                            Users
                        </th>
                        <th scope="col" class="px-6 py-3 text-right">
                            Earnings
                        </th>
                      </tr>
                      </thead>

                    <tbody>
                        <tr className='mt-5'>
                            <td className='pl-7 flex items-center gap-x-2 pt-3'><BsTrophyFill className='text-primaryOrange' /> <span className='text-primaryOrange font-[500] text-[0.9rem] pt-0'>1</span></td>
                            <td className='py-3 text-[0.80rem]'>userf9cc4ac5-833</td>
                            <td className='text-right pr-6'>
                              <span className='leader-amt'>₦8,500</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='pl-6 flex items-center gap-x-1 pt-3'><TiStar className='text-green-500 text-[1.3rem]' /> <span className='text-primaryOrange font-[500] text-[0.9rem] pt-0'>2</span></td>
                            <td className='py-3 text-[0.80rem]'>userc5041503-770</td>
                            <td className='text-right pr-6'>
                            <span className='leader-amt'>₦1,500</span>
                            </td>
                        </tr>
                        <tr>
                        <td className='pl-6 flex items-center gap-x-1 pt-3'>
                          <TiStar className='text-blue-500 text-[1.3rem]' /> 
                            <span className='text-primaryOrange font-[500] text-[0.9rem] pt-0'>3</span>
                        </td>
                        <td className='py-3 text-[0.80rem]'>userc5041503-770</td>
                        <td className='text-right pr-6'>
                            <span className='leader-amt'>₦1,500</span>
                        </td>
                    </tr>
                    <tr>
                    <td className='pl-7 flex items-center gap-x-1 pt-3'>
                      <FaRegStar className='text-gray-300 text-[1rem]' /> 
                        <span className='text-primaryOrange font-[500] text-[0.9rem] pt-0'>4</span>
                    </td>
                    <td className='py-3 text-[0.80rem]'>userc5041503-770</td>
                    <td className='text-right pr-6'>
                        <span className='leader-amt'>₦1,500</span>
                    </td>
                </tr>
                    </tbody>
                    </table>

                </div>
                <div  className='leadboard-div w-[35%]'>
                    <h4 className='text-right text-primaryOrange'>Your total earnings for the week</h4>
                    <div className='bg-[#f6f6f6] mt-5 rounded-[2rem] py-3 px-5 w-full flex items-center justify-between'>
                        <div>
                            <h5 className='text-primaryOrange text-[0.7rem]'>Week Earnings</h5>
                            <h5 className='text-primaryBlue mt-1 font-[500] text-[1.2rem]'>₦1,500</h5>
                        </div>
                        <div className='text-right'>
                            <h5 className='text-primaryOrange text-[0.7rem]'>Ranking</h5>
                            <h5 className='flex items-center mt-1 justify-end gap-x-1'><FaRegStar className='text-gray-300 text-[1.1rem]' /> 127</h5>
                        </div>
                    </div>
                </div>
          </div>

      </div>
      <Footer />
    </>
  )
}

export default Leaderboard