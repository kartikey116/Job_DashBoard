import React from 'react'
import { Outlet } from 'react-router-dom'
import '../App.css'
import Header from '../components/header'

const applayout = () => {
  return (
    <div>
      <div className='grid-background absolute inset-0 z-[-1]'></div>
      <main className='min-h-screen container mx-auto'>
        <Header />
        <Outlet />
      </main>
      <div className='p-10 text-center bg-gray-800 mt-1'> Made by Kartikey © 2025 </div>
    </div>
  )
}

export default applayout
