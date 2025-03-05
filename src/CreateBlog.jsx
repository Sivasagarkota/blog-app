
import { useContext } from "react";
import myContext from "./MyContext";
import {Link} from "react-router-dom";
import { DisplayBlog } from "./Blog";
import React from "react";
import CreateNewBlog from "./CreateNewBlog";

function CreateBlog() {
  const {userName} = useContext(myContext);
  return (
    <div>
      <DisplayBlog />
      <h3 className="text-lg font-semibold m-4 absolute top-0 right-0 mb-5">Logged in as {userName}</h3> 
        <CreateNewBlog />
        <div className="m-5 ">
        <Link to="/read" className="w-max bg-amber-300 text-center cursor-pointer rounded-lg hover:bg-amber-400 px-4 py-2">Read Blogs</Link>
        <Link to="/" className="bg-red-400 w-max  text-white rounded-lg px-4 py-2 hover:bg-red-500 transition">Back</Link>
        </div>
    </div>
  );
  
}

export default CreateBlog;