import React, { Component } from "react";
export default class Classchild extends Component{

render(){
    return(
        <>
        <h1>ClassChild buttons</h1>
        <button onClick={()=>{
            this.props.b(this.props.c)
        }}>class+button</button>

<button onClick={()=>{
            this.props.b(this.props.c-2)
        }}>class-button</button>
        
        </>
    )
}

}