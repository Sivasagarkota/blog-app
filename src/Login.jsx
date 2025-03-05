import { useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "./MyContext";
import React from "react";

function Login() {
    const user = useRef();
    const password = useRef();
    const navigate = useNavigate();
    const { setUserName } = useContext(myContext);

    function validateUser(event) {
        event.preventDefault();
        const usernameValue = user.current.value.trim();
        const passwordValue = password.current.value.trim();
        if (!usernameValue || !passwordValue) {
            alert("All fields are required");
            return;
        }
        if (localStorage.getItem(usernameValue) === passwordValue) {
            setUserName(usernameValue);
            navigate("/", { replace: true });
        } else {
            alert("Invalid Credentials");
        }
    }
    return (
        <div className="flex flex-col items-center justify-center bg-gray-100">
            <div className="border border-gray-300 m-5 w-max p-5 "> 
                <div className="m-3 space-y-4">
                    <div className="flex items-center gap-4">
                        <label className="font-medium">UserName</label>
                        <input type="text" ref={user} className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-400" placeholder="Enter UserName"/>
                    </div>
                    <div className="flex items-center gap-4">
                        <label className="font-medium">Password</label>
                        <input type="password" ref={password} className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-400" placeholder="Enter Password"/>
                    </div>
                </div>
        <div className="m-3 flex justify-center">
            <button onClick={validateUser} className=" cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">Login</button>
        </div>
        </div>
        <div className="p-5 w-max flex flex-row gap-5">
            <div className=" p-3 hover:bg-green-100 text-center bg-sky-200 text-black transition cursor-pointer rounded-lg">
                <Link to="/signup">New User?</Link>
            </div>
            <div className="p-3 hover:bg-green-100 text-center bg-sky-200 text-black transition cursor-pointer rounded-lg">
                <Link to="/">Back To Home Page</Link>
            </div>
        </div>
    </div>
    );
}

export default Login;
