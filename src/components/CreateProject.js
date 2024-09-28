import React, { useState } from 'react';

const CreateProjectForm = ({ toggleForm }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [formData, setFormData] = useState({
    projectName: '',
    client: '',
    startDate: '',
    endDate: '',
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('projectData', JSON.stringify(formData));
    alert('Project created and stored in localStorage!');
    toggleForm(); // Call toggleForm to proceed to the next slide
  };

  const toggleVisibility = () => {
    setIsVisible(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 md:p-8 relative mx-auto lg:max-w-xl lg:p-10">
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        onClick={toggleVisibility}
      >
        &times;
      </button>
      <h2 className="text-2xl font-bold mb-6 text-center">Create a Project</h2>

      <form onSubmit={handleSubmit}>
        {/* Project Name Input */}
        <div className="mb-4">
          <label htmlFor="projectName" className="block text-gray-700 text-start">
            Project Name
          </label>
          <input
            type="text"
            id="projectName"
            name="projectName"
            placeholder="Enter project name here"
            value={formData.projectName}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>

        {/* Client Selection */}
        <div className="mb-4 flex flex-col md:flex-row items-end gap-2">
          <div className="flex-grow">
            <label htmlFor="client" className="block text-gray-700 text-start">
              Client
            </label>
            <select
              id="client"
              name="client"
              value={formData.client}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            >
              <option value="">Select a client</option>
              <option value="Client A">Client A</option>
              <option value="Client B">Client B</option>
              <option value="Client C">Client C</option>
            </select>
          </div>
          <div className="flex items-center justify-center text-center mb-2 text-light-black">Or</div>
          <div className="w-full md:w-1/3">
            <button
              type="button"
              className="mt-2 md:mt-0 bg-wheat hover:bg-blue-700 text-black py-2 w-full rounded-md text-sm border border-gray-300"
            >
              + New Client
            </button>
          </div>
        </div>

        {/* Date Inputs */}
        <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="startDate" className="block text-gray-700 text-start">
              Start Date
            </label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="endDate" className="block text-gray-700 text-start">
              End Date
            </label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
        </div>

        {/* Notes */}
        <div className="mb-4">
          <label htmlFor="notes" className="block text-gray-700 text-start">
            Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            placeholder="Optional"
            value={formData.notes}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          ></textarea>
        </div>

        {/* Form Actions */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-4">
        <button
          type="button"
         onClick={toggleForm()}
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
      </form>
    </div>
  );
};

export default CreateProjectForm;
