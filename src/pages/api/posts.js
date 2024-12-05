let posts = [
  { id: 1, title: 'Welcome to StoryWeave!', slug: 'welcome' },
  { id: 2, title: 'Your First Collaborative Blog', slug: 'collaborative-blog' },
];

export default function handler(req, res) {
  switch (req.method) {
    case 'GET':
      res.status(200).json(posts);
      break;
    case 'POST': {
      const { title, slug } = req.body;
      if (!title || !slug) {
        return res.status(400).json({ error: 'Titolo e slug sono obbligatori.' });
      }
      const newPost = { id: posts.length + 1, title, slug };
      posts.push(newPost);
      res.status(201).json(newPost);
      break;
    }
    case 'DELETE': {
      const { id } = req.body;
      posts = posts.filter((post) => post.id !== id);
      res.status(200).json({ message: 'Post eliminato con successo.' });
      break;
    }
    default:
      res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
