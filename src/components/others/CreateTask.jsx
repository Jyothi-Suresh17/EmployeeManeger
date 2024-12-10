import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignto, setAsignto] = useState("");
  const [category, setCategory] = useState("");
  
  const [userData, setUserData] = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!taskTitle || !taskDescription || !taskDate || !assignto || !category) {
      alert("Please fill in all fields");
      return;
    }

    // Create a new task object
    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    // Read the existing employee data from localStorage
    const storedEmployeeData = JSON.parse(localStorage.getItem("employees")) || [];

    // Modify the employee data (add the new task)
    const updatedEmployeeData = storedEmployeeData.map((employee) => {
      if (employee.firstName === assignto) {
        return {
          ...employee,
          tasks: [...employee.tasks, newTask], // Add the new task
          taskNumbers: {
            ...employee.taskNumbers,
            newTask: employee.taskNumbers.newTask + 1, // Increment newTask count
          },
        };
      }
      return employee; // Return unchanged employee if not assigned
    });

    // Update the user data in context
    setUserData(updatedEmployeeData);

    // Save the updated employee data back to localStorage
    localStorage.setItem("employees", JSON.stringify(updatedEmployeeData));
    console.log(JSON.parse(localStorage.getItem('employees')));
    // Reset the form fields
    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setAsignto("");
    setCategory("");
  };

  
  

  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form
        className="flex w-full flex-wrap items-start justify-between"
        onSubmit={submitHandler}
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Make UI Design"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
            <input
              value={assignto}
              onChange={(e) => setAsignto(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Employee Name"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Design, Development, etc."
            />
          </div>
        </div>
        <div className="w-1/2">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="text-sm w-full h-44 py-1 px-2 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            placeholder="Task details..."
          ></textarea>
          <button
            type="submit"
            className="bg-emerald-500 py-3 hover:bg-emerald-700 px-5 rounded text-sm mt-4 w-full"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
