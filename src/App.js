import {useState, useEffect} from 'react'
import axios from 'axios'

function App() {
  const [books, setBooks] = useState([])

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

  const renderBooks = () => {
    return books.map ((book, index) => {
      return(
        <div key={index + 1}>
          <h2>ID: {index + 1}</h2>
          <h2>Title: {book.title}</h2>
          <h2>Author: {book.author}.</h2>
          <p>Delete</p>
          <p>Update</p>
          <br/>
        </div>
      )
    })
  }
  return (
    <div className="App">
      <h1>Hello</h1>
      
      {renderBooks()}
    </div>
  );
}

export default App;
