import { useAsync } from '../../utils/hooks/useAsync';
import { getAllPosts } from  '../../services/Posts.service';
import SinglePost from '../../components/containers/SinglePost/SinglePost';
import AddPost from '../../components/containers/SinglePost/AddPost';

export default function Posts() {

  const { data: posts, loading, error, refetch } = useAsync(getAllPosts); 

  if (loading) return <div>Loading...</div>

  if (error) console.warn(error);

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