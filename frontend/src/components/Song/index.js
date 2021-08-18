import { useParams } from "react-router-dom";

const Song = ({ songs }) => {
  const { songId } = useParams()
  const song = songs.find(song => song.id === +songId)
  return(
    <>
      <h1>{song && song.name} {song && song.Genre.name} {song && song.Album.name} </h1>
    </>
  )
}

export default Song;