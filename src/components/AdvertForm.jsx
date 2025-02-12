import React, {useState} from 'react';
import PlatformIcon from './PlatformIcon';
import { Tooltip } from 'react-tooltip';


const AdvertForm = () => {

    const [selectedImage, setSelectedImage] = useState(null);

    const handleSelect = (index) => {
      setSelectedImage(index);
    };

    const icons = [
        {src: './fb_icon.png', title: 'Facebook', pricing: 250},
        {src: './tw_icon.png', title: 'X (Twitter)', pricing: 150},
        {src: './inst_icon.png', title: 'Instagram', pricing: 200},
        {src: './whatsapp_icon.png', title: 'WhatsApp', pricing: 150},
        {src: './tiktok_icon.png', title: 'TikTok', pricing: 150},
    ]

  return (
    <section>
        <div className='inner-body'>

        <div className='pl-7 pb-7'>
            <h4>Choose your preferred social media platform</h4>

            <div className='flex items-center justify-start gap-x-12 py-5'>

                {icons.map((image, index) => (
                    <PlatformIcon 
                    key={index}
                    img={image.src}
                    title={image.title}
                    pricing={image.pricing}
                    isSelected={selectedImage === index}
                    onSelect={() => handleSelect(index)}
                />
                ))}
            </div>
            
            <div className='flex gap-x-4'>
                <h4 className='mt-8'>Advert Caption or Message</h4> 

                <a 
                    className='tool-tip-text' 
                    data-tooltip-id="my-tooltip" 
                    data-tooltip-place='right' 
                    data-tooltip-content="Include important details, business contact and website link"
                >
                    Read Description here
                </a>
                <Tooltip id="my-tooltip" style={{fontSize: 12}} className='text-[0.8rem]' />
            </div>
            <textarea rows={8} className='form-input' placeholder='Enter message or text here' />

            <div className='flex gap-x-4 -mt-2'>
            <h4 className='mt-8'>Number of Advert Post</h4> 
            <a 
                className='tool-tip-text' 
                data-tooltip-id="tip2" 
                data-tooltip-place='right' 
                data-tooltip-content="Enter total number of advert post you want to get"
            >
                Read Description here
            </a>
            <Tooltip id="tip2" style={{fontSize: 12}} className='text-[0.8rem]' />
            </div>
            <input type='number' className='form-input' placeholder='1' />

            <div className='flex gap-x-4 -mt-1'>
            <h4 className='mt-8'>Target Gender</h4> 
            <a 
                className='tool-tip-text' 
                data-tooltip-id="tip2" 
                data-tooltip-place='right' 
                data-tooltip-content="Your advert task will be shown to selected gender only. Choose All for everyone"
            >
                Read Description here
            </a>
            <Tooltip id="tip2" style={{fontSize: 12}} className='text-[0.8rem]' />
            </div>
            <select className='form-input'>
                <option value="All" selected="selected">All Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>

            <div className='flex gap-x-4 -mt-1'>
            <h4 className='mt-8'>Target Location</h4> 
            <a 
                className='tool-tip-text' 
                data-tooltip-id="tip2" 
                data-tooltip-place='right' 
                data-tooltip-content="Select your preferred location where you want your advert posted to"
            >
                Read Description here
            </a>
            <Tooltip id="tip2" style={{fontSize: 12}} className='text-[0.8rem]' />
            </div>
            <select className='form-input'>
                <option value="All" selected="selected">All Location</option>
                <option value="Male">Lagos</option>
                <option value="Female">Abuja</option>
            </select>

            <div className='flex gap-x-4 -mt-1'>
            <h4 className='mt-8'>Upload Photo Advert</h4> 

            <a 
                className='tool-tip-text' 
                data-tooltip-id="tip3" 
                data-tooltip-place='right' 
                data-tooltip-content="Upload a photo or video format you want people to post with your advert"
            >
                Read Description here
            </a>
            <Tooltip id="tip3" style={{fontSize: 12}} className='text-[0.8rem]' />
        </div>
            <input type='file' className='form-input' placeholder='1' />

            </div>

            <div className='cal-area-btn'>
                
                <div className='flex gap-x-3 items-center'>
                    <h6>Total Payment:</h6>
                    <h1>NGN 0.00</h1>
                </div>

                <button>Make Payment</button>
                
            </div>
        </div>
    </section>
  )
}

export default AdvertForm