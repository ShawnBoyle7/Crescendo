import { Link } from "react-router-dom";
import "./ArtistDiv.css"

const ArtistDiv = ({ artist }) => {
        return (
            <>
                <div className="artist-item" key={artist?.id}>
                    <Link to={`/artists/${artist?.id}`}>
                    <img className="artist-image" alt={"artist"} src={artist?.imgUrl} />
                    <div className="artist-name">{artist?.name}</div>
                    </Link>
                </div>
            </>
        )
}

export default ArtistDiv;