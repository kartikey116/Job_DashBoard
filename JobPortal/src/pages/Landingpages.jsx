import React from 'react'
import { Link } from 'react-router-dom'

const Landingpages = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white text-center p-4">
      <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-down">Find Your Dream Job</h1>
      <p className="text-lg md:text-2xl mb-8 animate-fade-in-up">The best place to find and post job opportunities.</p>
      <Link to="/jobs">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-transform transform hover:scale-110">
          Get Started
        </button>
      </Link>
    </div>
  )
}

export default Landingpages
