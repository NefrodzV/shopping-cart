import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import React from 'react'
import Shop from './page/Shop'
import Home from './page/Home'
import Layout from './page/Layout'
import Cart from './page/Cart'
import service from './data/service/Service'

// Router class to handle the links in the app
export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: async () => {
            // Getting the random category
            const response = service.getProductsFromCategory('home-decoration')
            return response
          }
        },
        {
          path: 'shop',
          element: <Shop />,
          loader: async () => {
            const response = service.getAllProducts()

            return response
          }
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
