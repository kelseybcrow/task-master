import { generateId } from "../utils.js";

export default class List {
  constructor({ name, tasks, id }) {
    console.log("making lists")
    this.name = name
    this.id = id || generateId()
    this.tasks = tasks || ["Example task 1", "Example task 2", "Example task 3"]
  }

  get Template() {
    return /*html*/`<div class="card col-12 col-md-4 col-lg-3 m-0 m-md-3">
    <div class="card-header d-flex flex-column" id="card-header">
      <i class="fa fa-trash align-self-end" aria-hidden="true"
        onclick="app.listsController.removeList('${this.id}')"></i>
      <h4 class="card-name">${this.name}</h4>
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          Color
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" id="pink" onclick="app.listsController.colorChange(pink)" href="#">Pink</a>
          <a class="dropdown-item" id="purple" onclick="app.listsController.colorChange(purple)" href="#">Purple</a>
          <a class="dropdown-item" id="green" onclick="app.listsController.colorChange(green)" href="#">Green</a>
        </div>
      </div>
    </div>
    <div class="card-body d-flex flex-column">
      <ul>
        ${this.TasksTemplate}
      </ul>
      <form onsubmit="app.listsController.addTask(event, '${this.id}')">
        <div class="form-group d-flex">
          <input type="text" name="task" id="task" class="form-control" placeholder="Enter Task"
            aria-describedby="helpId">
          <button class="btn btn-info" type="submit"> Add
          </button>
        </div>
      </form>
    </div>
  </div>`
  }


  get TasksTemplate() {
    let template = ""
    this.tasks.forEach(t => {
      template += `<li>${t} <i class="fa fa-trash" aria-hidden="true" onclick="app.listsController.removeTask('${this.id}', '${t}')"></i> </li>`
    });
    return template
  }
}
