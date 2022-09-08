import PrintJSON from "../../shared/PrintJSON/PrintJSON"
import {updatePost, deletePost} from '../../../services/Posts.service'

const editedPost = {
  title: 'Edited post title',
  body: 'Edited post body'
}

export default function SinglePost({post, onMutateCb}) {

  const onUpdate = () => updatePost(post.id, editedPost).then(() => onMutateCb && onMutateCb()).catch((err) => console.error(err))
  const onDelete = () => deletePost(post.id).then(() => onMutateCb && onMutateCb()).catch((err) => console.error(err))

  return (
    <section className="SinglePost mb-3">
      <PrintJSON data={post} />
      <button className='mr-2' onClick={onUpdate}>Edit</button> 
      <button className='warn-bg' onClick={onDelete}>Delete</button>
    </section>
  )
}
