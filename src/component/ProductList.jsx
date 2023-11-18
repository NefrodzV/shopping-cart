import React from 'react'
import Product from './Product'

// Represents the item list
export default function ProductList({ products, productListener }) {
  const createProduct = (product) => {
    return (
      <Product
        key={product.id}
        product={product}
        listener={productListener.bind(this, product)}
      />
    )
  }

  return (
    <ul className="product-list">
      {products?.map((product) => createProduct(product))}
    </ul>
  )
}
