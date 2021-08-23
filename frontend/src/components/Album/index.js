import { useParams } from "react-router"
import { Link } from "react-router-dom";
import './Album.css';

const Album = ({ albums }) => {
  const { albumId } = useParams();
  const album = albums.find(album => album.Artist.id === +albumId)
  const songs = album.Songs 

  return(
    <>
      <div className="album-name">
        <h1>{album && album.name}</h1>
      </div>
      <div className="artist-name">
        <h1>{album && album.Artist.name} </h1>
      </div>
      
      <div className="song-section">
        <div className="song-divs">
          {songs.map(song =>
            <div className="songs-item"key={song.id}>
            <Link to={`/songs/${song.id}`} key={song.id}>
            <img className="songs-image" alt={"song"} src={song.songImgUrl}/>
            <div className="songs-name">{song.name}</div>  
            </Link>
            </div>)}
        </div>
      </div>
    </>
  )
}

export default Album;