import CoundownTimer from './CoundownTimer'
import Tag from './Tag'
import { useEffect, useState } from 'react'

export default function DiscountSection({ products }) {
  const createDiscountProduct = (product) => {
    return (
      <li key={product.getId} className="product">
        <img
          src={product.getUrl}
          alt={product.getDescription}
          className="default-img big-border"
        />
        <Tag discount={product.getDiscount} show={true} />
        <p className="center-text bold">{product.getTitle}</p>
      </li>
    )
  }

  return (
    <section className="discount-section center-inline width-default white-text">
      <h2 className="center-text big-font">
        All products home decoration are on discount for limited time!
      </h2>
      <CoundownTimer />
      <ul className="discount-list flex">
        {products?.map((product) => createDiscountProduct(product))}
      </ul>
    </section>
  )
}
