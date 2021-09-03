import { ItemsController } from "./Controllers/itemsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  itemsController = new ItemsController();
}

window["app"] = new App();
