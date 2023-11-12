import { useState } from 'react'
import Rating from '../component/Rating'
import Tag from '../component/Tag'
import CountdownTimer from '../component/CoundownTimer'
import ProductoModal from '../component/ProductModal'

export default function Home() {
  const [rating, setRating] = useState(4.5)
  return (
    <>
      Home
      <Rating rating={rating} />
      <Tag discount={'5'} show={false} />
      <CountdownTimer />
    </>
  )
}
