import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import useGitHub from '../../hooks/useGitHub';
import { Search } from '../../icons';
import './styles.scss';
 

const SearchBox = () => {
  const { theme } = useContext(GlobalContext);
  const { getProfile } = useGitHub();
  const inputValue = { search: '' };

  return (
    <div className = {`searchbox searchbox-${theme}`}>
      <Search />
      <input 
        type = "text"
        onChange = {(e) => inputValue.search = e.target.value}
        placeholder = "Search GitHub username…"
      />
      <button onClick = {() => getProfile(inputValue.search)}>Search</button>
    </div>
  )
}

export default SearchBox;
