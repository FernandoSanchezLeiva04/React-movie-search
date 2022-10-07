
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchBox = ({ searchTitle, searchMovies, setSearchTitle }) => {
  return (
    <div className="search">
      <input
        placeholder="Please search a movie, e.g. Inception"
        value={searchTitle}
        onChange={(e) => {
          searchMovies(e.target.value);
          setSearchTitle(e.target.value);
        }}
      ></input>
      <FontAwesomeIcon 
        icon={faMagnifyingGlass}
        alt="Search a movie"
        onClick={() => searchMovies(searchTitle)}
        className="search-icon"
      />
    </div>
  )
}

export default SearchBox;