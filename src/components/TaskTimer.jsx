import React, { useState, useEffect } from "react";
import { FiAlertTriangle } from "react-icons/fi";

const TaskTimer = ({ startTime, start, endTime }) => {
  
    // Convert hh:mm:ss to total seconds
  const timeToSeconds = (time) => {
    const [hours, minutes, seconds] = time.split(":").map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  };

  const [timeLeft, setTimeLeft] = useState(timeToSeconds(startTime));
  const [isRunning, setIsRunning] = useState(start);

  // Convert total seconds back to HH:MM:SS format
  const formatTime = (seconds) => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  };

  useEffect(() => {
    let interval;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  // Update isRunning when start prop changes
  useEffect(() => {
    setIsRunning(start);
  }, [start]);

  return (
    <div>
        {(timeLeft > 0) &&
            <h6 className="text-[#ff3f3f] text-[0.7rem] font-[500] mb-1">{} Time left to complete task</h6>   
        }
    <div className={`px-7 py-3 text-[1.1rem] flex justify-center font-[500] gap-x-1 ${timeLeft > 0 ? ' bg-green-500' : 'bg-[#ff3f3f]'} text-white rounded-[2rem] hover:bg-green-600 transition`}>

    {(timeLeft > 0) ? ( <svg
        className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
    </svg>) : (<FiAlertTriangle className="mt-1 text-[1rem] mr-1" />)}

      
      {timeLeft > 0 ? formatTime(timeLeft) : "Time's Up!"}
    </div>
    </div>
  );

};


export default TaskTimer;
