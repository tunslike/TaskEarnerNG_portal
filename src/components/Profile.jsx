import React, { useState } from "react";

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      {" "}
      {/* Profile Button */}{" "}
      <button
        className="flex items-center space-x-2 bg-gray-100 p-2 rounded-full focus:outline-none hover:bg-gray-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        {" "}
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />{" "}
        <span className="font-medium text-gray-700">Username</span>{" "}
      </button>{" "}
      {/* Dropdown Menu */}{" "}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
          {" "}
          <ul>
            {" "}
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              {" "}
              Profile{" "}
            </li>{" "}
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              {" "}
              Settings{" "}
            </li>{" "}
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              {" "}
              Help{" "}
            </li>{" "}
            <li className="border-t border-gray-200">
              {" "}
              <button
                className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                onClick={() => console.log("Logout clicked")}
              >
                {" "}
                Logout{" "}
              </button>{" "}
            </li>{" "}
          </ul>{" "}
        </div>
      )}{" "}
    </div>
  );
};
export default ProfileMenu;
