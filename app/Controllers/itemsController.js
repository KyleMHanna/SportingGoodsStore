import { ProxyState } from "../AppState.js";
import {itemsService} from "../Services/ItemsService.js";

_drawCart(){
document.getElementById('').innerHTML = template
}

export class ItemsController {
  constructor() {
    ProxyState.on('cart', _drawCart)
  }
  addItems(){
    itemsService.addItem
  }
}