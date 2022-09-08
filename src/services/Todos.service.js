import { TODOS_URL, SORT_DESC } from "../constants";

// API Methods

export function getAllTodos() {    
    return fetch(TODOS_URL + SORT_DESC).then((res) => res.json());
} 

export function getTodo(id) {    
    return fetch(TODOS_URL + id).then((res) => res.json());
} 

export function createTodo(todo) {
    return fetch(TODOS_URL, {
        method: 'POST',
        body: JSON.stringify({todo}),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((res) => res.json());
}

export function updateTodo(id, todo) {
    return fetch(TODOS_URL + id, {
        method: 'PUT',
        body: JSON.stringify({todo}),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((res) => res.json());
}

export function deleteTodo(id) {
    return fetch(TODOS_URL + id, { method: 'DELETE' }).then((res) => res.json());
}