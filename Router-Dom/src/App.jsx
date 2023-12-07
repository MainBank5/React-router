import './App.css'
import { Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/home'
import Books from './Pages/Book'
import Contact from './Pages/contact'
import BooksList from './Pages/BooksList'
import Users from './components/Users'
import UserList from './components/UserList'
import Notfound from './Pages/notfound'
import BookLayout from './Pages/BookLayout'
import About from './Pages/About'


function App() {
 

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}/>

      <Route path="/books" element ={<BookLayout/>}>
        <Route index element = {<BooksList/>}/>
        <Route path=":id" element={<Books />}/>
      </Route>
     
      <Route path="/contact" element={<Contact />}/>
      <Route path="/users" >
        <Route index element= {<UserList/>}/>
        <Route path=":name" element={<Users />}/>
      </Route>
      <Route path = "/about" element = {<About />} />
      <Route path="*" element={< Notfound/>}/>
    </Routes>
    <div>Footer</div>
    </>
  )
}

export default App
