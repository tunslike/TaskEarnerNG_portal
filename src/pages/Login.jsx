import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { TiUser } from "react-icons/ti";
import { FaUserAlt } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";
import { FiEyeOff } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { IoMdArrowForward } from "react-icons/io";
import { useAuth } from '../context/AuthContext';
import { FaInfoCircle } from "react-icons/fa";

const Login = () => {

    const { login } = useAuth();
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email").required("Email is required"),
        password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
      });
    
      const handleSubmit = async (values, { setSubmitting }) => {
        const success = await login(values);
        if (success) navigate("/dashboard");
        setSubmitting(false);
      };
    

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
        <div className="flex gap-7">
            <button className="text-[#fa501b] text-[0.83rem]">Login</button>
            <button className="text-white bg-[#fa501b] text-[0.75rem] py-2 px-5 rounded-[4rem] font-sm">Create Account</button>
        </div>
        
    </nav>
</header>
<main className='flex justify-center -mt-10 items-center h-[100vh]'>

    <div className='w-[30%] shadow-lg mx-auto py-10 px-5 border-b border-[#ffffff] bg-white rounded-[1.3rem]'>
        <h1 className='font-[500] text-copyrightBlue text-center text-[1.1rem] flex items-center gap-x-[2px] justify-center'>Log in to Account <TiUser className='text-primaryOrange text-[1.2rem]' /></h1>
        <p className='text-center text-primaryOrange text-[0.78rem] my-[10px]'>Provide your details below to login</p>


        <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (


        <div className='mt-[40px]'>

        <Form>
                <div className='flex items-center gap-x-3 border border-[#e4e4e4] rounded-[1rem] px-4 py-2 w-full'>
                    <FaUserAlt className='text-primaryOrange' />
                    <Field type='email' name='email' className='text-primaryBlue font-[400] h-[40px] !outline-none placeholder-[#777777] w-full text-[0.85rem]' placeholder='Email Address or Phone Number' />
                </div>
                <p className='flex items-center gap-x-2 text-[0.75rem] ml-10 mt-2'>
                    <ErrorMessage name="email" component="div" className="text-red-500" />
                </p>
               

                <div className='mt-[5px] flex items-center gap-x-3 border border-[#e4e4e4] rounded-[1rem] px-4 py-2 w-full'>
                    <IoMdLock className='text-primaryOrange text-[1.27rem]' />
                    <Field type='password' name='password' className='text-primaryBlue flex-1 font-[400] h-[40px] !outline-none placeholder-[#777777] w-full text-[0.85rem]' placeholder='Password' />

                    {showPassword ?
                        <FiEye title='Hide Password' className='text-primaryOrange cursor-pointer text-[1.2rem]' /> :

                        <FiEyeOff  title='Show Password' className='text-primaryOrange cursor-pointer text-[1.2rem]' /> 
                    }
                </div>
                <p className='flex items-center gap-x-2 text-[0.75rem] ml-10 mt-2'> 
                    <ErrorMessage name="password" component="div" className="text-red-500" />
                </p>


            <div className='text-right'>
            <Link className='text-[0.8rem] text-primaryBlue font-[400] hover:underline'>Forgot Password?</Link>
            </div>

            <div className='mt-5'>
                    <button type='submit' disabled={isSubmitting} className='bg-primaryOrange py-[15px] px-[5rem] hover:bg-[#ff862a] text-[0.8rem] font-[500] justify-center mx-auto flex items-center gap-x-1 rounded-[3rem] text-white'>
                        Log In 
                        <IoMdArrowForward className='text-[1rem]' />
                    </button>
            </div>

            <div className='mt-8 text-center'>
                    <p className='text-[0.85rem] text-copyrightBlue font-[400]'>Don't have an account? 
                        <Link to="/register" className='text-primaryOrange hover:underline ml-1'>Create Account</Link>
                    </p>
            </div>

            </Form>
    
        </div>

        )}
        </Formik>
    </div>            
</main>
</>
  )
}

export default Login
