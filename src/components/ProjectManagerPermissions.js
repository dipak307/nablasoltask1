import React, { useState } from 'react';
import { UserGroupIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/24/outline'; // Updated import for Heroicons v2

const ProjectManagerPermissions = ({ toggleForm }) => { // Accept toggleForm as a prop
  const [selectedOption, setSelectedOption] = useState(() => {
    return localStorage.getItem('selectedOption') || 'Admins';
  });

  // Function to handle option selection and store it in localStorage
  const handleOptionSelection = (option) => {
    setSelectedOption(option);
  };
   const dataStored=(option)=>{

    localStorage.setItem('selectedOption', option); // Store the selected option
    alert("Data Stored successfully..")
   }

  return (
    <div className="bg-white rounded-lg shadow-lg w-full max-w-md md:max-w-lg p-8 md:p-12">
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        onClick={toggleForm} // Allow toggling to the previous form
      >
        &times;
      </button>
      <h2 className="text-2xl font-bold mb-6 text-center">Who can manage projects</h2>

      {/* Options */}
      <div className="space-y-4">
        {/* Option 1 */}
        <div
          onClick={() => handleOptionSelection('Everyone')}
          className={`flex items-center p-4 border rounded-lg cursor-pointer ${
            selectedOption === 'Everyone' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
          }`}
        >
          <UserGroupIcon className="w-6 h-6 text-blue-600 mr-4" />
          <div>
            <h2 className="font-medium text-lg text-start">Everyone</h2>
            <p className="text-sm text-gray-500 text-start">
              All users can now see it, but guests cannot access the projects.
            </p>
          </div>
        </div>

        {/* Option 2 */}
        <div
          onClick={() => handleOptionSelection('Admins')}
          className={`flex items-center p-4 border rounded-lg cursor-pointer ${
            selectedOption === 'Admins' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
          }`}
        >
          <UserCircleIcon className="w-6 h-6 text-blue-600 mr-4" />
          <div>
            <h2 className="font-medium text-lg text-start">Only Admins</h2>
            <p className="text-sm text-gray-500 text-start">Only admins can manage everything.</p>
          </div>
        </div>

        {/* Option 3 */}
        <div
          onClick={() => handleOptionSelection('Specific')}
          className={`flex items-center p-4 border rounded-lg cursor-pointer ${
            selectedOption === 'Specific' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
          }`}
        >
          <UsersIcon className="w-6 h-6 text-blue-600 mr-4" />
          <div>
            <h2 className="font-medium text-lg text-start">Only to Specific People</h2>
            <p className="text-sm text-gray-500 text-start">
              Only some specific people are able to see it.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mt-4">
        <button
          type="button"
          onClick={toggleForm} // Trigger the toggle to go back
          className="text-gray-500 hover:text-gray-700"
        >
          &lt;&nbsp;Back
        </button>
        <div className="flex-1 flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
            onClick={() => dataStored()} // Replace with next action or data handling
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectManagerPermissions;
