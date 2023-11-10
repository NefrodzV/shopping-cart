import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import React from 'react'
import Shop from './pages/Shop'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Cart from './pages/Cart'

// Router class to handle the links in the app
export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'shop',
          element: <Shop />
        },
        {
          path: 'cart',
          element: <Cart />
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}
