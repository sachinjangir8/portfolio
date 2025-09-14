import {
  FadeIn,
  SlideIn,
  ScaleIn,
  HoverScale,
  Stagger,
  Typewriter,
  ParallaxScroll,
  MagneticButton,
} from "../components/animations";

export default function Home() {
  const skills = [
    "Machine Learning",
    "Data Analysis",
    "Python Programming",
    "Statistical Modeling",
    "Data Visualization",
    "Deep Learning",
  ];

  return (
    <section className="page min-h-screen p-8">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <FadeIn delay={0.15} direction="up">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Hi, I'm a Data Scientist
          </h1>
        </FadeIn>

        <FadeIn delay={0.25} direction="up">
          <div className="text-2xl mb-8">
            <Typewriter
              text="Sachin Jangir"
              speed={100}
              className="font-semibold text-gray-800"
            />
          </div>
        </FadeIn>

        <SlideIn delay={0.35} direction="up" distance={50}>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            From Rajasthan, I have completed my Bachelor of Computer
            Applications (BCA) and I am currently pursuing my Master of Computer
            Applications (MCA). I have a strong interest in Data Science and
            enjoy working with data to extract meaningful insights, build
            predictive models, and solve real-world problems.
          </p>
        </SlideIn>
      </div>

      {/* Skills Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <FadeIn delay={0.45} direction="up">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            My Skills & Expertise
          </h2>
        </FadeIn>

        <Stagger staggerChildren={0.1} delayChildren={0.5}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <HoverScale key={index} scale={1.05}>
                <ScaleIn delay={index * 0.1} scale={0.9}>
                  <div className="bg-white rounded-lg shadow-lg p-6 text-center border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {skill}
                    </h3>
                  </div>
                </ScaleIn>
              </HoverScale>
            ))}
          </div>
        </Stagger>
      </div>

      {/* About Section */}
      <div className="max-w-4xl mx-auto mb-16">
        <ParallaxScroll speed={0.3}>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg">
            <FadeIn delay={0.6} direction="left">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                About My Journey
              </h2>
            </FadeIn>

            <SlideIn delay={0.7} direction="right" distance={100}>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                With my academic background in computer applications and growing
                expertise in data science, I am developing skills in areas such
                as machine learning, data analysis, and statistical modeling. I
                am passionate about continuous learning and applying my
                knowledge to practical projects.
              </p>
            </SlideIn>

            <FadeIn delay={0.8} direction="up">
              <p className="text-lg text-gray-600 leading-relaxed">
                I am aiming to build a career in data-driven decision making and
                artificial intelligence, where I can contribute to solving
                complex problems and making a meaningful impact through
                technology.
              </p>
            </FadeIn>
          </div>
        </ParallaxScroll>
      </div>

      {/* CTA Section */}
      <div className="max-w-2xl mx-auto text-center">
        <FadeIn delay={0.9} direction="up">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Let's Work Together
          </h2>
        </FadeIn>

        <ScaleIn delay={1.0} scale={0.8}>
          <MagneticButton strength={0.2}>
            <HoverScale scale={1.05}>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Get In Touch
              </button>
            </HoverScale>
          </MagneticButton>
        </ScaleIn>
      </div>
    </section>
  );
}
