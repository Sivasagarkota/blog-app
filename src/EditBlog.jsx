import React,{ useEffect, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

function EditBlog() {
    const { id } = useParams();
    const navigate = useNavigate();
    const titleRef = useRef(null);
    const categoryRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem("blogPost")) || [];
        const blog = userData.find((b) => b.id === parseInt(id));

        if (blog) {
            if (titleRef.current) titleRef.current.value = blog.title;
            if (categoryRef.current) categoryRef.current.value = blog.category;
            if (contentRef.current) contentRef.current.value = blog.content;
        }
    }, [id]);

    const saveContent = () => {
        const updatedTitle = titleRef.current?.value || "";
        const updatedCategory = categoryRef.current?.value || "";
        const updatedContent = contentRef.current?.value || "";

        if (!updatedTitle || !updatedCategory || !updatedContent) {
            alert("All fields are required.");
            return;
        }

        let blogPosts = JSON.parse(localStorage.getItem("blogPost")) || [];
        blogPosts = blogPosts.map((blog) =>
            blog.id === parseInt(id)
                ? { ...blog, title: updatedTitle, category: updatedCategory, content: updatedContent }
                : blog
        );

        localStorage.setItem("blogPost", JSON.stringify(blogPosts));
        navigate("/read");
    };

    return (
        <div className="flex flex-col items-center p-6">
        <h3 className="text-xl font-semibold mb-4">Edit Blog</h3>
        <form className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
            <div className="mb-4">
                <label className="block text-gray-700 font-medium">Title:</label>
                <input id="title" ref={titleRef} className="w-full mt-1 p-2 border border-gray-300 rounded-md"/>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-medium">Category:</label>
                <input id="category" ref={categoryRef} className="w-full mt-1 p-2 border border-gray-300 rounded-md"/>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-medium">Content:</label>
                <textarea id="content" ref={contentRef} rows="5"className="w-full mt-1 p-2 border border-gray-300 rounded-md resize-none"></textarea>
            </div>

            <div className="flex justify-between mt-6">
                <Link to="/read" className="text-blue-500 hover:underline">Back</Link>
                <button type="button" onClick={saveContent} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Save</button>
            </div>
        </form>
    </div>
    );
}

export default EditBlog;
