import React from 'react'
import CartIcon from '../assets/icons/cart.svg'

export default class Header extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <header>
        <div>Logo Img</div>
        <div>
          <button type="button">
            <img src={CartIcon} alt="cart-icon" />
          </button>
          <div>About</div>
        </div>
      </header>
    )
  }
}
