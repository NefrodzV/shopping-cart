import CoundownTimer from './CoundownTimer'
import Tag from './Tag'

export default function DiscountSection({ products }) {
  const createDiscountProduct = (product) => {
    console.log(product.getDiscount)
    return (
      <li key={product.getId} className="product">
        <img
          src={product.getUrl}
          alt={product.getDescription}
          className="default-img big-border"
        />
        <Tag discount={product.getDiscount} show={true} />
        <p className="center-text bold">{product.getTitle}</p>
      </li>
    )
  }
  return (
    <section className="discount-section center-inline width-default">
      <h2 className="center-text big-font">
        All products {products.length > 0 ? products[0].getCategory : ''} are on
        discount for limited time!
      </h2>
      <CoundownTimer />
      <ul className="discount-list flex">
        {products.map((product) => createDiscountProduct(product))}
      </ul>
    </section>
  )
}
