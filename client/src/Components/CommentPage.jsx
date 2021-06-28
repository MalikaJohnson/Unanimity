import { useState } from 'react'
import "./CommentPage.css"


export default function CommentPage(props) {
  const [formData, setformData] = useState({
    content:'',
  })

  const { content } = formData;
  const { handleCreateComm, id } = props
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <div>
      <form
        className="comment-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleCreateComm(id, formData)
        }}
        >
        <input
          className="comment-input"
          placeholder="Comment"
          value={content}
          name="content"
          onChange={handleChange}
        />
        <button className="comm-btn">Submit</button>
      </form>
    </div>
  )
}