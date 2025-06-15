import React, {useState} from 'react';
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { TiUser } from "react-icons/ti";
import { useAuth } from '../context/AuthContext';
import { useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";
import { Footer } from '../components';


const VerifyEmail = () => {


    const navigate = useNavigate();


  return (
    <>
    <header className="bg-[#ffffff] border-b border-[#f0f0f0] text-sm">
    <nav className="container mx-auto md:max-w-[1300px] flex justify-between items-center py-6">
        <img src="" alt="Task Earner Logo" />
        <ul className="hidden md:flex gap-10 font-[400] text-[0.9rem] text-[#202b45]">
            <Link className="navLinks" to="/">Home</Link>
            <Link className="navLinks" to="/how-it-works">How It Works</Link>
            <Link className="navLinks" to="/earnings">Earnings</Link>
            <Link className="navLinks" to="/pricing">Pricing</Link>
            <Link className="navLinks" to="/marketplace">Sell Out</Link>
            <Link className="navLinks" to="/resources">Resources</Link>
            {/** 
            <a href="#Header" className="">Home</a>
            <a href="#Header" className="cursor-pointer hover:text-[#f27a11]">How It Works</a>
            <a href="#Header" className="cursor-pointer hover:text-[#f27a11]">Earnings</a>
            <a href="#Header" className="cursor-pointer hover:text-[#f27a11]">Pricing</a>
            <a href="#Header" className="cursor-pointer hover:text-[#f27a11]">Marketplace</a>
            <a href="#Header" className="cursor-pointer hover:text-[#f27a11]">Resources</a>*/}
        </ul>
        <div className="flex gap-7 items-center">
            <Link to="/login" className="text-[#fa501b] text-[0.83rem]">Login</Link>
            <Link to="/register" className="text-white bg-[#fa501b] text-[0.75rem] py-2 px-5 rounded-[4rem] font-sm">Create Account</Link>
        </div>
        
    </nav>
</header>
<main className='flex justify-center -mt-[10%] items-center h-[90vh]'>

    <div className='w-[35%] shadow-lg mx-auto py-10 px-5 border-b border-[#ffffff] bg-white rounded-[1.3rem]'>
        <h1 className='font-[500] text-copyrightBlue text-center text-[1.1rem] flex items-center gap-x-[2px] justify-center'>Account Verification Confirmation <TiUser className='text-primaryOrange text-[1.2rem]' /></h1>
    
       <h6 className='text-primaryOrange mt-8 font-[500]'>Your Account is Verified!</h6>
       <p className="text-gray-500 mb-10 text-[0.85rem] mt-2">
       Your account has been successfully activated. You can now log in and start using the app.
     </p>

     <Link to="/login" className='bg-primaryOrange px-[30px] py-[10px] rounded-[1.3rem] text-white text-[0.85rem]'>Log In here</Link>
    </div>            
</main>
<Footer />
</>
  )
}

export default VerifyEmail;
