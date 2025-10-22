import { useState, useEffect } from "react";
import Card from "../components/Card";

const ApiData = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const filteredPosts = posts.filter(post => post.title.includes(search));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Posts</h2>
      <input
        type="text"
        placeholder="Search posts..."
        className="border rounded px-2 py-1 mb-4 w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPosts.map(post => (
          <Card key={post.id} title={post.title}>
            <p>{post.body}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ApiData;
