import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Errore nel recupero dei post:', error));
  }, []);

  return (
    <div className="container">
      <h1>StoryWeave</h1>
      <p>Un blog dinamico con funzionalità collaborative e supporto alla monetizzazione dei contenuti. Connettiti, crea e condividi storie.</p>
      <div>
        {posts.map((post) => (
          <div key={post.id} className="card">
            <h2>{post.title}</h2>
            <p>Slug: {post.slug}</p>
            <Link href={`/blog/${post.slug}`}>Leggi di più</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
