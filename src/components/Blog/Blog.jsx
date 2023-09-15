import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';


const Blog = ({ blog, handleAddBookmarks, handleMarksAsRead}) => {
    // distructure
    const { id, title, cover, reading_time, author, author_img, post_date, hashtags } = blog;

    return (
        <div className='mb-16 justify-between  space-y-4'>
            <img className='w-full' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between mt-3'>
                <div className='flex '>
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div className='ml-4'>
                        <h2 className='text-2xl font-bold'>{author}</h2>
                        <p className=''>{post_date}</p>

                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddBookmarks(blog)}  className='ml-2 text-2xl text-red-600'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href=""> #{hash}</a></span>)
                }
            </p>

            <button className='text-purple-800 font-bold underline' 
            onClick={()=>handleMarksAsRead(id, reading_time)}
            >Mark As Read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddBookmarks: PropTypes.func,
    handleMarksAsRead: PropTypes.func
    
    


}
export default Blog;