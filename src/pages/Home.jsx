import { useState } from 'react'
import Rating from '../components/Rating'
import Tag from '../components/Tag'

export default function Home() {
  const [rating, setRating] = useState(4.5)
  return (
    <>
      Home
      <Rating rating={rating} />
      <Tag discount={'5%'} show={false} />
    </>
  )
}
