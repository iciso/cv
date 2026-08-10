import Link from "next/link"
import {
  ChevronRight,
  Terminal,
  ExternalLink,
  ArrowLeft,
} from "lucide-react"

export default function InteractiveWebPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <Link
                href="/"
                className="inline-flex items-center text-teal-100 hover:text-white mb-4 transition-colors"
              >
                <ArrowLeft className="mr-2" size={18} />
                Back to CV Home
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Interactive Educational Engines & Web Apps
              </h1>
              <p className="text-lg text-teal-100 max-w-3xl">
                A curated suite of modular HTML educational games, evaluative quizzes, and algorithmic calculators developed by Dr. Essa Mohamed Rafique. Interactive web pages form the mainstay of online education for which he won the MacArthur Award for two consecutive years in the 1990s.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <Terminal className="mr-2 text-teal-600" size={28} />
            <h2 className="text-3xl font-bold text-gray-800 border-b border-gray-200 pb-2 flex-grow">
              All 38 Interactive Web Modules
            </h2>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <p className="text-lg text-gray-700 mb-8">
              Browse the complete collection of freeware educational tools, quizzes, games, and clinical calculators. Each module opens in a new tab.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {interactiveWebPages.map((page, index) => (
                <div
                  key={index}
                  className="border rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div className="p-5">
                    <span className="inline-block px-2 py-1 bg-teal-50 text-teal-700 text-xs font-semibold rounded mb-2">
                      {page.category}
                    </span>
                    <h3 className="text-lg font-bold text-teal-800 mb-2">{page.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{page.description}</p>
                  </div>
                  <div className="px-5 pb-5 pt-0">
                    <a
                      href={page.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-teal-600 hover:text-teal-800"
                    >
                      Launch Web Module <ExternalLink className="ml-1" size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/"
                className="inline-flex items-center bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition-colors"
              >
                <ArrowLeft className="mr-2" size={16} />
                Return to CV Home
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-teal-800 text-white py-6">
        <div className="container mx-auto px-4 text-center text-teal-200">
          <p>No &copy; Made in {new Date().getFullYear()} with &#10084; by Rafique using Creative Commons (CC) license for the world to copy and learn.</p>
        </div>
      </footer>
    </div>
  )
}

const interactiveWebPages = [
  { title: "COVID Memory Game", category: "Game Engine", description: "Micro-cognitive memory puzzle web app for virus structural identification.", url: "/web/12-covid-memory.html" },
  { title: "Alert Quiz", category: "Assessment", description: "Interactive testing framework for situational safety and alert protocols.", url: "/web/alert-quiz.html" },
  { title: "Alibaba Game", category: "Interactive App", description: "Engaging web-based interactive entertainment module.", url: "/web/alibaba-game.html" },
  { title: "Animals Quiz", category: "Educational Quiz", description: "Educational taxonomy and natural science quiz module.", url: "/web/animals-quiz.html" },
  { title: "Arabic Quiz", category: "Language Tool", description: "Interactive linguistic quiz engine for Arabic language learners.", url: "/web/arabic-quiz.html" },
  { title: "ASCII Logo Generator", category: "Developer Tool", description: "Text-based visual design utility and branding component.", url: "/web/ascii-logo.html" },
  { title: "Bible Quiz", category: "Interfaith Module", description: "Comparative theological and scriptural knowledge quiz framework.", url: "/web/bible-quiz.html" },
  { title: "Birds Quiz", category: "Educational Quiz", description: "Ornithological educational engagement tool.", url: "/web/birds-quiz.html" },
  { title: "Capital Quiz", category: "Geography", description: "Global capitals interactive knowledge testing application.", url: "/web/capital-quiz.html" },
  { title: "Endocrine Match Quiz", category: "Medical Training", description: "Interactive clinical matching engine for endocrine systems.", url: "/web/endocrine-match-quiz.html" },
  { title: "Flowers Quiz", category: "Educational Quiz", description: "Botanical identification and interactive flora learning quiz.", url: "/web/flowers-quiz.html" },
  { title: "Fruits Quiz", category: "Educational Quiz", description: "Nutrition and botanical classification assessment tool.", url: "/web/fruits-quiz.html" },
  { title: "Guess Symbol", category: "Interactive Game", description: "Pattern and icon recognition cognitive exercise engine.", url: "/web/guess-symbol.html" },
  { title: "Home Office Quiz", category: "Productivity", description: "Workspace safety and protocol evaluation checklist tool.", url: "/web/home-office-quiz.html" },
  { title: "Islam Match", category: "Islamic Studies", description: "Interactive card-matching educational engine for core Islamic principles.", url: "/web/islam-match.html" },
  { title: "Islamic Months Quiz", category: "Islamic Studies", description: "Hijri calendar and sacred milestone assessment module.", url: "/web/islamic-months-quiz.html" },
  { title: "Islamophobia Quiz", category: "Social Awareness", description: "Educational module addressing misconceptions and promoting dialogue.", url: "/web/islamophobia-quiz.html" },
  { title: "KBC Game Engine", category: "Interactive Trivia", description: "Game show style dynamic knowledge testing web application.", url: "/web/kbc.html" },
  { title: "KY English Quiz", category: "Language Tool", description: "Comprehensive English proficiency diagnostic module.", url: "/web/ky-english-quiz.html" },
  { title: "KY Gen Choice", category: "Decision Engine", description: "Interactive generational choice selection framework.", url: "/web/ky-gen-choice.html" },
  { title: "KY Islam Basics", category: "Islamic Studies", description: "Foundational teachings and core creed education engine.", url: "/web/ky-islam-basics.html" },
  { title: "KY Islam Easy Quiz", category: "Islamic Studies", description: "Accessible beginner quiz module for Islamic knowledge.", url: "/web/ky-islam-easy-quiz.html" },
  { title: "KY Trees (K)", category: "Knowledge Tree", description: "Hierarchical concept visualization and branching tree engine.", url: "/web/ky-k-trees.html" },
  { title: "KY Khan Trees", category: "Knowledge Tree", description: "Structured topical node tree navigation architecture.", url: "/web/ky-khan-trees.html" },
  { title: "KY News Scroll", category: "Dynamic Feed", description: "Real-time news ticker and content broadcast display script.", url: "/web/ky-news-scroll.html" },
  { title: "KY General Quiz", category: "Assessment", description: "Multi-disciplinary general knowledge quiz component.", url: "/web/ky-quiz.html" },
  { title: "KY Stats", category: "Data Analytics", description: "Statistical dashboard and interactive metric evaluator.", url: "/web/ky-stats.html" },
  { title: "KY Takaful Details", category: "Islamic Finance", description: "Cooperative insurance structural breakdown and calculation module.", url: "/web/ky-takaful-details.html" },
  { title: "KY Trees (Y)", category: "Knowledge Tree", description: "Alternative branching concept mapping visualization app.", url: "/web/ky-y-trees.html" },
  { title: "KY News Feed", category: "Dynamic Feed", description: "Curated community update and article listing interface.", url: "/web/kynews.html" },
  { title: "NCD Estimator", category: "Clinical Calculator", description: "Non-communicable disease risk quantification utility.", url: "/web/ncd-estimator.html" },
  { title: "Number Trick", category: "Interactive Game", description: "Algorithmic logic puzzle and mathematical engagement tool.", url: "/web/number-trick.html" },
  { title: "Qawaid COVID", category: "Public Health", description: "Rule-based public health guidance engine during pandemic parameters.", url: "/web/qawaid-covid.html" },
  { title: "Takaful Quiz", category: "Islamic Finance", description: "Testing engine covering Islamic cooperative financial systems.", url: "/web/takaful-quiz.html" },
  { title: "TMC77 Canary", category: "Diagnostic Tool", description: "System monitoring and feedback test utility script.", url: "/web/tmc77-canary.html" },
  { title: "Travel Quiz", category: "Interactive Module", description: "Geography and international travel safety quiz application.", url: "/web/travel-quiz.html" },
  { title: "Vegetables Quiz", category: "Educational Quiz", description: "Nutritional science and dietary identification quiz module.", url: "/web/vegetables-quiz.html" },
  { title: "WHO COVID Quiz", category: "Public Health", description: "Global health guideline validation and trivia module.", url: "/web/who-covid-quiz.html" }
]
