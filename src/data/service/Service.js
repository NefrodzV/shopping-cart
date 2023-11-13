class Service {
  constructor() {}

  // TODO: Implement methods in the service for the fakestore api
  // Get all the products
  getAllProducts() {}
  // Get all the categories of the products
  async getProductsFromCategory(category) {
    const url = `https://dummyjson.com/products/category/${category}?limit=4`
    const call = await fetch(url)
    if (!call.ok) {
      throw new Error('[FETCH] Product category call failed!')
    }
    return call.json()
  }

  async getAllProducts() {
    const url = 'https://dummyjson.com/products'
    let data = null
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('[FETCH] Getting products failed' + response.status)
      }
      data = response.json()
    } catch (error) {
      console.log('[Error] Error fetching products' + error)
    }

    return data
  }

  // Get the carts of the user
  getUserCarts() {}

  // Add new producto to cart
  addNewProductToCart() {}

  // Delete product from cart
  deleteProductInCart() {}
}

const service = new Service()
export default service
