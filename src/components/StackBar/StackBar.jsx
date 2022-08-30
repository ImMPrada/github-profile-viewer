import React, { useContext, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import './styles.scss';

const generateStack = (stack, setHelpText) => {

  return stack.map(item => {
    return (
      <div 
        key={item.name} 
        className={`stack-bar__item stack-bar__item${0}}`} 
        style={
          {
            width:`${item.amount*100}%`,
            backgroundColor:item.color
          }
        }
        onMouseEnter={() => setHelpText(`${item.name}: ${(item.amount*100).toFixed(2)}%`)}
        onMouseLeave={() => setHelpText(null)}
      />
    )
  })
}


const StackBar = ({
  data
}) => {
  const { theme } = useContext(GlobalContext)
  const [helpText, setHelpText] = useState(null)
  
  return (
    <>
      <div className={`stack-bar`} >
        {generateStack(data, setHelpText)}
        <p className={`stack-bar__help-text stack-bar__help-text-${theme}`} >
          {helpText}
        </p>
      </div>
    </>
  )
}

export default StackBar;
