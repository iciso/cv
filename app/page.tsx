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
  Code,
  Users,
  Globe,
  ExternalLink,
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
              <p className="text-xl md:text-2xl mb-6 text-teal-100">M.B., B.S., D.V., D.T.D., Dip Web Media., D.I.S.</p>
              <p className="text-lg mb-6 text-teal-50">
                Dermatologist, Public Health Specialist, and Medical Officer with extensive experience in healthcare
                management, HIV/AIDS initiatives, and senior care services.
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
                  href="#publications"
                  className="bg-teal-800 text-white px-6 py-2 rounded-full font-medium hover:bg-teal-900 transition-colors"
                >
                  Publications
                </Link>
                <Link
                  href="#apps"
                  className="bg-teal-800 text-white px-6 py-2 rounded-full font-medium hover:bg-teal-900 transition-colors"
                >
                  Apps
                </Link>
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
            <div className="flex items-center gap-2">
              <Linkedin className="text-teal-600" />
              <a
                href="https://www.linkedin.com/in/mohamed-essa-rafique-96b64b15/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-600"
              >
                LinkedIn Profile
              </a>
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
                  <Image src="/iqra-app.png" alt="IQRA App Preview" fill className="object-contain bg-[#e8f5ee]" />
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
                  <Image src="/kalam-app.png" alt="KALAM App Preview" fill className="object-contain bg-[#0a6e4a]" />
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
                  <Image src="/barzaq-app.png" alt="Barzaq App Preview" fill className="object-contain bg-[#1a2235]" />
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
                  <Image src="/noor-app.png" alt="Noor App Preview" fill className="object-contain bg-[#f0faf5]" />
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
                Convenor of the Editorial Board of about twenty section editors of the Multi-specialty Medical Journal,
                for, of, and by the Thanjavur Medical College Alumni and Community.
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
                CVHO, In charge of Non-Communicable Diseases (NCD) & COVID-19 knowledge networks, data analysis &
                reporting in webpages for the districts of Wayanad and Kozhikode in Kerala State
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
                Plan, design, build, expand and manage Champion Care Homes to provide the best of Geriatric Care,
                Gerontology, and Palliative Care to Senior Citizens as per or surpassing the UK Care Homes guidelines.
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
              <h3 className="text-xl font-bold text-teal-700 mb-2">M.B., B.S.</h3>
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
            <h3 className="text-xl font-bold text-teal-700 mb-4">IT Certifications (2019-2022)</h3>
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
                <span className="font-medium">Data Science</span>
              </div>
            </div>
            <div className="mt-4">
              <Link href="/skills" className="inline-flex items-center text-teal-600 hover:text-teal-800 font-medium">
                View all 22 certifications <ChevronRight className="ml-1" size={16} />
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
      </main>

      {/* Footer */}
      <footer className="bg-teal-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">Dr. Essa Mohamed Rafique</h3>
              <p className="text-teal-200">Medical Officer & Public Health Specialist</p>
            </div>
            <div className="flex gap-4">
              <a href="mailto:rafique@the-constellation.org" className="text-white hover:text-teal-200">
                <Mail size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-essa-rafique-96b64b15/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-teal-200"
              >
                <Linkedin size={20} />
              </a>
              <a href="tel:+917558845528" className="text-white hover:text-teal-200">
                <Phone size={20} />
              </a>
            </div>
          </div>
          <div className="mt-6 text-center text-teal-200">
            <p>&copy; {new Date().getFullYear()} Dr. Essa Mohamed Rafique. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
