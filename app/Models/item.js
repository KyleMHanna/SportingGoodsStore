import { generateId } from "../Utils/generateId.js"


export class Item {
  constructor(itemData) {
    this.name = itemData.name,
    this.quantity = itemData.quantity,
    this.price = itemData.price
    this.detail = itemData.detail
    this.id = itemData.id || generateId()
  }

  
}