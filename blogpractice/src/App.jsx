import { useState ,useEffect } from 'react'
import appwriteService from "./appwrite/auth.js"
import { useSelector , useDispatch } from 'react-redux'
import { useNavigate,Outlet } from 'react-router-dom'
import {login,logout} from "./store/authSlice.js"
import { Header,Footer } from './components'
import './App.css'

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    appwriteService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))
  },[])
 return  !loading ? (
  <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
        TODO:  <Outlet />
        </main>
        <Footer />
      </div>
    </div>
 ) : null 
}

export default App;
