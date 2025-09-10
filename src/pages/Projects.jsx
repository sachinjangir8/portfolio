import projects from "../shared/projects";

export default function Projects() {
  return (
    <section className="page">
      <h1>Projects</h1>
      <div className="grid">
        {projects.map((p) => (
          <article key={p.id} className="card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            {p.link && (
              <a href={p.link} target="_blank" rel="noreferrer">
                View
              </a>
            )}
            {p.tags?.length ? (
              <div className="tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
