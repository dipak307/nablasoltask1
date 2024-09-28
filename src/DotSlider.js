import React, { useState } from 'react';
import CreateProjectForm from './components/CreateProject';
import ProjectManagerPermissions from './components/ProjectManagerPermissions';
import TaskList from './components/TaskManager';
import ViewSelector from './components/ViewSelector';

const DotSlider = () => {
  const [activeComponent, setActiveComponent] = useState(0);

  const components = [
    <CreateProjectForm toggleForm={() => setActiveComponent(0)} />,
    <ProjectManagerPermissions toggleForm={() => setActiveComponent(0)} />,
    <ViewSelector toggleForm={() => setActiveComponent(1)} /> ,// Updated to go back to TaskList
    <TaskList toggleForm={() => setActiveComponent(2)} />,
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="relative w-full max-w-md flex flex-col items-center">
        {/* Render the current component */}
        <div className="flex-grow flex items-center justify-center">
          {components[activeComponent]}
        </div>

        {/* Dot navigation */}
        <div className="absolute bottom-4 flex space-x-3">
          {components.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveComponent(index)}
              className={`w-3 h-3 rounded-full ${
                activeComponent === index ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DotSlider;
