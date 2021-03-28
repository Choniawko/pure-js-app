import { updateItem } from "./helpers.js";
import { updateView } from "../index.js";

export const state = {
  value: 0,
  increment: () => {
    state.value = state.value + 1;
    updateView(state);
  },
  decrement: () => {
    state.value = state.value - 1;
    updateView(state);
  },
  tasks: [],
  toggleTasks: (id) => {
    state.tasks = updateItem(id, state.tasks);
    updateView(state);
  },
};
