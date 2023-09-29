import { useState, useEffect } from 'react'

const Display = props => <div>{props.value}</div>


const Loading = (props) => (
    <p>{props.text}</p>
)

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)



const App = () => {
  const [value, setValue] = useState(10)
  const [etat, changerEtat] = useState(true)    
  const setToValue = newValue => {
    console.log('value now', newValue)
    setValue(newValue)
  }


  const handleState = () => {
    if(etat){
        setTimeout(() => changerEtat(false),3000)
    }
  }
  
  handleState();

  if(etat){
    
    return (
        <div>
            <Loading text = "Chargement, veuillez patienter"></Loading>
        </div>
        
    )
  }else{
    return (
        <div>
          <Display value={value} />
          <Button handleClick={() => setToValue(1000)} text="thousand" />
          <Button handleClick={() => setToValue(0)} text="reset" />
          <Button handleClick={() => setToValue(value + 1)} text="increment" />
        </div>
      )
  }
  
}
  export default App;