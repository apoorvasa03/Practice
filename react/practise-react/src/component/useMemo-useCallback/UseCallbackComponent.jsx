/**useCallback is to memoize a callback itself (referential equality) between renders */
import { useCallback, useEffect, useState } from "react";

const UseCallbackComponent = () => {
    let [number, setNumber] = useState(1)
    let [dark, setDark] = useState(false)

    let getItems = useCallback(() => {
        return [number, number+1, number+2]
    }, [number])

    let theme = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black"
    }
    return(
        <div style={theme}>
            <input type='number' value={number} onChange = {(e) => setNumber(parseInt(e.target.value))}/>
            <button onClick={() => setDark(prevDark => !prevDark)}>Toggle Theme</button>
            <Child getItems= {getItems}/>
        </div>
    )
}


const Child = ({getItems}) => {
    let [items, setItems] = useState([])

    useEffect(() => {
        console.log('im called')
        setItems(getItems())
    }, [getItems])

    return (
        <div>
            {items.map(item => (
                <h2 key={item}> {item }</h2>
            ))}
        </div>
    )
}

export default UseCallbackComponent