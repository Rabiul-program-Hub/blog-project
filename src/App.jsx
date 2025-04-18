
import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import BookMarks from './Component/BookMarks/BookMarks'

function App() {
const [bookMarks,setBookMark] =useState([])
const handelBookMark=(blog)=>{
  const isExist = bookMarks.find(bookmark=> bookmark.id == blog.id);
  if(!isExist){
    setBookMark([...bookMarks,blog])
  }else{
    alert('dubble not alowed ')
  }

}

  return (
    <> 
 <div className='flex gap-11 justify-center p-12 '>
 <Blogs handelBookMark={handelBookMark}></Blogs>
 <BookMarks bookMarks={bookMarks}></BookMarks>
 </div>
    </>
  )
}

export default App
