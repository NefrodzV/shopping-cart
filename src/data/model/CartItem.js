// TODO: Verify if this will work with the service not sure
// This may need to be updated
import Product from './Product'
export default class CartItem extends Product {
  /**
   * @constructor
   * @param {number} id Identifier
   * @param {string} title Name
   * @param {number} price number price
   * @param {number} discount percent of discount
   * @param {string} description description
   * @param {string} brand item brand
   * @param {string} category category
   * @param {string} url image url
   * @param {number} rating number rating
   * @param {number} quantity quantity to buy
   */
  constructor(
    id,
    title,
    price,
    discount,
    description,
    brand,
    category,
    url,
    rating,
    quantity
  ) {
    super(id, title, price, discount, description, brand, category, url, rating)
    this.quantity = quantity
  }

  get getQuantity() {
    return this.quantity
  }

  /**@todo Update to calculate with the discount */
  get getTotal() {
    return this.quantity * this.price
  }
}
