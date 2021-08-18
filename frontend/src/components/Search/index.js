import { useSelector } from "react-redux";
import { Link} from "react-router-dom";

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