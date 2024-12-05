import Link from 'next/link';

export default function Home() {
  const posts = [
    { id: 1, title: 'Welcome to StoryWeave!', slug: 'welcome' },
    { id: 2, title: 'Your First Collaborative Blog', slug: 'collaborative-blog' },
  ];

  return (
    <div>
      <h1>StoryWeave</h1>
      <p>Un blog dinamico con funzionalità collaborative e monetizzazione.</p>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
