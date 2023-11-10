import { render, screen } from '@testing-library/react'
import { describe, expect } from 'vitest'
import Header from '../components/Header'
import BrandImg from '../assets/images/fashion-house.png'
import { BrowserRouter } from 'react-router-dom'

// File to test the header sections of the page

describe('Header', () => {
  it('Renders brand image with correct src path', () => {
    render(<Header />, { wrapper: BrowserRouter })
    const brandImage = screen.getByAltText(/Fashion House Image/i)
    expect(brandImage).not.toBe(null)
    expect(brandImage).toHaveAttribute('src', BrandImg)
  })

  it('Renders the cart icon with the correct src path', () => {
    render(<Header />, { wrapper: BrowserRouter })
    const cartAnchor = screen.findByRole('link')
    console.log('testing if it returns something')
    console.log(cartAnchor)
    expect(cartAnchor.textContent).toMatch(/My cart/i)
    expect(cartAnchor).not.toBe(null)
    expect(cartAnchor).toHaveAttribute('href', './cart')
  })
})
