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
    clearResult,
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
        onBlur = {() => clearResult()}
        placeholder = "Search GitHub username…"
      />
      <button onClick = {() => getProfile()}>Search</button>
    </div>
  )
}

export default SearchBox;
