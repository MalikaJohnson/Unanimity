import { Link } from "react-router-dom";

export default function Homescreen() {
  


  return (
    <div>
      
        <h2>Happiness is when what you think, what you say,
          and what you do, are all in harmony</h2>
        
      <br />
      <div className="meditation-img">
        <Link to="meditation">
        <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaXRhdGlvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="woman meditating" />
          <p>Guided Breathing Meditation</p>
          </Link>
      </div>
      <br/>
      <div className="list-img">
        <Link to='/lists'>
        <img src="https://images.unsplash.com/photo-1606242403117-4755198b9752?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d3JpdGluZyUyMGluJTIwYmVkfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="woman writing in bed" />
        <p>Gratitude List</p>
        </Link>
      </div>
      <br/>
      <div className="yoga-img">
        <Link to="yoga">
        <img src="https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8eW9nYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="woman doing yoga" />
        <p>Yoga</p>
        </Link>
      </div>
      
    </div>
  )
}