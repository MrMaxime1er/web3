import Part from "../part/Part"


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

  export default Content
  