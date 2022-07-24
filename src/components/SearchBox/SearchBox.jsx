import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import useGitHub from '../../hooks/useGitHub';
import { Search, Language } from '../../icons';
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

  return (
    <div className = {`searchbox searchbox-${theme}`}>
      <Language language='sass' />
      <Language language='python' />
      <Language language='react' />
      <Language language='javascript' />
      <Language language='html' />
      <Language language='ruby' />
      <Language language='css' />
      <Language language='swift' />
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
