import AudioPlayer from 'react-h5-audio-player';
import { useParams } from "react-router-dom";
import './Song.css'

const Song = ({ songs }) => {
  const { songId } = useParams()
  const song = songs.find(song => song.id === +songId)
  return(
    <>
      <h1>{song && song.name} {song && song.Genre.name} {song && song.Album.name} </h1>
      <AudioPlayer
      src="https://cf-media.sndcdn.com/YGm1t3FIDVZ2.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vWUdtMXQzRklEVloyLjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjI5Mzk0MjY5fX19XX0_&Signature=TcuDtP2~1tE2Q27Kmnf5kPUJF4c~whXmESnosblLhwp23Srbql1~s~OCbXFj1ajApaohAAw9lB~lNDHwKkVet3Jpl1rN3NSGfCcdfOZ7H08LpGrbm-Tk3bdl4jY4S8TEpR9w~lfjjLOulY22KwQCigxWDZDAihhlh6GvkO3IBohYhgHPFe5SkgRoWAtk7OUM22gc2uguHf5dYE74Wy7Wu1xiMkHhAUoBdylPZ36F--C753yhDpmXNmJGP0rfI~rehXcA-GfXDb2LoruaDJxfQIO9CtCePirHb4lXOW6VPUmi37Pm7gGCTtASRHloVmiXmrINeTNC8ZZjdDp6n1~E6Q__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ"
      onPlay={e => console.log("onPlay")}
      showSkipControls={true}
  />
    </>
  )
}

export default Song;