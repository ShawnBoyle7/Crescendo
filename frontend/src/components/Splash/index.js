import './Splash.css'
import { useDispatch } from "react-redux"
import { demo } from "../../store/session"

const Splash = () => {
    const dispatch = useDispatch();

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