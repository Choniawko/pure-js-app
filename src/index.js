import { App } from "./App/App.js";
import { state } from "./state/state.js";

import { getURI } from "./common/utils.js";

import { updateView as counterUpdateView } from "./App/Counter/Counter.js";
import { updateView as taskUpdateView } from "./App/Task/TaskList.js";

const getTasks = () => fetch(getURI("tasks")).then((res) => res.json());

export const updateView = (state) => {
  document.getElementById("app").innerHTML = App(state);
  counterUpdateView(state);
  taskUpdateView(state);
};

updateView(state);

getTasks().then((tasks) => {
  state.tasks = tasks;
  updateView(state);
});
