import { useAsync } from "../../utils/hooks/useAsync";
import { getAllTodos } from "../../services/Todos.service";
import SingleTodo from "../../components/containers/SingleTodo/SingleTodo";

export default function Todos() {

  const { data: todos, loading, error, refetch } = useAsync(getAllTodos); 

  if (loading) return <div>Loading...</div>

  if (error) console.warn(error);

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
