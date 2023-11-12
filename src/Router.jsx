import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import React from 'react'
import Shop from './page/Shop'
import Home from './page/Home'
import Layout from './page/Layout'
import Cart from './page/Cart'

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
