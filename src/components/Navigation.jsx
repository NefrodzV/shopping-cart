import React from 'react'
import cartIcon from '../assets/icons/cart.svg'
import homeIcon from '../assets/icons/house.svg'
import shoppingIcon from '../assets/icons/shopping.svg'
import { Link } from 'react-router-dom'
export default function Navigation() {
  return (
    <nav aria-label="main">
      <ul>
        <li>
          <Link to="/" aria-current="page">
            <img src={homeIcon} alt="Go to home page" />
            Home
          </Link>
        </li>
        <li>
          <Link to="shop">
            <img src={shoppingIcon} alt="Go to shop page" />
            Shop
          </Link>
        </li>
        <li>
          {/* Will be visually hidden unless you are in the shopping page  probably*/}
          <Link to="cart">
            <img src={cartIcon} alt="Go to cart page" />
            My cart
            <span aria-label="Current items in cart"></span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
