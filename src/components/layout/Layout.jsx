import React from 'react'
import Navbar from '../views/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Navbar />
    <main className='container'>
        <Outlet />
    </main>
    </>
  )
}

export default Layout
