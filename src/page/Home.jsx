import { useEffect, useState } from 'react'
import DiscountSection from '../component/DiscountSection'
import { useLoaderData } from 'react-router-dom'
import Product from '../data/model/Product'
import Util from '../Util'

export default function Home() {
  const data = useLoaderData()
  const [productsState, setProducts] = useState([])

  useEffect(() => {
    // This will make it run only when the array is first empty
    if (productsState.length === 0) {
      const copy = [...productsState]
      data.products.forEach((object) => {
        const product = new Product(
          object.id,
          object.title,
          object.price,
          object.discount,
          object.description,
          object.brand,
          object.category,
          object.images[0],
          object.rating
        )
        copy.push(product)
      })
      setProducts(copy)
    }
  }, [])

  return <DiscountSection products={productsState} />
}
