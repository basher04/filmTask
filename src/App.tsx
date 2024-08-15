import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home'
import LayOut from './Components/LayOut/LayOut'
import Details from './Components/Details'

export default function App() {
  let router = createBrowserRouter([
    {path:"/",element: <LayOut/> ,children:[
      {index: true,element: <Home/>},
      {path:"home",element: <Home/>},
      {path:"details/:id",element: <Details/>},
    ]}
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
