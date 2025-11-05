import { 
  FadeIn, 
  SlideIn, 
  ScaleIn, 
  HoverScale, 
  MagneticButton 
} from "../components/animations";

export default function Contact() {
  const contactMethods = [
    {
      type: "Email",
      value: "sachinjangir1319@gmail.com",
      link: "mailto:sachinjangir1319@gmail.com",
      icon: "📧"
    },
    {
      type: "LinkedIn",
      value: "sachin jangir",
      link: "https://www.linkedin.com/in/sachin-jangir-1a8b94299/",
      icon: "💼"
    }
  ];

  return (
    <section className="page min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <FadeIn delay={0.1} direction="up">
          <h1 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h1>
        </FadeIn>
        
        <SlideIn delay={0.2} direction="up" distance={30}>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Feel free to reach out via email or LinkedIn. I'm always interested in new opportunities and collaborations.
          </p>
        </SlideIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {contactMethods.map((method, index) => (
            <ScaleIn key={method.type} delay={0.3 + index * 0.1} scale={0.9}>
              <MagneticButton strength={0.1}>
                <HoverScale scale={1.02}>
                  <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300 text-center">
                    <div className="text-4xl mb-4">{method.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{method.type}</h3>
                    <a 
                      href={method.link} 
                      target={method.type === "LinkedIn" ? "_blank" : "_self"}
                      rel={method.type === "LinkedIn" ? "noreferrer" : ""}
                      className="text-blue-600 hover:text-purple-600 transition-colors duration-300 break-all"
                    >
                      {method.value}
                    </a>
                  </div>
                </HoverScale>
              </MagneticButton>
            </ScaleIn>
          ))}
        </div>

        <FadeIn delay={0.6} direction="up">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center ">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Let's Connect!</h2>
            <p className="text-gray-600 mb-6">
              I'm always excited to discuss data science projects, machine learning opportunities, 
              or just have a chat about technology and innovation.
            </p>
            <MagneticButton strength={0.2}>
              <HoverScale scale={1.05}>
                <a 
                  href="mailto:sachinjangir1319@gmail.com"
                  className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Send Email
                </a>
              </HoverScale>
            </MagneticButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
