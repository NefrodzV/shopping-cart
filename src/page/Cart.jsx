import CartList from '../component/CartList'
import CartItem from '../data/model/CartItem'
import localStorage from '../data/service/LocalStorage'
import { useState, useEffect } from 'react'
export default function Cart() {
  const [items, setItems] = useState([])
  const [total, setTotal] = useState('0')

  useEffect(() => {
    const data = []
    let total = 0
    localStorage.getItems()?.forEach((item) => {
      const cartItem = new CartItem(
        item.id,
        item.title,
        item.price,
        item.discount,
        item.description,
        item.brand,
        item.category,
        item.url,
        item.rating,
        item.quantity
      )
      data.push(cartItem)
      total = total + item.price * item.quantity
    })
    setItems(data)
    setTotal(total)
  }, [])

  const onEditItem = (id) => {
    console.log('On edit item called')
  }

  const onDeleteItem = (id) => {
    console.log('on delete item called')
  }
  return (
    <section className="cart">
      <h2 className="cart-heading space-between flex">
        My Cart
        <button className="checkout-button secondary-button border-radius-5 md-padding">
          Checkout
        </button>
      </h2>
      <CartList items={items} />
    </section>
  )
}
