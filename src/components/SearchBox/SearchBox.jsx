import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Search } from '../../icons'
 

const SearchBox = () => {
  const { theme } = useContext(GlobalContext);
  const inputValue = { search: '' };

  return (
    <div className = {`searchbox searchbox-${theme}`}>
      <Search />
      <input 
        type = "text"
        onChange = {(e) => inputValue.search = e.target.value}
        placeholder = "Search GitHub username…"
      />
      <button onClick = {() => console.log(inputValue.search)}>Search</button>
    </div>
  )
}

export default SearchBox;
