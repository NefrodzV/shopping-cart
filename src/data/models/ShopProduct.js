// Represents the shop product in the shop section
export default class ShopProduct {
  constructor(id, title, price, description, category, imgUrl, rating) {
    this.id = id
    this.title = title
    this.price = price
    this.description = description
    this.category = category
    this.imgUrl = imgUrl
    this.rating = rating
  }
}
