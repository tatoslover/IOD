import { Outlet, useParams, Link, useSearchParams } from "react-router-dom";
import { useData } from "../hooks/useData";

export default function PostsPage() {
  return (
    <div className="Posts">
      <h1>Posts</h1>
      <div className="intro-section">
        <p>
          Dynamic routing and query parameters demo. Posts fetched from JSONPlaceholder API.
        </p>
      </div>
      <Outlet />
    </div>
  );
}

export function PostList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const limit = searchParams.get('limit') ? searchParams.get('limit') : 5;
  const postsData = useData(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);

  const handleChangeLimit = (e) => {
    setSearchParams({ limit: e.target.value });
  };

  const postList = postsData?.map((post) => (
    <li key={post.id}>
      <Link to={"/posts/" + post.id}>
        Post #{post.id}: {post.title}
      </Link>
    </li>
  ));

  return (
    <div className="PostList">
      <h3>Posts List</h3>
      <div className="intro-section">
        <p>
          <strong>Query Parameters:</strong> Change post limit below. Watch URL update with <code>?limit=10</code>.
        </p>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="limit-select" style={{ marginRight: '0.5rem', fontWeight: '500' }}>
          Posts to show:
        </label>
        <select
          id="limit-select"
          value={limit}
          onChange={handleChangeLimit}
          style={{
            padding: '0.5rem',
            borderRadius: '4px',
            border: '1px solid #ddd',
            fontSize: '1rem'
          }}
        >
          <option value={5}>5 posts</option>
          <option value={10}>10 posts</option>
          <option value={20}>20 posts</option>
        </select>
      </div>

      {postsData ? (
        <ul className="posts-list" style={{
          listStyle: 'none',
          padding: 0
        }}>
          {postList}
        </ul>
      ) : (
        <p>Loading posts...</p>
      )}

      <div className="intro-section" style={{ marginTop: '2rem' }}>
        <h4>Quick Links</h4>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link to='/posts?limit=5' className="nav-button">5 Posts</Link>
          <Link to='/posts?limit=10' className="nav-button">10 Posts</Link>
          <Link to='/posts?limit=20' className="nav-button">20 Posts</Link>
        </div>
      </div>
    </div>
  );
}

export function Post() {
  const { id } = useParams();
  const post = useData(`https://jsonplaceholder.typicode.com/posts/${id}`);

  const getNextPostId = () => {
    const currentId = parseInt(id);
    return currentId < 100 ? currentId + 1 : 1;
  };

  return (
    <div className="Post">
      <div className="intro-section">
        <p>
          <strong>Dynamic Route:</strong> Post loaded using ID from URL. <code>useParams</code> extracts <code>:id</code> from <code>/posts/{id}</code>.
        </p>
      </div>

      {post ? (
        <div className="post-content">
          <h3>Post #{post.id}: {post.title}</h3>
          <div className="post-body" style={{
            background: '#f8f9fa',
            padding: '1.5rem',
            borderRadius: '8px',
            marginBottom: '1.5rem',
            borderLeft: '4px solid rgb(210, 105, 30)'
          }}>
            <p>{post.body}</p>
          </div>

          <div className="post-navigation" style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            marginTop: '2rem'
          }}>
            <Link to={`/posts/${getNextPostId()}`} className="nav-button">
              Next Post →
            </Link>
            <Link to="/posts" className="nav-button">
              ← Back to Posts
            </Link>
          </div>
        </div>
      ) : (
        <div style={{
          textAlign: 'center',
          padding: '3rem',
          background: '#f8f9fa',
          borderRadius: '8px'
        }}>
          <p>Loading post...</p>
          <div style={{
            width: '40px',
            height: '40px',
            border: '4px solid #f3f3f3',
            borderTop: '4px solid rgb(210, 105, 30)',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '1rem auto'
          }}></div>
        </div>
      )}
    </div>
  );
}
