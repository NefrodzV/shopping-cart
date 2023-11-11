import React from 'react'
import Tag from './Tag'
// Should represent the dom element item
export default function Product({
  title,
  price,
  description,
  discount,
  hasDiscount,
  url,
  listener
}) {
  return (
    <li className="product-card" onClick={listener}>
      <p className="product-title">{title}</p>
      <img className="product-image" src={url} alt={description} />
      <p className="product-description">{price}</p>
      <Tag discount={discount} show={hasDiscount}></Tag>
    </li>
  )
}
