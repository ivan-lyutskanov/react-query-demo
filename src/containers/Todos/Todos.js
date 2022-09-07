import { useAsync } from "../../utils/hooks/useAsync";
import { getAllTodos } from "../../services/Todos.service";
import PrintJSON from "../../components/PrintJSON/PrintJSON";

export default function Todos() {

  const { data, loading, error, refetch } = useAsync(getAllTodos); 

  if (loading) return <div>Loading...</div>

  if (error) console.warn(error);

  return (
    <>
      <div onClick={() => refetch()}>Todos</div>
      <PrintJSON data={data} />
    </>

  )
}
