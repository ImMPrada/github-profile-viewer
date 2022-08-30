import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Language } from '../../icons';
import { format } from 'date-fns'
import { StackBar } from '../'
import { languagesBuilder } from '../../js/languagesBuilder';
import './styles.scss';

const renderLanguages = (languages) => (
  languages.map(language => {
    const { name, amount, color } = language
    return <Language key={name} name={name} />
  })
)

const Languages = ({
  languages,
}) => {
  const { theme } = useContext(GlobalContext)
  const languagesStack = languagesBuilder(languages)

  console.log(languagesStack)
  return (
    <div className={`languages languages-${theme}`}>
      {renderLanguages(languagesStack)}
      <StackBar data={languagesStack} />
    </div>
  )
}

export default Languages;
