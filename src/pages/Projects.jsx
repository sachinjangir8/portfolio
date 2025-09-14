import projects from "../shared/projects";
import { 
  FadeIn, 
  SlideIn, 
  ScaleIn, 
  HoverScale, 
  Stagger 
} from "../components/animations";

export default function Projects() {
  return (
    <section className="page min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0.1} direction="up">
          <h1 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Projects
          </h1>
        </FadeIn>
        
        <SlideIn delay={0.2} direction="up" distance={30}>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in data science and machine learning.
          </p>
        </SlideIn>

        <Stagger staggerChildren={0.15} delayChildren={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <HoverScale key={project.id} scale={1.03}>
                <ScaleIn delay={index * 0.1} scale={0.9}>
                  <article className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{project.title}</h3>
                    <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
                    
                    {project.link && (
                      <div className="mb-4">
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noreferrer"
                          className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300"
                        >
                          View Project
                        </a>
                      </div>
                    )}
                    
                    {project.tags?.length ? (
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span 
                            key={tag} 
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </article>
                </ScaleIn>
              </HoverScale>
            ))}
          </div>
        </Stagger>
      </div>
    </section>
  );
}
