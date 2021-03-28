const getTextDecoration = (active) => (active ? "none" : "line-through");

const TaskItem = (task) => `
  <div class="task-item" id="${task.id}"
    style="text-decoration: ${getTextDecoration(
      task.active,
    )}; cursor: pointer;">${task.title}</div>
`;

export const TaskList = ({ tasks }) => `
  <div>Task List</div>
  <div>${tasks.map(TaskItem).join("")}</div>
`;

export const updateView = (state) => {
  const taskElements = document.getElementsByClassName("task-item");
  Array.from(taskElements).forEach((el) => {
    el.addEventListener("click", () =>
      state.toggleTasks(el.getAttribute("id")),
    );
  });
};
