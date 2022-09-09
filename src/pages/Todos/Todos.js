import { useAsync } from "../../utils/hooks/useAsync";
import { useLoadingSpinner } from '../../utils/hooks/useLoadingSpinner';
import { getAllTodos } from "../../services/Todos.service";
import { messageError } from "../../utils/notifications";
import SingleTodo from "../../components/containers/SingleTodo/SingleTodo";

export default function Todos() {

  const { data: todos, loading, error, refetch } = useAsync(getAllTodos); 

  useLoadingSpinner(loading);

  if (error) messageError(error);

  return (
    <section className="page-content">
      <header>
        <h1>Todos</h1>
        <button>+ New Todo</button>
      </header>
      { todos && todos.map(todo=> (
        <SingleTodo key={todo.id} todo={todo} onMutateCb={refetch} />
      ))}
    </section>

  )
}
