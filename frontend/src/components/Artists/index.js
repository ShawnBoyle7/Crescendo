// import { useDispatch, useSelector } from "react-redux";
// import { getArtists } from "../../store/artists";
// import { useEffect } from "react";
import { Link } from 'react-router-dom';

const Artists = ({ artists }) => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getArtists());
  // }, [dispatch])

  // const artistsSlice = useSelector(state => state.artists)
  // const artists = Object.values(artistsSlice)

  return(
    <>
      <h1>This is the artists component</h1> 
      <ul>
        {artists.map(artist => <li key={artist.id}> <Link to={`/artists/${artist.id}`}> {artist.name} </Link></li>)}
      </ul>
    </>
  )
}

export default Artists;