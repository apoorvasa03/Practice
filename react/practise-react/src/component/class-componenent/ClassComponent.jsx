import React from "react"

class ClassComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {count: 0}
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState((prevState) => {
            return {count: ++prevState.count}
        })
    }

    render(){
        return(
            <div>
                <h4>Counter: {this.state.count}</h4>
                <button onClick={this.handleClick}>Counter</button>
            </div>
        )
    }

}

export default ClassComponent




