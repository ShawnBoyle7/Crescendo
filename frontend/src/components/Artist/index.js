import { useParams, Route } from "react-router-dom";

const Artist = () => {
  const artistIdObject = useParams()
  const artistId = artistIdObject.artistId
  return(
    <h1>{artistId}</h1>
  )
}

export default Artist;