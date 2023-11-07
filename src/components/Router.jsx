import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import React from 'react'
import Shop from './Shop'
import App from '../App'

// Router class to handle the links in the app
export default class Router extends React.Component {
  constructor() {
    super()
    this.router = createBrowserRouter([
      {
        path: '/',
        element: <App />
      },
      {
        path: 'shop',
        element: <Shop />
      }
    ])
  }

  render() {
    return <RouterProvider router={this.router} />
  }
}
