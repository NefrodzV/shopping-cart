import React from 'react'
import cartIcon from '../asset/icons/cart.svg'
import homeIcon from '../asset/icons/house.svg'
import shoppingIcon from '../asset/icons/shopping.svg'
import { NavLink } from 'react-router-dom'
export default function Navigation({ cartCount }) {
  return (
    <nav aria-label="main">
      <ul className="nav-list">
        <li>
          <NavLink to="/" aria-current="page" className="nav-link">
            <img className="nav-icon" src={homeIcon} alt="Go to home page" />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="shop" className="nav-link">
            <img
              className="nav-icon"
              src={shoppingIcon}
              alt="Go to shop page"
            />
            Shop
          </NavLink>
        </li>
        <li>
          {/* Will be visually hidden unless you are in the shopping page  probably*/}
          <NavLink to="cart" className="nav-link">
            <img className="nav-icon" src={cartIcon} alt="Go to cart page" />
            Cart
            <span aria-label="Current items in cart">{cartCount}</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
