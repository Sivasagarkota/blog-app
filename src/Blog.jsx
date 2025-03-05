import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";
import SignUp from "./Signup";
import myContext from "./MyContext";
import ReadBlog from "./ReadBlog";
import CreateBlog from "./CreateBlog";
import Main from "./Main"; 
import ReadBlogA from "./ReadBlogA";
import EditBlog from "./EditBlog";
import CreateNewBlog from "./CreateNewBlog";

export function DisplayBlog() {
  return <div>Blog App</div>;
}

function Blog() {
  const [userName, setUserName] = useState("Guest");

  return (
    <myContext.Provider value={{ userName, setUserName }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/read" element={<ReadBlog />} />
          <Route path="/create" element={<CreateBlog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/read-blog/:id" element={<ReadBlogA />} />
          <Route path="/edit-blog/:id" element={<EditBlog />} />

        </Routes>
      </BrowserRouter>
    </myContext.Provider>
  );
}

export default Blog;
