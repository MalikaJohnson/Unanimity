import { Link } from "react-router-dom";
import "./Landing.css"



export default function Landing() {

  return (
    <div className="landing">
      <img className="landing-img" src="https://i.imgur.com/OMKJKez.png" alt="logo" />
      <p className='landing-content'>Here at Unanimity, our goal is to bring our members closer to experiencing oneness by providing ways
        to practice mindfulness in a supportive community atmosphere</p>
      <Link to='/home'>
       <button className='btn-landing'>Namaste</button>
        </Link>
    </div>
  )
}




// https://i.imgur.com/tyP9t87.png