import { useParams } from "react-router-dom";

const Artist = ({ artists }) => {
  const artistIdObject = useParams()
  const artistId = artistIdObject.artistId
  const artist = artists.find(artist => artist.id === +artistId)

  console.log("ARTIST CONSOLE LOG", artist)

  return(
    // <h1>{artist ? artist.name: ''}</h1>
    <h1>{artist && artist.name}</h1>

  )
}

export default Artist;