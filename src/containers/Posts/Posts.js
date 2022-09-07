import { useAsync } from '../../utils/hooks/useAsync';
import { getAllPosts } from  '../../services/Posts.service';
import PrintJSON from '../../components/PrintJSON/PrintJSON';

export default function Posts() {

  const { data, loading, error, refetch } = useAsync(getAllPosts); 

  if (loading) return <div>Loading...</div>

  if (error) console.warn(error);

  return (
    <>
      <div onClick={() => refetch()}>Posts</div>
      <PrintJSON data={data} />
    </>

  )
}