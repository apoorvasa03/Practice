
import {useEffect, useRef} from 'react'
const UseRefComponent = () => {
    let inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus()
    })

    return(
        <div>
            <input type="text" ref={inputRef}/>
        </div>
    )
}

export default UseRefComponent