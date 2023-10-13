import { Context as counterContext } from "../contexts/counterContext";
import { useContext } from "react";

const Button = (props) => {
   const { good, bad, ok, reset , increaseOk, increaseBad, increaseGood } = useContext(counterContext ) 
    if( props.value == "good"){
        return (
            <div>
            <h3>{good}</h3>
            <button onClick={increaseGood}>increase good</button>
            </div>
        )
    }else if( props.value == "bad"){
        return (
            <div>
            <h3>{bad}</h3>
            <button onClick={increaseBad}>increase bad</button>
            </div>
        )
    }else if (props.value == "ok"){
        return (
            <div>
            <h3>{ok}</h3>
            <button onClick={increaseOk}>increase ok</button>
            </div>
        )
    }else {
        return (
            <div>
            <button onClick={reset}>Reset all</button>
            </div>
        )
    }
}

export default Button;