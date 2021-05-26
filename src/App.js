import {useState, useEffect} from 'react'
import axios from 'axios'
import BookForm from './BookForm'
import Book from './Book'

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
    let newBooks = books.filter((book) => {
      return id !== (book.isbn)
    })
    setBooks(newBooks)
  }
  const editBook = (editedBook) => {
    let updatedBooks = books.map((book)=> {
      return book.isbn === editedBook.id ? editedBook : book
    })
    setBooks(updatedBooks)
  }


  const renderBooks = () => {
    if (books.length == 0){
      return <h1>No Books</h1>
    }

    let id = 0
    return books.map ((book) => {
      return (
        
        <div key={book.isbn}>
          <h2>Id: {book.isbn}</h2>

          {/* <h2>Title: {book.title}</h2>
          <h2>Author: {book.author}.</h2>
          <p onClick={() => deleteBook(index)}>Delete</p>
          <p>Update</p> */}
          <Book deleteBook={deleteBook} editBook={editBook} book={book}/>
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
      {showForm && <BookForm addBook={addBook} setShowForm={setShowForm}/>}
      {renderBooks()}
    </div>
  );
}

export default App;
