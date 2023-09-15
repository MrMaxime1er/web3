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

  export default Total