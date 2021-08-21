import { Link } from "react-router-dom";

const Splash = () => {
  return(
    <>
      <Link to="/login">Log In</Link>
      <Link to="/signup">Sign Up</Link>
    </>
  )
}

export default Splash;