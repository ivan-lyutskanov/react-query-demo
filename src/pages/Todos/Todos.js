import { useLoadingSpinner } from '../../utils/hooks/useLoadingSpinner';
import { useTodos } from "../../services/Todos.service";
import { messageError } from "../../utils/notifications";
import AddTodo from '../../components/containers/SingleTodo/AddTodo';
import SingleTodo from "../../components/containers/SingleTodo/SingleTodo";

export default function Todos() {

  const { data: todos, isLoading, isFetching, isError, error } = useTodos(); 

  useLoadingSpinner(isLoading);

  if (isError) messageError(error?.message);

  return (
    <section className="page-content">
      <header>
        <h1>Todos {isFetching ? '...' : ''}</h1>
        <AddTodo />
      </header>
      { todos && todos.map(todo=> (
        <SingleTodo key={todo.id} todo={todo} />
      ))}
    </section>
  )
}
