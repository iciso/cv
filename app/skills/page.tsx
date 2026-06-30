import Link from "next/link"
import { ArrowLeft, Asterisk, ExternalLink, Mail, Linkedin, Github, Twitter, Facebook, Code, 
  BookOpen, Brain, Cpu, ChartBar, Database, Globe, Lightbulb, Monitor, Palette, 
  Play, Rocket, Search, Settings, Shield, Smartphone, Star, Trophy, Users, Workflow, Zap 
} from "lucide-react"

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
            <div className="w-24"></div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-teal-700 mb-6">IT Certifications (40 Courses)</h2>
          <p className="text-gray-700 mb-6">
            Dr. Rafique has completed 40+ courses (programming, AI, data science, web development) at SoloLearn and other platforms,
            demonstrating his commitment to continuous learning and technical skill development.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-teal-700 text-white p-4 flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-lg">
                    {cert.icon}
                  </div>
                  <h3 className="text-xl font-bold flex-1">{cert.name}</h3>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 mb-4">{cert.description}</p>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-teal-600 hover:text-teal-800"
                    >
                      View Certificate <ExternalLink className="ml-1" size={16} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer remains the same */}
      <footer className="bg-teal-800 text-white py-6">
        {/* ... existing footer ... */}
      </footer>
    </div>
  )
}

