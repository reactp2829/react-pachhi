import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let [colorVal, setColor] = useState("olive");
  

  return (
      <div className="w-full h-screen duration-200" style={{backgroundColor : colorVal}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center bg-white gap-3 shadow-lg px-3 py-2 rounded-3xl"> 
         <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
         style={{backgroundColor : "red"}} onClick={()=>setColor("red")}>Red</button>
         <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
         style={{backgroundColor : "Yellow"}} onClick={()=>setColor("yellow")}>Yellow</button>
         <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
         style={{backgroundColor : "green"}} onClick={()=>setColor("green")}>Green</button>
         <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
         style={{backgroundColor : "blue"}} onClick={()=>setColor("blue")}>Blue</button>
         <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
         style={{backgroundColor : "black"}} onClick={()=>setColor("black")}>Black</button>
         <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
         style={{backgroundColor : "orange"}} onClick={()=>setColor("orange")}>Orange</button>
         <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
         style={{backgroundColor : "grey"}} onClick={()=>setColor("grey")}>Grey</button>
         <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
         style={{backgroundColor : "pink"}} onClick={()=>setColor("pink")}>Pink</button>
          </div>
        </div>
      </div>
  )
}

export default App
