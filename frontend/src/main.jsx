import React from 'react'
import ReactDOM from 'react-dom/client'
import {Route , RouterProvider , createBrowserRouter , createRoutesFromElements} from 'react-router-dom'
import './index.css'
import Layout from './Layout.jsx'
import Home from './components/home.jsx'
import Program from './components/programs.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/programs' element={<Program/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
