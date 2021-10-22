import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import "./AlbumDiv.css"

const AlbumDiv = ({ album }) => {
    const location = useLocation()

    return (
        <>
            <div className="album-item" key={album.id}>
                <Link to={`/albums/${album.id}`}>
                    <img className="album-image" alt={"album"} src={album.imgUrl} />
                    <div className="album-name">{album.name}</div>
                    {location.pathname === "/" 
                    ? 
                        <div className="album-artist">
                            {album.Artist.name}
                        </div>
                    :
                        <>
                        </>
                    }
                </Link>
            </div>
        </>
    )
}

export default AlbumDiv;