
import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import BookMarks from './Component/BookMarks/BookMarks'

function App() {
const [bookMarks,setBookMark] =useState([])
const handelBookMark=(blog)=>{
  const newBookmark =[...bookMarks,blog]
  setBookMark(newBookmark)
console.log(bookMarks)
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
