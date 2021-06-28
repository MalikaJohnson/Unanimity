import { Link } from "react-router-dom";
import "./Landing.css"



export default function Landing() {

  return (
    <div className="landing">
      <img className="landing-img" src="https://i.imgur.com/OMKJKez.png" alt="logo" />
      <h3 className="pronounce">Yoo-nuh-ni-muh-tee</h3>
      <p className='landing-content'>noun. the state or quality of being unanimous; a consensus or undivided opinion. Here at Unanimity, our goal is to bring our members closer to experiencing oneness by providing ways
        to practice mindfulness in a supportive community atmosphere</p>
      <Link to='/home'>
      <button className='btn-landing'>Namaste</button>
        </Link>
    </div>
  )
}




