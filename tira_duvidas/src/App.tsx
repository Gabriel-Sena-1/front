import { RouterProvider } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { unauthenticatedRouter } from './routes/unauthenticated-routes';
import './App.css'

function App() {
  return <RouterProvider router={unauthenticatedRouter} />
}

export default App
