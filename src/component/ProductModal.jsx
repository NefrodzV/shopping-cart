import { useEffect, useRef, useState } from 'react'

export default function ProductModal({ product, show, closeListener }) {
  const dialogRef = useRef(null)
  const [total, setTotal] = useState()
  const [quantity, setQuantity] = useState(1)
  /**@todo Make the listeners fucntionality */

  const onSelected = (e) => {
    const value = e.target.value
    setQuantity(value)
    console.log('On selected called')
  }

  const submit = () => {
    console.log('on submit called')
  }

  useEffect(() => {
    setTotal(quantity * product.price)
  }, [product, quantity])

  useEffect(() => {
    show ? dialogRef.current.showModal() : dialogRef.current.close()
  }, [show])

  return (
    <dialog ref={dialogRef} className="modal">
      <section>
        <header className="modal-header">
          <h3>{product.title}</h3>
          <button type="button" onClick={closeListener}>
            x
          </button>
        </header>
        <div className="modal-content">
          <img
            className="modal-img big-border"
            src={product.url}
            alt={product.description}
          />
          <p className="modal-brand">{product.brand}</p>
          <p className="modal-description">{product.description}</p>
          <p className="modal-price">&#x24; {product.price}</p>
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
