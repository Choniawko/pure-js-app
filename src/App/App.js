import { Header } from "./Header/Header.js";
import { Counter } from "./Counter/Counter.js";
import { TaskList } from "./Task/TaskList.js";

export const App = (state) => `
    ${Header({ title: "Title" })}
    ${Counter({ value: state.value })}
    ${TaskList({ tasks: state.tasks })}
`;
