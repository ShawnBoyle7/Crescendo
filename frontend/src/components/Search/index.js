import { useSelector } from "react-redux";
import { Link} from "react-router-dom";
import { useEffect, useState } from "react";
import './Search.css';

const Search = () => {
  const genresSlice = useSelector(state => state.genres);
  const genres = Object.values(genresSlice);

  const artistsSlice = useSelector(state => state.artists);
  const artists = Object.values(artistsSlice);

  const songsSlice = useSelector(state => state.songs);
  const songs = Object.values(songsSlice);

  const albumsSlice = useSelector(state => state.albums);
  const albums = Object.values(albumsSlice);

  const [userInput, setUserInput] = useState("");
  const [albumArray, setAlbumArray] = useState([]);
  const [artistArray, setArtistArray] = useState([]);

  useEffect(() => {
    if (userInput) {
      let filteredAlbums = albums;
      let filteredArtists = artists;
      filteredAlbums = filteredAlbums.filter(album => ((album.name).toLowerCase()).includes((userInput.toLowerCase())))
      filteredArtists = filteredArtists.filter(artist => ((artist.name).toLowerCase()).includes((userInput.toLowerCase())))
      setArtistArray(filteredArtists)
      setAlbumArray(filteredAlbums)
    }
  }, [userInput])

  return(
    <>
    <form>
      <input
       type="text"
       //  placeholder="Search for songs, artists, and albums!"
       value={userInput}
       onChange={e => setUserInput(e.target.value)}
       ></input>
        {albumArray.length ? 
        <div>
          {albumArray.map(album => <div key={album.id}><Link to={`/albums/${album.id}`}>{album.name}</Link></div>)} 
        </div> 
        : <></>}

      {artistArray.length ? 
      <div>
        {artistArray.map(artist => <div key={artist.id}><Link to={`/artists/${artist.id}`}>{artist.name}</Link></div>)}
      </div> 
      : <></>} 

    </form>

      






















































































      <ul>
      {genres.map(genre => <li key={genre.id}> <Link to={`/genres/${genre.id}`}> {genre.name} </Link></li>)}
      </ul>
    </>
  )
}

export default Search;