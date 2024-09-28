import React, { useState } from 'react';

const ViewSelector = ({ toggleForm }) => {
  const [selectedView, setSelectedView] = useState(() => {
    return localStorage.getItem('selectedView') || 'List';
  });

  const [isVisible, setIsVisible] = useState(true);

  const handleViewSelection = (view) => {
    setSelectedView(view);
    localStorage.setItem('selectedView', view);
  };

  const handleBackClick = () => {
    setIsVisible(false);
    toggleForm();
  };

  const handleCloseClick = () => {
    setIsVisible(false);
  };

  return (
    <div className="bg-white lg:w-[100vw] rounded-lg shadow-lg p-8 w-full max-w-lg mx-auto relative h-auto max-h-[95vh] overflow-auto">
      <button
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        onClick={handleCloseClick}
      >
        &times;
      </button>

      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Select a view</h1>
        <p className="text-gray-500 mt-4">You can also customize this view in settings</p>
      </div>

      {/* View Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-4">
        {/* List View Card */}
        <div
          className={`border-2 p-6 rounded-lg cursor-pointer h-36 flex items-center justify-center transition duration-200 ease-in-out ${
            selectedView === 'List' ? 'border-blue-600' : 'border-gray-300'
          }`}
          onClick={() => handleViewSelection('List')}
        >
          <div className="w-12 h-12">
            <svg
              className="w-full h-full text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="4" y="4" width="16" height="4" rx="2" />
              <rect x="4" y="10" width="16" height="4" rx="2" />
              <rect x="4" y="16" width="16" height="4" rx="2" />
            </svg>
          </div>
        </div>

        {/* Board View Card */}
        <div
          className={`border-2 p-6 rounded-lg cursor-pointer h-36 flex items-center justify-center transition duration-200 ease-in-out ${
            selectedView === 'Board' ? 'border-blue-600' : 'border-gray-300'
          }`}
          onClick={() => handleViewSelection('Board')}
        >
          <div className="w-12 h-12">
            <svg
              className="w-full h-full text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="3" y="3" width="4" height="18" rx="2" />
              <rect x="10" y="3" width="4" height="12" rx="2" />
              <rect x="17" y="3" width="4" height="9" rx="2" />
            </svg>
          </div>
        </div>
      </div>

      {/* Labels for the View Cards */}
      <div className="flex justify-around items-center mb-6">
        <p className="text-center w-36 mb-6">List</p>
        <p className="text-center w-36 mb-6">Board</p>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-4">
        <button
          type="button"
          onClick={handleBackClick}
          className="text-gray-500 hover:text-gray-700 mb-4 md:mb-0"
        >
          &lt;&nbsp;Back
        </button>

        <div className="flex-1 flex justify-center">
          <button
            type="submit"
            onClick={() => {
              setIsVisible(false);
              toggleForm();
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewSelector;
