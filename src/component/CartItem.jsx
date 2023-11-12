export default function CartItem({ item, editListener, cancelListener }) {
  return (
    <li>
      <h2>{item.getTitle}</h2>
      <img src={item.getUrl} alt={item.getDescription} />
      <div>
        <p>{item.getBrand}</p>
        <p>{item.getDescription}</p>
        <p>{item.getPrice} each unit</p>
        <p>Ordered: {item.getQuantity}</p>
        <p>Total: {item.getTotal}</p>
        <button type="button" onClick={cancelListener}>
          Cancel
        </button>
        <button type="button" onClick={editListener}>
          Edit
        </button>
      </div>
    </li>
  )
}
