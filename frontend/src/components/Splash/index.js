import { Link } from "react-router-dom";
import './Splash.css'

const Splash = () => {
  return (
    <>
      <div className="splash-auth">
        <Link to="/login" className="login">Log In</Link>
        <Link to="/signup" className="login">Sign Up</Link>
        <Link to={{ pathname: "https://github.com/ShawnBoyle7" }} target> Here is my Github </Link>
      </div>
      <h1>Please log in to use the application!</h1>
    </>
  )
}

export default Splash;