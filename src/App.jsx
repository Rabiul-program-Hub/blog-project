
import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import BookMarks from './Component/BookMarks/BookMarks'

function App() {
const [bookMarks,setBookMark] =useState([])
const [readingTimes,setReadingTimes]=useState(0)
const [readId,setReadID]=useState([])
const handelBookMark=(blog)=>{
  const isExist = bookMarks.find(bookmark=> bookmark.id == blog.id);
  if(!isExist){
    setBookMark([...bookMarks,blog])
  }else{
    alert('dubble not alowed ')
  }


}
const handelMarkAsRead = (id,readingTime)=>{
const reamingRead= bookMarks.filter(bookmark=>bookmark.id !== id);
setBookMark(reamingRead)
const totalReadingTime = readingTimes + readingTime;
setReadingTimes(totalReadingTime)
setReadID([...readId,id])
}
  return (
    <> 
 <div className='flex gap-11 justify-center p-12 '>
 <Blogs handelBookMark={handelBookMark}
  handelMarkAsRead={handelMarkAsRead}
  readId={readId}
  ></Blogs>
 <BookMarks bookMarks={bookMarks}
            readingTimes={readingTimes}
           
 ></BookMarks>
 </div>
    </>
  )
}

export default App
