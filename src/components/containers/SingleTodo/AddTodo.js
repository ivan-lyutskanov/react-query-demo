import { useCreateTodo } from  '../../../services/Todos.service';

const newTodo = {
    title: 'New todo title',
    completed: false,
}

export default function AddTodo() {

  const {mutate: createTodo } = useCreateTodo(newTodo)

  return (
    <button onClick={() => createTodo(newTodo)}>+ New Todo</button>
  )
}
