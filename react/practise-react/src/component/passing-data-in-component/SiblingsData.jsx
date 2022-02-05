import './common.css'
import {useState} from "react"
const SiblingsData = () => {
    let [data, setData] = useState("box")
    const handleClick = (e) => {
        setData(e.target.name + " box")
    }
    return(
        <div className="siblingContainer">
                <LeftBar handleClick1={handleClick}/>
                <RightBar data = {data}/>
        </div>
    )
}

export default SiblingsData


const LeftBar = ({handleClick1}) => {
    const handleClick = (e) => {
        handleClick1(e)
    }
    return(
        <div className='leftbarContainer'>
                <button className='leftbarButton' onClick={handleClick} name="close">close</button>
                <button className='leftbarButton' onClick={handleClick} name="open">open</button>
                <button className='leftbarButton' onClick={handleClick} name="big">big</button>
                <button className='leftbarButton' onClick={handleClick} name="normal">normal</button>
                <button className='leftbarButton' onClick={handleClick} name="small">small</button>
                <button className='leftbarButton' onClick={handleClick} name="rotate">rotate</button>
                <button className='leftbarButton' onClick={handleClick} name="circle">circle</button>
        </div>
    )
}

const RightBar = ({data}) => {
    return(
        <div className='rightbarContainer'>
                <div className='rightbarBox'>{data}</div>
        </div>
    )
}