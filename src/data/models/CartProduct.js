// TODO: Verify if this will work with the service not sure
// This may need to be updated
export default class CartProduct {
  constructor(id, title, description, url, quantity, price, total) {
    this.id = id
    // this.title = title
    // this.description = description
    // this.url = url
    this.quantity = quantity
    // this.price = price
    // This might not be needed as a parameter
    this.total = total
  }

  /**
   * @returns {number} Id of the product in the cart
   */
  get getId() {
    return this.id
  }

  /**
   * @returns {string} title of the product in cart
   */
  get getTitle() {
    return this.title
  }

  /**
   * @returns {number} Quantity of the item in the cart
   */
  get getQuantity() {
    return this.quantity
  }

  /**
   * @param {number} num Update the quantity in the cart product
   */

  set setQuatity(num) {
    this.quantity = num
  }

  /**
   * @returns {number} Price of each product
   */
  get getPrice() {
    return this.price
  }

  /**
   * @returns {number} Total price for the items in the cart
   */
  get getTotal() {
    return this.total
  }
}
