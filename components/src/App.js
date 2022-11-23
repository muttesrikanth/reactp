import './App.css'
import React,{Component} from 'react';
import Funcomp from './Funcomp'
import Classchild from './Classchild';

export default class App extends Component{
  state={name:0}

   
   
  render(){
    const Sumfunction=value=>{
     this.setState({name:value+1})
      }
  
    return(
      <div>
        {this.state.name}
      <h1>Srikanh</h1>
      <Funcomp a="function component buttons"/>
      
      <Classchild b={Sumfunction} c={this.state.name} />
     
      </div>
    )
    }
}

