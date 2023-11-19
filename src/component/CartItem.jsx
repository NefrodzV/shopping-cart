export default function CartItem({ item, editListener, cancelListener }) {
  console.log(item)
  return (
    <li className="cart-item big-border flex">
      <img
        className="default-img cart-item-img"
        src={item.url}
        alt={item.description}
      />
      <div>
        <h2>{item.title}</h2>
        <p>{item?.brand}</p>
        <p>{item?.description}</p>
        <p>Price per unit: &#x24;{item?.price}</p>
        <p>Ordered: {item?.quantity}</p>
        <p>Total: &#x24;{item?.price * item?.quantity}</p>
        <div className="container flex">
          <button
            className="prime-button"
            type="button"
            onClick={cancelListener}
          >
            Delete
          </button>
          <button className="prime-button" type="button" onClick={editListener}>
            Edit
          </button>
        </div>
      </div>
    </li>
  )
}
