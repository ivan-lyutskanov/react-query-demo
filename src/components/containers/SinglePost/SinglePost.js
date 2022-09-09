import PrintJSON from "../../shared/PrintJSON/PrintJSON"
import {updatePost, deletePost} from '../../../services/Posts.service'
import { messageSuccess, messageError } from "../../../utils/notifications"

const editedPost = {
  title: 'Edited post title',
  body: 'Edited post body'
}

export default function SinglePost({post, onMutateCb}) {

  const onSuccess = (text) => {
    onMutateCb && onMutateCb()
    messageSuccess(text)
  }
  const onUpdate = () => updatePost(post.id, editedPost)
                          .then(() => onSuccess(`Post ${post.id} was updated`))
                          .catch((err) => messageError(err?.message))

  const onDelete = () => deletePost(post.id)
                          .then(() => onSuccess(`Post ${post.id} was deleted`))
                          .catch((err) => messageError(err?.message))

  return (
    <section className="SinglePost mb-3">
      <PrintJSON data={post} />
      <button className='mr-2' onClick={onUpdate}>Edit</button> 
      <button className='warn-bg' onClick={onDelete}>Delete</button>
    </section>
  )
}
