import { useSelector } from "react-redux";
import { useLocation, Redirect, Link } from "react-router-dom";

const Error404 = () => {
    const sessionUser = useSelector(state => state.session.user)
    const location = useLocation()
    const pathName = location?.pathname?.split('/');
    const path = pathName[1];

    const redirectBandaid = () => {
        if (sessionUser && path === "login" || path === "signup") {
            return <Redirect to ="/"/>
        }
    }

    return (
        <>
        {redirectBandaid()}
        <h1>Page Not Found!</h1>
        <Link to="/">
            <h2>Click here to go home!</h2>
        </Link>
        </>
    )
}

export default Error404;