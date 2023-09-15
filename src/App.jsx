
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddBookmarks = blog => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks);
  }


  const handleMarksAsRead = (id, time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime)

    // remove the read blog from bookmark

    const reamainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(reamainingBookmarks)

    console.log('remove bookmark', id);

  }
  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddBookmarks={handleAddBookmarks} handleMarksAsRead={handleMarksAsRead} ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>

    </>
  )
}

export default App
