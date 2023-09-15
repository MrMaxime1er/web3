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
    </div>
  )
}


const Content = (props) => {
  const part1 =  [props.part[0], props.exercises[0]]
  const part2 =  [props.part[1], props.exercises[1]]
  const part3 =  [props.part[2], props.exercises[2]]
  return (
    <>
    <Part part = {part1}/>
    <Part part = {part2}/>
    <Part part = {part3}/>
    </>
  )
}


const Header = (props) => {
  return (
    <>
    <p>
      {props.course}
    </p>
    </>
  )
}

const Total = (props) =>{
  const total = props.exercises[0] + props.exercises[1] + props.exercises[2]
  return (
    <>
    <p>
      {total}
    </p>
    </>
  )
}

const Part = (props) =>{
  return (
    <>
    <p>
      {props.part[0]}  {props.part[1]}
    </p>
    </>
  )
}


export default App