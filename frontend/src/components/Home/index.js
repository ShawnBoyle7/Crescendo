import { useSelector } from 'react-redux'; 

const Home = () => {
  const songsSlice = useSelector(state => state.songs)
  const songsByPopularity = Object.values(songsSlice).sort((a, b) => {
    return b.Users.length - a.Users.length
  });

  return(
    <>
      
    </>
  )
}

export default Home;