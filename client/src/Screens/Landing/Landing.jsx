import { Link } from "react-router-dom";
import "./Landing.css"



export default function Landing() {

  return (
    <div className="landing">
      <div classNam="img-blurb">
      <img className="landing-img" src="https://i.imgur.com/OMKJKez.png" alt="logo" />
      <p className='landing-content'>Here at Unanimity, our goal is to bring our members closer to experiencing oneness by providing ways
        to practice mindfulness in a supportive community atmosphere</p>
      </div>
      <div className='landing-btn'>
      <Link to='/home'>
      <button className='btn-landing'>Namaste</button>
        </Link>
        </div>
    </div>
  )
}




