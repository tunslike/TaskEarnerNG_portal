import React, {useState} from 'react'
import { FaSearch } from "react-icons/fa";
import {SearchFilter, TaskCard} from '../components';


const AllTasks = () => {

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
      console.log('Search Query:', searchQuery);
    };
  
    const clearSearch = () => {
      setSearchQuery('');
    };

  return (
    <section className='md:max-w-[1100px] mx-auto mt-16 mb-20'>
        <div className='all-tasks'>
            <h1 className='ml-4'>All Tasks</h1>

            <div className='flex justify-between items-start'>
                <div className='border bg-white shadow-sm w-[60%] rounded-[1rem] border-[#f1f1f1] flex justify-between items-center'>
                    <input 
                        type='text'
                        className='bg-transparent text-copyrightBlue placeholder-[#bababa] font-[400] text-[0.9rem] p-4 w-full'
                        placeholder='Search here...'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <FaSearch className='mr-4 text-primaryOrange' />
                </div>
            
                <div>
                    <select className='p-[1rem] rounded-[1rem] shadow-sm font-[400] text-[0.9rem] text-primaryOrange'>
                        <option selected="selected">Sort By:</option>
                        <option value="high">Highest to lowest</option>
                        <option value="low">Lowest to Highest</option>
                    </select>
                </div>
            </div>

          

            <div className='flex items-center justify-start mt-3 gap-4 pl-3 pt-6 border-[#f1f1f1]'>
                <SearchFilter title="Social Media" />
                <SearchFilter title="Quick Tasks" />
                <SearchFilter title="X Tasks" />
                <SearchFilter title="Watch & Earn" />
                <SearchFilter title="Featured" />
                <SearchFilter title="Surveys" />
                <SearchFilter title="Tiktok" />
                <SearchFilter title="Instagram" />
            </div>

            <div className='flex flex-wrap justify-between items-start gap-1 ml-2 mt-16 mb-20'>

                <TaskCard img="./img2.png" />
                <TaskCard img="./img1.jpg"/>
                <TaskCard img="./img3.jpg" />
                <TaskCard img="./img4.jpg" />
                <TaskCard img="./img1.jpg" />
                <TaskCard img="./img1.jpg"/>
                <TaskCard img="./img3.jpg" />
                <TaskCard img="./img4.jpg" />
            
            </div>


        </div>
    </section>
  )
}

export default AllTasks