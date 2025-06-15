import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramLine } from "react-icons/ri";
import { SiYoutube } from "react-icons/si";




const Footer = () => {

  const today = new Date();

  return (
    <section className='bg-[#233c77] pt-[1.4%] mt-[10%]'>

    <div className='w-[67%] text-[#b0dfff] mx-auto flex justify-between items-center'>
    <ul className='flex gap-x-6 text-[0.9rem]'>
        <li><a className='hover:text-primaryOrange' href='#'>About</a></li>
        <li><a className='hover:text-primaryOrange' href='#'>Terms</a></li>
        <li><a className='hover:text-primaryOrange' title='See us on Facebook' href='#'>Privacy</a></li>
        <li><a className='hover:text-primaryOrange' title='See us on Facebook' href='#'>Support</a></li>
    </ul>

    <p className='flex items-center gap-x-5 mr-3 text-[1.3rem]'>
        <a className='hover:text-primaryOrange' title='See us on Facebook' href='#'><FaSquareFacebook /></a>
        <a className='hover:text-primaryOrange' title='Follow us on X' href='#'><FaSquareXTwitter /></a>
        <a className='hover:text-primaryOrange' title='See us on Instagram' href='#'><RiInstagramLine /></a>
        <a className='hover:text-primaryOrange' title='Subscribe to our Youtube Channel' href='#'><SiYoutube /></a>
    </p>
</div>

    <div className='bg-copyrightBlue mt-[2%]'>
    <div className='p-[1.4%] mx-auto w-[70%] text-[0.85rem] text-footerListGray font-[400]'>
        © {today.getFullYear()}, Task Earner NG. All Rights Reserved
    </div>
    </div>
    </section>
  )
}

export default Footer
