import Header from "./components/header/Header"
import Content from "./components/content/Content"
import Total from "./components/total/Total"

import './App.css'

import image from './img/logo_he_vinci.png'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const parts = [part1,part2,part3];
  const exercises = [exercises1,exercises2,exercises3];

    return (
    <div>
      <Header course={course} />
      <Content part = {parts} exercises = {exercises}/>
      <Total exercises = {exercises}/>
      <img src={image}></img>
    </div>
  )
}


export default App