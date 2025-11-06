export async function fetchPosts(page = 1, limit = 6, query = '') {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) throw new Error('Failed to fetch posts');
  const data = await response.json();
  const filtered = query ? data.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) : data;
  const start = (page - 1) * limit;
  return { posts: filtered.slice(start, start + limit), total: filtered.length };
}