import { useCallback, useEffect, useState , useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length,setLength] = useState(8);
  const [numberallowed, setNumberAllowed] = useState(false);
  const [charallowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState(null);

  //useref
  //default value is null
  const passwordRef = useRef(null);

  // genarate password function 
  const genaratePassword = useCallback(() =>{
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if(numberallowed) str += '0123456789'
    if(charallowed) str += '!@#$%^&*(){}`';

    // by using random number
    for (let i = 0; i < length; i++) {
     let char = Math.floor(Math.random()* str.length)
      pass += str.charAt(char)
    }
    setPassword(pass);
  },[length,numberallowed,charallowed,setPassword]);

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,99)
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(()=>{
    genaratePassword()
  },[length,numberallowed,charallowed])
  return (
    
      <div className="w-full max-w max-auto shadow-md justify-center bg-gray-700 rounded-lg px-4 py-4 my-8 text-orange-500 ">
      <h2 className="text-lg text-white py-3">Password Genarator</h2>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
        type="text"
        placeholder='password'
        value={password}
        className="outline-none w-full py-1 px-3"
        readOnly
        ref={passwordRef}
        />
        <button onClick={copyPasswordToClipboard} className='bg-blue-700 text-white w-40'>Copy</button>
        </div>
        <div className="flex text-lg gap-x-2"> 
          <div className='flex items-center gap-x-1'>
          <input
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label className="w-full">Length : {length}</label>
          </div>  
          <div className='flex items-center gap-x-1'>
          <input
          type="checkbox"
          defaultChecked={numberallowed}
          onChange={()=>{setNumberAllowed((prev)=>!prev)}}
          />
          <label>Number</label>
          </div> 

          <div className='flex items-center gap-x-1'>
          <input
          type="checkbox"
          defaultChecked={charallowed}
          onChange={()=>{setCharAllowed((prev)=>!prev)}}
          />
          <label>Charcter</label>
          </div> 

        </div>

        
        
      </div>
  
  )
}

export default App
