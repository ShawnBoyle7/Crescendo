import { Link } from 'react-router-dom';
import "./PlaylistDiv.css"

const PlaylistDiv = ({ playlist, sessionUser }) => {
    return (
        <>
            <Link to={`/playlists/${playlist?.id}`}>
                <div className="playlist-card" key={playlist?.id}>
                    <img className="playlist-image" src={playlist?.Songs[0]?.Album?.imgUrl ? playlist?.Songs[0]?.Album?.imgUrl : "https://i.imgur.com/wkc2qJn.png"} alt="playlist-art"/>
                    <span className="playlist-name">{playlist?.name}</span>
                        <span className="playlist-creator">
                            By {sessionUser?.username}
                        </span>
                </div>
            </Link>
        </>
    )
}

export default PlaylistDiv;