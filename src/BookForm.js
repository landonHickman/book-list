import {useState} from 'react'

const BookForm = (props) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('submit')
    console.log(title)
    console.log(author)
    let newBook = {id: Math.floor(Math.random()* 10 - 6 + 1) + 1, title: title, author: author}
    props.addBook(newBook)
  }

  return (
    <div>
      <h1>BookForm</h1>
      <form onSubmit={handleSubmit}>
        <p>Title</p>
        <input 
          value={title}
          onChange={(e)=> setTitle(e.target.value)}
        />
        <p>Author</p>
        <input
          value={author}
          onChange={(e)=> setAuthor(e.target.value)}
        />
        <button>ADD</button>
      </form>
    </div>
  )
}

export default BookForm