import { createPost } from  '../../../services/Posts.service';

const newPost = {
    title: 'New post title',
    body: 'New post body'
}

export default function AddPost({onMutateCb}) {

  const onCreate = () => createPost(newPost).then(() => onMutateCb && onMutateCb()).catch((err) => console.error(err))

  return (
    <button onClick={onCreate}>+ New Post</button>
  )
}
