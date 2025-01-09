import { useState, useEffect } from 'react'
import { fetchAllTasks } from '../services/TasksService';
import { Header, Footer, Account, AdvertArea, TaskList, AllTasks } from '../components';

const Dashboard = () => {

    const [tasks, setTasks] = useState(null);

    const fetchTasks = async () => {
      const data = await fetchAllTasks();
      setTasks(data)
      console.log(data)
    }
  
    useEffect(() => {
  
      //fetchTasks();
  
    }, []);


  return (
    <>
      <div className='md:max-w-[1250px] mx-auto my-6 mb-10'>
            <Header />
            <Account />
            <AdvertArea />
            <TaskList title="Your Uncompleted Tasks" />
            <TaskList title="Social Media Tasks" />
            <TaskList title="Watch & Earn" />
            <TaskList title="Quick Tasks" />
            <AllTasks />
      </div>
      <Footer />
    </>
  )
}

export default Dashboard
