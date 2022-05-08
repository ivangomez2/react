import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../../Nav-Footer/NavBar/NavBar'
const Layout = () => {
  return (
   <>
   <NavBar/>
   <Outlet/>
   </>
  )
}

export default Layout