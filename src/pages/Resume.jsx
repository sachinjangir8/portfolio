export default function Resume() {
  return (
    <section className="page">
      <div className="resume-hero">
        <img src="/profile.jpg" alt="Sachin" className="avatar" />
        <div>
          <h1>Sachin</h1>
          <p className="lead">
            Data Scientist focused on turning data into measurable business
            impact. I design and ship end-to-end analytics and ML solutions
            across the full lifecycle—from data pipelines and feature
            engineering to model deployment and monitoring. I completed a BCA at
            Maharaja Ganga Singh University and I'm currently pursuing an MCA in
            Data Science at Lovely Professional University, Punjab.
          </p>
          <p className="muted">Rajasthan, India</p>
          <p className="muted">Python • SQL • ML • MLOps • Visualization</p>
          <div className="actions">
            <a className="btn" href="/resume.pdf" download>
              Download Resume (PDF)
            </a>
            <a
              className="btn secondary"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View in Browser
            </a>
          </div>
        </div>
      </div>

      <ul className="resume">
        <li>
          <strong>Experience</strong>
          <ul>
            <li>Data Scientist at Company ABC — 2022–Present</li>
            <li>Data Analyst at Company XYZ — 2020–2022</li>
          </ul>
        </li>
        <li>
          <strong>Education</strong>
          <ul>
            <li>B.C.A., Maharaja Ganga Singh University</li>
            <li>
              M.C.A. (Data Science), Lovely Professional University, Punjab —
              Pursuing
            </li>
          </ul>
        </li>
        <li>
          <strong>Skills</strong>
          <ul>
            <li>Python, SQL, R, Scikit-Learn, TensorFlow, PyTorch, Airflow</li>
          </ul>
        </li>
        <li>
          <strong>Certifications</strong>
          <ul>
            <li>Google Data Analytics (example)</li>
            <li>AWS Certified Cloud Practitioner (example)</li>
          </ul>
        </li>
      </ul>
    </section>
  );
}
