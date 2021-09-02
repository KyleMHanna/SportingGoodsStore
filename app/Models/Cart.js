import { generateId } from "../Utils/generateId.js"

export class cart{
    constructor(itemsData)[

        
        this.items= itemsData.name
        this.price= itemsData.price
        this.id= itemsData.id || generateId()
        this.total= calculateTotal()
    ]
}