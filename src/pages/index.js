import Link from 'next/link';

export default function Home() {
  const posts = [
    { id: 1, title: 'Welcome to StoryWeave!', slug: 'welcome', description: 'Discover the power of collaborative blogging.' },
    { id: 2, title: 'Your First Collaborative Blog', slug: 'collaborative-blog', description: 'Learn how to create a shared storytelling platform.' },
    { id: 3, title: 'Tips for Writing Engaging Stories', slug: 'writing-tips', description: 'Master the art of storytelling with these expert tips.' },
    { id: 4, title: 'Monetize Your Blog Effectively', slug: 'monetize-blog', description: 'Strategies to earn from your content in 2024.' },
    { id: 5, title: 'Collaborative Writing Tools', slug: 'writing-tools', description: 'Explore the best tools for team writing.' },
    { id: 6, title: 'Building a Community Around Your Blog', slug: 'blog-community', description: 'Foster connections and grow your audience.' },
    { id: 7, title: 'SEO for Bloggers', slug: 'seo-tips', description: 'Optimize your blog for search engines.' },
    { id: 8, title: 'Overcoming Writer’s Block', slug: 'writers-block', description: 'Practical tips to keep your creativity flowing.' },
    { id: 9, title: 'Designing Your Blog Layout', slug: 'blog-layout', description: 'Create a stunning design for your blog.' },
  ];

  return (
    <div className="container">
      <h1>StoryWeave</h1>
      <p>Un blog dinamico con funzionalità collaborative e supporto alla monetizzazione dei contenuti. Connettiti, crea e condividi storie.</p>
      <div>
        {posts.map((post) => (
          <div key={post.id} className="card">
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <Link href={`/blog/${post.slug}`}>Leggi di più</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
