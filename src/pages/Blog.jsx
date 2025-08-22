import posts from '../shared/posts'

export default function Blog() {
  return (
    <section className="page">
      <h1>Blog</h1>
      <ul className="post-list">
        {posts.map((post) => (
          <li key={post.slug} className="post-item">
            <h3>{post.title}</h3>
            <small>{post.date}</small>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}


