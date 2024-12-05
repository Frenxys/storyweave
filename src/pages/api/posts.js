export default function handler(req, res) {
    if (req.method === 'GET') {
      const posts = [
        { id: 1, title: 'Welcome to StoryWeave!', slug: 'welcome' },
        { id: 2, title: 'Your First Collaborative Blog', slug: 'collaborative-blog' },
      ];
      res.status(200).json(posts);
    } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  