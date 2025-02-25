import React, {useState} from 'react'
import { FaUserLarge } from "react-icons/fa6";
import { IoNotificationsOutline } from "react-icons/io5";
import { TiArrowRight } from "react-icons/ti";
import { MdArrowRight } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import { Link } from 'react-router-dom'
import { useAuth } from "../context/AuthContext";

const Header = () => {

  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
    <div>
      <nav className='flex bg-[#f5f6f6] fixed z-10 top-0 w-[1300px] p-3 mx-auto justify-between items-center'> 

      <img src="" alt="Task Earner Logo" />
      <ul className="hidden md:flex gap-4 font-[400] text-[0.9rem] text-[#202b45]">

        <Link className="bg-[#ffffff] px-4 py-2 shadow-sm text-[#fa501b] font-600 rounded-[1rem]" to="/home">Earn</Link>
        <Link className="nav-link" to="/advertise">Advertise</Link>
        <Link className="nav-link" to="/sellout">Sell Out</Link>
        <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
        <Link className="nav-link" to="/referrals">Referrals</Link>
        <Link className="nav-link" to="/support">Support</Link> 

       {/** 
          <a href="#Header" className="bg-[#ffffff] px-4 py-2 shadow-sm text-[#fa501b] font-600 rounded-[1rem]">Earn</a>
          <a href="#Header" className="nav-link">Advertise</a>
          <a href="#Header" className="nav-link">Sell Out</a>
          <a href="#Header" className="nav-link">Leaderboard</a>
          <a href="#Header" className="nav-link">Referrals</a>
          <a href="#Header" className="nav-link">Support</a> */}
      </ul>
      <div className="flex gap-3 relative">
          <button className='bg-white p-3 border border-white hover:border hover:border-primaryOrange rounded-[1rem] shadow-sm'><IoNotificationsOutline className='text-primaryOrange text-[1.5rem]' /></button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className='bg-white p-3 border border-white hover:border hover:border-primaryOrange rounded-[1rem] shadow-sm'>
              <FaUserLarge className='text-primaryOrange text-[1.4rem]' />
          </button>
      </div>
      {isOpen && (
        <div className={`absolute top-[4rem] rounded-[1rem] right-4 mt-2 w-48 bg-white shadow-md z-50 transform transition-all duration-300 ${
              isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`}>
            <ul className='p-4 text-[0.8rem] text-copyrightBlue leading-8 cursor-pointer'>
              <li><Link className='hover:text-primaryOrange flex items-center gap-x-3' to="/account"><MdArrowRight className='text-primaryOrange' /> My Dashboard</Link></li>
              <li className='hover:text-primaryOrange flex items-center gap-x-3'><MdArrowRight className='text-primaryOrange' /> Account Settings</li>
              <li className='hover:text-primaryOrange flex items-center gap-x-3'><MdArrowRight className='text-primaryOrange' /> Privacy Policy</li>
              <li>
                  <button className='mt-4 justify-center flex items-center py-[2px] gap-x-2 w-full text-[0.8rem] hover:text-white hover:bg-primaryOrange border border-primaryOrange text-primaryOrange font-[500] rounded-[0.7rem]'>
                    Logout 
                    <TbLogout className='text-[1rem]'/>
                  </button>
              </li>
            </ul>
        </div>
      )}
      </nav>
      </div>
    </header>
  )
}

export default Header
