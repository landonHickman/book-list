import {useState} from 'react'
import BookForm from './BookForm'

const Book = (props) => {
  const [showForm, setShowForm] = useState(false)
  const {book, deleteBook, editBook} = props


  return (
    <div>
      <h1>Book</h1>
      <h2>Title: {book.title}.</h2>
      <h2>Author: {book.author}.</h2>
      <p onClick={()=>{deleteBook(book.isbn)}}>Delete</p>  {/*index not defined*/}
      {/* <p onClick={()=>{editBook(book.isbn)}}>Edit</p> */}
      <p onClick={()=>setShowForm(!showForm)}>Toggle Edit Form</p>
      {showForm && <BookForm book={book} editBook={editBook} setShowForm={setShowForm}/>}
    </div>
  )
}

export default Book