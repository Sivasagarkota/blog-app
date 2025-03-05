// import React from 'react';
import { useNavigate } from "react-router-dom";
import { useState} from "react";
import React from "react";
function CreateNewBlog() {
    const navigate = useNavigate();
    const [count, SetCount] = useState(0);
    function Cancel(){
        navigate("/read");
    }   
    function countCharacters(e){
        SetCount(e.target.value.length);
    }
    function handleBlog(event) {
        event.preventDefault();
        let title = document.getElementById("title").value;
        let category = document.getElementById("category").value;
        let content = document.getElementById("content").value;
        if (title === "" || category === "" || content === "") {
            alert("All fields are required");
            return;
        }
        let blogPost = JSON.parse(localStorage.getItem("blogPost")) || [];
        let newPost = {
            id: Date.now(),
            title: title,
            category: category,
            content: content,
        };
        blogPost.push(newPost);
        localStorage.setItem("blogPost", JSON.stringify(blogPost));
        navigate("/read");
    }
    
    
    return (
        <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
        <h3 className="text-center text-xl mb-4">Create New Blog</h3>
            <form className="space-y-4">
                <div className="flex flex-col">
                <label htmlFor="title" className="font-medium mb-1">Title</label>
                <input type="text" id="title" className="border border-gray-300 rounded-lg px-3 py-2"/>
                </div>

                <div className="flex flex-col">
                <label htmlFor="category" className="font-medium mb-1">Category</label>
                <input type="text" id="category" className="border border-gray-300 rounded-lg px-3 py-2"/>
                </div>

                <div className="flex flex-col">
                <label htmlFor="content" className="mb-1 ">Content</label>
                <textarea rows={5} id="content" onChange={countCharacters} className="border border-gray-300 rounded-lg px-3 py-"/>
                </div>
                <p className="text-gray-600 text-sm">Total Char: <span className="font-semibold">{count}</span></p>
                <div className="flex justify-center gap-4">
                <button type="submit" onClick={handleBlog} className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">Submit</button>
                <button onClick={Cancel} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">Cancel</button>
                </div>
            </form>
        </div>

  )
}

export default CreateNewBlog;