import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import useGitHub from '../../hooks/useGitHub';
import { Search } from '../../icons';
import './styles.scss';
 

const SearchBox = () => {
  const { 
    theme,
    state,
    reinitState,
    updateSearchValue,
    startSearch,
  } = useContext(GlobalContext);
  const { getProfile } = useGitHub();
  const inputValue = { search: '' };

  return (
    <div className = {`searchbox searchbox-${theme}`}>
      <Search />
      <input 
        type = "text"
        value = {state.profileToSearch}
        onChange = {(e) => updateSearchValue(e.target.value)}
        onFocus = {() => reinitState()}
        placeholder = "Search GitHub username…"
      />
      <button onClick = {() => getProfile(inputValue.search)}>Search</button>
    </div>
  )
}

export default SearchBox;
