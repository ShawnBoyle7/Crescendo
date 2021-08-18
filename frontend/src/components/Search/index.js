import { useSelector } from "react-redux";
import { Link} from "react-router-dom";

// import Genre from "../Genre";
// <Route path="/genres/:genreId">
//   <Genre genres={genres}/>
// </Route> 


const Search = () => {
  const genresSlice = useSelector(state => state.genres);
  const genres = Object.values(genresSlice);

  return(
    <>
      <ul>
      {genres.map(genre => <li key={genre.id}> <Link to={`/genres/${genre.id}`}> {genre.name} </Link></li>)}
      </ul>
    </>
  )
}

export default Search;