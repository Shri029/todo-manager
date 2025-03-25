import React from 'react';
import menu from '../assets/menu.png';
import logo from '../assets/logo.png'
import user from '../assets/user.png';
import search from '../assets/search.png';

export const Head = () => {
  return (
    <div className='grid grid-flow-col p-4 shadow-sm bg-gradient-to-b from-blue-100 z-10'>
        <div className='flex mx-2 justify-start gap-3'>
            <img 
                className="h-8" 
                alt="menu" 
                src={menu}/>
            <a href="/">
            <img 
                className="h-8" 
                alt="todo-logo" 
                src={logo}/>
            </a>  
        </div>
        <h1 className='flex justify-center text-center text-blue-500 font-medium text-3xl'>Todo</h1> 
        <div className='flex justify-end gap-4 mr-4'>
        <div className="flex w-1/2 p-2 border border-solid border-b-2 rounded-full">    
            <img className="h-5 mx-2" alt="search" src={search}/>       
            <input className="text-sm focus:outline-none bg-transparent " type="text" placeholder='Search...'/> 
        </div>
            <img 
                className="h-9" 
                alt="user-icon" 
                src={user}/>
        </div>
    </div>
  )
}
