import { useContext , useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "./MyContext";
import { DisplayBlog } from "./Blog";
import React from "react";

function Main() {
  const navigate = useNavigate();
  const { userName, setUserName } = useContext(myContext);

  function logoutSession() {
    setUserName("Guest");
    navigate("/");
  }

  return (
    <div>
      {userName !== "Guest" ? (
          <div>
            <div className="flex items-center justify-end p-4">
              <h3 className="text-lg font-semibold mr-4">Logged in as {userName}</h3>
              <button onClick={logoutSession} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300">Logout</button>
      </div>
            <div className="flex flex-row items-center justify-center p-6">
              <div className="rounded-lg p-6 w-max text-center">
                  <div className="flex gap-5 mb-4">
                      <Link to="/read" className="bg-blue-500 text-white px-10 py-10 rounded-lg hover:bg-blue-600 transition duration-300">Read Blog</Link>
                      <Link to="/create" className="bg-green-500 text-white px-10 py-10 rounded-lg hover:bg-green-600 transition duration-300">Create Blog</Link>
                      </div>
                  </div>
              </div>
          </div>
      ) : (
        <div className="flex text-center relative">
            <div className="w-4/5 text-center p-4 text-3xl">
              <DisplayBlog />
            </div>
          <div className="w-1/5 top-0 right-0 p-2">
              <div className="flex flex-row gap-x-4">
                <Link to="/login" className="p-3 m-2 rounded-lg bg-sky-500 text-white hover:bg-blue-400 transition">Login</Link>
                <Link to="/signup" className="p-3 m-2 rounded-lg bg-green-500 text-white  hover:bg-green-400 transition">SignUp</Link>
              </div>
          </div>
            
        </div>
      )}
    </div>
  );
}

export default Main;
