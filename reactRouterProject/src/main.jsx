import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import {Home,About,Contactus,User,Github} from './components'
import { githubInfoLoader } from './components/Github/Github.jsx'

// create react path 
// const router = createBrowserRouter([
//   {
//     path : "/",
//     element : <Layout/>,
//     children : [
//       {
//         path : "",
//         element : <Home/>
//       },
//       {
//         path : "about",
//         element : <About/>
//       },
//       {
//         path : "contact",
//         element : <Contactus/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element={<Layout/>}>
    <Route path = "" element={<Home/>}/>
    <Route path = "about" element={<About/>}/>
    <Route path ="contact" element={<Contactus/>}/>
    <Route path ="user/:userid" element={<User/>}/>
    <Route 
    loader={githubInfoLoader}
    path ="github" element={<Github/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
