const Util = {
  randomPointer(length) {
    const number = Math.floor(Math.random() * length)
    return number
  },

  /**  Categories from the source: https://dummyjson.com to not call the source for this small details*/

  categories: [
    'smartphones',
    'laptops',
    'fragrances',
    'skincare',
    'groceries',
    'home-decoration',
    'furniture',
    'tops',
    'womens-dresses',
    'womens-shoes',
    'mens-shirts',
    'mens-shoes',
    'mens-watches',
    'womens-watches',
    'womens-bags',
    'womens-jewellery',
    'sunglasses',
    'automotive',
    'motorcycle',
    'lighting'
  ],
  getRandomCategory() {
    const randomNumber = this.randomPointer(this.categories.length)
    console.log(randomNumber)
    return this.categories[randomNumber]
  },

  category: null
}

export default Util
