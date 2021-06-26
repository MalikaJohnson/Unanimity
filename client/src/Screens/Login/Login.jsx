import { useState } from 'react';
import "./Login.css"



export default function Login(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const { username, password } = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  };

  return (
    <div className="login-form">

      <form className="login-data"
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin(formData)
      }}
      >
        <h1 className="login-header">Login</h1>
        <input className="login-content"
          type='text'
          placeholder='Username'
          name='username'
          value={ username }
          onChange= { handleChange }
        />
        <input className="login-content"
          type='password'
          placeholder='Password'
          name='password'
          value={ password }
          onChange={ handleChange }
        />
        <button className="btn">Submit</button>

      </form>

    </div>
  )
}