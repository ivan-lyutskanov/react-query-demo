import { useAsync } from '../../utils/hooks/useAsync';
import { useLoadingSpinner } from '../../utils/hooks/useLoadingSpinner';
import { getAllPosts } from  '../../services/Posts.service';
import { messageError } from '../../utils/notifications';
import SinglePost from '../../components/containers/SinglePost/SinglePost';
import AddPost from '../../components/containers/SinglePost/AddPost';

export default function Posts() {

  const { data: posts, loading, error, refetch } = useAsync(getAllPosts); 

  useLoadingSpinner(loading);

  if (error) messageError(error);

  return (
    <section className='page-content'>
      <header>
      <h1>Posts</h1>
      <AddPost onMutateCb={refetch}/>
      </header>
      { posts && posts.map(post => (
        <SinglePost key={post.id} post={post} onMutateCb={refetch} />
      ))}
    </section>
  )
}