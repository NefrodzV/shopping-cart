import { useEffect, useRef, useState } from 'react'

export default function ProductModal({ product, show, closeListener }) {
  const dialogRef = useRef(null)
  const [total, setTotal] = useState('0.0')
  /**@todo Make the listeners fucntionality */

  const onSelected = () => {
    console.log('onSelected called')
  }

  const submit = () => {
    console.log('on submit called')
  }

  useEffect(() => {
    show ? dialogRef.current.showModal() : dialogRef.current.close()
  }, [show])

  return (
    <dialog ref={dialogRef} className="modal">
      <section>
        <header className="modal-header">
          <h3>{product.title}</h3>
          <button type="button" onClick={closeListener}>
            Close
          </button>
        </header>
        <div className="modal-content">
          <img src={product.url} alt={product.description} />
          <p>{product.brand}</p>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <label htmlFor="quatity-select">
            Enter the quantity you want to buy:
            <select id="quantity-select" onClick={onSelected}>
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </label>
          <p>{total}</p>
          <button type="button" onClick={submit}>
            Add to cart
          </button>
        </div>
      </section>
    </dialog>
  )
}
