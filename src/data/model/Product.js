// Represents the shop product in the shop section given by the service
export default class Product {
  /**
   * @param {number} id Identifier of the product
   * @param {string} title Name of the product
   * @param {number} price Price of the product
   * @param {number} discount Percent to discount
   * @param {string} brand Brand of the product
   * @param {string} description Brief description of the product
   * @param {string} category What category it belongs to
   * @param {string} url Image url
   * @param {number} rating Rating given by users
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
    rating
  ) {
    this.id = id
    this.title = title
    this.discount = discount
    this.price = price
    this.description = description
    this.brand = brand
    this.category = category
    this.url = url
    this.rating = rating
  }

  get getId() {
    return this.id
  }

  get getTitle() {
    return this.title
  }

  get getPrice() {
    return this.price
  }

  get getDiscount() {
    return Math.floor(this.discount)
  }

  get getDescription() {
    return this.description
  }

  get getBrand() {
    return this.brand
  }
  get getCategory() {
    return this.category
  }

  get getUrl() {
    return this.url
  }

  get getRating() {
    return this.rating
  }
}
