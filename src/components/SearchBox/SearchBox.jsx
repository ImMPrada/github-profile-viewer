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
      <form onSubmit={(e) =>{
        e.preventDefault()
        getProfile()
      }}>
        <input 
          type = "text"
          value = {state.profileToSearch || ''}
          onChange = {(e) => {
            console.log(e.target.value)
            updateSearchValue(e.target.value)}}
          onFocus = {() => reinitState()}
          onBlur = {() => clearResult()}
          placeholder = "Search GitHub username…"
        />
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}

export default SearchBox;
