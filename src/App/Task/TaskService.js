import { getURI } from "../../common/utils.js";

export const getTasks = () => fetch(getURI("tasks")).then((res) => res.json());
