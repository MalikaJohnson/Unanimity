import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Signup(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const { username, email, password } = formData;
  const { handleSignup } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <div className='signup-form'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSignup(formData);
      }}
      >
        <h1>Sign Up</h1>
        <input
          type='text'
          placeholder='Username'
          name='username'
          value={username}
          onChange={ handleChange }
        />
        <input
          type='text'
          placeholder='Email'
          name='email'
          value={email}
          onChange={ handleChange }
        />
        <input
          type='text'
          placeholder='Password'
          name='password'
          value={ password }
          onChange={ handleChange }
        />
        <br/>

        <Link to="/login">Already a member? Login here</Link>
        <br/>
        <button>Submit</button>
      </form>

    </div>
  )
}