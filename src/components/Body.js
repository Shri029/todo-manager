import React from 'react'
import Sidebar from './Sidebar';
import MainContainer from './MainContainer';

const Body = () => {
  return (
    <div className='grid grid-flow-col'>
      <div className="hidden md:block">
        <Sidebar />
      </div>
        <MainContainer/>
    </div>
  )
}

export default Body;