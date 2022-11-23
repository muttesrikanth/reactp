import React,{memo} from 'react'
const App=()=>{
  let output=[];
const options={
  method:"GET",hedders:{'content-type':'Application/json'}
}

  const fetchHandeller=async()=>{
 const response = await fetch("https://swapi.dev/api/vehicles",options)
 const result=await response.json();
 let arr=await result.results

 for( let data in arr){

//  output.push(arr[data].name);
 let obj={
  name:arr[data].name,
  model:arr[data].model,
  crew:arr[data].crew,
  cargo:arr[data].cargo_capacity

 }

output.push(obj)
 }
  }
return(
  <div>
    {output}
  <button onClick={fetchHandeller}>button</button>
  <button onClick={()=>{
    console.log(output)
  }}>button</button>
  {output.map((o)=>{ console.log(o)

  })}
  </div>
)
}
export default memo(App);