import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Language } from '../../icons';
import { format } from 'date-fns'
import './styles.scss';

const renderLanguages = (languages) => (
  Object.keys(languages).map(language => {
    return <Language key={language} name={language} />
  })
)

const Languages = ({
  languages,
}) => {
  const { state, theme } = useContext(GlobalContext)
  console.log(languages)
  return (
    <div className={`languages languages-${theme}`}>
      {renderLanguages(languages)}
    </div>
  )
}

export default Languages;
