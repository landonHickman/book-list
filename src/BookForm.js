import {useState} from 'react'

const BookForm = (props) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [isbn, setIsbn] = useState()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('submit')
    console.log(title)
    console.log(author)
    if(isbn){       //probably will be where code breaks due to id
      props.editBook({title: title, author: author, isbn: props.book.isbn})
    } else {
      console.log('hit add book')
      let newBook = {isbn: Math.ceil(Math.random()* 4000), title: title, author: author}
      props.addBook(newBook)
    }

    props.setShowForm(false) ///i dont know....
    setTitle('')
    setAuthor('')
  }

  return (
    <div>
      <h1>{props.book ? 'Edit Book' : 'Add Book'}</h1>
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
        <button>{props.book ? 'Edit' : 'Add'}</button>
      </form>
    </div>
  )
}

export default BookForm