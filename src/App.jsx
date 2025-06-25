import React from 'react'
import { RouterProvider } from 'react-router'
import routes from './routes/routes'
import "./App.css"

const App = () => {
  return (
    
   <RouterProvider router={routes}></RouterProvider>
  )
}

export default App