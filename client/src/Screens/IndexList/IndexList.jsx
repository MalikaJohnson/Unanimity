import { useHistory, Link, Redirect } from 'react-router-dom';
import './IndexList.css'

export default function IndexList(props) {
  const { lists, currentUser } = props
  const history = useHistory()
  return (
    <div className="list-pg">
      <div className="list-container">
        {!currentUser && <Redirect to="/sign-up" />}
        
      {lists.map((list) => (
        <div className="list-card"key={list.id} onClick={() => history.push(`/lists/${list.id}`)}>
          <p className="list-user">{list?.user?.username}</p>
          <h3 className="heading">Today I am Grateful For..</h3>
          <p className="link-input">{list?.input_1}</p>
          <p className="link-input">{list?.input_2}</p>
          <p className="link-input">{list?.input_3}</p>
          
        </div>
      ))}
      </div>
      <div className="btn-container">
      <Link to= "/add-list">
      <button className="index-btn">Make A New List</button>
        </Link>
        </div>
    </div>
  )
}