import Link from "next/link"
import { ArrowLeft, Download, FileText } from "lucide-react"

const cvProfiles = [
  {
    title: "IT & AI Architecture Profile",
    description: "Focuses on technical skills, AI workflows, genomic data architecture, and digital system engineering.",
    file: "/cv-it-ai.pdf" // Update with your actual file paths
  },
  {
    title: "HIV Medical, NCD & Genomics Profile",
    description: "Focuses on medical expertise, hypertension control initiatives, genomic research, and clinical trials.",
    file: "/cv-medical-genomics.pdf"
  },
  {
    title: "Public Health & Community Development Profile",
    description: "Focuses on community health systems, UN-level knowledge management, and large-scale public health interventions.",
    file: "/cv-public-health.pdf"
  },
  {
    title: "Islamic Studies & Interfaith Profile",
    description: "Focuses on Bridge to Masters expertise, neurobiological research in spiritual resilience, and comparative interfaith studies.",
    file: "/cv-islamic-interfaith.pdf"
  }
];

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <Link href="/" className="inline-flex items-center text-teal-700 hover:text-teal-900 mb-8 font-medium">
          <ArrowLeft className="mr-2" size={20} /> Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Download CV Profiles</h1>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl">
          Select the profile below that best aligns with your interests to download the most recent version of my curriculum vitae.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cvProfiles.map((profile, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <FileText className="text-teal-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-teal-800 mb-2">{profile.title}</h3>
              <p className="text-gray-600 mb-6">{profile.description}</p>
              <a
                href={profile.file}
                download
                className="inline-flex items-center bg-teal-700 text-white px-6 py-2 rounded-md hover:bg-teal-800 transition-colors"
              >
                <Download className="mr-2" size={16} /> Download PDF
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
