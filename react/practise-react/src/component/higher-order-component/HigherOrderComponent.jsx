/** HoC is the function that take component as an argument and return new component */

import React, {useState} from "react"
const higherOrderComponent1 = OriginalComponent => ({...props}) => {
    let [count, setCount] = useState(0)

    const incrementCount = () => {
        setCount(prevCount=> prevCount + 1)
    }
    return(
        <OriginalComponent count={count} incrementCount={incrementCount}/>
    )
}

const higherOrderComponent = OriginalComponent => {

    const Counter = (props) => {
        let [count, setCount] = useState(0)
        const incrementCount = () => {
            setCount(prevCount=> prevCount + 1)
        }
        return(
            <OriginalComponent count={count} incrementCount={incrementCount}/>
        )
    }
    return Counter
    
}

const higherOrderComponent2 = WrappedComponent => {
    class HOC extends React.Component {
        constructor(props){
            super(props)
            this.state = {
                count: 1
            }
            this.incrementCount = this.incrementCount.bind(this)
        }
        incrementCount() {
            this.setState((prevState) => {
                return { count : (prevState.count + 1)}
            })
        }
      render() {
        return <WrappedComponent count={this.state.count} incrementCount={this.incrementCount}/>
      }
    }
    return HOC
  }

export default higherOrderComponent