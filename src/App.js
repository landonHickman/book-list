import {useState, useEffect} from 'react'
import axios from 'axios'
import BookForm from './BookForm'

function App() {
  const [books, setBooks] = useState([])
  const [showForm, setShowForm] = useState(true)

  useEffect(()=>{
    console.log('useEffect called')
    getBooks()
  }, [])

  const getBooks = async () => {
    console.log('before axios call')
    let response = await axios.get('https://fakerapi.it/api/v1/books?_quantity=5')
    console.log('after axios call')
    console.log('response:', response)
    console.log('response.data:', response.data)
    console.log('response.data.data:', response.data.data)
    setBooks(response.data.data)
  }

  const deleteBook = (id) => {
    console.log('deleteBook clicked id:', id)
    let newBooks = books.filter((book, index) => {
      return id !== (index) //this works but it resets the Id so their will always be a number 1 until all of them are deleted.
    })
    setBooks(newBooks)
  }

  const renderBooks = () => {
    return books.map ((book, index) => {
      return(
        <div key={index}>
          <h2>ID: {index + 1}</h2>
          <h2>Title: {book.title}</h2>
          <h2>Author: {book.author}.</h2>
          <p onClick={() => deleteBook(index)}>Delete</p>
          <p>Update</p>
          <br/>
        </div>
      )
    })
  }

  const addBook = (book) => {
    console.log(book)
    setBooks([book, ...books])
    }
    
  return (
    <div className="App">
      <button onClick={() => setShowForm(!showForm)}>{showForm ? 'Hide Form' : 'Show Form'}</button>
      {showForm && <BookForm addBook={addBook}/>}
      {renderBooks()}
    </div>
  );
}

export default App;
