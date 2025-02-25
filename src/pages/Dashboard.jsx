import React, {useState, useEffect} from 'react'
import Slider from "react-slick";
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Header, Footer, Account, AdvertArea, TaskList, AllTasks, RenderTasks, CardSlider } from '../components';

const Dashboard = () => {


    const subscriberData = useSelector((state) => state.subscriber.subscriberData)


    const [tasks, setTasks] = useState([]);

    useEffect(() => {
      
      axios.get('http://localhost:9192/api/v1/tasks/fetchAllTasks?status=0')

        .then((response) => {

          setTasks(response.data);
  

        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, [tasks]); // Empty dependency array ensures one-time execution


    const SocialTasks = tasks.filter((task) => task.taskCategory === 'Social');

    const WatchTasks = tasks.filter((task) => task.taskCategory === 'Watch');

  return (
    <>
      <div className='md:max-w-[1250px] mx-auto my-6 mb-10'>
            <Header />
            <Account />
            <AdvertArea />
            <div className="flex items-center justify-center bg-gray-100">
              <CardSlider />
            </div>
            <TaskList users={tasks} title="Your Uncompleted Tasks" />
            <RenderTasks tasks={SocialTasks} title="Social Media Tasks" />
            <RenderTasks tasks={WatchTasks} title="Watch & Earn" />
            <RenderTasks tasks={tasks} title="Quick Tasks" />
      
            <AllTasks />
      </div>
      <Footer />
    </>
  )
}

export default Dashboard
