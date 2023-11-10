import { describe, it, expect, vi } from 'vitest'
import { screen, render } from '@testing-library/react'
import Navigation from '../components/Navigation'
import { BrowserRouter } from 'react-router-dom'
import ProductList from '../components/ProductList'
import ProductData from '../data/models/Product'

describe('Product List', () => {
  it('Render a list appropiately', () => {
    const productsMock = [
      new ProductData(
        1,
        'My first product',
        25,
        'Best product of its quality',
        'mens wear',
        'firstproduct.png',
        4.5
      ),
      new ProductData(
        1,
        'My second product',
        20,
        'Best product of its quality',
        'mens wear',
        'firstproduct.png',
        4.1
      )
    ]
    render(<ProductList products={productsMock} />, { wrapper: BrowserRouter })
    const productsList = screen.getByRole('list')

    expect(productsList).not.toBe(null)
    expect(productsList).toBeInTheDocument()
    expect(productsList.textContent).toContain('My first product')
    expect(productsList.textContent).toContain('My second product')
  })
})
