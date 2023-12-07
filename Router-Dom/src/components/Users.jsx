import { useParams } from "react-router-dom"

const Users = () => {
  const {name}  = useParams()
    
  return (
    <div>Our Users
        <h2> This is {name} page</h2>
    </div>

  )
}

export default Users
