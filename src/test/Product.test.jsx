import { render, screen } from '@testing-library/react'
import { describe, expect, vi } from 'vitest'
import Product from '../components/Product'
import ProductData from '../data/models/Product'
import userEvent from '@testing-library/user-event'

describe('Product', () => {
  it('Should render the product data the correct way', () => {
    const productData = new ProductData(
      1,
      'My first product',
      25,
      'Best product of its quality',
      'mens wear',
      'firstproduct.png',
      4.5
    )

    render(
      <Product
        title={productData.getTitle}
        url={productData.getUrl}
        description={productData.getDescription}
        price={productData.getPrice}
      />
    )

    const product = screen.getByRole('listitem')
    const productImage = screen.getByAltText(productData.description)
    expect(product).toBeInTheDocument()
    expect(product.textContent).toContain(productData.getTitle)
    expect(product.textContent).toContain(productData.getPrice)

    expect(productImage).toBeInTheDocument()
    console.log(productImage)
    expect(productImage).toHaveAttribute('src', productData.getUrl)
  })
  it('Click listener gets called', async () => {
    const listenerMock = vi.fn() // Mocking a function
    render(<Product title="My product" listener={listenerMock} />)
    const product = screen.getByRole('listitem')

    const user = userEvent.setup()
    await user.click(product)
    expect(product).toBeInTheDocument()
    expect(listenerMock).toHaveBeenCalled()
  })

  it('Click listener should not be called when not clicked', () => {
    const listenerMock = vi.fn()
    render(<Product title="My product" listener={listenerMock} />)
    const product = screen.getByRole('listitem')

    expect(product).toBeInTheDocument()
    expect(listenerMock).not.toHaveBeenCalled()
  })
})
