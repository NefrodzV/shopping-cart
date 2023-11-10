import { useRef, useState, useEffect, useLayoutEffect } from 'react'
import '../index.css'

export default function Rating({ rating }) {
  const ratingRef = useRef(null)
  const [fullWidth, setFullWidth] = useState()
  // Witdth of the element
  const [width, setWidth] = useState('auto')
  // Width will be change depending on the rating
  // COMMENT:  EACH TIME FILED IS SAVED WIDTH GET SMALLER CANNOT FIND SOLUTION RIGHT NOW
  const transformWidth = () => {
    const currentWidth = ratingRef.current.clientWidth
    return `${Math.round(currentWidth * (rating / 5))}px`
  }

  // When I save in the code the width changes but in
  useEffect(() => {
    if (width === 'auto') {
      setWidth(transformWidth())
    }
  }, [ratingRef.current])

  return (
    <div
      ref={ratingRef}
      className="rating"
      style={{
        width: width
      }}
    ></div>
  )
}
