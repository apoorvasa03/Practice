
import React from 'react'
import higherOrderComponent from './HigherOrderComponent'




const HoverCounter = (props) => {
    return(
        <h2 onMouseOver = {props.incrementCount}>Clicked {props.count} times</h2>
    )
}
export default higherOrderComponent(HoverCounter)