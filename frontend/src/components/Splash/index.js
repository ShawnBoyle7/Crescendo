import './Splash.css'
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from 'react-router-dom'
import { demo } from "../../store/session"

const Splash = () => {
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);

    if (sessionUser) return (
        <Redirect to="/" />
    );

    const demoLogin = (e) => {
        e.preventDefault()
        dispatch(demo())
    }
    
    return (
        <>
            <div className="nav-placeholder">
                <h1>Placeholder</h1>
            </div>

            <div className="splash-content">
                <div className="splash-elements">
                    <div className="splash-header">
                        <h1>
                            Music is <br/> everything
                        </h1>
                        <p className="splash-subheader">Millions of songs. No credit card needed.</p>
                    </div>
                    <button className="splash-demo-button" onClick={demoLogin} >
                        Demo Login
                    </button>
                </div>
            </div>
        </>
    )
}

export default Splash;