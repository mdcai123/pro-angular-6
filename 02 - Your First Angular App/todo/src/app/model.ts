export class Model {
    user;
    items;

    constructor() {
        this.user = "Adam";
        this.items = [new TodoItem("Buy Flowers", false),
                      new TodoItem("Get Shoes", false),
                      new TodoItem("Collect Tickets", false),
                      new TodoItem("Call Joe", false)]
    }
    getName() {
      return this.user;
    }

    getTodoItems() {
      return this.items.filter(item => !item.done);
    }

    addItem(newItem) {
      if (newItem != "") {
          this.items.push(new TodoItem(newItem, false));
      }
    }
}

export class TodoItem {
    action;
    done;

    constructor(action, done) {
        this.action = action;
        this.done = done;
    }
}
