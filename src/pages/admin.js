import { useState, useEffect } from 'react';

export default function AdminPage() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', slug: '' });

  useEffect(() => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Errore nel recupero dei post:', error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleAddPost = async () => {
    if (!newPost.title || !newPost.slug) {
      alert('Compila tutti i campi.');
      return;
    }

    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });

      if (res.ok) {
        const createdPost = await res.json();
        setPosts([...posts, createdPost]);
        setNewPost({ title: '', slug: '' });
      } else {
        const errorData = await res.json();
        alert(`Errore: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Errore nell’aggiunta del post:', error);
    }
  };

  const handleDeletePost = async (id) => {
    try {
      const res = await fetch('/api/posts', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      if (res.ok) {
        setPosts(posts.filter((post) => post.id !== id));
      } else {
        alert('Errore nell’eliminazione del post.');
      }
    } catch (error) {
      console.error('Errore nell’eliminazione del post:', error);
    }
  };

  return (
    <div className="container">
      <h1>Admin Page</h1>
      <p>Gestisci i tuoi post: aggiungi o elimina quelli esistenti.</p>

      <div className="form-group">
        <input
          type="text"
          name="title"
          placeholder="Titolo del post"
          value={newPost.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="slug"
          placeholder="Slug del post"
          value={newPost.slug}
          onChange={handleInputChange}
        />
        <button onClick={handleAddPost}>Aggiungi Post</button>
      </div>

      <div>
        <h2>Post Esistenti</h2>
        {posts.map((post) => (
          <div key={post.id} className="card">
            <h3>{post.title}</h3>
            <p>Slug: {post.slug}</p>
            <button onClick={() => handleDeletePost(post.id)}>Elimina</button>
          </div>
        ))}
      </div>
    </div>
  );
}
