import { Link } from "react-router-dom"

const SongDiv = ({ song }) => {
        return (
                <>
                        <div className="songs-item" key={song.id}>
                                <Link to={`/songs/${song.id}`}>
                                        <img className="songs-image" alt={"song"} src={song.Album.imgUrl} />
                                        <div className="songs-name">{song.name}</div>
                                </Link>
                        </div>
                </>
        )
}

export default SongDiv;