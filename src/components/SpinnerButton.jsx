import React, { useState } from "react";

const SpinnerButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);

    // Simulate an API call or action
    setTimeout(() => {
      setIsLoading(false);
      alert("Action completed!");
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <button
        onClick={handleClick}
        disabled={isLoading}
        className={`flex items-center px-4 py-2 text-white font-semibold rounded-md transition duration-200 ${
          isLoading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin h-5 w-5 mr-2 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
            Processing...
          </>
        ) : (
          "Click Me"
        )}
      </button>
    </div>
  );
};

export default SpinnerButton;
