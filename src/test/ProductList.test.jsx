import { describe, it, expect, vi } from 'vitest'
import { screen, render } from '@testing-library/react'
import Navigation from '../components/Navigation'
import { BrowserRouter } from 'react-router-dom'
import ProductList from '../components/ProductList'

describe('Product List', () => {
  it('Render a list appropiately', () => {
    const productsMock = [
      {
        id: 1,
        title: 'My first product'
      },
      {
        id: 2,
        title: 'My second title'
      }
    ]
    render(<ProductList products={productsMock} />, { wrapper: BrowserRouter })
    const productsList = screen.getByRole('list')

    expect(productsList).not.toBe(null)
    expect(productsList).toBeInTheDocument()
    expect(productsList.textContent).toContain('My first product')
    expect(productsList.textContent).toContain('My second title')

    // expect(productsList).toContainElement(productItem)
  })
})
