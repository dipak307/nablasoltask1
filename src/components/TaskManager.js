import React, { useState } from "react";

const TaskList = ({ toggleForm }) => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Marketing Website Design", hidden: false },
    { id: 2, name: "Branding Design", hidden: false },
    { id: 3, name: "UI/UX Fundamentals", hidden: false },
    { id: 4, name: "Wireframe and Prototyping", hidden: false },
    { id: 5, name: "Style Guide", hidden: false },
    { id: 6, name: "UX Research and Flows", hidden: false },
    { id: 7, name: "Layout Design", hidden: false },
    { id: 8, name: "More Marketing", hidden: false },
    { id: 9, name: "More Branding", hidden: false },
    { id: 10, name: "More UI/UX", hidden: false },
    { id: 11, name: "More Wireframing", hidden: false },
  ]);

  const [checkedTasks, setCheckedTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const hideTask = (taskId) => {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, hidden: true } : task)));
  };

  const handleCheckboxChange = (taskId) => {
    if (checkedTasks.includes(taskId)) {
      setCheckedTasks(checkedTasks.filter((id) => id !== taskId));
    } else {
      setCheckedTasks([...checkedTasks, taskId]);
    }
  };

  const addCheckedTasksToLocalStorage = () => {
    if (checkedTasks.length === 0) {
      alert("Please check at least one task!");
      return;
    }
    localStorage.setItem("checkedTasks", JSON.stringify(checkedTasks));
    alert("Checked tasks saved to localStorage!");
    toggleForm();
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 lg:p-8 w-full max-w-md lg:max-w-[calc(100%+200px)] mx-auto relative h-[98vh] overflow-hidden">
    <button
      className="absolute top-2 right-2 text-black cursor-pointer hover:text-red-500 text-2xl"
      onClick={toggleForm}
    >
      &times;
    </button>

    <h2 className="text-xl font-bold mb-4 text-center">Tasks</h2>

    <div className="flex flex-col md:flex-row items-center mb-4">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add task"
        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2 md:mb-0 md:mr-2"
      />
      <button
        onClick={() => {
          if (newTask.trim() !== "") {
            setTasks([...tasks, { id: tasks.length + 1, name: newTask, hidden: false }]);
            setNewTask("");
          }
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Add
      </button>
    </div>

    <ul className="space-y-3 h-[60vh] overflow-y-auto">
      {tasks.map((task) =>
        !task.hidden ? (
          <li
            key={task.id}
            className="flex justify-between items-center bg-gray-50 p-2 rounded-lg"
          >
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={checkedTasks.includes(task.id)}
                onChange={() => handleCheckboxChange(task.id)}
              />
              {task.name}
            </label>
            <span
              className="text-black cursor-pointer hover:text-red-500"
              onClick={() => hideTask(task.id)}
            >
              &times;
            </span>
          </li>
        ) : null
      )}
    </ul>

    <div className="flex justify-between items-center mt-4">
      <button
        type="button"
        onClick={toggleForm}
        className="text-gray-500 hover:text-gray-700"
      >
        &lt;&nbsp;Back
      </button>
      <div className="flex-1 flex justify-center">
        <button
          type="submit"
          onClick={addCheckedTasksToLocalStorage}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  </div>
);
};

export default TaskList;
