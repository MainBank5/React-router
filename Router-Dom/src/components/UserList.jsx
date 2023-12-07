import {Link} from 'react-router-dom'

const UserList = () => {
    
  return (
    <div>
        <h1>User List </h1>
        <Link to="/users/Eliud">Eliud</Link><br />

        <Link to="/users/Karuga">Karuga</Link><br />

        <Link to="/users/Anil">Anil</Link><br />
        <Link to="/users/Meg">Meg</Link><br />
    </div>
  );
};

export default UserList;
