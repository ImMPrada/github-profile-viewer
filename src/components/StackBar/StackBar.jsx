import React, { useContext, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import './styles.scss';

const stack = [
  {
    name: 'HTML',
    amount: .40,
    color: 'red'
  },
  {
    name: 'ruby',
    amount: .30,
    color: 'cyan'
  },
  {
    name: 'javascript',
    amount: .20,
    color: 'green'
  },
  {
    name: 'other',
    amount: .10,
    color: 'yellow'
  },
]

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
        onMouseEnter={() => setHelpText(`${item.name}: ${item.amount}`)}
        onMouseLeave={() => setHelpText(null)}
      />
    )
  })
}

const StackBar = () => {
  const { state, theme } = useContext(GlobalContext)
  const [helpText, setHelpText] = useState(null)
  
  return (
    <>
      <div className={`stack-bar`} >
        {generateStack(stack, setHelpText)}
        <p className={`stack-bar__help-text stack-bar__help-text-${theme}`} >
          {helpText}
        </p>
      </div>
    </>
  )
}

export default StackBar;
