/** useMemo is to memoize a calculation result between a function's calls and between renders
 * useMemo focuses on avoiding heavy calculation.
 * This optimization will help for avoiding expensive calculations on each render
 * useMemo should be used when there is a high amount of processing 
 * useMemo had some performance overhead and memory overhead, so use UseMemo only when performance increses in our case
*/

import {useMemo, useState} from 'react'


const UseMemoComponent = () => {
    let [number, setNumber] = useState(0)
    let [dark, setDark] = useState(false)

    const doubleNumber = useMemo(() =>{
        return slowDouble(number)
    }, [number])

    

    const themeStyle = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? 'white' : 'black'
    }
    
    return(
        <div>
            <h2>{number}</h2>
            <input type="text" value={number} onChange={(e) => setNumber(e.target.value)}/>
            <button onClick={() => setDark(prevDark => !prevDark)}>change theme</button>
            <div style= {themeStyle}>{doubleNumber}</div>
        </div>
    )
}

export default UseMemoComponent

function slowDouble(num) {
    console.log('immdouble')
    for(let i =0; i< 100000000; i++){}
    return num * 2
}
