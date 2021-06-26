import { useHistory, Link } from 'react-router-dom';


export default function ShowList(props) {
  const { lists, currentUser, comments } = props
  const history = useHistory()
  
  return (
    <div>
     {comments.map((comment) => (
        <div className=""key={comment.id} >
          <p>{comment.content}</p>
          
          
        </div>
      ))}
      <Link to= "//lists/:id/edit">
      <button>Edit List</button>
      </Link>
    </div>
  ) 
}