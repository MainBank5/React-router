import './App.css'
import { Routes, Route, Link} from 'react-router-dom'
import Home from './Pages/home'
import Books from './Pages/Book'
import Contact from './Pages/contact'
function App() {
 

  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/books">Books</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/books" element={<Books />}/>
      <Route path="/contact" element={<Contact />}/>
    </Routes>
    </>
  )
}

export default App
