import React from 'react'
import Navbar from './navbar/Navbar'
import { Outlet } from 'react-router'

const Main = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  )
}

export default Main