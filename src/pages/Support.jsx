import React from 'react'
import { Header, Footer, BackButton } from '../components'
import { BsTrophyFill } from "react-icons/bs";
import { TiStar } from "react-icons/ti";
import { FaRegStar } from "react-icons/fa";
import { MdLiveHelp } from "react-icons/md";
import { GiChampions } from "react-icons/gi";

const Support = () => {
  return (
    <>
      <div className='md:max-w-[1250px] mx-auto my-6 mb-10'>

          <Header active="support" />

          <div className='mt-[85px] ml-[70px] mb-[10px]'>
            <BackButton to='/home' />
          </div>

          
          <div className='inner-display-box'>
            <div className='bg-[#f3f3f3] p-3 rounded-[1rem] mr-5'>
                <MdLiveHelp className='text-primaryOrange text-[2rem]' />
            </div>
            <div className='flex-1'>
                <h1>Support Help Center </h1>
                <p className='text-[1.4rem] font-[400]'>Get instant help, articles and support on using the platform</p>
            </div>
            <div>
                <ul className='bd-crumb'>
                <li className='text-copyrightBlue'>Home</li>

        </ul>
     </div>

     
          
          </div>


          <div className='m-10'>
              <h1 className='ml-7 text-[1.1rem] font-[500] text-primaryOrange'>Get help by Category</h1>

            <div className='help-div'>
                    <div className='help-box'> 
                        <h2>Account Registration</h2>
                        <p>Information on account creation and authentication</p>
                    </div>
                    <div className='help-box'>
                        <h2>General</h2>
                        <p>Information on account creation and authentication</p>
                    </div>
                    <div className='help-box'>
                        <h2>How To?</h2>
                        <p>Information on accou1nt creation and authentication</p>
                    </div>
                    <div className='help-box'>
                    <h2>Referral</h2>
                    <p>Information on account creation and authentication</p>
                </div>
                <div className='help-box'>
                    <h2>Troubleshooting</h2>
                    <p>Information on account creation and authentication</p>
                </div>
                <div className='help-box'>
                    <h2>Security</h2>
                    <p>Information on account creation and authentication</p>
                </div>
              </div>

          </div>

          <div className='mt-[5%] ml-10'>
              <h1 className='ml-7 text-[1.1rem] font-[500] text-primaryOrange'>Submit a Support Ticket</h1>
          </div>

      </div>
      <Footer />
    </>
  )
}

export default Support;