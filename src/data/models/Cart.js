// Represents the cart for the user
export default class Cart {
  /**
   *
   * @param {number} userId represent the user id
   * @param {string} date  represents the date in format yyyy-mm-dd
   * @param {Array} products represents an array of products by the user
   */
  constructor(userId, date, products) {
    this.userId = userId
    this.date = date
    this.products = products
  }

  // Returns the user id associated with the cart
  get getUserId() {
    return this.getUserId
  }

  // Returns the date the cart was made
  get getDate() {
    return this.date
  }

  // Get all the products in the carts
  get getProducts() {
    return this.products
  }

  // Adds new product to the cart
  addNewProduct(product) {}
}
