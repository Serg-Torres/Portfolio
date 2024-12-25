import ReactDOM from 'react-dom/client'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/App.css'

import App from './App'
import HomePage from './pages/Home.tsx'
import Portfolio from './pages/Portfolio.tsx'
import Resume from './pages/Resume.tsx'
import Contact from './pages/Contact.tsx'
import Projects from './pages/Projects.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1 className='display-2'>Wrong page!</h1>,
    children: [
      {
        index: true,
        element: <HomePage />
      }, {
        path: '/portfolio',
        element: <Portfolio />
      }, {
        path: '/resume',
        element: <Resume />
      }, {
        path: '/contact',
        element: <Contact />
      }, {
        path: '/projects',
        element: <Projects />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)