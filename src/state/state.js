import { updateItem } from "./helpers.js";
import { updateView } from "../index.js";

export const state = {
  counter: 0,
  increment: () => {
    state.counter = state.counter + 1;
    updateView(state);
  },
  decrement: () => {
    state.counter = state.counter - 1;
    updateView(state);
  },
  tasks: [],
  toggleTasks: (id) => {
    state.tasks = updateItem(id, state.tasks);
    updateView(state);
  },
};
