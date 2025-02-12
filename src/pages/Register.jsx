import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { TiUser } from "react-icons/ti";
import { FaUserAlt } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";
import { FiEyeOff } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { IoMdArrowForward } from "react-icons/io";
import { FaUserPlus } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";


const Register = () => {

    const [showPassword, setShowPassword] = useState(false);

    const { register } = useAuth();
    const navigate = useNavigate();
  
    const validationSchema = Yup.object({
      reg_name: Yup.string().min(3, "Name must be at least 3 characters").required("Name is required"),
      reg_email: Yup.string().email("Invalid email").required("Email is required"),
      reg_phone: Yup.string().min(11, "Invalid Phone Number").max(11, "Invalid Phone Number").required("Mobile phone is required"),
      reg_password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    });
  
    const handleSubmit = async (values, { setSubmitting }) => {
      const success = await register(values);
      if (success) navigate("/login");
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
        <h1 className='font-[500] text-copyrightBlue text-center text-[1.2rem] flex items-center gap-x-[2px] justify-center'>Create a New Account <FaUserPlus className='text-primaryOrange text-[1.2rem] ml-2' /></h1>
        <p className='text-center text-primaryOrange text-[0.75rem] my-[10px]'>
        Enter your details below to create a new account</p>


        <Formik
            initialValues={{ reg_name: "", reg_email: "", reg_phone: "", reg_password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        > 
        {({ isSubmitting }) => (
            <Form>
                    <div className='mt-[40px]'>
                            <div className='auth-form-box'>
                                <FaUserAlt className='text-primaryOrange' />
                                <Field type='text' name='reg_name' placeholder='Full Name' />
                            </div>
                            <p className='flex items-center gap-x-2 text-[0.75rem] ml-10 mt-1 mb-2'>
                                <ErrorMessage name="reg_name" component="div" className="text-red-500" />
                            </p>

                            <div className='auth-form-box'>
                                <IoMail className='text-primaryOrange' />
                                <Field type='email' name='reg_email' placeholder='Email Address' />
                            </div>
                            <p className='flex items-center gap-x-2 text-[0.75rem] ml-10 mt-1 mb-2'>
                                <ErrorMessage name="reg_email" component="div" className="text-red-500" />
                            </p>

                            <div className='auth-form-box'>
                                <FaPhone className='text-primaryOrange' />
                                <Field type='number' name='reg_phone' placeholder='Mobile Phone' />
                            </div>
                            <p className='flex items-center gap-x-2 text-[0.75rem] ml-10 mt-1 mb-2'>
                                <ErrorMessage name="reg_phone" component="div" className="text-red-500" />
                            </p>

                            <div className='auth-form-box'>
                                <IoMdLock className='text-primaryOrange text-[1.27rem]' />
                                <Field type='password' name='reg_password' placeholder='Enter Password' />

                                {showPassword ?
                                    <FiEye title='Hide Password' className='text-primaryOrange cursor-pointer text-[1.2rem]' /> :

                                    <FiEyeOff  title='Show Password' className='text-primaryOrange cursor-pointer text-[1.2rem]' /> 
                                }
                        </div>
                        <p className='flex items-center gap-x-2 text-[0.75rem] ml-10 mt-1 mb-4'>
                            <ErrorMessage name="reg_password" component="div" className="text-red-500" />
                        </p>
                    
                        <p className='text-[0.75rem] ml-6 mt-1 text-[#646265]'>By signing up, you agree to our <span className='text-primaryOrange'>Terms and Privacy Policy</span></p>

                        <div className='mt-8'>
                                <button type='submit' disabled={isSubmitting} className='bg-primaryOrange py-[15px] px-[5rem] hover:bg-[#ff862a] text-[0.8rem] font-[500] justify-center mx-auto flex items-center gap-x-1 rounded-[3rem] text-white'>Create Account <IoMdArrowForward className='text-[1rem]' />
                                </button>
                        </div>

                        <div className='mt-7 text-center'>
                            <p className='text-[0.85rem] text-copyrightBlue font-[400]'>Already have an account?
                                <Link to="/login" className='text-primaryOrange hover:underline ml-1'>Log In here</Link>
                            </p>
                        </div>
                    </div>
            </Form>
        )}
        </Formik>
    </div>            
</main>
</>
  )
}

export default Register;
