import { useParams } from "react-router-dom";
import { Link, Route } from "react-router-dom";
import Albums from "../Albums";
import ArtistDiv from "../ArtistDiv";
import './Artist.css'

const Artist = ({ artists }) => {

    const { artistId } = useParams()
    const artist = artists.find(artist => artist.id === +artistId)
    return (
        <>
            <Route exact path="/artists/:artistId">
            <ArtistDiv artist={artist}/>
                <div className="albums-section">
                    <div className="album-divs">
                        {artist && artist.Albums.map(album =>
                            <div className="albums-item" key={album.id}>
                                <Link to={`/albums/${album.id}`}>
                                    <img className="albums-image" alt={"album"} src={album.imgUrl} />
                                    <div className="albums-name">{album.name}</div>
                                </Link>
                            </div>)}
                    </div>
                </div>

                <Link to={`/artists/${artistId}/albums`}>See All Albums</Link>
            </Route>

            <Route path="/artists/:artistId/albums">
                <Albums albums={artist && artist.Albums} />
            </Route>
        </>
    )
}

export default Artist;