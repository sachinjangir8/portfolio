import { FadeIn } from "../components/animations";

export default function Home() {
  return (
    <section className="page">
      <FadeIn delay={0.15} direction="up">
        <h1>Hi, I'm a Data Scientist</h1>
      </FadeIn>
      <FadeIn delay={0.25} direction="up">
        <p>
          I build data-driven products using Python, SQL, and ML. This portfolio
          showcases my resume, selected projects, and blog posts.
        </p>
      </FadeIn>
    </section>
  );
}
