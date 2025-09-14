import { FadeIn } from "../components/animations";

export default function Home() {
  return (
    <section className="page">
      <FadeIn delay={0.15} direction="up">
        <h1>Hi, I'm a Data Scientist</h1>
      </FadeIn>
      <FadeIn delay={0.25} direction="up">
        <p>
          My name is Sachin Jangir from Rajasthan.
          I have completed my Bachelor of Computer Applications (BCA) and I am currently pursuing my Master of Computer Applications (MCA).
          I have a strong interest in Data Science and enjoy working with data to extract meaningful insights,
          build predictive models, and solve real-world problems.

          With my academic background in computer applications and growing expertise in data science,
          I am developing skills in areas such as machine learning, data analysis, and statistical modeling.
          I am passionate about continuous learning and applying my knowledge to practical projects,
          aiming to build a career in data-driven decision making and artificial intelligence.
        </p>
      </FadeIn>
    </section>
  );
}
