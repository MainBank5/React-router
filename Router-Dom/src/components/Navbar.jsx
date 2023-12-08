import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
    <ul className='navbar'>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/books">BooksList</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/users">Users List</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </nav>
  );
};

export default Navbar;
