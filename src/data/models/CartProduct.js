// TODO: Verify if this will work with the service not sure
export default class CartProduct {
  constructor(id, title, description, url, quantity, price, total) {
    this.id = id
    this.title = title
    this.description = description
    this.url = url
    this.quantity = quantity
    this.price = price
    this.total = total
  }

  get getId() {
    return this.id
  }

  get getTitle() {
    return this.title
  }

  get getQuantity() {
    return this.quantity
  }

  /**
   * @param {number} num Update the quantity in the cart product
   */

  set setQuatity(num) {
    this.quantity = num
  }

  get getPrice() {
    return this.price
  }

  get getTotal() {
    return this.total
  }
}
