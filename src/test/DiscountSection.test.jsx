import { render, screen } from '@testing-library/react'
import { describe, expect } from 'vitest'
import Product from '../data/model/Product'
import DiscountSection from '../component/DiscountSection'
import { BrowserRouter } from 'react-router-dom'

describe('Discount section', () => {
  it('Renders data info', () => {
    const productsMock = [
      new Product(
        1,
        'My first product',
        50,
        5,
        'My product description',
        'brand',
        'womens clothes',
        'my-img.png',
        4.5
      )
    ]

    render(<DiscountSection products={productsMock} />, {
      wrapper: BrowserRouter
    })
    const h2 = screen.getByRole('heading')
    const img = screen.getByAltText('My product description')
    const tag = screen.getByText('5')
    expect(h2).toBeInTheDocument()
    expect(h2.textContent).toBe(
      'All product about womens clothes are on discount for limited time'
    )
    expect(img).toHaveAttribute('src', 'my-img.png')
    expect(tag).toBeInTheDocument()
  })
})
