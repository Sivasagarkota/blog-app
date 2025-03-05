import React from 'react'
import {useRef} from "react";
import {Link} from "react-router-dom";
// import Login from "./Login";
function Signup() {
    const username = useRef();
    const password = useRef();
    function insertData(){
        console.log(password.current.value);
        localStorage.setItem(username.current.value, password.current.value);
        alert("User Registered Successfully !");
      }
  return (
    <>
   <div className="flex flex-col items-center justify-center bg-gray-100">
    <div className="border border-gray-300 p-8 w-max shadow-lg bg-white rounded-lg">
        <div className="space-y-4">
            <div className="flex flex-row gap-2 items-center">
                <label className="font-medium">UserName</label>
                <input className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter UserName" type="text" ref={username}/>
            </div>
            <div className="flex flex-row gap-2 items-center">
                <label className="font-medium">Password</label>
                <input type="password" ref={password} className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"placeholder="Enter Password"/>
            </div>
        </div>
        <div className="mt-4 flex justify-center">
            <button onClick={insertData} className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">Signup</button>
        </div>
    </div>

    <div className="p-5 w-max flex flex-row gap-5">
        <div className="p-3 hover:bg-green-100 text-center bg-sky-200 text-black transition cursor-pointer rounded-lg">
            <Link to="/login">Back to Login</Link>
        </div>
    </div>
</div>

    </>
  )
}

export default Signup;