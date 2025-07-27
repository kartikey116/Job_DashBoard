import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Applayout from './layouts/applayout'
import Landingpages from './pages/Landingpages'
import OnBoarding from './pages/OnBoarding'
import Joblisting from './pages/job-listing'
import JobPage from './pages/job'
import PostJobs from './pages/PostJobs'
import SavedJobs from './pages/SavedJobs'
import MyJobs from './pages/myJobs'
import { ThemeProvider } from './components/theme-provider'
import './App.css'


const router = createBrowserRouter([
  {
    element: <Applayout />,
    children:[
      {
        path: '/',
        element: <Landingpages />,
      },
      {
        path: '/onboarding',
        element: <OnBoarding />,
      },
      {
        path: '/jobs',
        element: <Joblisting />,
      },
      {
        path: '/job/:id',
        element: <JobPage />,
      },
      {
        path: '/post-job',
        element: <PostJobs />,
      },
      {
        path: '/saved-jobs',
        element: <SavedJobs />,
      },
      {
        path: '/my-jobs',
        element: <MyJobs/>,
      },
    ],
  },
]);
function App() {
 
  return (
     <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router}/>
    </ThemeProvider>
    
  )
}

export default App
