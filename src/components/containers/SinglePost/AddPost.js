import { createPost } from  '../../../services/Posts.service';

export default function AddPost({onMutateCb}) {

  const onCreate = () => createPost({ title: 'New post title', body: 'New post body' })
                            .then(() => onMutateCb && onMutateCb())
                            .catch((err) => console.error(err))

  return <button onClick={onCreate}>+ New Post</button>
}
