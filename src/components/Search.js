import { useContext } from "react";
import themeContext from "../context/themeContext";
const Search = ({searchText, setSearchText}) => {
  const theme = useContext(themeContext);
  return (
    <section className="search-area">
      <input
        className={`input-${theme}`}
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </section>
  )
}

export default Search