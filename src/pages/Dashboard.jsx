import React, {useState, useEffect} from 'react'
import Slider from "react-slick";
import { useSelector } from 'react-redux';
import axios from 'axios';
import { loadTaskSession } from '../services/TasksService';
import { Header, Footer, Account, AdvertArea, AllTasks, RenderTasks, CardSlider } from '../components';


const Dashboard = () => {

    const subscriberData = useSelector((state) => state.subscriber.subscriberData)
    const [tasks, setTasks] = useState([]);
    const [taskSession, setTaskSession] = useState([]);

    console.log('subscriber data = ' + subscriberData)

    const loadSaveTaskSession = async () => {

      try {

        const response = await loadTaskSession(subscriberData.subscriberId);

        setTaskSession(response)
        console.log(taskSession)
        
      }catch(e) {
        setIsLoading(false);
        alert(e + e.message);
      }

    }


    useEffect(() => {

      loadSaveTaskSession();

    }, [])

    useEffect(() => {
      
      axios.get('http://localhost:9192/api/v1/tasks/fetchAllTasks?status=0')

        .then((response) => {

          setTasks(response.data);
  

        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []); // Empty dependency array ensures one-time execution


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

            {/* render uncompleted task */}
            {(taskSession.length > 0) &&

              <RenderTasks tasks={taskSession} title="Your Uncompleted Task" />
            }

            {/* render social media task */}
            <RenderTasks type={0} tasks={SocialTasks} title="Social Media Tasks" />

            {/* render watch & earn task */}
            <RenderTasks type={0} tasks={WatchTasks} title="Watch & Earn" />

            {/* render quick task */}
            <RenderTasks type={0} tasks={tasks} title="Quick Tasks" />
      
            <AllTasks />
      </div>
      <Footer />
    </>
  )
}

export default Dashboard
