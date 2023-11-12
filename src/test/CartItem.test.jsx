import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import CartItemData from '../data/model/CartItem'
import DiscountSection from '../component/DiscountSection'
import { BrowserRouter } from 'react-router-dom'
import CartItem from '../component/CartItem'
import userEvent from '@testing-library/user-event'

describe('Cart Item', () => {
  it('render data accordingly', () => {
    const editListenerMock = vi.fn()
    const cancelListenerMock = vi.fn()
    const dataMock = new CartItemData(
      1,
      'My first product',
      50,
      5,
      'My product description',
      'brand',
      'womens clothes',
      'my-img.png',
      4.5,
      10
    )

    render(
      <CartItem
        item={dataMock}
        editListener={editListenerMock}
        cancelListener={cancelListenerMock}
      />,
      { wrapper: BrowserRouter }
    )

    const cartItem = screen.getByRole('listitem')
    const img = screen.getByAltText('My product description')
    expect(cartItem).toBeInTheDocument()
    expect(img).toBeInTheDocument()
    expect(cartItem.textContent).toContain('My first product')
    expect(cartItem.textContent).toContain('My product description')
    expect(cartItem.textContent).toContain('brand')
    expect(cartItem.textContent).toContain('10')
    expect(cartItem.textContent).toContain('50')
    expect(cartItem.textContent).toContain('500')
    expect(cartItem.textContent).toContain('My product description')
  })

  it('Listeners called when clicked', async () => {
    const editListenerMock = vi.fn()
    const cancelListenerMock = vi.fn()
    const datamock = new CartItemData(
      1,
      'My first product',
      50,
      5,
      'My product description',
      'brand',
      'womens clothes',
      'my-img.png',
      4.5,
      10
    )
    render(
      <CartItem
        item={datamock}
        editListener={editListenerMock}
        cancelListener={cancelListenerMock}
      />,
      { wrapper: BrowserRouter }
    )
    const cancelButton = screen.getByRole('button', { name: /cancel/i })
    const editButton = screen.getByRole('button', { name: /edit/i })
    expect(cancelButton).toBeInTheDocument()
    expect(editButton).toBeInTheDocument()
    const user = userEvent.setup()
    await user.click(cancelButton)
    await user.click(editButton)
    expect(cancelListenerMock).toHaveBeenCalled()
    expect(editListenerMock).toHaveBeenCalled()
  })
})
