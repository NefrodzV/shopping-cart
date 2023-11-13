import React from 'react'
import Product from './Product'

// Represents the item list
export default function ProductList({ products, productListener }) {
  console.log(products)
  const createProduct = (product) => {
    return (
      <Product key={product.id} product={product} listener={productListener} />
    )
  }

  return (
      <ul className="product-list">
        {products.map((product) => createProduct(product))}
      </ul>
  )
}
