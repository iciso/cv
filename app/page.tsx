import Image from "next/image"
import Link from "next/link"
import {
  ChevronRight,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Briefcase,
  GraduationCap,
  BookOpen,
  Album,
  Code,
  Users,
  Globe,
  ExternalLink,
  FileText,
  Book,
  Github,
  Twitter,
  Facebook,
  MessageCircle,
  MessageSquare,
  Send,
  Code2,
  Layers,
  Rss,
} from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Dr. Essa Mohamed Rafique</h1>
              <p className="text-xl md:text-2xl mb-6 text-teal-100">
                M.B.,B.S., D.V., D.T.D., Dip Web Media., D.I.S., (B.M.A.I.S.,)
              </p>
              <p className="text-lg mb-6 text-teal-50">
                UN & WHO Consultant, Public Health Specialist, and Dermatologist with extensive experience in healthcare management, HIV/AIDS initiatives, and senior care services.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#experience"
                  className="bg-white text-teal-700 px-6 py-2 rounded-full font-medium hover:bg-teal-50 transition-colors"
                >
                  Experience
                </Link>
                <Link
                  href="#education"
                  className="bg-teal-800 text-white px-6 py-2 rounded-full font-medium hover:bg-teal-900 transition-colors"
                >
                  Education
                </Link>
                <Link
                  href="#books"
                  className="bg-teal-800 text-white px-6 py-2 rounded-full font-medium hover:bg-teal-900 transition-colors"
                >
                  Books
                </Link>
                <Link
                  href="#publications"
                  className="bg-teal-800 text-white px-6 py-2 rounded-full font-medium hover:bg-teal-900 transition-colors"
                >
                  Publications
                </Link>
                <Link
                  href="#blogs"
                  className="bg-teal-800 text-white px-6 py-2 rounded-full font-medium hover:bg-teal-900 transition-colors"
                >
                  Blogs
                </Link>
                <Link
                  href="#apps"
                  className="bg-teal-800 text-white px-6 py-2 rounded-full font-medium hover:bg-teal-900 transition-colors"
                >
                  Apps
                </Link>
                <a
                  href="https://docs.google.com/document/d/1h2A_pw48gVhvmMk3RXiyLtKxgu3-5vHl/export?format=pdf"
                  download
                  className="bg-teal-800 text-white px-6 py-2 rounded-full font-medium hover:bg-teal-900 transition-colors flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download CV
                </a>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="bg-white p-2 rounded-full shadow-lg">
                <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden">
                  <Image
                    src="/profile-image.jpg"
                    alt="Dr. Essa Mohamed Rafique speaking at a medical conference"
                    fill
                    className="object-cover"
                    priority
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Contact Information */}
      <section className="bg-white py-6 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            <div className="flex items-center gap-2">
              <MapPin className="text-teal-600" />
              <span>Kattoos Manzil, Civil Station Ward, Alappuzha, Kerala</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="text-teal-600" />
              <span>+91 7558845528</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="text-teal-600" />
              <span>rafique@the-constellation.org</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Professional Summary */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b border-gray-200 pb-2">Professional Summary</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Rafique, a Dermatologist, worked in Tata Tea for 17 years, where he won the MacArthur Foundation Fellowship
            for Leadership Development Award. Subsequently, Rafique moved to Delhi and joined the UN as the Moderator
            for the AIDS Community in India, building up an e-community of more than four thousand members to formulate
            the National AIDS Control Policy-Phase III. In 2012, Rafique built and managed his care home for senior
            citizens that surpassed the UK Care Home guidelines in infrastructure and service. Next, Rafique worked as
            the Cardio-Vascular Health Officer in WHO's India Hypertension Control Initiative (IHCI), for Wayanad and
            Kozhikode districts of Kerala till his retirement in Dec 2021. Since Dec 2022, he is the Medical Officer of
            the Anti-Retro Viral Therapy (ART) Center, at the DS Medical College & Hospital in Perambalur, Tamil Nadu.
            Additionally, Rafique works voluntarily as a voting member of The Constellation, the Grace Kennet
            Foundation, and as the Convener of the Editorial Board of the Thanjavur Medical Journal.
          </p>
        </section>

        {/* Books Section */}
        <section id="books" className="mb-16 scroll-mt-20">
          <div className="flex items-center mb-6">
            <Book className="mr-2 text-teal-600" size={28} />
            <h2 className="text-3xl font-bold text-gray-800 border-b border-gray-200 pb-2 flex-grow">
              Books & Chapters
            </h2>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-2xl font-bold text-teal-700 mb-6">Books</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {books.map((book, index) => (
                <div
                  key={index}
                  className="border rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-teal-700 mb-4">{book.title}</h4>
                    <p className="text-gray-600 mb-6">{book.description}</p>
                    <a
                      href={book.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors"
                    >
                      Access Book <ExternalLink className="ml-2" size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-teal-700 mb-6">Chapters in Books</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {bookChapters.map((chapter, index) => (
                <div
                  key={index}
                  className="border rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-teal-700 mb-4">{chapter.title}</h4>
                    <p className="text-gray-600 mb-2">
                      <span className="font-medium">Book:</span> {chapter.book}
                    </p>
                    <p className="text-gray-600 mb-6">{chapter.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {chapter.readUrl && (
                        <a
                          href={chapter.readUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors"
                        >
                          Read Chapter <ExternalLink className="ml-2" size={16} />
                        </a>
                      )}
                      {chapter.buyUrl && (
                        <a
                          href={chapter.buyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center bg-teal-700 text-white px-4 py-2 rounded-md hover:bg-teal-800 transition-colors"
                        >
                          Buy Book <ExternalLink className="ml-2" size={16} />
                        </a>
                      )}
                      {chapter.url && (
                        <a
                          href={chapter.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors"
                        >
                          Access Chapter <ExternalLink className="ml-2" size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blogs Section */}
        <section id="blogs" className="mb-16 scroll-mt-20">
          <div className="flex items-center mb-6">
            <FileText className="mr-2 text-teal-600" size={28} />
            <h2 className="text-3xl font-bold text-gray-800 border-b border-gray-200 pb-2 flex-grow">
              Blogs & Reflections
            </h2>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <p className="text-lg text-gray-700 mb-8">
              A collection of reflections, experiences, and insights from my work in healthcare, public health, and
              international development.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogs.slice(0, 4).map((blog, index) => (
                <div
                  key={index}
                  className="border rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-teal-700 mb-2">{blog.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{blog.description}</p>
                    <a
                      href={blog.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-teal-600 hover:text-teal-800"
                    >
                      Read Blog <ExternalLink className="ml-1" size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link
                href="/blogs"
                className="inline-flex items-center bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition-colors"
              >
                View All Blogs <ChevronRight className="ml-1" size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Apps Section */}
        <section id="apps" className="mb-16 scroll-mt-20">
          <div className="flex items-center mb-6">
            <Globe className="mr-2 text-teal-600" size={28} />
            <h2 className="text-3xl font-bold text-gray-800 border-b border-gray-200 pb-2 flex-grow">
              Applications & Tools
            </h2>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <p className="text-lg text-gray-700 mb-8">
              All applications are developed as freeware and open source tools, designed to serve various healthcare and
              community needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Iqrar App */}
              <div className="border rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="h-48 relative">
                  <Image
                    src="/iqra-app.png"
                    alt="IQRA App Preview"
                    fill
                    className="object-contain bg-[#e8f5ee]"
                    unoptimized
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-teal-700 mb-2">IQRA</h3>
                  <p className="text-gray-600 mb-4">
                    Islamic Quiz Rivalry App for educational engagement and knowledge testing.
                  </p>
                  <a
                    href="https://iqrar.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-teal-600 hover:text-teal-800"
                  >
                    Visit App <ExternalLink className="ml-1" size={16} />
                  </a>
                </div>
              </div>

              {/* Kalam App */}
              <div className="border rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="h-48 relative">
                  <Image
                    src="/kalam-app.png"
                    alt="KALAM App Preview"
                    fill
                    className="object-contain bg-[#0a6e4a]"
                    unoptimized
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-teal-700 mb-2">KALAM</h3>
                  <p className="text-gray-600 mb-4">
                    Know Allah by Lighting up Activities of Mirth - an Islamic spiritual development app.
                  </p>
                  <a
                    href="https://v0-kalam.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-teal-600 hover:text-teal-800"
                  >
                    Visit App <ExternalLink className="ml-1" size={16} />
                  </a>
                </div>
              </div>

              {/* Barzaq App */}
              <div className="border rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="h-48 relative">
                  <Image
                    src="/barzaq-app.png"
                    alt="Barzaq App Preview"
                    fill
                    className="object-contain bg-[#1a2235]"
                    unoptimized
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-teal-700 mb-2">Barzaq</h3>
                  <p className="text-gray-600 mb-4">
                    An Islamic Journey Through the Afterlife - educational exploration.
                  </p>
                  <a
                    href="https://v0-barzaq.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-teal-600 hover:text-teal-800"
                  >
                    Visit App <ExternalLink className="ml-1" size={16} />
                  </a>
                </div>
              </div>

              {/* Noor App */}
              <div className="border rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="h-48 relative">
                  <Image
                    src="/noor-app.png"
                    alt="Noor App Preview"
                    fill
                    className="object-contain bg-[#f0faf5]"
                    unoptimized
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-teal-700 mb-2">Noor</h3>
                  <p className="text-gray-600 mb-4">
                    Natural Open Objective Resource for comparative religious perspectives and CLCP.
                  </p>
                  <a
                    href="https://v0-noor-liard.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-teal-600 hover:text-teal-800"
                  >
                    Visit App <ExternalLink className="ml-1" size={16} />
                  </a>
                </div>
              </div>

              {/* Islamic Ethical Quandary App */}
              <div className="border rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="h-48 relative">
                  <Image
                    src="/islamic-finance-game.png"
                    alt="Islamic Ethical Quandary Game Preview"
                    fill
                    className="object-contain bg-[#e8f7f0]"
                    unoptimized
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-teal-700 mb-2">Islamic Ethical Quandary</h3>
                  <p className="text-gray-600 mb-4">
                    An interactive game exploring ethical dilemmas and financial decisions in Islamic contexts.
                  </p>
                  <a
                    href="https://v0-twine-ten.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-teal-600 hover:text-teal-800"
                  >
                    Visit App <ExternalLink className="ml-1" size={16} />
                  </a>
                </div>
              </div>

              {/* ACLS Trainer App */}
              <div className="border rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="h-48 relative">
                  <Image
                    src="/acls-trainer-app.png"
                    alt="ACLS Trainer App Preview"
                    fill
                    className="object-contain bg-[#e6f0fa]"
                    unoptimized
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-teal-700 mb-2">ACLS Protocol Trainer</h3>
                  <p className="text-gray-600 mb-4">
                    Interactive training for cardiac emergency management based on ACLS protocols.
                  </p>
                  <a
                    href="https://v0-syndromic.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-teal-600 hover:text-teal-800"
                  >
                    Visit App <ExternalLink className="ml-1" size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mb-16 scroll-mt-20">
          <div className="flex items-center mb-6">
            <Briefcase className="mr-2 text-teal-600" size={28} />
            <h2 className="text-3xl font-bold text-gray-800 border-b border-gray-200 pb-2 flex-grow">
              Professional Experience
            </h2>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-wrap justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-teal-700">Medical Officer</h3>
                <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                  Dec 2022 - Present
                </span>
              </div>
              <h4 className="text-lg font-medium text-gray-700 mb-2">
                Dhanalakshmi Srinivasan Medical College & Hospital, Perambalur
              </h4>
              <p className="text-gray-600">M.O. in charge of the ART Center</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-wrap justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-teal-700">Convenor: Board of Editors</h3>
                <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                  July 2022 - Present
                </span>
              </div>
              <h4 className="text-lg font-medium text-gray-700 mb-2">Thanjavur Medical Journal (TMJ)</h4>
              <p className="text-gray-600">
                Convenor of the Editorial Board of the Multi-specialty Medical Journal, for, of, and by the Thanjavur
                Medical College Alumni and Community.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-wrap justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-teal-700">Consultant</h3>
                <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                  July 2017 - Dec 2021
                </span>
              </div>
              <h4 className="text-lg font-medium text-gray-700 mb-2">WHO – India Office</h4>
              <p className="text-gray-600">
                Cardio-Vascular Health Officer (CVHO), In charge of Non-Communicable Diseases (NCD) & COVID-19 knowledge
                networks, data analysis & visualization for reports in webpages from the districts of Wayanad and
                Kozhikode in Kerala State
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-wrap justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-teal-700">Managing Director</h3>
                <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                  Aug 2012 - Mar 2017
                </span>
              </div>
              <h4 className="text-lg font-medium text-gray-700 mb-2">Champion Care Homes Pvt. Ltd.</h4>
              <p className="text-gray-600">
                Plan, design, build, expand and manage Champion Care Homes to provide the best of Geriatric,
                Gerontology, and Palliative Care Services to Senior Citizens as per or surpassing the UK Care Homes
                guidelines.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-wrap justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-teal-700">Resource Person and Moderator</h3>
                <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                  Jun 2005 - July 2012
                </span>
              </div>
              <h4 className="text-lg font-medium text-gray-700 mb-2">UNAIDS India Office</h4>
              <p className="text-gray-600">
                Develops "AIDS Community of Practice". Moderates the Community knowledge network; facilitates
                information-sharing of members; coordinates workshops and events, among community research groups to
                extract knowledge assets and products
              </p>
            </div>

            <Link
              href="#more-experience"
              className="inline-flex items-center text-teal-600 hover:text-teal-800 font-medium"
            >
              View more experience <ChevronRight className="ml-1" size={16} />
            </Link>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="mb-16 scroll-mt-20">
          <div className="flex items-center mb-6">
            <GraduationCap className="mr-2 text-teal-600" size={28} />
            <h2 className="text-3xl font-bold text-gray-800 border-b border-gray-200 pb-2 flex-grow">
              Education & Training
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-teal-700 mb-2">M.B.,B.S.</h3>
              <h4 className="text-lg font-medium text-gray-700 mb-1">Tanjore Medical College, Tanjore, India</h4>
              <p className="text-gray-600 mb-2">August 1977 - August 1984</p>
              <p className="text-gray-600">Medicine</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-teal-700 mb-2">D.V. (Venereology)</h3>
              <h4 className="text-lg font-medium text-gray-700 mb-1">Madras Medical College, Madras, India</h4>
              <p className="text-gray-600 mb-2">April 1985 - April 1987</p>
              <p className="text-gray-600">Venereology</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-teal-700 mb-2">D.T.D.</h3>
              <h4 className="text-lg font-medium text-gray-700 mb-1">
                Indian Society for Training & Development, Delhi, India
              </h4>
              <p className="text-gray-600 mb-2">April 1986 - October 1988</p>
              <p className="text-gray-600">Personnel Management, Training & Development</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-teal-700 mb-2">Dip. Web Media</h3>
              <h4 className="text-lg font-medium text-gray-700 mb-1">Pentasoft Technologies, Chennai, India</h4>
              <p className="text-gray-600 mb-2">January 2002 March 2002</p>
              <p className="text-gray-600">XML, HTML, FLASH, ASP, JavaScript & Adobe Photoshop</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-teal-700 mb-2">D.I.S.</h3>
              <h4 className="text-lg font-medium text-gray-700 mb-1">
                International Open University, Banjul, The Gambia
              </h4>
              <p className="text-gray-600 mb-2">January 2012 April 2012</p>
              <p className="text-gray-600">Diploma Course in Islamic Studies</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-teal-700 mb-2">Fellowship for Leadership Development</h3>
              <h4 className="text-lg font-medium text-gray-700 mb-1">MacArthur Foundation, Delhi, India</h4>
              <p className="text-gray-600 mb-2">August 2001 - July 2003</p>
              <p className="text-gray-600">Sexual Health, Women's Rights and Empowerment</p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mb-16 scroll-mt-20">
          <div className="flex items-center mb-6">
            <Code className="mr-2 text-teal-600" size={28} />
            <h2 className="text-3xl font-bold text-gray-800 border-b border-gray-200 pb-2 flex-grow">
              Technical Skills
            </h2>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-teal-700 mb-4">IT Certifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-3 rounded-md">
                <span className="font-medium">Web Development Fundamentals</span>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <span className="font-medium">JavaScript</span>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <span className="font-medium">HTML</span>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <span className="font-medium">CSS</span>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <span className="font-medium">PHP</span>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <span className="font-medium">Game Development with JS</span>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <span className="font-medium">Responsive Web Design</span>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <span className="font-medium">Vibe Coding</span>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <span className="font-medium">Data Analytics with AI</span>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <span className="font-medium">Angular + Nest JS</span>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <span className="font-medium">jQuery</span>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <span className="font-medium">React & Redux</span>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <span className="font-medium">Python Core</span>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <span className="font-medium">Python Data Structures</span>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <span className="font-medium">Data Science</span>
              </div>
            </div>
            <div className="mt-4">
              <Link href="/skills" className="inline-flex items-center text-teal-600 hover:text-teal-800 font-medium">
                View all 27 certifications <ChevronRight className="ml-1" size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Publications */}
        <section id="publications" className="mb-16 scroll-mt-20">
          <div className="flex items-center mb-6">
            <BookOpen className="mr-2 text-teal-600" size={28} />
            <h2 className="text-3xl font-bold text-gray-800 border-b border-gray-200 pb-2 flex-grow">
              Publications & Research
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-teal-700 mb-4">UN Consultancy Publications (2010-2012)</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  The Report of the NACO, WHO and UNICEF's National Consultation to provide interventions for
                  out-of-school youth in India.
                </li>
                <li>
                  National Strategic Framework for HIV prevention among out of school youth at risk and especially
                  vulnerable, completed for UNICEF India
                </li>
                <li>
                  Operational Guidelines for implementing District-Level HIV prevention programs for Adolescents in
                  Community Settings for UNICEF India
                </li>
                <li>
                  A Desk review on Oral Substitution Therapy done for UNAIDS Eastern Europe and Central Asia, which is a
                  global update for 2010.
                </li>
                <li>
                  The Program Book of the UNIFEM MOIA ICOE Program for Women Migrant Workers migrating from India to the
                  Gulf countries
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-teal-700 mb-4">Selected Academic Papers</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>On Pyoderma; Kerala Medical Journal, Vol.34, No: 5, p.152 Oct. 1993.</li>
                <li>AIDS - A special Report; The Antiseptic, Vol: 91, No: 1, p.39, Jan. 1994.</li>
                <li>
                  Pediatric AIDS: Problems in perspective, Review article Proceedings of the Second Annual Convention of
                  the National Neonatology Forum (Kerala Chapter) Sep. 17 & 18th 1994.
                </li>
                <li>
                  Antibiotic Sensitivity of E. Coli in Urinary Tract Infections; The Antiseptic, Vol.91, No: 9, pp
                  330-331, September 1994.
                </li>
                <li>
                  Pediatric HIV infection: points to ponder; Review article IAP Journal of Practical Pediatrics. 3: 2
                  Apr-Jun 1995
                </li>
              </ul>
              <div className="mt-4">
                <Link
                  href="/publications"
                  className="inline-flex items-center text-teal-600 hover:text-teal-800 font-medium"
                >
                  View all publications <ChevronRight className="ml-1" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* References */}
        <section id="references" className="mb-16 scroll-mt-20">
          <div className="flex items-center mb-6">
            <Users className="mr-2 text-teal-600" size={28} />
            <h2 className="text-3xl font-bold text-gray-800 border-b border-gray-200 pb-2 flex-grow">
              Professional References
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-teal-700 mb-2">Dr. Jean Louis Lamboray</h3>
              <p className="text-gray-700 mb-1">Retired UNAIDS Founder-Director</p>
              <p className="text-gray-600 mb-1">Phone: +32 475863337</p>
              <p className="text-gray-600">Email: lamborayj@gmail.com</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-teal-700 mb-2">Ms. Marlou de Rouw</h3>
              <p className="text-gray-700 mb-1">Director on the Board of Directors, The Constellation, CLCP</p>
              <p className="text-gray-600 mb-1">Phone: +33 622690823</p>
              <p className="text-gray-600">Email: marlou@communitylifecompetence.org</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-teal-700 mb-2">Ms. Dipa Nag Chowdhury</h3>
              <p className="text-gray-700 mb-1">Country Head, The MacArthur Fund for Leadership Development</p>
              <p className="text-gray-600 mb-1">Phone: +91-11-2464 4006</p>
              <p className="text-gray-600">Email: dnagchowdhury@macfound.org</p>
            </div>
          </div>
        </section>

        {/* Skills Summary */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b border-gray-200 pb-2">Skills Summary</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Dr. Essa Mohamed Rafique is currently completing the Bridge to Masters in Islamic Sciences at the International Open University (IOU) and completed Level 5 Dawah courses at the Messengers of Peace Academy. With a background in Medicine, IT, and HR (M.B., B.S., D.V., D.T.D. Dip Web Media) and extensive experience in community health, Dr. Rafique combines a passion for Islamic knowledge with practical skills in web and App development. His interests include creating free and accessible digital resources for Islamic education and fostering interfaith dialogue.
          </p>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-teal-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">Dr. Essa Mohamed Rafique</h3>
              <p className="text-teal-200">UN & WHO Consultant</p>
            </div>
            <div className="flex gap-4">
              <a
                href="mailto:rafique@the-constellation.org"
                className="text-white hover:text-teal-200"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://wa.me/917558845528"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-teal-200"
                aria-label="WhatsApp"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </a>
              <a href="tel:+917558845528" className="text-white hover:text-teal-200" aria-label="Phone">
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Social and Professional Profiles */}
          <div className="border-t border-teal-700 pt-6 pb-4">
            <h4 className="text-lg font-semibold mb-4 text-center">Connect & Follow</h4>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Developer Profiles */}
              <div className="space-y-3">
                <h5 className="text-teal-300 font-medium">Developer Profiles</h5>
                <div className="space-y-2">
                  <a
                    href="https://www.sololearn.com/Profile/19469613"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-teal-200 transition-colors"
                  >
                    <Code2 size={16} />
                    <span>SoloLearn</span>
                  </a>
                  <a
                    href="https://github.com/iciso"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-teal-200 transition-colors"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://www.upwork.com/freelancers/~013d84a8c53b0ecc2a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-teal-200 transition-colors"
                  >
                    <Layers size={16} />
                    <span>Upwork</span>
                  </a>
                  <a
                    href="https://meta.stackexchange.com/users/1013906/rafique"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-teal-200 transition-colors"
                  >
                    <Code size={16} />
                    <span>Stack Overflow</span>
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="space-y-3">
                <h5 className="text-teal-300 font-medium">Social Media</h5>
                <div className="space-y-2">
                  <a
                    href="https://www.facebook.com/emrafi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-teal-200 transition-colors"
                  >
                    <Facebook size={16} />
                    <span>Facebook</span>
                  </a>
                  <a
                    href="https://twitter.com/tmc7784"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-teal-200 transition-colors"
                  >
                    <Twitter size={16} />
                    <span>Twitter</span>
                  </a>
                  <a
                    href="https://international-qtn7112.slack.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-teal-200 transition-colors"
                  >
                    <MessageSquare size={16} />
                    <span>Slack</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/emrafi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-teal-200 transition-colors"
                  >
                    <Linkedin size={16} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Messaging & Groups */}
              <div className="space-y-3">
                <h5 className="text-teal-300 font-medium">Messaging & Groups</h5>
                <div className="space-y-2">
                  <a
                    href="https://t.me/zmerafi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-teal-200 transition-colors"
                  >
                    <Send size={16} />
                    <span>Telegram</span>
                  </a>
                  <a
                    href="https://msngr.com/jfsEnAiMiKz3mweA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-teal-200 transition-colors"
                  >
                    <MessageCircle size={16} />
                    <span>Messenger Room</span>
                  </a>
                  <a
                    href="https://tinyurl.com/ybnhl9c3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-teal-200 transition-colors"
                  >
                    <Users size={16} />
                    <span>Islam & Hijri (WhatsApp)</span>
                  </a>
                  <a
                    href="https://tinyurl.com/yy9exzty"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-teal-200 transition-colors"
                  >
                    <Users size={16} />
                    <span>Interfaith Group (WhatsApp)</span>
                  </a>
                </div>
              </div>

              {/* Blogs */}
              <div className="space-y-3">
                <h5 className="text-teal-300 font-medium">Additional</h5>
                <div className="space-y-2">
                  <a
                    href="https://www.blogger.com/profile/16421051685766047459"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-teal-200 transition-colors"
                  >
                    <Rss size={16} />
                    <span>Blogger Profile</span>
                  </a>
                  <a
                    href="https://emrafi.wordpress.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-teal-200 transition-colors"
                  >
                    <Globe size={16} />
                    <span>WordPress Site</span>
                  </a>
                  <a
                    href="https://chat.whatsapp.com/EAiL7HEkiOjF1rzNwSU7to"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-teal-200 transition-colors"
                  >
                    <Users size={16} />
                    <span>TMC Case Conference (WhatsApp)</span>
                  </a>
                  <a
                    href="https://orcid.org/my-orcid?orcid=0009-0001-2135-0777"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-teal-200 transition-colors"
                  >
                    <Album size={16} />
                    <span>ORCID</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center text-teal-200 border-t border-teal-700 pt-6">
            <p>&copy; {new Date().getFullYear()} Dr. Essa Mohamed Rafique. All rights reserved.</p>
          </div>
        </div>
      </footer>
      {/* Floating Download Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <a
          href="https://docs.google.com/document/d/1h2A_pw48gVhvmMk3RXiyLtKxgu3-5vHl/export?format=pdf"
          download
          className="bg-teal-700 text-white p-4 rounded-full shadow-lg hover:bg-teal-800 transition-colors flex items-center justify-center"
          aria-label="Download CV"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </a>
      </div>
    </div>
  )
}

const books = [
  {
    title: "Nine Essays and a Poem by a Student: A collection of Islamic Essays",
    description:
      "A compilation of thoughtful essays exploring various aspects of Islamic philosophy, ethics, and spirituality, alongside a poem reflecting on the journey of faith and understanding.",
    url: "https://tinyurl.com/y7er26zv",
  },
  {
    title: "The Kattoo-Yamani Stories",
    description:
      "A collection of stories weaving together cultural narratives, personal experiences, and insights from the Kattoo-Yamani perspective, offering readers a unique lens through which to view the world.",
    url: "https://tinyurl.com/mmn25tkp",
  },
]

const bookChapters = [
  {
    title: "Monitoring & Evaluation in Community-Led Development",
    book: "Community-Led Development in Practice: We Power Our Own Change",
    description:
      "As lead author of this final chapter, Dr. Rafique provides comprehensive insights on monitoring and evaluation methodologies specifically tailored for community-led development initiatives, emphasizing participatory approaches and sustainable assessment frameworks.",
    readUrl: "https://tinyurl.com/y7sj9z4w",
    buyUrl: "https://tinyurl.com/yzxybkps",
    isbn: "ISBN 9781032456263",
    publisher: "Routledge",
  },
  {
    title: "Barriers to Inclusion for those Living with HIV and Non-Discriminatory or Inclusion Strategies",
    book: "Finding Pathways: Social Inclusion in Rural Development",
    description:
      "This chapter examines the social, cultural, and structural barriers faced by individuals living with HIV, particularly in rural settings, and proposes comprehensive strategies to foster inclusion and combat discrimination at various levels of society and healthcare systems.",
    url: "http://hivstigma.blogspot.com/",
  },
]

const blogs = [
  {
    title: "AIDS 2002: A Catalonian Experience",
    description: "Reflections on the XIV International AIDS Conference held in Barcelona, Spain.",
    url: "http://2002aids.blogspot.com/",
  },
  {
    title: "Critical Reflection On The Macarthur Foundation",
    description: "Insights and experiences from my MacArthur Foundation Fellowship for Leadership Development.",
    url: "http://arthmac.blogspot.com/",
  },
  {
    title: "Munnar to Melbourne: the 6 ICAAP",
    description: "Journey and observations from the 6th International Congress on AIDS in Asia and the Pacific.",
    url: "http://6icaap.blogspot.com/",
  },
  {
    title: "Memoirs of Campion High School-1975 Batch",
    description:
      "Relive the fun and adventure tales of a schoolboy's early jaunt at Campion, where youthful chaos met the first steps of a lifelong journey. Prepare for chuckles and a nostalgic trip down memory lane!",
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
    description: "Travel narratives and observations from field work across different regions.",
    url: "http://emrafi.blogspot.com/",
  },
  {
    title: "Beyond Knowledge Fairs",
    description: "Exploring knowledge management and sharing in public health initiatives.",
    url: "http://emrafikm.blogspot.com/",
  },
  {
    title: "Barriers to inclusion for those living with HIV",
    description: "Analysis of stigma and discrimination faced by people living with HIV/AIDS.",
    url: "http://hivstigma.blogspot.com/",
  },
  {
    title: "Global Health Council Interview",
    description: "Insights from discussions with the Global Health Council on HIV/AIDS strategies.",
    url: "http://ghcclm.blogspot.com/",
  },
  {
    title: "Chiang Mai 2001: A Key Correspondent's Report",
    description: "Coverage of the 5th International Home and Community Care Conference for People with HIV/AIDS.",
    url: "http://5hcc.blogspot.com/",
  },
  {
    title: "NACP III and Avahan - An Interview",
    description:
      "Discussion on India's National AIDS Control Program Phase III and the Gates Foundation's Avahan initiative.",
    url: "http://nacp3.blogspot.com/",
  },
  {
    title: "Book Review: AIDS and Maternity in India",
    description: "Critical analysis of literature on HIV/AIDS and maternal health in the Indian context.",
    url: "http://matbook.blogspot.com/",
  },
  {
    title: "Selamat Datang Ke Kuala Lumpur",
    description: "Experiences from the 5th International Congress on AIDS in Asia and the Pacific in Kuala Lumpur.",
    url: "http://5icaap.blogspot.com/",
  },
  {
    title: "CLCP was there before the Facilitators!",
    description: "History and development of the Community Life Competence Process methodology.",
    url: "http://tinyurl.com/25lf9k5",
  },
]
