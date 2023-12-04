import { Link } from "react-router-dom"

const BooksList = () => {
  return (
    <div>
       <h1>BooksList</h1> 
       <Link to="/books/1">Book 1</Link>
       <Link to="/books/2">Book 2</Link>
       <Link to="/books/3">Book 3</Link>
    </div>
  )
}

export default BooksList