const certifications = [
  {
    name: "Web Development Fundamentals",
    description: "Comprehensive course covering the basics of web development technologies and practices.",
    url: "https://www.sololearn.com/Certificate/1141-19469613/jpg",
    icon: <Globe size={24} />,
  },
  {
    name: "JavaScript",
    description: "Core JavaScript programming concepts, functions, objects, DOM manipulation, and more.",
    url: "https://www.sololearn.com/certificates/course/en/19469613/1024/landscape/png",
    icon: <Code size={24} />,
  },
  {
    name: "HTML",
    description: "HTML5 markup language for structuring web content and documents.",
    url: "https://www.sololearn.com/Certificate/1014-19469613/jpg",
    icon: <Monitor size={24} />,
  },
  {
    name: "CSS",
    description: "Cascading Style Sheets for styling and layout of web pages.",
    url: "https://www.sololearn.com/Certificate/1023-19469613/jpg",
    icon: <Palette size={24} />,
  },
  {
    name: "Introduction to LLMs",
    description: "How Large Language Models are pivotal to creating innovative AI solutions.",
    url: "https://www.sololearn.com/certificates/CC-QRLGNX0E",
    icon: <Brain size={24} />,
  },
  {
    name: "Machine Learning for Beginners",
    description: "Know the basics of Machine Learning to start using Generative AI for training and testing machine learning models.",
    url: "https://www.sololearn.com/certificates/CC-1N5OBYM8",
    icon: <Cpu size={24} />,
  },
  {
    name: "Machine Learning",
    description: "Know the practical skills of Machine Learning to use Logistic Regression, Decision Trees, Random Forests, and Neural Network models.",
    url: "https://www.sololearn.com/certificates/CC-7WDI1D3A",
    icon: <Cpu size={24} />,
  },
  {
    name: "Prompt Engineering",
    description: "Crafting precise prompts to help generative AI models correctly perform a wide range of tasks.",
    url: "https://www.sololearn.com/certificates/CC-HL9BZKEL",
    icon: <Lightbulb size={24} />,
  },
  {
    name: "Project Planning with AI",
    description: "AI techniques to manage tasks, estimate costs and timelines, optimize resources, and proactively analyze and mitigate risks.",
    url: "https://www.sololearn.com/certificates/CC-7DXFZPKR",
    icon: <Settings size={24} />,
  },
  {
    name: "Generative AI in Practice",
    description: "AI techniques that create new content and ideas, like images and videos, and also reuse them.",
    url: "https://www.sololearn.com/certificates/CC-J89AVCVT",
    icon: <Zap size={24} />,
  },
  {
    name: "Responsive Web Design",
    description: "Techniques for creating websites that work on all devices and screen sizes.",
    url: "https://www.sololearn.com/Certificate/1162-19469613/jpg",
    icon: <Smartphone size={24} />,
  },
  {
    name: "Vibe Coding",
    description: "Using natural language prompts to instruct AI to generate, refine, and debug App codes.",
    url: "https://www.sololearn.com/en/certificates/CC-RFSLWF9V",
    icon: <Code size={24} />,
  },
  {
    name: "AI-Powered A/B Testing",
    description: "Learn to design experiments, interpret results, and leverage data to make informed data-driven decisions.",
    url: "https://www.sololearn.com/certificates/CC-AARAZPB8",
    icon: <Trophy size={24} />,
  },
  {
    name: "Data Analytics with AI",
    description: "AI techniques that collect, process, and interpret data to extract actionable insights.",
    url: "https://www.sololearn.com/en/certificates/CC-RPU1079M",
    icon: <Database size={24} />,
  },
  {
    name: "Thinking Creatively with AI",
    description: "Using AI for crafting a creative brief, seeking inspiration, and refining your ideas.",
    url: "https://www.sololearn.com/en/certificates/CC-R0TEOWDM",
    icon: <Lightbulb size={24} />,
  },
  {
    name: "Write with AI",
    description: "How LLMs seamlessly integrate AI tools into your creative workflow, making writing more efficient and innovative.",
    url: "https://www.sololearn.com/certificates/CC-GTFLXXMH",
    icon: <BookOpen size={24} />,
  },
  {
    name: "Social Media Marketing with AI",
    description: "Learn to identify target audience, set SMART goals, and choose the right platforms to maximize your impact.",
    url: "https://www.sololearn.com/certificates/CC-BMYIKWQY",
    icon: <Users size={24} />,
  },
  {
    name: "Search Engine Optimization(SEO) with AI",
    description: "Get the right audience using personas, reduce bounce rates, craft effective keywords, meta descriptions, and titles.",
    url: "https://www.sololearn.com/certificates/CC-YXRJBN7F",
    icon: <Search size={24} />,
  },
  {
    name: "Data Literacy with AI",
    description: "Methods of integrating AI tools and techniques to manage and analyze data.",
    url: "https://www.sololearn.com/certificates/CC-PZF1MZ2S",
    icon: <Database size={24} />,
  },
  {
    name: "Brainstorming with AI",
    description: "From idea generation to pitching, learn techniques and strategies to think outside the box.",
    url: "https://www.sololearn.com/certificates/CC-ZLES2HJU",
    icon: <Brain size={24} />,
  },
  {
    name: "Growth Mindset in the Age of AI",
    description: "Learn to recognize automatic reactions, regulate stress, adopt a growth mindset, think flexibly, and support others through change.",
    url: "https://www.sololearn.com/certificates/CC-T0DDRSWX",
    icon: <Star size={24} />,
  },
  {
    name: "Agentic Workflows",
    description: "Learn the design patterns that shape intelligent, reasoning-driven systems.",
    url: "https://www.sololearn.com/certificates/CC-VSQ5WRNV",
    icon: <Workflow size={24} />,
  },
   {
    name: "Meet Claude",
    description: "Become expert at building working tools in seconds, to reading screenshots and PDFs, to working on tasks across your files and apps",
    url: "https://www.sololearn.com/certificates/CC-SVOUXPRE",
    icon: <Asterisk size={24} />,
  },
  {
    name: "PHP",
    description: "Server-side scripting language designed for web development.",
    url: "https://www.sololearn.com/Certificate/1059-19469613/jpg",
    icon: <Code size={24} />,
  },
  {
    name: "Game Development with JS",
    description: "Creating interactive games using JavaScript and HTML5 Canvas.",
    url: "https://www.sololearn.com/Certificate/1140-19469613/jpg",
    icon: <Play size={24} />,
  },
  {
    name: "Coding for Marketers",
    description: "Programming fundamentals for marketing professionals.",
    url: "https://www.sololearn.com/Certificate/1165-19469613/jpg",
    icon: <Users size={24} />,
  },
  {
    name: "Angular + NestJS",
    description: "Frontend and backend JavaScript frameworks for building web applications.",
    url: "https://www.sololearn.com/Certificate/1092-19469613/jpg",
    icon: <Globe size={24} />,
  },
  {
    name: "jQuery",
    description: "JavaScript library designed to simplify HTML DOM manipulation.",
    url: "https://www.sololearn.com/Certificate/1082-19469613/jpg",
    icon: <Code size={24} />,
  },
  {
    name: "React & Redux",
    description: "JavaScript library for building user interfaces with state management.",
    url: "https://www.sololearn.com/Certificate/1097-19469613/jpg",
    icon: <Code size={24} />,
  },
  {
    name: "Kotlin",
    description: "Modern programming language for Android app development.",
    url: "https://www.sololearn.com/certificates/course/en/19469613/1160/landscape/png",
    icon: <Smartphone size={24} />,
  },
  {
    name: "Go",
    description: "Programming language designed for simplicity, reliability, and efficiency.",
    url: "https://www.sololearn.com/certificates/course/en/19469613/1164/landscape/png",
    icon: <Rocket size={24} />,
  },
  {
    name: "Ruby",
    description: "Dynamic, object-oriented programming language focused on simplicity.",
    url: "https://www.sololearn.com/Certificate/1081-19469613/jpg",
    icon: <Code size={24} />,
  },
  {
    name: "Python for Beginners",
    description: "Introduction to Python programming language fundamentals.",
    url: "https://www.sololearn.com/certificates/course/en/19469613/1157/landscape/png",
    icon: <Code size={24} />,
  },
  {
    name: "Python for Data Science",
    description: "Using Python for data analysis, visualization, and machine learning.",
    url: "https://www.sololearn.com/certificates/course/en/19469613/1161/landscape/png",
    icon: <Database size={24} />,
  },
  {
    name: "Python Data Structures",
    description: "Implementation and usage of data structures in Python.",
    url: "https://www.sololearn.com/certificates/course/en/19469613/1159/landscape/png",
    icon: <Database size={24} />,
  },
  {
    name: "Python for Finance",
    description: "Applying Python programming to financial analysis and modeling.",
    url: "https://www.sololearn.com/Certificate/1139-19469613/jpg",
    icon: <Database size={24} />,
  },
  {
    name: "Intermediate Python",
    description: "Advanced Python concepts including generators, decorators, and more.",
    url: "https://www.sololearn.com/certificates/course/en/19469613/1158/landscape/png",
    icon: <Code size={24} />,
  },
  {
    name: "Python Core",
    description: "Comprehensive course covering all essential Python programming concepts.",
    url: "https://www.sololearn.com/certificates/course/en/19469613/1073/landscape/png",
    icon: <Code size={24} />,
  },
  {
    name: "Data Science",
    description: "Fundamentals of data science including statistics, visualization, and analysis.",
    url: "https://www.sololearn.com/certificates/course/en/19469613/1093/landscape/png",
    icon: <Database size={24} />,
  },
  {
    name: "R",
    description: "Programming language for statistical computing and graphics.",
    url: "https://www.sololearn.com/certificates/course/en/19469613/1147/landscape/png",
    icon: <ChartBar size={24} />,
    icon: <Database size={24} />,
  },
  {
    name: "Visualize Your Data",
    description: "Data visualization techniques and tools for effective communication of insights.",
    url: "https://www.sololearn.com/certificates/CC-HMZ87SGS",
    icon: <Palette size={24} />,
  },
  {
    name: "Ethical AI Foundations",
    description: "Principles and practices for responsible and ethical AI development.",
    url: "https://www.sololearn.com/certificates/CC-W89JGF5D",
    icon: <Shield size={24} />, 
    icon: <Star size={24} />,
  },
  {
    name: "Research with AI",
    description: "Leveraging AI tools for efficient academic and professional research.",
    url: "https://www.sololearn.com/certificates/CC-B1BGYLTS",
    icon: <BookOpen size={24} />,
  },
]
