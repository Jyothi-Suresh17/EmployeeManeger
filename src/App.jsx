import React, { useEffect, useState, useContext } from "react";
import Login from "./components/Auth/Login";
import EmployeDashboard from "./components/Dashboard/EmployeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null); // Tracks user role
  const [loggedInUserData, setLoggedInUserData] = useState(null); // Stores employee data
  const [userData, setUserData] = useContext(AuthContext);

  // Restore user data on mount
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser);
      setUser(parsedUser.role); // Set user role
      setLoggedInUserData(parsedUser.data || null); // Set user-specific data
    }
  }, []);

  // Login handler
  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      // Admin login
      const adminData = { role: "admin" };
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify(adminData));
    } else if (userData) {
      // Employee login
      const employee = userData.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        const employeeData = { role: "employee", data: employee };
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem("loggedInUser", JSON.stringify(employeeData));
      } else {
        alert("Invalid Credentials");
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard changeUser={setUser} />
      ) : user === "employee" ? (
        <EmployeDashboard changeUser={setUser} data={loggedInUserData} />
      ) : null}
    </>
  );
};

export default App;
