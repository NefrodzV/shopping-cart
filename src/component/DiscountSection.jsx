import CoundownTimer from './CoundownTimer'
import Tag from './Tag'

export default function DiscountSection({ products }) {
  const createDiscountProduct = (product) => {
    return (
      <li key={product.getId}>
        <img src={product.getUrl} alt={product.getDescription} />
        <Tag discount={product.getDiscount} show={true} />
      </li>
    )
  }
  return (
    <section>
      <h2>
        All products {products.length > 0 ? products[0].getCategory : ''} are on
        discount for limited time!
      </h2>
      <CoundownTimer />
      <ul>{products.map((product) => createDiscountProduct(product))}</ul>
    </section>
  )
}
