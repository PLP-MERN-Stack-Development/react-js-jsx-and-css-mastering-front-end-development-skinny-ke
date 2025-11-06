import React, { useState, useEffect } from 'react';
import { fetchPosts } from '../api/fetchPosts';
import Card from '../components/Card';
import Button from '../components/Button';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const { posts } = await fetchPosts(page, 6, query);
        setPosts(posts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [page, query]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Posts</h2>
      <input
        type="text"
        placeholder="Search posts..."
        className="border px-4 py-2 rounded mb-4 w-full dark:bg-gray-700"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map(p => <Card key={p.id} title={p.title} body={p.body} />)}
      </div>
      <div className="flex justify-center gap-4 mt-6">
        <Button variant="secondary" disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</Button>
        <Button variant="primary" onClick={() => setPage(page + 1)}>Next</Button>
      </div>
    </div>
  );
};

export default Posts;