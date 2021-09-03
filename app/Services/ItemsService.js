import { ProxyState } from "../AppState.js"
import { Item } from "../Models/item.js"


class ItemsService {

  constructor(){
    console.log('Hello from Items service!')
  }
  addItems(itemData) {
var newItems = new Item(itemData)
    ProxyState.cart = [...ProxyState.cart, new Item(itemData)]
  }
}

export const itemsService = new ItemsService();