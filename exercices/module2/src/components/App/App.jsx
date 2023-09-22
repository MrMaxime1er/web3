import { useState } from 'react'
import Button from '../Button/Button'
import Display from '../Display/Display'


const App = () => {
  const [ counter, setCounter ] = useState(JSON.parse(localStorage.getItem("counter")))

  const handleClick = (e) => {
    const monDelta = Number(e.target.dataset.delta)
    changeCount(monDelta);
  }
  const changeCount = (delta) => {
    let c = delta
    setCounter(c);
    localStorage.setItem("counter", JSON.stringify(c))
  };

  return (
    <div>
      <Display counter={counter}/>

      <Button
        handleClick = {handleClick}
        delta = {counter + 1}
        text='plus'
      />
      <Button
         handleClick = {handleClick}
         delta = {0}
         text='zero'
      />     
      <Button
         handleClick = {handleClick}
         delta = {counter - 1}
         text='minus'
      />           
    </div>
  )
}
export default App