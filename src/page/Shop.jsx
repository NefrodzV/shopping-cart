import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import ProductList from '../component/ProductList'
import Product from '../data/model/Product'
import ProductModal from '../component/ProductModal'

// Shop page that will contain the items list
export default function Shop() {
  const data = useLoaderData()
  const [products, setProducts] = useState(null)
  const [product, setProduct] = useState(null)

  const [isActive, setActive] = useState(false)

  useEffect(() => {
    const copy = []
    data.products.forEach((object) => {
      const product = new Product(
        object.id,
        object.title,
        object.price,
        object.discountPercentage,
        object.description,
        object.brand,
        object.category,
        object.images[0],
        object.rating
      )
      copy.push(product)
      setProducts(copy)
    })
  }, [])

  const productListener = (product) => {
    setProduct(product)
    setActive(true)
  }

  const closeModal = () => {
    setActive(false)
  }
  return (
    <section className="product-section">
      <ProductList products={products} productListener={productListener} />
      <ProductModal
        product={product}
        show={isActive}
        closeListener={closeModal}
      />
    </section>
  )
}
