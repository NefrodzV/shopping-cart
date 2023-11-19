import CartItem from './CartItem'
export default function CartList({
  items,
  editItemListener,
  deleteItemListener
}) {
  const createItem = (item) => (
    <CartItem
      key={item.id}
      item={item}
      editListener={editItemListener}
      cancelListener={deleteItemListener}
    />
  )
  return <ul className="cart-list">{items?.map((item) => createItem(item))}</ul>
}
