import { ProxyState } from "../AppState.js"
import { Item } from "../Models/item.js"


class ItemsService {

  constructor(){
    console.log('Hello from Items service!')
  }
  addItems(itemData) {
    ProxyState.items = [...ProxyState.items, new Item(itemData)]
  }
}

export const itemsService = new ItemsService();