import React from 'react'
import logo from '../asset/images/fashion-house.png'
import Navigation from './Navigation'
// Header of the pages
export default function Header() {
  return (
    <header>
      <img src={logo} alt="Fashion House image" className="logo" />
      <Navigation />
    </header>
  )
}
