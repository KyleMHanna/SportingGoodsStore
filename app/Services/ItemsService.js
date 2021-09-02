import { ProxyState } from "../AppState.js"
import { Item } from "../Models/item.js"


class ItemsService {
  addItems() {
    ProxyState.items = [...ProxyState.items, new Item]
  }
}

export const itemsService = new ItemsService();