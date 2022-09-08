import PrintJSON from '../../shared/PrintJSON/PrintJSON'

export default function SingleTodo({todo, onMutateCb}) {
  return (
    <section className='SingleTodo mb-3'>
      <PrintJSON data={todo} />
      <button className='mr-2'>Edit</button> 
      <button className='warn-bg'>Delete</button>
    </section>
  )
}
