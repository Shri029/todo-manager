import React from 'react'
import { sidebarMenu } from '../utils/constant'



const Sidebar = () => {
  //Early return
  return (
    <div className='col-span-2 h-screen shadow-sm bg-gradient-to-r from-blue-50 py-5 max-w-fit'>
      {sidebarMenu.map((menu, index) => (      
        <div key={index} className={`flex py-4 px-12 justify-start gap-5 cursor-pointer rounded-l-none rounded-r-md 
          ${menu.title === "Dashboard" ? "bg-blue-400" : ""}`}>
        <img className='h-5 my-1' src={menu.icon} alt="plus icon" />
        <h1 className={`${menu.title === "Dashboard" ? "text-white" : ""}`}>{menu.title}</h1>
      </div>))}
    </div>
  )
}

export default Sidebar