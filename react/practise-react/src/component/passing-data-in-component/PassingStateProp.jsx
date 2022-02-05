import {useState} from 'react'
import './common.css'
const Parent = () => {
    let [salary, setSalary] = useState()
    const handleChange = (e) => {
        setSalary(e.target.value)
    }
    return(
        <div className='container'>
            <div className="wrapperContainer">
                <div className="parentContainer">
                    <input className='input' type="text" value={salary} onChange={handleChange} placeholder='parent salary'/>
                </div>
                <Child salary={salary} onChange={handleChange}/>
            </div>
        </div>
    )
}

export default Parent



const Child = ({salary, onChange}) => {
    const handleChange = (e) => {
        onChange(e)
    }
    return (
        <div className='childContainer'>
            <input className='input' type="text" value={salary} onChange= {handleChange} placeholder="child salary"/>
        </div>
    )
}