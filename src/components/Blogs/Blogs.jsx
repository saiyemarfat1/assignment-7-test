import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'


const Blogs = ({handleAddBookmarks, handleMarksAsRead}) => {
    const [blogs, setBlogs] = useState([])
    // dataLoad
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data));

    }, [])

    return (
        <div className="md:w-2/3">
            <h2 className="text-4xl">Blogs: {blogs.length}</h2>
            {
                blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    handleAddBookmarks={handleAddBookmarks}
                    handleMarksAsRead={handleMarksAsRead}
                    
                ></Blog>)
            }
        </div>
    );
};
Blogs.propTypes = {
    
}
export default Blogs;