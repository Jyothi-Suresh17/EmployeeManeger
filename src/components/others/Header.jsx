import React from "react";

const Header = ({ username, changeUser }) => {
  const logOutUser = () => {
    // Clear only the logged-in user without affecting employees
    localStorage.removeItem("loggedInUser");
    changeUser("");
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-semibold">
        Hello <br />
        <span className="text-3xl font-semibold">{username || "Guest"} 😊</span>
      </h1>
      <button
        onClick={logOutUser}
        className="border-2 text-white py-2 px-2 hover:bg-red-500 border-red-600 rounded-md"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
