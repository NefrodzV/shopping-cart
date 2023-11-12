import React from 'react'
export default function Tag({ discount, show }) {
  // Will be displayed in items that have are on discount
  return (
    <div aria-label="discount" className={`tag${show ? ' show' : ''}`}>
      {discount}
      <div>
        <div className="tag-percent">%</div>
        <div className="tag-off-text">off</div>
      </div>
    </div>
  )
}
