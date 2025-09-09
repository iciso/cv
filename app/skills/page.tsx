import Link from "next/link"
import { ArrowLeft, ExternalLink, Mail, Linkedin, Github, Twitter, Facebook, Code } from "lucide-react"

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-teal-700 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center text-white hover:text-teal-200">
              <ArrowLeft className="mr-2" size={20} />
              <span>Back to CV</span>
            </Link>
            <h1 className="text-2xl md:text-3xl font-bold">IT Certifications</h1>
            <div className="w-24"></div> {/* Spacer for alignment */}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-teal-700 mb-6">IT Certifications</h2>
          <p className="text-gray-700 mb-6">
            Dr. Rafique has completed 27 programming language courses at SoloLearn since 2019,
            demonstrating his commitment to continuous learning and technical skill development.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="border rounded-lg overflow-hidden">
                <div className="bg-teal-700 text-white p-4">
                  <h3 className="text-xl font-bold">{cert.name}</h3>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 mb-4">{cert.description}</p>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-teal-600 hover:text-teal-800"
                  >
                    View Certificate <ExternalLink className="ml-1" size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-teal-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <a
              href="mailto:rafique@the-constellation.org"
              className="text-white hover:text-teal-200 flex items-center gap-1"
            >
              <Mail size={16} /> Email
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-essa-rafique-96b64b15/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-teal-200 flex items-center gap-1"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href="https://github.com/iciso"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-teal-200 flex items-center gap-1"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href="https://www.facebook.com/emrafi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-teal-200 flex items-center gap-1"
            >
              <Facebook size={16} /> Facebook
            </a>
            <a
              href="https://twitter.com/tmc7784"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-teal-200 flex items-center gap-1"
            >
              <Twitter size={16} /> Twitter
            </a>
            <a
              href="https://www.sololearn.com/Profile/19469613"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-teal-200 flex items-center gap-1"
            >
              <Code size={16} /> SoloLearn
            </a>
          </div>
          <div className="text-center">
            <p>&copy; {new Date().getFullYear()} Dr. Essa Mohamed Rafique. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const certifications = [
  {
    name: "Ethical AI Foundations",
    description: "Principles of responsible, safe, and ethical GenAI use to mitigate risks and complexities of GenAI systems.",
    url: "https://www.sololearn.com/Certificate/1141-19469613/jpg",
  },
  {
    name: "Research with AI",
    description: "Integration of AI tools into the research process to enhance research efficiency and effectiveness.",
    url: "https://www.sololearn.com/certificates/CC-B1BGYLTS",  
  },
  {
    name: "Visualize Data with AI",
    description: "AI Skills to effectively communicate data insights through engaging visualizations and compelling narratives.",
    url: "https://www.sololearn.com/certificates/CC-HMZ87SGS",
  },
  {
    name: "Prompt Engineering",
    description: "Crafting precise prompts to help generative AI models correctly perform a wide range of tasks.",
    url: "https://www.sololearn.com/certificates/CC-HL9BZKEL",
  },
  {
    name: "Project Planning with AI",
    description: "AI techniques to manage tasks, estimate costs and timelines, optimize resources, and proactively analyze and mitigate risks.",
    url: "https://www.sololearn.com/certificates/CC-7DXFZPKR",
  },
  {
    name: "Generative AI in Practice",
    description: "AI techniques that create new content and ideas, like images and videos, and also reuse them.",
    url: "https://www.sololearn.com/certificates/CC-J89AVCVT",
  },
   {
    name: "Data Analytics with AI",
    description: "AI techniques that collect, process, and interpret data to extract actionable insights.",
    url: "https://www.sololearn.com/en/certificates/CC-RPU1079M",
  },
   {
    name: "Vibe Coding",
    description: "Using natural language prompts to instruct AI to generate, refine, and debug App codes.",
    url: "https://www.sololearn.com/en/certificates/CC-RFSLWF9V",
  },
     {
    name: "Responsive Web Design",
    description: "Techniques for creating websites that work on all devices and screen sizes.",
    url: "https://www.sololearn.com/Certificate/1162-19469613/jpg",
  },
   {
    name: "Web Development Fundamentals",
    description: "Comprehensive course covering the basics of web development technologies and practices.",
    url: "https://www.sololearn.com/Certificate/1141-19469613/jpg",
  },
    {
    name: "JavaScript",
    description: "Core JavaScript programming concepts, functions, objects, DOM manipulation, and more.",
    url: "https://www.sololearn.com/certificates/course/en/19469613/1024/landscape/png",
  },
  {
    name: "HTML",
    description: "HTML5 markup language for structuring web content and documents.",
    url: "https://www.sololearn.com/Certificate/1014-19469613/jpg",
  },
  {
    name: "CSS",
    description: "Cascading Style Sheets for styling and layout of web pages.",
    url: "https://www.sololearn.com/Certificate/1023-19469613/jpg",
  },
  {
    name: "PHP",
    description: "Server-side scripting language designed for web development.",
    url: "https://www.sololearn.com/Certificate/1059-19469613/jpg",
  },
  {
    name: "Game Development with JS",
    description: "Creating interactive games using JavaScript and HTML5 Canvas.",
    url: "https://www.sololearn.com/Certificate/1140-19469613/jpg",
  },
  {
    name: "Coding for Marketers",
    description: "Programming fundamentals for marketing professionals.",
    url: "https://www.sololearn.com/Certificate/1165-19469613/jpg",
  },
  {
    name: "Angular + NestJS",
    description: "Frontend and backend JavaScript frameworks for building web applications.",
    url: "https://www.sololearn.com/Certificate/1092-19469613/jpg",
  },
  {
    name: "jQuery",
    description: "JavaScript library designed to simplify HTML DOM manipulation.",
    url: "https://www.sololearn.com/Certificate/1082-19469613/jpg",
  },
  {
    name: "React & Redux",
    description: "JavaScript library for building user interfaces with state management.",
    url: "https://www.sololearn.com/Certificate/1097-19469613/jpg",
  },
  {
    name: "Kotlin",
    description: "Modern programming language for Android app development.",
    url: "https://www.sololearn.com/certificates/course/en/19469613/1160/landscape/png",
  },
  {
    name: "Go",
    description: "Programming language designed for simplicity, reliability, and efficiency.",
    url: "https://www.sololearn.com/certificates/course/en/19469613/1164/landscape/png",
  },
  {
    name: "Ruby",
    description: "Dynamic, object-oriented programming language focused on simplicity.",
    url: "https://www.sololearn.com/Certificate/1081-19469613/jpg",
  },
  {
    name: "Python for Beginners",
    description: "Introduction to Python programming language fundamentals.",
    url: "https://www.sololearn.com/certificates/course/en/19469613/1157/landscape/png",
  },
  {
    name: "Python for Data Science",
    description: "Using Python for data analysis, visualization, and machine learning.",
    url: "https://www.sololearn.com/certificates/course/en/19469613/1161/landscape/png",
  },
  {
    name: "Python Data Structures",
    description: "Implementation and usage of data structures in Python.",
    url: "https://www.sololearn.com/certificates/course/en/19469613/1159/landscape/png",
  },
  {
    name: "Python for Finance",
    description: "Applying Python programming to financial analysis and modeling.",
    url: "https://www.sololearn.com/Certificate/1139-19469613/jpg",
  },
  {
    name: "Intermediate Python",
    description: "Advanced Python concepts including generators, decorators, and more.",
    url: "https://www.sololearn.com/certificates/course/en/19469613/1158/landscape/png",
  },
  {
    name: "Python Core",
    description: "Comprehensive course covering all essential Python programming concepts.",
    url: "https://www.sololearn.com/certificates/course/en/19469613/1073/landscape/png",
  },
  {
    name: "Data Science",
    description: "Fundamentals of data science including statistics, visualization, and analysis.",
    url: "https://www.sololearn.com/certificates/course/en/19469613/1093/landscape/png",
  },
  {
    name: "R",
    description: "Programming language for statistical computing and graphics.",
    url: "https://www.sololearn.com/certificates/course/en/19469613/1147/landscape/png",
  },
]
