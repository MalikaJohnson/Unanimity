import { Link, useParams} from 'react-router-dom';
import { useEffect, useState } from 'react'
import { getOneList } from '../../Services/lists';


export default function ShowList(props) {
  const [singleList, setSingleList] = useState(null)

  const { lists, currentUser, comments } = props
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
      <p>1. {singleList.input_1}</p>
      <p></p>
      <p></p>
    {singleList?.comments.map((comment) => (
        <div className=""key={comment.id} >
          <p>{comment.content}</p>
        <p>- { comment.user.username}</p>
          
        </div>
      ))}
      <Link to= {`/lists/${id}/edit`}>
      <button>Edit List</button>
      </Link>
    </div>
  ) 
}