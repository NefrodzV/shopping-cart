import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import ProductList from '../component/ProductList'
import Product from '../data/model/Product'

// Shop page that will contain the items list
export default function Shop() {
  const data = useLoaderData()
  const [products, setProducts] = useState([])

  useEffect(() => {
    if (products.length === 0) {
      const copy = []
      data.products.forEach((object) => {
        const product = new Product(
          object.id,
          object.title,
          object.price,
          object.discountPercentage,
          object.brand,
          object.category,
          object.category,
          object.images[0],
          object.rating
        )
        copy.push(product)
      })

      setProducts(copy)
    }
  }, [])

  const productListener = (id) => {
    console.log(id)
  }
  return (
    <section className="product-section">
      <ProductList products={products} productListener={productListener} />
    </section>
  )
}
