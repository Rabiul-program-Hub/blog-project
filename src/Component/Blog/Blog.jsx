import { FaBookmark } from "react-icons/fa";
import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    console.log(blog)
    const{title,cover_img,author,author_img,read_time,date_post}=blog
    return (
        <div className="max-w-7xl mx-auto">
         <div>
            <img className='w-full' src={cover_img} alt="" />
            <div>
                <div className="flex justify-between">
                <h1>{title}</h1>
                <div className="flex gap-4 items-center">
                    <h1>{read_time} Min</h1>
                    <FaBookmark />
                </div>
                </div>
                <div className='flex items-center'>
                    <img className='w-36' src={author_img} alt="" />
                   <div>
                   <h1>{author}</h1>
                   <h1>{date_post}</h1>
                   </div>
                </div>
            </div>
         </div>
        </div>
    );
};

Blog.propTypes = {
    blog:PropTypes.object
};

export default Blog;