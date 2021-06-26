import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Signup.css"


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
      <form className="signup-data"
        onSubmit={(e) => {
          e.preventDefault();
          handleSignup(formData);
      }}
      >
        <h1 className="signup-header">Sign Up</h1>
        <input className="signup-input"
          type='text'
          placeholder='Username'
          name='username'
          value={username}
          onChange={ handleChange }
        />
        <input className="signup-input"
          type='text'
          placeholder='Email'
          name='email'
          value={email}
          onChange={ handleChange }
        />
        <input className="signup-input"
          type='password'
          placeholder='Password'
          name='password'
          value={ password }
          onChange={ handleChange }
        />
        <br/>

        <Link className="link-to" to="/login">Already a member? Login here</Link>
        <br/>
        <button className="btn">Submit</button>
      </form>

    </div>
  )
}