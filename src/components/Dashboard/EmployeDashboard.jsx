import React from "react";
import Header from "../others/Header";
import TaskListNumbers from "../others/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeDashboard = (props) => {
  if (!props.data) {
    return <div className="text-white">No data available</div>; // Fallback UI
  }

  console.log("Employee Dashboard Data:", props.data);

  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskListNumbers data={props.data} />
      <TaskList data={props.data} />
    </div>
  );
};

export default EmployeDashboard;
