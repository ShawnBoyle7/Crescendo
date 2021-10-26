import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Artist from '../Artist';
import ArtistDiv from '../ArtistDiv';
import './Artists.css'

const Artists = () => {
    const artistsSlice = useSelector(state => state.artists);
    const artists = Object.values(artistsSlice);

    return (
        <>
            <Route exact path="/artists">
                    <div className="artist-section">
                        <div className="artist-divs">
                                {artists.map(artist =>
                                <ArtistDiv artist={artist}/>)}
                        </div>
                    </div>
            </Route>

            <Route path="/artists/:artistId">
                <Artist artists={artists} />
            </Route>
        </>
    )
}

export default Artists;