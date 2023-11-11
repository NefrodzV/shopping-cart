import React from 'react'
export default function Tag({ discount, show }) {
  // Will be displayed in items that have are on discount
  return <div className={`tag${show ? ' show' : ''}`}>{discount}</div>
}
