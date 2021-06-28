import { useHistory, Link } from 'react-router-dom';
import './IndexList.css'

export default function IndexList(props) {
  const { lists, currentUser } = props
  const history = useHistory()
  return (
    <div className="list-pg">
      
      {lists.map((list) => (
        <div className="list-card"key={list.id} onClick={() => history.push(`/lists/${list.id}`)}>
          <p>{list.user.username}</p>
          <h3>Today I am Grateful For..</h3>
          <p>{list.input_1}</p>
          <p>{list.input_2}</p>
          <p>{list.input_3}</p>
          
        </div>
      ))}
      <Link to= "/add-list">
      <button>Make A New List</button>
      </Link>
    </div>
  )
}