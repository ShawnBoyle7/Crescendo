import { useParams } from "react-router-dom";

const Artist = ({ artists }) => {
  const { artistId } = useParams()
  const artist = artists.find(artist => artist.id === +artistId)

  return(
    <h1>{artist && artist.name}</h1>

  )
}

export default Artist;