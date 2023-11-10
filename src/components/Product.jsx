import React from 'react'
// Should represent the dom element item
export default function Product({ title, price, description, url, listener }) {
  return (
    <li className="product-card" onClick={listener}>
      <p className="product-title">{title}</p>
      <img className="product-image" src={url} alt={description} />
      <p className="product-description">{price}</p>
    </li>
  )
}
