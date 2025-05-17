import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function AppsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-teal-700 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center text-white hover:text-teal-200">
              <ArrowLeft className="mr-2" size={20} />
              <span>Back to CV</span>
            </Link>
            <h1 className="text-2xl md:text-3xl font-bold">Applications & Tools</h1>
            <div className="w-24"></div> {/* Spacer for alignment */}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-teal-700 mb-4">Open Source Applications</h2>
          <p className="text-lg text-gray-700 mb-8">
            All applications are developed as freeware and open source tools, designed to serve various healthcare,
            spiritual, and community needs. These applications are freely available for use, modification, and
            distribution.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {apps.map((app, index) => (
              <div key={index} className="border rounded-lg overflow-hidden shadow-md">
                <div className="h-64 relative">
                  <Image
                    src={app.imagePath || "/placeholder.svg"}
                    alt={`${app.name} App Preview`}
                    fill
                    className="object-contain"
                    style={{ backgroundColor: app.bgColor }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-teal-700 mb-2">{app.name}</h3>
                  <p className="text-gray-600 mb-6">{app.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {app.tags.map((tag, i) => (
                      <span key={i} className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors"
                  >
                    Visit Application <ExternalLink className="ml-2" size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-teal-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Dr. Essa Mohamed Rafique. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

const apps = [
  {
    name: "IQRA",
    description:
      "An Islamic Quiz Rivalry App designed to engage users in educational competitions about Islamic knowledge. The app provides an interactive platform for testing and expanding understanding of Islamic teachings through friendly competition.",
    imagePath: "/iqra-app.png",
    bgColor: "#e8f5ee",
    url: "https://iqrar.vercel.app/",
    tags: ["Islamic", "Educational", "Quiz", "Competition"],
  },
  {
    name: "KALAM",
    description:
      "Know Allah by Lighting up Activities of Mirth - an Islamic spiritual development application that breaks down its purpose through its acronym: K (Know), A (Allah), L (Lighting up), A (Activities), M (Mirth). The app provides a structured approach to spiritual growth through joyful activities.",
    imagePath: "/kalam-app.png",
    bgColor: "#0a6e4a",
    url: "https://v0-kalam.vercel.app/",
    tags: ["Islamic", "Spiritual Growth", "Activities", "Education"],
  },
  {
    name: "Barzaq",
    description:
      "An Islamic Journey Through the Afterlife - an educational application that explores Islamic teachings about the afterlife. Barzaq provides resources, reflections, and educational content on Islamic eschatology and spiritual preparation in an accessible digital format.",
    imagePath: "/barzaq-app.png",
    bgColor: "#1a2235",
    url: "https://v0-barzaq.vercel.app/",
    tags: ["Islamic", "Afterlife", "Educational", "Spiritual Journey"],
  },
  {
    name: "Noor",
    description:
      "Natural Open Objective Resource - an interactive platform for exploring comparative religious perspectives and the Community Life Competence Process (CLCP). Users can ask questions about religions and community life competence to gain insights and understanding.",
    imagePath: "/noor-app.png",
    bgColor: "#f0faf5",
    url: "https://v0-noor-liard.vercel.app/",
    tags: ["Comparative Religion", "CLCP", "Interactive", "Educational"],
  },
  {
    name: "Islamic Ethical Quandary",
    description:
      "An interactive game that presents players with ethical dilemmas and financial decisions in Islamic contexts. The game invites users to begin a journey exploring Islamic ethics and principles as they apply to real-world situations and financial choices.",
    imagePath: "/islamic-finance-game.png",
    bgColor: "#e8f7f0",
    url: "https://v0-twine-ten.vercel.app/",
    tags: ["Islamic Ethics", "Interactive Game", "Decision Making", "Financial Literacy"],
  },
  {
    name: "ACLS Protocol Trainer",
    description:
      "An interactive training application for cardiac emergency management based on Advanced Cardiac Life Support (ACLS) protocols. This medical education tool helps healthcare professionals practice and improve their skills in responding to cardiac emergencies through realistic scenarios.",
    imagePath: "/acls-trainer-app.png",
    bgColor: "#e6f0fa",
    url: "https://v0-syndromic.vercel.app/",
    tags: ["Medical", "ACLS", "Emergency Training", "Healthcare Education"],
  },
]
