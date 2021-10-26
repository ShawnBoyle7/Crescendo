import { Link } from "react-router-dom";
import "./ArtistDiv.css"

const ArtistDiv = ({ artist }) => {
        return (
            <>
                <div className="artist-card" key={artist?.id}>
                    <Link to={`/artists/${artist?.id}`}>
                        <img className="artist-image" alt={"artist"} src={artist?.imgUrl} />
                        <span className="artist-name">{artist?.name}</span>
                        <span className="artist-text">Artist</span>
                    </Link>
                </div>
            </>
        )
}

export default ArtistDiv;