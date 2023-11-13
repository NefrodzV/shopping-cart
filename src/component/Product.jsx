import React from 'react'
import Tag from './Tag'
// Should represent the dom element item
export default function Product({ product, listener }) {
  console.log(product)
  return (
    <li className="product-card" onClick={listener}>
      <p className="product-title bold">{product.title}</p>
      <img
        className="product-image"
        src={product.url}
        alt={product.description}
      />
      <p className="product-price">&#x24;{product.price}</p>
      {/* <Tag discount={product.discount} show={hasDiscount}></Tag> */}
    </li>
  )
}
