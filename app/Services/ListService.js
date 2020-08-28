import store from "../store.js";
import List from "../Models/List.js";

//Public
class ListService {

  constructor() {
    // console.log(store.State.pizzas)
    console.log("hi from list service");
  }

  createList(listData) {
    // console.log("creating list from service")
    let newList = new List(listData)
    store.State.lists.push(newList)
    // console.log(store.State.pizzas)
  }

  deleteList(id) {
    store.State.lists = store.State.lists.filter(t => t.id != id)
  }

  addTask(newTask, listId) {
    let list = store.State.lists.find(l => l.id == listId)
    list.tasks.push(newTask)
  }

  removeTask(listId, taskName) {
    let list = store.State.lists.find(l => l.id == ListId)
    let taskIndex = list.tasks.findIndex(t => t == taskName)
    list.tasks.splice(taskIndex, 1)
  }
}

const SERVICE = new ListService();
export default SERVICE;
