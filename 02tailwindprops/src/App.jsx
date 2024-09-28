import { useState } from 'react'
import Card from './components/Card'

function App() {
  let myObj = {
    name : 'Prashant',
    age : 28
  }

  return (
   <div>
    <h2 className='bg-green-400 text-center font-bold text-white p-4 rounded-xl mb-4'>Tailwind and Props</h2>
    <Card userDetails ='Prashant' btnText = "Click Me"/>
    <br/>
    <Card  userDetails ='Shweta'/>
   </div>  
  )
}

export default App
