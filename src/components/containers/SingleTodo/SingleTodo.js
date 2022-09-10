import PrintJSON from '../../shared/PrintJSON/PrintJSON'
import {useUpdateTodo, useDeleteTodo} from '../../../services/Todos.service'



export default function SingleTodo({todo}) {
  const {mutate: updateTodo} = useUpdateTodo();
  const {mutate: deleteTodo} = useDeleteTodo();
  return (
    <section className='SingleTodo mb-3'>
      <PrintJSON data={todo} />
      <button className='mr-2' onClick={() => updateTodo({id: todo.id, title: 'Edited title', completed: true})}>Edit</button> 
      <button className='warn-bg' onClick={() => deleteTodo(todo.id)}>Delete</button>
    </section>
  )
}
