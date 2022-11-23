import React, { useState } from "react";
const Funcomp=props=>{
const [value,setValue]=useState(1);

    return(<>
       <h1>funcomponent</h1> 
       <button onClick={()=>{
        setValue(value-1)
       }}>-</button>
       {value}
       <button onClick={()=>{
        setValue(value+1)
       }
       }> +</button>
       {props.a}
       </>
    )
}
export default Funcomp;