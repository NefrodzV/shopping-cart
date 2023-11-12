import React from 'react'
import cartIcon from '../asset/icons/cart.svg'
import homeIcon from '../asset/icons/house.svg'
import shoppingIcon from '../asset/icons/shopping.svg'
import { NavLink } from 'react-router-dom'
export default function Navigation({ cartCount }) {
  return (
    <nav aria-label="main">
      <ul>
        <li>
          <NavLink to="/" aria-current="page">
            <img src={homeIcon} alt="Go to home page" />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="shop">
            <img src={shoppingIcon} alt="Go to shop page" />
            Shop
          </NavLink>
        </li>
        <li>
          {/* Will be visually hidden unless you are in the shopping page  probably*/}
          <NavLink to="cart">
            <img src={cartIcon} alt="Go to cart page" />
            My cart
            <span aria-label="Current items in cart">{cartCount}</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
