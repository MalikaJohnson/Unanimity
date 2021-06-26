import {useParams} from 'react-router-dom'
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
      <h2>hello</h2>
    </div>
  )
}
