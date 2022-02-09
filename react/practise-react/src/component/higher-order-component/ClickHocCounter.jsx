
import higherOrderComponent from './HigherOrderComponent'


const ClickCounter = (props) => {
    return(
        <button onClick = {props.incrementCount}>Clicked {props.count} times</button>
    )
}

export default higherOrderComponent(ClickCounter)