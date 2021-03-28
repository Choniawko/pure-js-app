import { Header } from "./Header/Header.js";
import { Counter } from "./Counter/Counter.js";
import { TaskList } from "./Task/TaskList.js";

import { getURI } from "../common/utils.js";

const getTasks = () => fetch(getURI("tasks")).then((res) => res.json());

export const App = () => `
    ${Header({ title: "Title" })}
    ${Counter({ value: App.state.value })}
    ${TaskList({ tasks: App.state.tasks })}
`;

App.state = {
  value: 0,
  tasks: [],
  increment: () => {
    App.state.value++;
    updateView();
  },
  decrement: () => {
    App.state.value--;
    updateView();
  },
};

const updateView = () => {
  document.getElementById("app").innerHTML = App();
  document.getElementById("inc").addEventListener("click", App.state.increment);
  document.getElementById("dec").addEventListener("click", App.state.decrement);
};

updateView();

getTasks().then((tasks) => {
  App.state.tasks = tasks;
  updateView();
});
