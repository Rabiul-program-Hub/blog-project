

import { useEffect } from 'react';
import { useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handelBookMark,handelMarkAsRead,readId}) => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch('blog.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div>
            {
                blogs.map(blog =><Blog key={blog.id} blog={blog}
                    handelBookMark={handelBookMark}
                    handelMarkAsRead={handelMarkAsRead}
                    readId={readId}
                     ></Blog>)
            }
        </div>
    );
};



export default Blogs;