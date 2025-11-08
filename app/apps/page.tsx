import Link from "next/link"
import { ArrowLeft, ExternalLink, Mail, Linkedin, Github, Twitter, Facebook, Globe } from "lucide-react"
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
            A comprehensive collection of 20 applications developed both individually and in collaboration with teams.
            All applications are developed as freeware and open source tools, designed to serve various healthcare,
            spiritual, and community needs. These applications are freely available for use, modification, and
            distribution.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-teal-700 mb-6">Individual Applications</h3>
              <div className="grid grid-cols-1 gap-6">
                {apps
                  .filter((app) => app.category === "Individual")
                  .map((app, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden shadow-md">
                      <div className="h-64 relative">
                        <Image
                          src={app.imagePath || "/placeholder.svg"}
                          alt={`${app.name} App Preview`}
                          fill
                          className="object-contain"
                          style={{ backgroundColor: app.bgColor }}
                          unoptimized
                        />
                      </div>
                      <div className="p-6">
                        <h4 className="text-2xl font-bold text-teal-700 mb-2">{app.name}</h4>
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

            <div>
              <h3 className="text-2xl font-bold text-teal-700 mb-6">Team Collaboration Applications</h3>
              <div className="grid grid-cols-1 gap-6">
                {apps
                  .filter((app) => app.category === "Team Collaboration")
                  .map((app, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden shadow-md">
                      <div className="h-64 relative">
                        <Image
                          src={app.imagePath || "/placeholder.svg"}
                          alt={`${app.name} App Preview`}
                          fill
                          className="object-contain"
                          style={{ backgroundColor: app.bgColor }}
                          unoptimized
                        />
                      </div>
                      <div className="p-6">
                        <h4 className="text-2xl font-bold text-teal-700 mb-2">{app.name}</h4>
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
              href="https://emrafi.wordpress.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-teal-200 flex items-center gap-1"
            >
              <Globe size={16} /> Blog
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

const apps = [
  // Individual Apps
  {
    name: "IQRA",
    description:
      "An Islamic Quiz Rivalry App designed to engage users in educational competitions about Islamic knowledge. The app provides an interactive platform for testing and expanding understanding of Islamic teachings through friendly competition.",
    imagePath: "/iqra-app.png",
    bgColor: "#e8f5ee",
    url: "https://iqrar.vercel.app/",
    tags: ["Islamic", "Educational", "Quiz", "Competition"],
    category: "Individual",
  },
  {
    name: "KALAM",
    description:
      "Know Allah by Lighting up Activities of Mirth - an Islamic spiritual development application that breaks down its purpose through its acronym: K (Know), A (Allah), L (Lighting up), A (Activities), M (Mirth). The app provides a structured approach to spiritual growth through joyful activities.",
    imagePath: "/kalam-app.png",
    bgColor: "#0a6e4a",
    url: "https://v0-kalam.vercel.app/",
    tags: ["Islamic", "Spiritual Growth", "Activities", "Education"],
    category: "Individual",
  },
   {
    name: "Jamath",
    description:
      "An official Jamath portal for our local Muslim community. Registered members can access services, events, certificates, and community support. Non-members can view the Masjid info and prayer times.",
    imagePath: "/jamath.png",
    bgColor: "#0a6e4a",
    url: "https://v0-masjid-community-app.vercel.app/",
    tags: ["Jamath", "Masjid", "Activities", "Community"],
    category: "Individual",
  },
  {
    name: "Barzaq",
    description:
      "An Islamic Journey Through the Afterlife - an educational application that explores Islamic teachings about the afterlife. Barzaq provides resources, reflections, and educational content on Islamic eschatology and spiritual preparation in an accessible digital format.",
    imagePath: "/barzaq-app.png",
    bgColor: "#1a2235",
    url: "https://v0-barzaq.vercel.app/",
    tags: ["Islamic", "Afterlife", "Educational", "Spiritual Journey"],
    category: "Individual",
  },
  {
    name: "Noor",
    description:
      "Natural Open Objective Resource - an interactive platform for exploring comparative religious perspectives and the Community Life Competence Process (CLCP). Users can ask questions about religions and community life competence to gain insights and understanding.",
    imagePath: "/noor-app.png",
    bgColor: "#f0faf5",
    url: "https://v0-noor-liard.vercel.app/",
    tags: ["Comparative Religion", "CLCP", "Interactive", "Educational"],
    category: "Individual",
  },
  {
    name: "Islamic Ethical Quandary",
    description:
      "An interactive game that presents players with ethical dilemmas and financial decisions in Islamic contexts. The game invites users to begin a journey exploring Islamic ethics and principles as they apply to real-world situations and financial choices.",
    imagePath: "/islamic-finance-game.png",
    bgColor: "#e8f7f0",
    url: "https://v0-twine-ten.vercel.app/",
    tags: ["Islamic Ethics", "Interactive Game", "Decision Making", "Financial Literacy"],
    category: "Individual",
  },
  {
    name: "ACLS Protocol Trainer",
    description:
      "An interactive training application for cardiac emergency management based on Advanced Cardiac Life Support (ACLS) protocols. This medical education tool helps healthcare professionals practice and improve their skills in responding to cardiac emergencies through realistic scenarios.",
    imagePath: "/acls-trainer-app.png",
    bgColor: "#e6f0fa",
    url: "https://v0-syndromic.vercel.app/",
    tags: ["Medical", "ACLS", "Emergency Training", "Healthcare Education"],
    category: "Individual",
  },
  {
    name: "ICISO",
    description:
      "Demo of an app that finds opportunities in Quranic Studies, Dawah, and community service, or any listed sphere in reputed Islamic organizations through this air-bnb like app. Join a global network of volunteers and interns making a difference in Islamic communities worldwide.",
    imagePath: "/iciso-app.png",
    bgColor: "#f8f4e6",
    url: "https://iciso.vercel.app",
    tags: ["Islamic", "ICISO", "Volunteering", "Intern"],
    category: "Individual",
  },
  {
    name: "FOCUS",
    description:
      "Demo of a Free Online College of Ultimate Quranic Studies (FOCUS) is making authentic Quranic education accessible to everyone, everywhere. FOCUS mission is providing always Free Education, Authentic Scholarship, Global Accessibility, through Modern Technology, FOCUS has Interactive Lessons, Progress Tracking, Community Forums, Free Certificates.",
    imagePath: "/focus.png",
    bgColor: "#f8f4e6",
    url: "https://v0-focus-fawn.vercel.app/",
    tags: ["Islamic", "FOCUS", "Quran", "College"],
    category: "Individual",
  },
   {
    name: "Go Dutch",
    description:
      "Go Dutch is a Family Expense Sharing App, that helps family members A, B, C, and D track their contributions and settle expenses equally. The App has provisions to add expenses, track contributions, and calculate settlements, and all statements and reports can be downloaded as excell sheets.",
    imagePath: "/dutch.png",
    bgColor: "#f8f4e6",
    url: "https://v0-dutch-jet.vercel.app",
    tags: ["Family Expenses", "Go Dutch", "Track Contributions", "Calculate Settlements"],
    category: "Individual",
  },
  {
    name: "Hajj",
    description:
      "A comprehensive Hajj pilgrimage guidance application providing step-by-step instructions, prayers, and essential information for pilgrims. The app serves as a digital companion for those undertaking the sacred journey, offering guidance on rituals, locations, and spiritual preparation.",
    imagePath: "/hajj-app.jpg",
    bgColor: "#f8f4e6",
    url: "https://tamatu.vercel.app",
    tags: ["Islamic", "Hajj", "Pilgrimage", "Guidance"],
    category: "Individual",
  },
  {
    name: "IV",
    description:
      "A compelling site providing interns and volunteers to find opportunities that match their availability, skills, and other requirements. Complete with user profiles both for applicants and for organizations willing to host the applicants.",
    imagePath: "/gkfiv.png",
    bgColor: "#f8f4e6",
    url: "https://gkfiv.vercel.app",
    tags: ["Volunteer", "Internship", "Youth", "Development"],
    category: "Individual",
  },
  // Team Collaboration Apps
  {
    name: "Quran",
    description:
      "Demo of a Quran reading and study application developed in collaboration with a team. The app provides an intuitive interface for reading, listening to, and studying the Holy Quran with various features to enhance the spiritual and educational experience.",
    imagePath: "/quran-app.jpg",
    bgColor: "#e8f5e8",
    url: "https://al-quran-joy.vercel.app",
    tags: ["Islamic", "Quran", "Reading", "Study"],
    category: "Team Collaboration",
  },
  {
    name: "Sepsis Management",
    description:
      "A clinical decision support tool for sepsis management developed with medical professionals. The application helps healthcare providers with early detection, assessment, and treatment protocols for sepsis patients, incorporating evidence-based guidelines and clinical pathways.",
    imagePath: "/sepsis-app.jpg",
    bgColor: "#fff2f2",
    url: "https://v0-sepsis-app-sigma.vercel.app",
    tags: ["Medical", "Sepsis", "Clinical Decision", "Healthcare"],
    category: "Team Collaboration",
  },
  {
    name: "3 Zone System",
    description:
      "A medical application implementing the 3-zone system for clinical assessment and patient management. This tool helps healthcare professionals categorize patient conditions and implement appropriate care protocols based on severity and clinical indicators.",
    imagePath: "/3zone-app.jpg",
    bgColor: "#f0f8ff",
    url: "https://v0-3zone.vercel.app",
    tags: ["Medical", "Clinical Assessment", "Patient Management", "Healthcare"],
    category: "Team Collaboration",
  },
  {
    name: "Noradrenaline Calculator",
    description:
      "A specialized medical calculator for noradrenaline dosage and administration developed for critical care settings. The application assists healthcare professionals in calculating appropriate dosages and monitoring parameters for patients requiring vasopressor support.",
    imagePath: "/noradrenaline-app.jpg",
    bgColor: "#f5f5f5",
    url: "https://v0-noradrenaline.vercel.app/",
    tags: ["Medical", "Dosage Calculator", "Critical Care", "Pharmacology"],
    category: "Team Collaboration",
  },
  {
    name: "Burns & IV Fluids",
    description:
      "A comprehensive burns management application that calculates fluid requirements and treatment protocols for burn patients. The tool incorporates established formulas and guidelines to assist healthcare providers in managing burn injuries effectively.",
    imagePath: "/burns-app.jpg",
    bgColor: "#fff8f0",
    url: "https://v0-burns-iv-fluids-app.vercel.app",
    tags: ["Medical", "Burns Treatment", "Fluid Management", "Emergency Care"],
    category: "Team Collaboration",
  },
  {
    name: "Medical Training Platform",
    description:
      "An educational platform designed for medical training and continuing education. The application provides interactive learning modules, assessments, and resources for healthcare professionals to enhance their knowledge and skills in various medical specialties.",
    imagePath: "/medical-training-app.jpg",
    bgColor: "#f0f8f0",
    url: "https://v0-training-hub.vercel.app",
    tags: ["Medical Education", "Training", "E-Learning", "Healthcare"],
    category: "Team Collaboration",
  },
  {
    name: "IVY Program Website",
    description:
      "A professional website for the IVY healthcare program, showcasing program details, resources, and information for participants. The site serves as a comprehensive portal for program-related activities and communications.",
    imagePath: "/ivy-website.jpg",
    bgColor: "#f8f8ff",
    url: "https://v0-ivy-program.vercel.app",
    tags: ["Healthcare Program", "Website", "Information Portal", "Professional"],
    category: "Team Collaboration",
  },
  {
    name: "GKF Hospital Website",
    description:
      "A modern, comprehensive website for Grace Kennet Foundation Hospital, providing information about services, facilities, and healthcare offerings. The site serves as the digital presence for the hospital's community outreach and patient services.",
    imagePath: "/gkf-website.jpg",
    bgColor: "#f0f8f8",
    url: "https://v0-gkf-hospital-website.vercel.app/",
    tags: ["Hospital Website", "Healthcare Services", "Community Health", "Information"],
    category: "Team Collaboration",
  },
  {
    name: "GKF Hospital Management System",
    description:
      "A comprehensive hospital management system for Grace Kennet Foundation Hospital, featuring patient records, appointment scheduling, inventory management, and administrative tools. The system streamlines hospital operations and improves patient care delivery.",
    imagePath: "/gkf-hospital-mgmt.jpg",
    bgColor: "#f8f8f8",
    url: "https://v0-hospital-app-three.vercel.app/",
    tags: ["Hospital Management", "Patient Records", "Healthcare System", "Administration"],
    category: "Team Collaboration",
  },
  {
    name: "Med Rep Appointments",
    description:
      "A versatile app wherein Medical Representatives can book their appointments in a visiting hospital, allowing for hsopital administrators to schedule these Medical Rep appointments easily the doctors visiting time.",
    imagePath: "/medrep.png",
    bgColor: "#f5f8ff",
    url: "https://v0-medical-rep-app.vercel.app/",
    tags: ["Consultation", "Hospital", "Medical Representatives", "Healthcare"],
    category: "Team Collaboration",
  },
  {
    name: "TMCH Website",
    description:
      "A modern website for TOP MEDICAL & COSMETIC HUB (TMCH), showcasing the institution's counselling programs, medical and cosmetic services, as well as community initiatives. The site serves as a comprehensive digital platform for patients, service providers, and the community.",
    imagePath: "/tmch-website.jpg",
    bgColor: "#f5f8ff",
    url: "https://v0-modern-landing-page-design-eta-fawn.vercel.app",
    tags: ["Consultation", "Hospital Website", "Cosmetic Institution", "Healthcare"],
    category: "Team Collaboration",
  },
]
