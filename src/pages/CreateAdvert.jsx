import React, {useState} from 'react'
import { Header, Footer, AdvertForm, ModalComponent } from '../components'
import { FaPeopleGroup } from "react-icons/fa6";

const CreateAdvert = () => {

    const [totalPrice, setTotalPrice] = useState(0.00);


  return (
    <>
    <div className='md:max-w-[1250px] mx-auto my-6 mb-10'>
          <Header />

          <div className='inner-display-box'>

            <div className='bg-[#f3f3f3] p-3 rounded-[1rem] mr-5'>
                    <FaPeopleGroup className='text-primaryOrange text-[2rem]' />
            </div>
            <div className='flex-1'>
                <h1>Post Your Adverts on Social Media </h1>
                <p>Get social media people with at least 100 followers to repost your adverts and perform social tasks for you on their social media accounts</p>
            </div>
             <div>
                <ul className='bd-crumb'>
                    <li className='text-copyrightBlue'>Home</li>
                    <li>Post Advert</li>
                </ul>
             </div>
          </div>

          <AdvertForm />

    </div>
    <Footer />
  </>
  )
}

export default CreateAdvert