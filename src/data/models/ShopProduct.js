// Represents the shop product in the shop section given by the service
export default class ShopProduct {
  /**
   * @param {number} id Identifier of the product
   * @param {string} title Name of the product
   * @param {number} price Price of the product
   * @param {string} description Brief description of the product
   * @param {string} category What category it belongs to
   * @param {string} url Image url
   * @param {number} rating Rating given by users
   */
  constructor(id, title, price, description, category, url, rating) {
    this.id = id
    this.title = title
    this.price = price
    this.description = description
    this.category = category
    this.imgUrl = url
    this.rating = rating
  }
}
