import { useParams } from "react-router"

const Album = ({ albums }) => {
  const { albumId } = useParams();
  const album = albums.find(album => album.Artist.id === +albumId)
  console.log(album)
  return(
    <>
      <h1>{album && album.name} {album && album.Artist.name} </h1>
    </>
  )
}

export default Album;