import React, {useState, useEffect} from 'react'
import Slider from "react-slick";
import { useSelector } from 'react-redux';
import axios from 'axios';
import { loadTaskSession, fetchTasks } from '../services/TasksService';
import { Header, Footer, Account, AdvertArea, AllTasks, RenderTasks, CardSlider, ProgressBar } from '../components';


const Dashboard = () => {

    const subscriberData = useSelector((state) => state.subscriber.subscriberData)
    const [tasks, setTasks] = useState([]);
    const [taskSession, setTaskSession] = useState([]);
    const [loading, setLoading] = useState(false);

    
// load saved task session
    const loadSaveTaskSession = async () => {

      try {

        setLoading(true);

        const response = await loadTaskSession(subscriberData.subscriberId);

        setLoading(false);

        setTaskSession(response)
    
        
      }catch(e) {
        setLoading(false);
        alert(e + e.message);
      }

    }

    // fetch all tasks
    const fetchAllDashboardTasks = async () => {
     
        try {

          setLoading(true)

          const response = await fetchTasks(0);
          setTasks(response);

          setLoading(false)

        }catch(e) {     
          setLoading(false)
          console.error(e + e.message);
        }
    }

    // use effect
    useEffect(() => {

      loadSaveTaskSession();
      fetchAllDashboardTasks()

    }, [])


    const SocialTasks = tasks.filter((task) => task.taskCategory === 'Social');
    const WatchTasks = tasks.filter((task) => task.taskCategory === 'Watch');

    console.log(SocialTasks)

  return (
    <>
    <ProgressBar loading={loading} />
      <div className='md:max-w-[1250px] mx-auto my-6 mb-10'>
            <Header active="home" />
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
            <RenderTasks type={0} tasks={SocialTasks} promotion={true} title="Social Media Tasks" />

            {/* render watch & earn task */}
            <RenderTasks type={0} tasks={WatchTasks} title="Watch & Earn" />

            {/* render quick task */}
            <RenderTasks type={0} tasks={tasks} promotion={true}  title="Quick Tasks" />
      
            <AllTasks />
      </div>
      <Footer />
    </>
  )
}

export default Dashboard
