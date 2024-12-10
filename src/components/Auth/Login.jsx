import React, { useState } from "react";
 

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    // console.log(email , password);
    setEmail('');
    setPassword('')
  };
// console.log(handleLogin);

  // console.log(email,password);

  return (
    <>
      <div className="flex items-center h-screen w-screen justify-center">
        <div className="border-2 rounded-xl  border-emerald-600 p-20">
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="form-control flex flex-col items-center justify-center"
          >
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
              className="border-2 my-2 placeholder:text-grey-400 bg-transparent text-white outline-none text-xl py-3 px-5 border-emerald-400 rounded-full"
              type="email"
              placeholder="Enter Your Email"
            />
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
              className="border-2 my-2 placeholder:text-grey-400 bg-transparent text-white outline-none text-xl py-3 px-5 border-emerald-400 rounded-full"
              type="password"
              placeholder="Enter Your Password"
            />
            <button
              className=" placeholder:text-white  text-white
             outline-none text-xl py-3 px-5 my-2 bg-emerald-400 rounded-full"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
