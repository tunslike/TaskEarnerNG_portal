import React from 'react'
import { FaUserLarge } from "react-icons/fa6";
import { IoNotificationsOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
    <div>
    
      <nav className='flex bg-[#f5f6f6] fixed top-0 w-[1300px] p-3 mx-auto justify-between items-center'> 

      <img src="" alt="Task Earner Logo" />
      <ul className="hidden md:flex gap-4 font-[400] text-[0.9rem] text-[#202b45]">

        <Link className="bg-[#ffffff] px-4 py-2 shadow-sm text-[#fa501b] font-600 rounded-[1rem]" to="/">Earn</Link>
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
      <div className="flex gap-3">
          <button className='bg-white p-3 rounded-[1rem] shadow-sm'><IoNotificationsOutline className='text-primaryOrange text-[1.5rem]' /></button>
          <button className='bg-white p-3 rounded-[1rem] shadow-sm'><FaUserLarge className='text-primaryOrange text-[1.4rem]' /></button>
      </div>
      </nav>
      </div>
    </header>
  )
}

export default Header
