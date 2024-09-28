import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(0)
  let [msg, setMsg] = useState('');
  const addValue = ()=> {
    if(counter!=20){
      setCounter(counter+1) 
    }else{
      msg = 'its reached maximum attement';
      setMsg(msg);
    }   
  }

  const removeValue = () =>{
    if(counter!=0) {
      setCounter(counter-1)
    }else{
      msg = 'Counter value not print negative value';
      setMsg(msg);
    }
  }

  return (
     <div>
     <h2>Counter Value :  {counter}</h2>
     <span style={{color:"red"}}>{msg}</span><br/>
     <button onClick={addValue}>Add Value</button>
     <button onClick={removeValue}>Remove Value</button>
     </div>
  )
}

export default App
