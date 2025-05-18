import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-teal-700 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center text-white hover:text-teal-200">
              <ArrowLeft className="mr-2" size={20} />
              <span>Back to CV</span>
            </Link>
            <h1 className="text-2xl md:text-3xl font-bold">Blogs & Reflections</h1>
            <div className="w-24"></div> {/* Spacer for alignment */}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-teal-700 mb-6">Professional Blogs</h2>
          <p className="text-lg text-gray-700 mb-8">
            A collection of reflections, experiences, and insights from my work in healthcare, public health, and
            international development. These blogs cover various aspects of my professional journey, including
            conferences, field work, and critical analysis of health initiatives.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogs.map((blog, index) => (
              <div key={index} className="border rounded-lg overflow-hidden shadow-md">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-teal-700 mb-3">{blog.title}</h3>
                  <p className="text-gray-600 mb-6">{blog.description}</p>
                  <a
                    href={blog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors"
                  >
                    Read Blog <ExternalLink className="ml-2" size={16} />
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

const blogs = [
  {
    title: "AIDS 2002: A Catalonian Experience",
    description:
      "Reflections on the XIV International AIDS Conference held in Barcelona, Spain. This blog documents my experiences, key presentations, and networking opportunities at one of the world's largest HIV/AIDS conferences.",
    url: "http://2002aids.blogspot.com/",
  },
  {
    title: "Critical Reflection On The Macarthur Foundation",
    description:
      "Insights and experiences from my MacArthur Foundation Fellowship for Leadership Development. This blog explores the impact of the fellowship on my professional development and the projects I undertook during this period.",
    url: "http://arthmac.blogspot.com/",
  },
  {
    title: "Munnar to Melbourne: the 6 ICAAP",
    description:
      "Journey and observations from the 6th International Congress on AIDS in Asia and the Pacific. This blog chronicles my participation, presentations, and key takeaways from this important regional conference.",
    url: "http://6icaap.blogspot.com/",
  },
  {
    title: "Memoirs of Campion High School-1975 Batch",
    description: "Relive the fun and adventure tales of a schoolboy's early jaunt at Campion, where youthful chaos met the first steps of a lifelong journey. Prepare for chuckles and a nostalgic trip down memory lane!",
    url: "https://campion75.wordpress.com/author/emrafi/",
  },
  {
    title: "On the Telephone",
    description:
      "Step back into the hilarious hallways of college and hostel life! This blog offers a lighthearted peek at the funny side of connections and communication forged within those unforgettable years.",
    url: "http://rafime.blogspot.com/",
  },
  {
    title: "Rambling Roads",
    description:
      "Travel narratives and observations from field work across different regions. This blog shares stories from my journeys to various communities and healthcare settings, highlighting cultural insights and professional learnings.",
    url: "http://emrafi.blogspot.com/",
  },
  {
    title: "Beyond Knowledge Fairs",
    description:
      "Exploring knowledge management and sharing in public health initiatives. This blog discusses strategies for effective knowledge transfer and the importance of community-based learning in healthcare contexts.",
    url: "http://emrafikm.blogspot.com/",
  },
  {
    title: "Barriers to inclusion for those living with HIV",
    description:
      "Analysis of stigma and discrimination faced by people living with HIV/AIDS. This blog examines social, cultural, and institutional barriers to inclusion and proposes approaches to create more supportive environments.",
    url: "http://hivstigma.blogspot.com/",
  },
  {
    title: "Global Health Council Interview",
    description:
      "Insights from discussions with the Global Health Council on HIV/AIDS strategies. This blog features interviews with key stakeholders and analysis of global health policies related to HIV/AIDS prevention and treatment.",
    url: "http://ghcclm.blogspot.com/",
  },
  {
    title: "Chiang Mai 2001: A Key Correspondent's Report",
    description:
      "Coverage of the 5th International Home and Community Care Conference for People with HIV/AIDS held in Chiang Mai, Thailand. This blog provides detailed reporting on conference proceedings and emerging care models.",
    url: "http://5hcc.blogspot.com/",
  },
  {
    title: "NACP III and Avahan - An Interview",
    description:
      "Discussion on India's National AIDS Control Program Phase III and the Gates Foundation's Avahan initiative. This blog features interviews with program leaders and analysis of these major HIV prevention efforts in India.",
    url: "http://nacp3.blogspot.com/",
  },
  {
    title: "Book Review: AIDS and Maternity in India",
    description:
      "Critical analysis of literature on HIV/AIDS and maternal health in the Indian context. This blog reviews key publications and research findings related to prevention of mother-to-child transmission of HIV in India.",
    url: "http://matbook.blogspot.com/",
  },
  {
    title: "Selamat Datang Ke Kuala Lumpur",
    description:
      "Experiences from the 5th International Congress on AIDS in Asia and the Pacific in Kuala Lumpur. This blog documents presentations, networking, and regional strategies discussed at this important conference.",
    url: "http://5icaap.blogspot.com/",
  },
  {
    title: "CLCP was there before the Facilitators!",
    description:
      "History and development of the Community Life Competence Process methodology. This blog explores the origins and evolution of CLCP as an approach to community-driven responses to health and social challenges.",
    url: "http://tinyurl.com/25lf9k5",
  },
]
