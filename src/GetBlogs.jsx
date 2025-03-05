import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function GetBlogs() {
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("blogPost")) || [];
        setBlogs(data);
    }, []);

    const deleteBlog = (id) => {
        const updatedBlogs = blogs.filter(blog => blog.id !== id);
        localStorage.setItem("blogPost", JSON.stringify(updatedBlogs));
        setBlogs(updatedBlogs);
    };
    
    return (
        <div>
            <h3 className="m-2">Blogs:</h3>
        <div>
            <ul className="list-decimal pl-10 ">
                {blogs.map((e, index) => (
                    <li key={index} className="mb-2">
                        <div className="bg-violet-100 p-2  flex flex-row items-center gap-4 rounded-lg shadoww-[500px]">
                            <div className="w-2/5 min-w-[150px] max-w-[200px]">
                                <a href="#" onClick={(event) => { event.preventDefault(); console.log(e); }} className="bg-red-100 text-black p-3 w-full block overflow-hidden text-ellipsis  rounded-md">{e.title}</a>
                            </div>
                            <div className="flex flex-row gap-2 w-3/5 min-w-[200px] max-w-[300px]">
                                <button onClick={() => navigate(`/read-blog/${e.id}`)} className="bg-amber-300 cursor-pointer rounded-lg hover:bg-amber-400 px-3 py-2 w-full">Read</button>
                                <button onClick={() => navigate(`/edit-blog/${e.id}`)} className="bg-sky-300 cursor-pointer rounded-lg hover:bg-sky-400 px-3 py-2 w-full">Edit</button>
                                <button onClick={() => deleteBlog(e.id)} className="bg-red-400 hover:bg-red-500 cursor-pointer rounded-lg px-3 py-2 w-full">Delete</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
    </div>            
</div>

    );
}

export default GetBlogs;
