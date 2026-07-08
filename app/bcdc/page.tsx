import Link from "next/link"
import { ArrowLeft, ExternalLink, FileText } from "lucide-react"

const bcdcPresentations = [
  { title: "The Point of Return: Neurobiology of Sacred Resilience", description: "Explores the neurobiological mechanisms underlying resilience through a lens of faith and spiritual return.", url: "https://drive.google.com/file/d/19nfDGMu0Y6D9D-EkGj3k6q8pgoPKgiTB/view?usp=sharing" },
  { title: "The Lens of Eternity: How Death Changes the Scale of Reality", description: "A philosophical and theological examination of how the awareness of death reorients human perception of reality.", url: "https://drive.google.com/file/d/1J8GVRITBIXn2rdBW8Zj8OwJzaarIvuOB/view?usp=sharing" },
  { title: "Tears Before Allah: Islamic Neurosciences of Sacred Weeping", description: "Investigates the neuro-physiological and spiritual significance of weeping in an Islamic context.", url: "https://drive.google.com/file/d/1H4VxpCLChotSzNLI782AEQ2lR-g_l_F4/view?usp=sharing" },
  { title: "The Architecture of Conviction: Navigating the Mind in Dawah and Discourse", description: "Analyzes the cognitive structures necessary for effective Dawah and reasoned discourse.", url: "https://drive.google.com/file/d/1O3oouni2dPZ2oOpglDNweE8akolRIRzS/view?usp=sharing" },
  { title: "Quranic Relativity: Time Dilation in the Quran", description: "Provides a non-mathematical conceptual explanation of time dilation phenomena referenced in Quranic texts.", url: "https://drive.google.com/file/d/18Fd2HXwEDIov_K9lI1Yqx_WmIM6qdStw/view?usp=sharing" },
  { title: "The Spiritual Double Helix: Prayer and Charity", description: "Examines the complementary nature of prayer and charity in the unseen dimensions of human spiritual growth.", url: "https://drive.google.com/file/d/1zCdrwsBBzdi44QQfKMTxZzyXWMPg5ncg/view?usp=sharing" },
  { title: "The Dopamine Trap: Addiction, Desire and Moral Failure", description: "Uses the Ruh, Nafs, Aql, and Qalb framework to understand the mechanics of addiction and desire.", url: "https://drive.google.com/file/d/15NO5FJUZpBmiB88CgmunkoYnECrncYT3/view?usp=sharing" },
  { title: "The Architecture of Intention or Riya", description: "Explores the neurobiological correlates of Riya and strategies for spiritual correction.", url: "https://drive.google.com/file/d/1N1Rn0oWL1azTD9v5L3FeF1Y2RtoeiNUV/view?usp=sharing" },
  { title: "The Quranic Helix: Pairing Complementary Virtues", description: "Details how the Quran pairs virtues to facilitate holistic human transformation.", url: "https://drive.google.com/file/d/1wWOOGzeMDt5SLfQySO1D4s_1PG5i9-Lz/view?usp=sharing" },
  { title: "Resonance and Distinction: Spiritual Themes in Quran and Bible", description: "A comparative study identifying shared spiritual themes and distinct revelations across both texts.", url: "https://drive.google.com/file/d/1-jTMr7o58z0CCqFHYW6oLW2QJGRum8nl/view?usp=sharing" },
  { title: "The Mirror and The Scales: Judicial Ethics from Prophet Dawud (AS)", description: "Extracts timeless lessons on justice, ethics, and leadership from the life of Prophet Dawud (AS).", url: "https://drive.google.com/file/d/1BWXCkQSnlcOSZOcnaFo_YBujHHXqvDV3/view?usp=sharing" },
  { title: "The Abrahamic Bioethics Handbook: Mapping Medical Ethics across 3 Faiths", description: "Maps bioethics and bedside guidance across the Abrahamic faiths to support religiously diverse patients and HCWs", url: "https://drive.google.com/file/d/1qGQhxPrIz_c9skNdP3kRG6yLtV4h0POH/view?usp=sharing" },
  { title: "Bridging Islamic Psychology and Psychiatry", description: "Proposes an integrated framework connecting traditional Islamic psychological insights with modern clinical psychiatry.", url: "https://drive.google.com/file/d/1isDcyTH6XX1sDiswaoBbWwDSb9piZGe0/view?usp=sharing" },
]

export default function BCDCPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <header className="bg-teal-700 text-white shadow-lg mb-12">
        <div className="container mx-auto px-4 py-8">
          <Link href="/" className="inline-flex items-center text-white hover:text-teal-200 mb-4">
            <ArrowLeft className="mr-2" size={20} /> Back to CV
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">BCDC Research Slide Decks</h1>
          <p className="mt-2 text-teal-100">Academic presentations currently pending Shariah Board review.</p>
        </div>
      </header>

      <main className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bcdcPresentations.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col">
              <FileText className="text-teal-600 mb-4" size={32} />
              <h3 className="text-lg font-bold text-teal-800 mb-3">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-6 flex-grow">{item.description}</p>
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition-colors">
                View Deck <ExternalLink className="ml-2" size={16} />
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
