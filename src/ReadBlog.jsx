import { useContext } from "react";
import { Link } from "react-router-dom";
import React from "react";
import myContext from "./MyContext";
import GetBlogs from "./GetBlogs";

function ReadBlog() {
  const { userName } = useContext(myContext);

  return (
    <div>
      <h3 className="text-lg font-semibold m-4 absolute top-0 right-0">Logged in as {userName || "Guest"}</h3>
      <GetBlogs />
      <div className="flex flex-row gap-10 p-2 justify-around">
        <Link to="/" className="text-center  bg-red-400 w-max rounded-lg p-2 hover:bg-red-500 transition">Back</Link>
        <div className="text-center  bg-green-300 w-max rounded-lg p-2 hover:bg-green-400 transition">
          <Link to="/create">Create Blog</Link>
        </div>
      </div>
    </div>
  );
}

export default ReadBlog;
