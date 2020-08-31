import _listServ from "../Services/ListsService.js"
import store from "../store.js";

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  store.saveState()
  console.log(store.State.lists)
  let template = ""
  store.State.lists.forEach(l => template += l.Template)
  document.getElementById("lists").innerHTML = template
}

//Public
export default class ListsController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    console.log("hi from lists controller")
    _drawLists();
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems

  createList(event) {
    event.preventDefault();
    let form = event.target
    let newList = {
      name: form.name.value
    }
    _listServ.createList(newList)
    _drawLists()
  }

  removeList(id) {
    console.log(id)
    if (confirm("Are you sure?") == true) {
      _listServ.deleteList(id)
      _drawLists()
    }
  }

  addTask(event, listId) {
    event.preventDefault();
    let form = event.target
    let newTask = form.task.value
    console.log(newTask);
    _listServ.addTask(newTask, listId)
    _drawLists()
  }

  removeTask(listId, taskName) {
    console.log(listId, taskName)
    if (confirm("Are you sure?") == true) {
    _listServ.removeTask(listId, taskName)
    _drawLists()
    }
  }

  colorChange(color) {
    let cardHeader = document.getElementById("card-header")
    if (color == pink) {
      cardHeader.style.backgroundColor = "pink"
      console.log("pink");
    }
    if (color == purple) {
      cardHeader.style.backgroundColor = "purple"
      console.log("purple");
    }
    if (color == green) {
      cardHeader.style.backgroundColor = "green"
      console.log("green");
    }
  }

}
