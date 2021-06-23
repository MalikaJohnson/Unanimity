import { useState } from 'react';


export default function Login(props) {
  const [formData, setformData] = useState({
    username: '',
    password: '',
  });

  const { username, password } = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  };

  return (
    <div className='login-form'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin()
      }}
      >
        <h1>Login</h1>
        <input
          type='text'
          placeholder='Username'
          name='username'
          value={username}
          onChange= {handleChange}
        />
        <input
          type='text'
          placeholder='Password'
          name='password'
          value={password}
          onChange={handleChange}
        />
        <button>Submit</button>

      </form>

    </div>
  )
}