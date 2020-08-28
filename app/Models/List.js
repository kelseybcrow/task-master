import { generateId } from "../utils.js";

export default class List {
  constructor({ name, id, tasks }) {
    console.log("making a list")
    this.name = name
    this.id = id || generateId()
    this.tasks = tasks
  }

  get Template() {
    return /*html*/`<div class="card col-3">
                <div class="card-body d-flex flex-column">
      <i class="fa fa-trash align-self-end" aria-hidden="true" onclick="app.listsController.removeList('${this.id}')"></i>
                    <h4 class="card-title">${this.title}</h4>
                    <ul>
                        ${this.TasksTemplate}
                    </ul>
                    <form onsubmit="app.listsController.addTask(event, '${this.id}')">
                      <div class="form-group d-flex">
                        <input type="text" name="task" id="task" class="form-control" placeholder="Enter Task" aria-describedby="helpId">
                      <button class="btn btn-danger" type="submit"> Add
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
