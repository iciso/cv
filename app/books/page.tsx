import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"

export default function BooksPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-teal-700 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center text-white hover:text-teal-200">
              <ArrowLeft className="mr-2" size={20} />
              <span>Back to CV</span>
            </Link>
            <h1 className="text-2xl md:text-3xl font-bold">Books & Chapters</h1>
            <div className="w-24"></div> {/* Spacer for alignment */}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-teal-700 mb-6">Books</h2>
          <p className="text-lg text-gray-700 mb-8">
            Original books authored by Dr. Essa Mohamed Rafique, covering topics in Islamic philosophy, spirituality,
            and storytelling.
          </p>

          {books.map((book, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-md mb-8">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-teal-700 mb-4">{book.title}</h3>
                <p className="text-gray-600 mb-8 text-lg">{book.description}</p>
                <a
                  href={book.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition-colors text-lg"
                >
                  Access Book <ExternalLink className="ml-2" size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-teal-700 mb-6">Chapters in Books</h2>
          <p className="text-lg text-gray-700 mb-8">
            Significant contributions to academic and professional publications in the fields of community development,
            public health, and social inclusion.
          </p>

          {bookChapters.map((chapter, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-md mb-8">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-teal-700 mb-2">{chapter.title}</h3>
                <h4 className="text-xl text-gray-700 mb-4">
                  <span>In: </span>
                  <span className="italic">{chapter.book}</span>
                  {chapter.isbn && <span className="block text-sm mt-1">{chapter.isbn}</span>}
                  {chapter.publisher && <span className="block text-sm">{chapter.publisher}</span>}
                </h4>
                <p className="text-gray-600 mb-8 text-lg">{chapter.description}</p>
                <div className="flex flex-wrap gap-4">
                  {chapter.readUrl && (
                    <a
                      href={chapter.readUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition-colors text-lg"
                    >
                      Read Chapter <ExternalLink className="ml-2" size={20} />
                    </a>
                  )}
                  {chapter.buyUrl && (
                    <a
                      href={chapter.buyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-teal-700 text-white px-6 py-3 rounded-md hover:bg-teal-800 transition-colors text-lg"
                    >
                      Buy Book <ExternalLink className="ml-2" size={20} />
                    </a>
                  )}
                  {chapter.url && (
                    <a
                      href={chapter.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition-colors text-lg"
                    >
                      Access Chapter <ExternalLink className="ml-2" size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
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

const books = [
  {
    title: "Nine Essays and a Poem by a Student: A collection of Islamic Essays",
    description:
      "A compilation of thoughtful essays exploring various aspects of Islamic philosophy, ethics, and spirituality, alongside a poem reflecting on the journey of faith and understanding. This collection provides insights into the core values and principles of Islam, presented through a contemporary lens that makes them accessible and relevant to modern readers.",
    url: "https://tinyurl.com/y7er26zv",
  },
  {
    title: "The Kattoo-Yamani Stories",
    description:
      "A collection of stories weaving together cultural narratives, personal experiences, and insights from the Kattoo-Yamani perspective, offering readers a unique lens through which to view the world. These narratives blend elements of tradition, history, and contemporary social dynamics, providing a rich tapestry of storytelling that bridges different cultural contexts and historical periods.",
    url: "https://tinyurl.com/mmn25tkp",
  },
]

const bookChapters = [
  {
    title: "Monitoring & Evaluation in Community-Led Development",
    book: "Community-Led Development in Practice: We Power Our Own Change",
    description:
      "As lead author of this final chapter, Dr. Rafique provides comprehensive insights on monitoring and evaluation methodologies specifically tailored for community-led development initiatives, emphasizing participatory approaches and sustainable assessment frameworks. The chapter explores innovative tools for measuring community ownership, empowerment metrics, and long-term impact evaluation strategies that honor local knowledge systems while meeting rigorous academic standards.",
    readUrl: "https://tinyurl.com/y7sj9z4w",
    buyUrl: "https://tinyurl.com/yzxybkps",
    isbn: "ISBN 9781032456263",
    publisher: "Routledge",
  },
  {
    title: "Barriers to Inclusion for those Living with HIV and Non-Discriminatory or Inclusion Strategies",
    book: "Finding Pathways: Social Inclusion in Rural Development",
    description:
      "This chapter examines the social, cultural, and structural barriers faced by individuals living with HIV, particularly in rural settings, and proposes comprehensive strategies to foster inclusion and combat discrimination at various levels of society and healthcare systems. Drawing on extensive field experience and research, the chapter offers practical approaches to addressing stigma, building supportive community networks, and creating inclusive policies and practices in healthcare delivery, workplace settings, and broader social contexts.",
    url: "http://hivstigma.blogspot.com/",
  },
]
