import { Link } from 'react-router-dom'
import "./Layout.css"

export default function Layout(props) {
  const { currentUser, handleLogout, children } = props;
  return (
  
    <div>
      <header>
        <div>
          <Link to="/home">
            <img className="logo" src="https://i.imgur.com/tyP9t87.png" />
            </Link>
        </div>
        {currentUser ? (
          <>
            <p className="welcome">Welcome {currentUser.username}</p>
            <div className="logout">
              <button className="layout-btn" onClick={handleLogout}>Logout</button>
              </div>
          </>
          
        ) : (
            <div className="login">
              <Link className="layout-login" to='/login'>Login</Link>
              <Link className="layout-signup" to='/sign-up'>SignUp</Link>
            </div>
        )}
      </header>
      { children }
    </div>
  )
}