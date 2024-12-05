import { useRouter } from 'next/router';

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Post: {slug}</h1>
      <p>Contenuto dinamico del blog sarà qui...</p>
    </div>
  );
}
