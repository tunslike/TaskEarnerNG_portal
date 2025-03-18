import React from "react";
import {ListCard} from '../components'
import { FaArrowRightLong } from "react-icons/fa6";
import { IoChevronBack } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


  // Custom Previous Button
  const PrevArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute left-[-39px] top-1/2 transform -translate-y-1/2 bg-white text-primaryOrange p-2 rounded-full shadow-lg hover:text-primaryWhite hover:bg-primaryOrange"
    >
      <IoChevronBack size={20} />
    </button>
  );
  
  // Custom Next Button
  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-[-39px] top-1/2 transform -translate-y-1/2 bg-white text-primaryOrange p-2 rounded-full shadow-lg hover:text-primaryWhite hover:bg-primaryOrange"
    >
      <IoChevronForward size={20} />
    </button>
  );
  

const RenderTasks = ({ tasks, title, type }) => {


  const settings = {
    speed: 500,
    infinite: false,
    slidesToShow: 4, // Show 3 cards at a time
    slidesToScroll: 1,
    rtl: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 cards on tablets
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 card on mobile
        },
      },
    ],
  };

  return (

    <section className='md:max-w-[1100px] mx-auto my-10'>
    <div className='task-body'>
    <div className='flex justify-between items-center'>
        <div className='flex items-baseline pb-2 gap-5'>
            <h1 className='ml-4'>{title}</h1>
            <h6 className={type == 0 ? `text-[#0582ff] border border-[#0582ff]` : `text-red-600 border border-red-600`}>
              {tasks.length} Tasks Available
            </h6>
        </div>
        <a>View All <FaArrowRightLong /></a>
    </div>


     <div className="bg-white w-full rounded-[1.5rem] p-5 shadow-sm">

  <Slider {...settings} className="flex justify-start">

    {tasks.map(task => (
      <ListCard 
        key={task.taskId}
        taskid={task.taskId} 
        title={task.taskName}
        platform={task.platform}
        icon={task.taskIcon}
        thumbnail={task.taskThumbnail}
        price={task.taskPrice}
        desc={task.captionMessage}
      />
    ))}
    
    </Slider>
    </div>
  
</div>


</section>

  
  
  );
};

export default RenderTasks;