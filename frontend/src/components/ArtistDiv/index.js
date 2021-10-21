import { Link } from "react-router-dom";

const ArtistDiv = ({ artist }) => {
        return (
                <>
                        <div className="artists-item" key={artist?.id}>
                                <Link to={`/artists/${artist?.id}`}>
                                <img className="artists-image" alt={"artist"} src={artist?.imgUrl} />
                                <div className="artists-name">{artist?.name}</div>
                                </Link>
                        </div>
                </>
        )
}

export default ArtistDiv;