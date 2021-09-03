import { generateId } from "../Utils/generateId.js"



export class Item {
  constructor(itemData) {
    this.name = itemData.name,
    this.quantity = itemData.quantity,
    this.price = itemData.price
    this.detail = itemData.detail
    this.id = itemData.id || generateId()
  }


  get Template() {
    return/*html*/`
  <div class="card">
    <div class="card-header text-center">
      <h3>${this.name}</h3>
    </div>
    <div class="card-body">
      <p>$${this.price}</p>
      <p>More - ${this.detail}</p>
    </div>
    <button onclick="removeItem('${this.id}')">remove </button>
  </div>
`
  }
}