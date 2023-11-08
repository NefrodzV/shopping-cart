import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import Navigation from '../components/Navigation'
import { BrowserRouter } from 'react-router-dom'

describe('Navigation', () => {
  it('Renders the navigation  element', () => {
    render(<Navigation cartCount={3} />, { wrapper: BrowserRouter })
    expect()
  })

  it('Shop anchor has correct href path', () => {
    render(<Navigation cartCount={3} />, { wrapper: BrowserRouter })
    const shopAnchor = screen.getByRole('link', { name: /Shop/i })
    expect(shopAnchor).not.toBe(null)
    expect(shopAnchor).toBeInTheDocument()
    expect(shopAnchor).toHaveAttribute('href', '/shop')
  })

  it('Cart anchor has the correct href path', () => {
    render(<Navigation cartCount={3} />, { wrapper: BrowserRouter })
    const cartAnchor = screen.getByRole('link', { name: /My cart/i })
    expect(cartAnchor).not.toBe(null)
    expect(cartAnchor).toHaveAttribute('href', '/cart')
  })
  // Todo make a test that can handle the correct numbers of items in the cart
  it('Cart anchor displays the correct items in the cart', () => {
    render(<Navigation cartCount={3} />, { wrapper: BrowserRouter })
    const cartAnchor = screen.getByRole('link', { name: /My cart/i })
    // this needs to change when data is being applied
    expect(cartAnchor.textContent).toContain(3)
  })

  it('Home anchor has the correct href path', () => {
    render(<Navigation cartCount={3} />, { wrapper: BrowserRouter })
    const homeAnchor = screen.getByRole('link', { name: /Home/i })
    expect(homeAnchor).toBeInTheDocument()
    expect(homeAnchor).toHaveAttribute('href', '/')
  })
})
