import { Link } from 'react-router-dom'

export default function Layout(props) {
  const { currentUser, handleLogout, children } = props;
  return (
  
    <div>
      <header>
        <h1>Unanimity</h1>
        {currentUser ? (
          <>
            <p>{currentUser.username}</p>
            <button onClick={handleLogout}></button>
          </>
        ) : (
            <Link to='/login'>Login</Link>
        
        )}
        <hr />
      </header>
      { children }
    </div>
  )
}