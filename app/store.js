import List from "./Models/List.js";

let _state = {
  /** @type {List[]} */
  lists: [new List({ name: "Example List"})]
};

//NOTE You should not need to change the code from this point down

//NOTE this method will get the lists from local storage at the start of the app
function _loadState() {
  // did this work below?
  let data = JSON.parse(localStorage.getItem("lists"));
  if (data) {
    data.lists = data.lists.map(l => new List(l));
    _state = data;
  }
}
_loadState();

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }

  //NOTE call saveState everytime you change the state in any way
  saveState() {
    localStorage.setItem("lists", JSON.stringify(_state));
  }
}

const store = new Store();
export default store;
