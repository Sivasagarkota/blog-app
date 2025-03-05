import React, { useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";

function ReadBlogA() {
    const { id } = useParams();
    const titleRef = useRef(null);
    const categoryRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem("blogPost")) || [];
        const blog = userData.find((b) => String(b.id) === String(id));
        if (blog) {
            titleRef.current.value = blog.title;
            categoryRef.current.value = blog.category;
            contentRef.current.value = blog.content;
        }
    }, [id]);

    return (
        <div className="flex flex-col items-center p-6">
        <h3 className="text-xl font-semibold mb-4">Read Blog</h3>
        <form className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
            <div className="mb-4">
                <label className="block text-gray-700 font-medium">Title:</label>
                <input id="title" ref={titleRef} readOnly className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-gray-100 focus:hidden" />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-medium">Category:</label>
                <input id="category" ref={categoryRef} readOnly className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-gray-100 focus:hidden"/>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-medium">Content:</label>
                <textarea id="content" ref={contentRef} readOnly rows="5" className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-gray-100 resize-none focus:hidden"></textarea>
            </div>

            <div className="flex justify-between mt-6">
                <Link to="/read" className="text-blue-500 hover:underline">Back</Link>
                <Link to={`/edit-blog/${id}`} className="text-green-500 hover:underline">Edit</Link>
            </div>
        </form>
    </div>
    );
}

export default ReadBlogA;
