import React from 'react'
import { Field, ErrorMessage } from "formik";

const ProfileInput = ({title, name, placeholder}) => {
  return (
    <div className='mb-3'>
     <h4 className='text-[0.83rem] mt-2 mb-1 ml-2 text-[#a7a7a7]'>{title}</h4>
    <Field type='text' name={name} className='profile-input-style' placeholder={placeholder} />
    <ErrorMessage name={name} component="div" className="text-red-500" />
</div>
  )
}

export default ProfileInput;
