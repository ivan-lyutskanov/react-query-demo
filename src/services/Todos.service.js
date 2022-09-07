import { TODOS_URL } from "../constants";

export function getAllTodos() {    
    return fetch(TODOS_URL).then((res) => res.json());
} 