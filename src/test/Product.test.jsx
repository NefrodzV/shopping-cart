import { render, screen } from '@testing-library/react'
import { describe, expect, vi } from 'vitest'
import Product from '../components/Product'
import userEvent from '@testing-library/user-event'

describe('Product', () => {
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
