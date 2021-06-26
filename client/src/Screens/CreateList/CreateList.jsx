import { useState } from 'react'

export default function CreateList(props) {
  const [formData, setFormData] = useState({
    input_1: '',
    input_2: '',
    input_3: '',
  });

  const { handleCreate } = props;
  const { input_1, input_2, input_3 } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };



  return (
    <div className="create-body">
      <p>Practicing gratitude can be a game-changer: it has far reaching effects, from improving our mental health to boosting our relationships with others. Living your life with gratitude helps you notice the little wins. Each of these small moments strings together to create a web of well-being that,
        over time, strengthens your ability to notice the good. Recalling moments of gratitude associated with ordinary events, your personal attributes, or valued people in your life gives you the potential to interweave a sustainable theme of gratefulness into your life. Use this to track your daily reasons to be greatful.</p>
      
      <br />
      <h3>Today I am Grateful For...</h3>
      <form className="create-form"
        OnSubmit={(e) => {
          e.preventDefault();
          handleCreate(formData);
        }}
      >
        <input
          className="create-input1"
          placeholder="Reason 1"
          type="text"
          name="input_1"
          value={"input_1"}
          onChange={handleChange}
        />
        <input
          className="create-input2"
          placeholder="Reason 2"
          type="text"
          name="input_2"
          value={"input_2"}
          onChange={handleChange}
        />
        <input
          className="create-input3"
          placeholder="Reason 3"
          type="text"
          name="Reason 3"
          value={""}
          onChange={handleChange}
        />
        <button className="create-submit-btn">Submit</button>
      </form>

    </div>
  )
}