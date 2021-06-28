import { useState } from 'react'



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
        onSubmit={(e) => {
          e.preventDefault();
          handleCreateComm(id, formData)
        }}
        className="comment-input">
        <input
          placeholder="comment"
          value={content}
          name="content"
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}