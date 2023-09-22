const Button = ({text, delta, handleClick}) => {
    return (
      <button onClick={handleClick} data-delta={delta} >
        {text}
      </button>
    )
  }

  export default Button