import { Link, useParams} from 'react-router-dom';
import { useEffect, useState } from 'react'
import { getOneList } from '../../Services/lists';
import CommentPage from "../../Components/CommentPage";


export default function ShowList(props) {
  const [singleList, setSingleList] = useState(null)

  const { lists, comments, handleCreateComm } = props
  const {id} = useParams()
  
  useEffect(() => {
    const fetchSingleList = async () => {
      const listItem = await getOneList(id)
      setSingleList(listItem)
    }
    fetchSingleList()
  }, [])

  return (
    <div>
      <div className='detail-list'>
        <p>Today I am Grateful For ..</p>
         <p>1. {singleList?.input_1}</p>   
      <p>2. {singleList?.input_2}</p>
      <p>3. {singleList?.input_3}</p>   
      </div>
    {singleList?.comments.map((comment) => (
      <div className="" key={comment.id} >
      <div className="comment-bubble">
        <p>{comment.content}</p>
        <p>-{comment.user.username}</p>
        
        </div>
        </div>
    ))}
      <CommentPage id={id} handleCreateComm={handleCreateComm }/>
      <Link to= {`/lists/${id}/edit`}>
      <button>Edit List</button>
      </Link>
    </div>
  ) 
}