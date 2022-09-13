import { createPost } from  '../../../services/Posts.service';
import {messageSuccess } from '../../../utils/notifications';

export default function AddPost({onMutateCb}) {

  const onSuccess = (text) => {
    onMutateCb && onMutateCb()
    messageSuccess(text)
  }

  const onCreate = () => createPost({ title: 'New post title', body: 'New post body' })
                            .then(() =>onSuccess('New Post'))
                            .catch((err) => console.error(err))

  return <button onClick={onCreate}>+ New Post</button>
}
