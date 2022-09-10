import { TODOS_URL, SORT_DESC } from "../constants";
import {
  useQuery,
  useMutation,
  useQueryClient,
} from 'react-query';
import { messageError, messageSuccess } from "../utils/notifications";


// React Query Hooks

export function useTodos() {
  return useQuery(['todos'], getAllTodos);
} 

export function useCreateTodo() {
  const queryClient = useQueryClient();

  return useMutation(createTodo, {
    onMutate: () => {
      console.log('useCreateTodo: onMutate hook was triggered');
    },
    onSuccess: () => {
      messageSuccess('New todo was added!');
    },
    onError: (error) => {
      console.error(error);
      messageError(error?.message);
    },
    onSettled: () => {
      queryClient.invalidateQueries(['todos'])
    }
  });
}

export function useUpdateTodo() {
  const queryClient = useQueryClient();

  return useMutation(updateTodo, {
    onSuccess: () => {
      messageSuccess('Todo was updated!');
    },
    onError: (error) => {
      console.error(error);
      messageError(error?.message);
    },
    onSettled: () => {
      queryClient.invalidateQueries(['todos'])
    }
  });
}

export function useDeleteTodo() {
  const queryClient = useQueryClient();

  return useMutation(deleteTodo, {
    onSuccess: () => {
      messageSuccess('Todo was deleted!');
    },
    onError: (error) => {
      console.error(error);
      messageError(error?.message);
    },
    onSettled: () => {
      queryClient.invalidateQueries(['todos'])
    }
  });
}

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
        body: JSON.stringify(todo),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((res) => res.json());
}

export function updateTodo(todo) {
    return fetch(TODOS_URL + todo.id, {
        method: 'PUT',
        body: JSON.stringify(todo),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((res) => res.json());
}

export function deleteTodo(id) {
    return fetch(TODOS_URL + id, { method: 'DELETE' }).then((res) => res.json());
}