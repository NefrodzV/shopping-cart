import CartProduct from './CartProduct'

// Represents the cart for the user
export default class Cart {
  /**
   * @param {string} date  represents the date in format yyyy-mm-dd
   * @param {Array} products represents an array of products by the user
   */
  constructor() {
    // Implement this
    this.date = null
    this.products = []
  }

  /**
   * @returns Date when the cart was created
   */
  get getDate() {
    return this.date
  }

  /**
   * @returns All the products in the cart
   */
  get getProducts() {
    return this.products
  }

  /**
   * Adds new product the cart or updates an existing one
   * @param {CartProduct} product Product object to add the cart
   */
  addProduct(product) {}

  /**
   * Deletes a product in the cart
   * @param {number} id Identifier of the product to be deleted
   */
  deleteProduct(id) {}
}
