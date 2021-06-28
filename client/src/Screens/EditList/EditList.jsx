import {useParams, useHistory} from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function EditList(props) {
  const [formData, setFormData] = useState({
    input_1: '',
    input_2: '',
    input_3: '',
  });

  const { input_1, input_2, input_3 } = formData;
  const { lists, handleUpdate } = props;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const singleList = lists.find((list) => list.id === Number(id))
      setFormData({
        input_1: singleList.input_1,
        input_2: singleList.input_2,
        input_3: singleList.input_3
      })
    };
    if (lists.length) {
      prefillFormData();
    }
  }, [lists]);

  const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};
  
  return (
    <div>
      <h3>Today I am Grateful For...</h3>
      <form className="edit-form"
        OnSubmit={(e) => {
          e.preventDefault();
          handleUpdate(id, formData);
        }}
      >
        <input
          className="edit-input1"
          type="text"
          name="input_1"
          value={input_1}
          onChange={handleChange}
        />
        <input
          className="edit-input2"
          type="text"
          name="input_2"
          value={input_2}
          onChange={handleChange}
        />
        <input
          className="edit-input3"
          type="text"
          name="Reason 3"
          value={input_3}
          onChange={handleChange}
        />
        <button className="edit-submit-btn" onClick={() => history.push(`/lists/${list.id}`)}>Submit</button>
      </form>
    </div>
  )
}
