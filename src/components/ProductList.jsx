import React from 'react'
import Product from './Product'

// Represents the item list
export default function ProductList({ products, productListener }) {
  const createProduct = (product) => {
    return (
      <Product
        key={product.getId}
        title={product.getTitle}
        price={product.getPrice}
        description={product.getDescription}
        url={product.getUrl}
        listener={productListener}
      />
    )
  }

  return (
    <div>
      <h2>Products</h2>
      <ul>{products.map((product) => createProduct(product))}</ul>
    </div>
  )
}
