import { FaBookmark } from "react-icons/fa";
import PropTypes from 'prop-types';

const Blog = ({blog,handelBookMark,handelMarkAsRead, readId}) => {
   
    // console.log(blog)
    const{title,id,cover_img,author,author_img,read_time,date_post}=blog
    return (
        <div className="max-w-7xl mx-auto">
         <div>
            <img className='w-full rounded-xl' src={cover_img} alt="" />
            <div>
                <div className="flex justify-between">
                <h1 className="text-3xl font-semibold">{title}</h1>
                <div className="flex gap-4 items-center">
                    <h1 className="text-2xl">{read_time} Min</h1>
                   <button onClick={()=>handelBookMark(blog)} className="text-2xl"><FaBookmark /></button>
                </div>
               <button onClick={()=>handelMarkAsRead(id,read_time)}
               disabled={readId.includes(id)}
                className="text-pink-400 font-semibold"> Mark as Read</button>
                </div>
                <div className='flex items-center'>
                    <img className='w-28' src={author_img} alt="" />
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
    blog:PropTypes.object,
    handelBookMark:PropTypes.func,
    handelMarkAsRead:PropTypes.func,
    readId:PropTypes.number
};

export default Blog;