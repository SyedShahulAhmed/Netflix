import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx'
import {Route, RouterProvider,createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Login from './pages/Login'
import HomePage from './pages/HomePage'
import Player from './pages/Player.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='homepage' element={<HomePage />} />
      <Route path='player/:id' element={<Player/>} />
    </>
  )
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
