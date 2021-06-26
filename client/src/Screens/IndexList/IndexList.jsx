import { useHistory } from 'react-router-dom';

export default function IndexList(props) {
  const { lists, currentUser, handleCreate } = props
  const history = useHistory()
  return (
    <div>
      
      {lists.map((list) => (
        <div className=""key={list.id} onClick={() => history.push(`/lists/${list.id}`)}>
          <p>{list.user.username}</p>
          <h3>Today I am Grateful For..</h3>
          <p>{list.input_1}</p>
          <p>{list.input_2}</p>
          <p>{list.input_3}</p>
          
        </div>
      ))}
      
    </div>
  )
}