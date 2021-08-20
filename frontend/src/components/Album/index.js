import { useParams } from "react-router"
import { Link } from "react-router-dom";
import './Album.css';

const Album = ({ albums }) => {
  const { albumId } = useParams();
  const album = albums.find(album => album.Artist.id === +albumId)
  const songs = album.Songs 
  return(
    <>
      <h1>{album && album.name} {album && album.Artist.name} </h1>
      {songs.map(song => <Link key={song.id} to={`/songs/${song.id}`}>{song.name}</Link>)}
    </>
  )
}

export default Album;