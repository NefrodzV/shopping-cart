class LocalStorage {
  constructor() {
    this.storage = window['localStorage']
    console.log(this.storage)
    // this.storage.clear()
  }

  /**Will return the index of the item in the data array if it exists.Return null if not*/
  itemIsInStorage(id) {
    let index = null
    // If the cart has never been created the item doesnt exist
    if (!this.storage.getItem('cart')) return null
    const data = JSON.parse(this.storage.getItem('cart'))
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        index = i
        break
      }
    }
    return index
  }

  /**@param {object} item  item to saved in localStorage */
  add(item) {
    let data = null
    if (!this.storage.getItem('cart')) {
      data = []
      data.push(item)
      const json = JSON.stringify(data)
      this.storage.setItem('cart', json)
      return
    }

    const json = this.storage.getItem('cart')
    data = JSON.parse(json)
    data.push(item)

    this.storage.setItem('cart', JSON.stringify(data))
  }

  /**Updates the item quantity at the the specified index*/
  update(item, index) {
    const data = JSON.parse(this.storage.getItem('cart'))
    const dataItem = data[index]
    dataItem.quantity = dataItem.quantity + item.quantity
    const json = JSON.stringify(data)
    this.storage.setItem('cart', json)
  }

  /**Return the data as an array of objects */
  getItems() {
    const json = this.storage.getItem('cart')
    return JSON.parse(json)
  }
}

const localStorage = new LocalStorage()
export default localStorage
