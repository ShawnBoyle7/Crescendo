import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Search.css';

const Search = () => {
  const genresSlice = useSelector(state => state.genres);
  const genres = Object.values(genresSlice);

  const artistsSlice = useSelector(state => state.artists);
  const artists = Object.values(artistsSlice);
  
  const albumsSlice = useSelector(state => state.albums);
  const albums = Object.values(albumsSlice);

  const songsSlice = useSelector(state => state.songs);
  const songs = Object.values(songsSlice);

  const [userInput, setUserInput] = useState("");
  const [albumArray, setAlbumArray] = useState([]);
  const [artistArray, setArtistArray] = useState([]);
  const [songArray, setSongArray] = useState([]);

  useEffect(() => {

      const filteredArtists = artists.filter(artist => ((artist.name).toLowerCase()).includes((userInput.toLowerCase())))
      const filteredAlbums = albums.filter(album => ((album.name).toLowerCase()).includes((userInput.toLowerCase())))
      const filteredSongs = songs.filter(song => song.name.toLowerCase().includes(userInput.toLowerCase()))
      setArtistArray(filteredArtists)
      setAlbumArray(filteredAlbums)
      setSongArray(filteredSongs)

      if (!userInput) {
        setArtistArray([])
        setAlbumArray([])
        setSongArray([])
      }
  // eslint-disable-next-line
  }, [userInput])

  return(
    <>
    <form>
      <input
      // <i class="fas fa-search"></i>
       className="search-bar"
       type="text"
       placeholder="Search for songs, artists, and albums!"
       value={userInput}
       onChange={e => setUserInput(e.target.value)}
       ></input>

    <div className="search-container">
    
      {artistArray.length ? 
        <div className="artists-section">
          <div className="artists-divs">
            {artistArray.map(artist =>
              <div className="artists-item" key={artist.id}>
              <Link to={`/artists/${artist.id}`}>
              <img className="artists-image" alt={"artist"} src={artist.artistImgUrl}/>
              <div className="artists-name">{artist.name}</div>  
              </Link>
              </div>)}
          </div> 
        </div>
        : <></>}

      {albumArray.length ? 
        <div className="albums-section">
          <div className="albums-divs">
            {albumArray.map(album =>
              <div className="albums-item" key={album.id}>
              <Link to={`/albums/${album.id}`}>
              <img className="albums-image" alt={"album"} src={album.albumImgUrl}/>
              <div className="albums-name">{album.name}</div>  
              </Link>
              </div>)}
          </div>
        </div> 
        : <></>}

      {songArray.length ? 
        <div className="songs-section">
          <div className="songs-divs">
           {songArray.map(song =>
            <div className="songs-item"key={song.id}>
            <Link to={`/songs/${song.id}`}>
            <img className="songs-image" alt={"song"} src={song.songImgUrl}/>
            <div className="songs-name">{song.name}</div>  
            </Link>
            </div>)}
          </div>
        </div>  
        : <></>}
    </div>

      {!albumArray.length && !artistArray.length && !songArray.length ? 
        <div className="search-genres-section">
          <div className="genres-divs">
          {!userInput && genres.map(genre =>
            <div className="genres-item"key={genre.id}>
            <Link to={`/genres/${genre.id}`}>
            <div className="genres-name">{genre.name}</div>  
            </Link>
            </div>)}
          </div>
        </div>
        : <></>}

    </form>
          
      {userInput && !albumArray.length && !artistArray.length && !songArray.length ?
      <h1>No results found for {userInput}</h1>
      : <></>}
    </>
  )
}

export default Search;