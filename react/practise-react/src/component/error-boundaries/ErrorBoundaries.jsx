/*When we are not using the error boundary, instead of seeing an error, we see a blank page. 
 Since any error inside the render method leads to unmounting of the component. 
 To display an error that occurs inside the render method, we use error boundaries */

import React from "react"

const Hero = ({name}) => {
    if(name === "Joker"){
        throw new Error('joker is not an hero!!')
    }
    return(
        <div>{name}</div>
    )
}

export class ErrorBoundary extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error){
        return { hasError: true}
    }

    componentDidCatch(error){
        console.log('---------', error)
    }

    render(){
        if(this.state.hasError){
            return <h3>Something Went Wrong</h3>
        }

        return this.props.children
    }
}

export default  Hero

