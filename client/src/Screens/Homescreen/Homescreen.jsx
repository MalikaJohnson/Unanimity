import { Link } from "react-router-dom";
import "./Homescreen.css"

export default function Homescreen() {
  


  return (
    <div>
      
        <h2 className="home-pg"><span>Happiness</span> is when what you think, what you say,
          and what you do, are all in harmony</h2>
        
      <br />
      <div className="meditation-card">
        <Link to="meditation">
        <img className="meditation-img"src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaXRhdGlvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="woman meditating" />
          <p className="meditation-content">Guided Breathing Meditation</p>
          </Link>
      </div>
      <br/>
      <div className="grat-list-card">
        <Link to='/lists'>
        <img className="grat-list-img"src="https://images.unsplash.com/photo-1606242403117-4755198b9752?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d3JpdGluZyUyMGluJTIwYmVkfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="woman writing in bed" />
        <p className="grat-list-content">Gratitude List</p>
        </Link>
      </div>
      <br/>
      <div className="yoga-card">
        <Link to="yoga">
        <img className="yoga-img"src="https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8eW9nYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="woman doing yoga" />
        <p className="yoga-content">Yoga</p>
        </Link>
      </div>
      
    </div>
  )
}