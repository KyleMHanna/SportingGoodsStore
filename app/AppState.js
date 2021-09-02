import { Item } from "./Models/item.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"


class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []

  cart=[]

  items = [new Item({
    name: 'Basketball', quantity: 1, price:25, detail:'Nice ball Much wow'
  }),
    new Item({
    name: 'Soccerball', quantity:1, price:25, detail: 'Super nice, much yes'
    }),
    new Item({
    name: 'Basketball Shoes', quantity: 1, price: 69, details:'These will make you run faster and jump higher.'
    }),
    new Item({
    name: 'Soccer Cleats', quantity:1, price:69, details:'Score many goals and win many games'
    })
  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }

})
