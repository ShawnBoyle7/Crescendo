import { Link, Route } from "react-router-dom";
import './GenreSongs.css'

const GenreSongs = ({ propSongs }) => {
    return (
        <>
            <div className="song-section">
                <div className="song-divs">
                    {propSongs.map(song =>
                        <div className="songs-item" key={song.id}>
                            <Link to={`/songs/${song.id}`}>
                                <img className="songs-image" alt={"song"} src={song.songImgUrl} />
                                <div className="songs-name">{song.name}</div>
                            </Link>
                        </div>)}
                </div>
            </div>
        </>
    )
}

export default GenreSongs;