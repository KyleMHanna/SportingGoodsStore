import { ProxyState } from "../AppState.js";
import {itemsService} from "../Services/ItemsService.js";
import { Item } from "../Models/item.js";

function _drawCart(){
  let template = ''
  ProxyState.cart.forEach(item => template += Item.Template)
  ProxyState.cart = ProxyState.cart
  document.getElementById('app').innerHTML = template
}
function _drawItems() {
  for(let i=0; i = ProxyState.items.length; i++){
    let template = ''
    let CItem = PcroxyState.items[i]
    item.Template
    document.getElementById('app').innerHTML = template
  }
}


export class ItemsController {
  constructor() {
    ProxyState.on('items', _drawItems)
    ProxyState.on('cart', _drawCart)
    _drawItems()
  }
  showItems(){
    _drawItems() 
  }
  addItems(){
  
  }
}