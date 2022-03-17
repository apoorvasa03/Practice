/**useReducer: useReducer is react hook function, which is used when dealing with complex state.
 * it take function as first paramter and initial state as 2nd paramter
 * an it gives changed state and dispatch method as an output
*/
import {useReducer} from 'react'
const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
}
function reducer(state, action){
    switch(action.type){
        case ACTIONS.INCREMENT: 
            return {count: state.count + 1}
        case ACTIONS.DECREMENT: 
            return {count: state.count - 1}
        default:
            return state
    }

}

const CounterReducer = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0})

    function decrement(){
        dispatch({type: ACTIONS.DECREMENT})
    }

    function increment(){
        dispatch({type: ACTIONS.INCREMENT })
    }
    return (
        <div>
            <button onClick={increment}>+</button>
            <div>{state.count}</div>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default CounterReducer