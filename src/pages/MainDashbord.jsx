import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function MainDashbord() {
  return (
    <div>
        <NavLink to="/maindashbord/favorite"><button className='btn btn-warning mr-5'>FaVorite</button></NavLink> 
       <NavLink to="/maindashbord/"> <button className='btn btn-warning'>Card </button></NavLink>
        <Outlet></Outlet>
    </div>
  )
}
