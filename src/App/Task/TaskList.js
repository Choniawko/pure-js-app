export const TaskList = ({ tasks }) => `
    <div>Task List</div>
    <div>${tasks.map((task) => `<div>${task.title}</div>`).join("")}</div>
`;
