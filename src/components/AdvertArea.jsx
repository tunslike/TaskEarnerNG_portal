import React from 'react';
import { Link } from 'react-router-dom';

const AdvertArea = () => {
  return (
    <section className='md:max-w-[1100px] mx-auto my-10'>
        <div className='flex justify-between items-center gap-10'>
            <div className='advertBox'>
                <h1>Advertise Product</h1>
                <div className='advert-details'>
                    <p>Get real people on various social media to post your adverts and perform social engagement tasks for you on their social media account.</p>
                    <Link className='advert-details-link' to="/create-advert">Start Here</Link> 
                </div>
            </div>
            <div className='advertBox'>
                <h1>Buy Social Media Engagement</h1>
                <div className='advert-details'>
                    <p>Earn steady income by reselling products and posting adverts and performing social media engagement tasks for businesses and top brands on your social media account.</p>
                    <Link className='advert-details-link' to="/create-engagement">Start Here</Link> 
                </div>
            </div>
        </div>
    </section>
  )
}

export default AdvertArea