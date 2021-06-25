import { Link } from 'react-router-dom'

export default function Layout(props) {
  const { currentUser, handleLogout, children } = props;
  return (
  
    <div>
      <header>
        <h1>Unanimity</h1>
        {currentUser ? (
          <>
            <p>Welcome {currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
            <div>
              <Link to='/login'>Login</Link>
              <Link to='/sign-up'>SignUp</Link>
            </div>
        )}
        <hr />
      </header>
      { children }
    </div>
  )
}