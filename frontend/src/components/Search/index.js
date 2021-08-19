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

      // const filteredArtists = artists.filter(artist => ((artist.name).toLowerCase()).includes((userInput.toLowerCase())))
      // const filteredAlbums = albums.filter(album => ((album.name).toLowerCase()).includes((userInput.toLowerCase())))
      // const filteredSongs = songs.filter(song => song.name.toLowerCase().includes(userInput.toLowerCase()))
      // setArtistArray(filteredArtists)
      // setAlbumArray(filteredAlbums)
      // setSongArray(filteredSongs)
      
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

    

  }, [userInput])

  return(
    <>
    <form>
      <input
       type="text"
       placeholder="Search for songs, artists, and albums!"
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

      {songArray.length ? 
      <div>
        {songArray.map(song => <div key={song.id}><Link to={`/songs/${song.id}`}>{song.name}</Link></div>)}
      </div>  
      : <></>}
    </form>

      <div>        
        {genres.map(genre => <div key={genre.id}><Link to={`/genres/${genre.id}`}>{genre.name}</Link></div>)}
      </div>
    </>
  )
}

export default Search;