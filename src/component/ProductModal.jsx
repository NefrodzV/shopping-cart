import { useEffect, useRef, useState } from 'react'
import localStorage from '../data/service/LocalStorage'
import CartItem from '../data/model/CartItem'
import Rating from './Rating'
export default function ProductModal({ product, show, closeListener }) {
  const dialogRef = useRef(null)
  const [total, setTotal] = useState()
  const [quantity, setQuantity] = useState(1)
  /**@todo Make the listeners fucntionality */

  const onSelected = (e) => {
    const value = e.target.value
    setQuantity(value)
  }

  const submit = () => {
    const cartItem = new CartItem(
      product.id,
      product.title,
      product.price,
      product.discount,
      product.description,
      product.brand,
      product.category,
      product.url,
      product.rating,
      parseInt(quantity)
    )
    const index = localStorage.itemIsInStorage(cartItem.id)
    // if the item exist just update it
    console.log('index ' + index)
    if (index !== null) {
      console.log('index to update' + index)
      localStorage.update(cartItem, index)
      return
    }
    //If the item doesnt exist just add it to storage
    localStorage.add(cartItem)
  }

  useEffect(() => {
    setTotal(quantity * product?.price)
  }, [product, quantity])

  useEffect(() => {
    show ? dialogRef.current.showModal() : dialogRef.current.close()
  }, [show])

  return (
    <dialog ref={dialogRef} className="modal">
      <section>
        <header className="modal-header">
          <h3>{product?.title}</h3>
          <button type="button" onClick={closeListener}>
            x
          </button>
        </header>
        <div className="modal-content">
          <img
            className="modal-img big-border"
            src={product?.url}
            alt={product?.description}
          />
          <p className="modal-brand">{product?.brand}</p>
          <p className="modal-description">{product?.description}</p>
          <p className="modal-price">&#x24; {product?.price}</p>
          <label htmlFor="quatity-select">
            Quantity:
            <select id="quantity-select" onClick={onSelected}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </label>
          <p className="modal-total">&#x24; {total}</p>
          <button type="button" onClick={submit}>
            Add to cart
          </button>
        </div>
      </section>
    </dialog>
  )
}
