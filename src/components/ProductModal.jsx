export default function ProductoModal({ product }) {
  /**@todo Make the listeners fucntionality */
  const close = () => {
    console.log('close called')
  }

  const onSelected = () => {
    console.log('onSelected called')
  }

  const submit = () => {
    console.log('on submit called')
  }

  return (
    <dialog className="modal">
      <section>
        <header className="modal-header">
          <h3>{product.getTitle}</h3>
          <button type="button" onClick={close}>
            Close
          </button>
        </header>
        <div className="modal-content">
          <img src={product.getUrl} alt={product.getDescription} />
          <p>{product.getBrand}</p>
          <p>{product.getDescription}</p>
          <p>{product.getPrice}</p>
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
          <p>{}</p>
          <button type="button" onClick={submit}>
            Add to cart
          </button>
        </div>
      </section>
    </dialog>
  )
}
