import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  // Debugging: Log the `userData` to check the structure
  console.log("AllTask - userData:", userData);

  return (
    <>
      <div className="bg-[#1c1c1c] w-full p-5 mt-5 rounded h-50">
        {/* Header Section */}
        <div className="bg-orange-400 py-2 px-4 flex justify-between rounded">
          <h2 className="w-1/5 text-lg text-center font-bold">Employee Name</h2>
          <h3 className="w-1/5 text-lg text-center font-bold">New Task</h3>
          <h5 className="w-1/5 text-lg text-center font-bold">Active Task</h5>
          <h5 className="w-1/5 text-lg text-center font-bold">Completed</h5>
          <h5 className="w-1/5 text-lg text-center font-bold">Failed</h5>
        </div>

        {/* Data Section */}
        <div className="overflow-x-auto h-[80%] mt-5 mb-10">
          {userData && userData.length > 0 ? (
            userData.map((employee, idx) => (
              <div
                key={idx}
                className="border-2 border-pink-200 py-2 px-4 flex justify-between rounded mt-3"
              >
                <h2 className="w-1/5 text-white text-center">
                  {employee.firstName || "N/A"}
                </h2>
                <h3 className="w-1/5 text-lg font-medium text-blue-400 text-center">
                  {employee.taskNumbers?.newTask || 0}
                </h3>
                <h5 className="w-1/5 text-lg font-medium text-yellow-400 text-center">
                  {employee.taskNumbers?.active || 0}
                </h5>
                <h5 className="w-1/5 text-lg font-medium text-green-400 text-center">
                  {employee.taskNumbers?.completed || 0}
                </h5>
                <h5 className="w-1/5 text-lg font-medium text-red-400 text-center">
                  {employee.taskNumbers?.failed || 0}
                </h5>
              </div>
            ))
          ) : (
            <div className="text-center mt-5 text-white">No employees found!</div>
          )}
        </div>
      </div>
    </>
  );
};

export default AllTask;
