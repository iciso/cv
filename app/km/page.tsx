import Link from "next/link"
import { ArrowLeft, ExternalLink, Mail, Linkedin, Github, Twitter, Facebook, Globe, FileText, BarChart3, ShieldAlert } from "lucide-react"

export default function KMPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-teal-700 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center text-white hover:text-teal-200">
              <ArrowLeft className="mr-2" size={20} />
              <span>Back to CV</span>
            </Link>
            <h1 className="text-2xl md:text-3xl font-bold">Knowledge Management Products</h1>
            <div className="w-24"></div> {/* Spacer for alignment */}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 space-y-12">
        
      
        {/* ================= SECTION 1: IHCI MONITORING & INTERACTIVE WEB PRODUCTS ================= */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-6">
            <BarChart3 className="mr-3 text-teal-600" size={32} />
            <div>
              <h2 className="text-2xl font-bold text-teal-700">India Hypertension Control Initiative (IHCI) & Public Health Tools</h2>
              <p className="text-gray-600">Monitoring Dashboards & Digital Knowledge Assets (2020-2021)</p>
            </div>
          </div>

          <p className="text-lg text-gray-700 mb-8">
            This portfolio tracks active field outputs, operational evaluations, and dynamic clinical support systems built during the India Hypertension Control Initiative (IHCI). Deployed as digital assets, these resources deliver automated health communication, computational assessments, and targeted metric validation.
          </p>

          {/* New Subsection A: IHCI Monitoring Dashboards */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-teal-800 mb-4 border-b pb-2">IHCI Progress and Monitoring Dashboards</h3>
            <p className="text-sm text-gray-600 mb-6">
              A chronological suite of field evaluation metrics, cohort control charts, and operational reviews tracking performance timelines.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {ihciMonitoringReports.map((report, index) => (
                <div key={index} className="border border-gray-100 rounded-lg p-4 bg-gray-50 hover:bg-gray-100 transition-colors flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-teal-600 tracking-wider uppercase block mb-1">
                      {report.period}
                    </span>
                    <h4 className="text-base font-bold text-gray-900 mb-2">{report.title}</h4>
                    <p className="text-xs text-gray-600 mb-4">{report.description}</p>
                  </div>
                  <a
                    href={`/reports/${report.file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center text-xs font-semibold bg-teal-600 text-white py-2 px-3 rounded hover:bg-teal-700 transition-colors mt-auto"
                  >
                    Open Full Report <ExternalLink className="ml-1.5" size={12} />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* New Subsection B: Serious Games & Interactive Assets */}
          <div>
            <h3 className="text-xl font-bold text-teal-800 mb-4 border-b pb-2">Interactive Frameworks, Calculators & Educational Engines</h3>
            <p className="text-sm text-gray-600 mb-6">
              Web applications engineered utilizing data visualization structures, game modules, and live endpoint connections to augment public response mechanics.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {interactiveWebProducts.map((tool, index) => (
                <div key={index} className="border border-teal-100 rounded-lg p-5 bg-gradient-to-br from-white to-teal-50/20 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-bold text-teal-900">{tool.title}</h4>
                      <span className="text-[10px] font-mono tracking-tight bg-teal-100 text-teal-800 px-2 py-0.5 rounded">
                        {tool.file}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 mb-4 leading-relaxed">{tool.description}</p>
                  </div>
                  <a
                    href={`/reports/${tool.file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-teal-700 text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-teal-800 transition-colors mt-2 self-start"
                  >
                    Launch Application <ExternalLink className="ml-2" size={14} />
                  </a>
                </div>
              ))}
            </div>
          </div>

                {/* ================= SECTION 1: UN KNOWLEDGE PRODUCTS ================= */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-6">
            <FileText className="mr-3 text-teal-600" size={32} />
            <div>
              <h2 className="text-2xl font-bold text-teal-700">UN Knowledge Management Products</h2>
              <p className="text-gray-600">27 Knowledge Products (2005-2006)</p>
            </div>
          </div>

          <p className="text-lg text-gray-700 mb-8">
            This collection represents 27 knowledge products developed during my tenure as Resource Person and Moderator
            for the AIDS Community with the UN Knowledge Management team in Delhi (2005-2006). These products include
            Consolidated Replies (CR) to specific queries from organizations, Concept Notes (CN), Community Updates
            (newsletters), and a comprehensive NACP-III summary booklet. Each product was compiled with extensive
            research support and represents collaborative knowledge sharing within the HIV/AIDS development community.
          </p>

          <div className="mb-8 p-4 bg-teal-50 rounded-lg border-l-4 border-teal-500">
            <h3 className="text-lg font-semibold text-teal-800 mb-2">About the Knowledge Products</h3>
            <div className="text-teal-700 space-y-2">
              <p>
                <strong>CR (Consolidated Replies):</strong> Responses to specific queries from organizations across India
              </p>
              <p>
                <strong>CN (Concept Notes):</strong> Strategic documents outlining approaches for specific interventions
              </p>
              <p>
                <strong>Updates:</strong> Community newsletters sharing knowledge and experiences
              </p>
              <p>
                <strong>Booklet:</strong> Comprehensive summary of contributions to India's National AIDS Control Program Phase III
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {/* NACP-III Booklet */}
            <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-lg border-l-4 border-teal-600">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-teal-700 flex-grow">
                  NACP-III Summary of Contributions - BOOKLET
                </h3>
                <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-medium ml-2">BOOKLET</span>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                A comprehensive booklet summarizing key contributions to India's National AIDS Control Program Phase
                III, documenting strategic approaches, lessons learned, and best practices from the community-driven
                response to HIV/AIDS.
              </p>
              <a
                href="https://docs.google.com/document/d/1mgm18O0v7zQFbyVI3w0kf0J0UVgzwRvV/edit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors"
              >
                Access Booklet <ExternalLink className="ml-2" size={16} />
              </a>
            </div>

            {/* Consolidated Replies */}
            <div>
              <h3 className="text-2xl font-bold text-teal-700 mb-6">Consolidated Replies (CR 01-22)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {consolidatedReplies.map((cr, index) => (
                  <div
                    key={index}
                    className="border rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1 bg-white"
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-bold text-teal-700 flex-grow">{cr.title}</h4>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium ml-2">
                          {cr.code}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        <strong>Requesting Organization:</strong> {cr.organization}
                      </p>
                      <p className="text-sm text-gray-600 mb-2">
                        <strong>Date:</strong> {cr.date}
                      </p>
                      <p className="text-gray-700 mb-4 leading-relaxed">{cr.description}</p>
                      <p className="text-xs text-gray-500 mb-4">{cr.compilation}</p>
                      <a
                        href={cr.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors"
                      >
                        Access Document <ExternalLink className="ml-2" size={16} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Concept Notes */}
            <div>
              <h3 className="text-2xl font-bold text-teal-700 mb-6">Concept Notes (CN 01-02)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {conceptNotes.map((cn, index) => (
                  <div
                    key={index}
                    className="border rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1 bg-white"
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-bold text-teal-700 flex-grow">{cn.title}</h4>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium ml-2">
                          {cn.code}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-4 leading-relaxed">{cn.description}</p>
                      <a
                        href={cn.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors"
                      >
                        Access Document <ExternalLink className="ml-2" size={16} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Updates */}
            <div>
              <h3 className="text-2xl font-bold text-teal-700 mb-6">Community Updates (Newsletters)</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {communityUpdates.map((update, index) => (
                  <div
                    key={index}
                    className="border rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1 bg-white"
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-bold text-teal-700 flex-grow">{update.title}</h4>
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium ml-2">
                          UPDATE
                        </span>
                      </div>
                      <p className="text-gray-700 mb-4 leading-relaxed">{update.description}</p>
                      <a
                        href={update.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors"
                      >
                        Access Newsletter <ExternalLink className="ml-2" size={16} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold text-teal-700 mb-4">Research and Compilation Team</h3>
            <p className="text-gray-700 mb-4">
              These knowledge products were compiled by <strong>E. Mohamed Rafique</strong> as Resource Person and
              Moderator for the AIDS Community, <strong>Rituu B. Nanda</strong> and <strong>Seema Kochhar</strong>, as Research Associates, 
              for the AIDS Community, with extensive research support provided by dedicated Research
              Associates from other Communities including  <strong>Shavika Gupta</strong>, <strong>Bidisha Pillai</strong>, and
              collaboration with other Resource Persons such as <strong>Gopi N Ghosh</strong> and <strong>Meghendra Banerjee</strong>.
            </p>
            <p className="text-gray-700">
              Each product represents collaborative knowledge sharing within India's HIV/AIDS development community,
              addressing real-world challenges and providing evidence-based solutions to organizations across the country.
            </p>
          </div>
        </div>

          
        </div>
      </main>

      <footer className="bg-teal-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <a href="mailto:rafique@the-constellation.org" className="text-white hover:text-teal-200 flex items-center gap-1">
              <Mail size={16} /> Email
            </a>
            <a href="https://www.linkedin.com/in/mohamed-essa-rafique-96b64b15/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-200 flex items-center gap-1">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href="https://github.com/iciso" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-200 flex items-center gap-1">
              <Github size={16} /> GitHub
            </a>
            <a href="https://www.facebook.com/emrafi" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-200 flex items-center gap-1">
              <Facebook size={16} /> Facebook
            </a>
            <a href="https://twitter.com/tmc7784" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-200 flex items-center gap-1">
              <Twitter size={16} /> Twitter
            </a>
            <a href="https://emrafi.wordpress.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-200 flex items-center gap-1">
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

// Existing Datasets
const consolidatedReplies = [
  {
    code: "CR 01",
    title: "Public-Private Partnerships for Treatment of AIDS",
    organization: "Tamil Nadu MGR Medical University, Chennai",
    date: "03 November 2005",
    description: "Comprehensive analysis of public-private partnership models for AIDS treatment, examining successful collaborations and providing strategic recommendations for healthcare delivery.",
    compilation: "Compiled by E. Mohamed Rafique, Resource Person; research provided by Seema Kochhar, Research Associate.",
    url: "https://docs.google.com/document/d/1cmy8EvFZ1F3xYTViEvS8XWt_C9Eifyla/edit?usp=drive_link&ouid=114806208085926162684&rtpof=true&sd=true",
  },
  {
    code: "CR 02",
    title: "Behaviour Change Communication for prevention of HIV",
    organization: "Christian Medical College, Vellore",
    date: "15 November 2005",
    description: "Comparative experiences and examples of effective behavior change communication strategies for HIV prevention, drawing from successful interventions across different contexts.",
    compilation: "Compiled by E. Mohamed Rafique, Resource Person; research provided by Seema Kochhar, Research Associate.",
    url: "https://docs.google.com/document/d/1HmQyvmT2VLwHFrCq_wb2j0LWWAeH0Tvv/edit?usp=drive_link&ouid=114806208085926162684&rtpof=true&sd=true",
  },
  {
    code: "CR 03",
    title: "Roles for Faith Based Organizations",
    organization: "Emmanuel Hospital Association, Delhi",
    date: "22 November 2005",
    description: "Strategic advice on the roles and contributions of faith-based organizations in HIV/AIDS response, highlighting best practices and collaborative approaches.",
    compilation: "Compiled by E. Mohamed Rafique, Resource Person; research provided by Seema Kochhar, Research Associate.",
    url: "https://docs.google.com/document/d/1wDYX4fcLzFIIKPuhb9d3IPXoft68mXpj/edit?rtpof=true",
  },
  {
    code: "CR 04",
    title: "Information on Injecting Drug Users",
    organization: "Social Awareness Service Organization, Imphal",
    date: "30 November 2005",
    description: "Comparative experiences and strategies for working with injecting drug users, including harm reduction approaches and community-based interventions.",
    compilation: "Compiled by E. Mohamed Rafique, Resource Person; research provided by Seema Kochhar, Research Associate.",
    url: "#",
  },
  {
    code: "CR 05",
    title: "Prevention of Parent to Child Transmission",
    organization: "Prof. S.Y.Saptasagar, Y. P. S., Sangli",
    date: "06 December 2005",
    description: "Comparative experiences in preventing parent-to-child transmission of HIV, examining successful programs and implementation strategies.",
    compilation: "Compiled by E. Mohamed Rafique, Resource Person; research provided by Seema Kochhar, Research Associate.",
    url: "https://docs.google.com/document/d/1Kdb79Ry30pDwrtQHscGfHY-UKPQiHflz/edit",
  },
  {
    code: "CR 06",
    title: "Information Communication Technology (ICT) and HIV",
    organization: "CSDMS, Noida",
    date: "26 December 2005",
    description: "Comparative experiences in using information and communication technology for HIV prevention, treatment, and support services.",
    compilation: "Compiled by E. Mohamed Rafique, Resource Person; research provided by Seema Kochhar",
    url: "https://docs.google.com/document/d/1JAeQxA2Y0DG_VdF2j1j3eucqb_OAGxa_/edit",
  },
  {
    code: "CR 07",
    title: "Monitoring indicators for HIV prevention",
    organization: "PSU, Kerala",
    date: "10 January 2006",
    description: "Comparative experiences and examples of effective monitoring indicators for HIV prevention programs, including measurement frameworks and evaluation approaches.",
    compilation: "Compiled by E. Mohamed Rafique, Resource Person; research provided by Seema Kochhar, Research Associate.",
    url: "https://docs.google.com/document/d/1FceyvifiesI2AppPEVXB36XNPwR284II/edit",
  },
  {
    code: "CR 08",
    title: "Nutrition and PLHIV",
    organization: "World Food Programme",
    date: "5 January 2006",
    description: "Consolidated reply on nutrition support for people living with HIV, including examples of successful nutrition programs and interventions.",
    compilation: "Compiled by E. Mohamed Rafique and Gopi N Ghosh and Resource Persons; additional research provided by Seema Kochhar, Shavika Gupta and Bidisha Pillai, Research Associates",
    url: "https://docs.google.com/document/d/1GC-ILfuumPt_jw7UzV0TRAbRGn70HbF5/edit",
  },
  {
    code: "CR 09",
    title: "Stigma and Discrimination",
    organization: "SHADOWS, Chirala",
    date: "20 January 2006",
    description: "Comparative experiences in addressing stigma and discrimination faced by people living with HIV, including community-based approaches and advocacy strategies.",
    compilation: "Compiled by E. Mohamed Rafique, Resource Person; research provided by Seema Kochhar, Research Associate.",
    url: "https://docs.google.com/document/d/1ZTsRbHGDbtj88h1mYBprR47TehE1Gb6c/edit",
  },
  {
    code: "CR 10",
    title: "Website content",
    organization: "UNAIDS-India",
    date: "27 January 2006",
    description: "Strategic advice on developing effective website content for HIV/AIDS organizations, including best practices for online communication and engagement.",
    compilation: "Compiled by E. Mohamed Rafique, Resource Person; research provided by Seema Kochhar, Research Associate.",
    url: "https://docs.google.com/document/d/1hPjylWK7epBxI-zHFML8-eHpLkWY7wun/edit",
  },
  {
    code: "CR 11",
    title: "Universal Access",
    organization: "Alliance India & AASRA",
    date: "February, 2006",
    description: "Strategic advice on achieving universal access to HIV prevention, treatment, care and support services, examining policy frameworks and implementation strategies.",
    compilation: "Compiled by E. Mohamed Rafique, Resource Person; research provided by Seema Kochhar, Research Associate.",
    url: "https://docs.google.com/document/d/1JD3TD9iF3pa0t7FMKKuKLX7gAs8svnfw/edit",
  },
  {
    code: "CR 12",
    title: "IEC Strategy for Health Sector",
    organization: "Rosetta Stone Media",
    date: "2006",
    description: "Examples and advice on Information, Education and Communication (IEC) strategies for the health sector, focusing on effective messaging and communication approaches.",
    compilation: "Compiled by E. Mohamed Rafique, Resource Person-AIDS Community and Meghendra Banerjee, Resource Person-Health communities.",
    url: "https://docs.google.com/document/d/1G2T1NJys_-HkD7-HQBzCtn1CPILL1NB8/edit",
  },
  {
    code: "CR 13",
    title: "Building management capacities of CBOs",
    organization: "TCIF",
    date: "28 February, 2006",
    description: "Comparative experiences in building management capacities of Community-Based Organizations (CBOs), including training approaches and organizational development strategies.",
    compilation: "Compiled by E. Mohamed Rafique, Resource Person; research provided by Seema Kochhar, Research Associate.",
    url: "https://docs.google.com/document/d/1n3F7dMVDYki05-Y0RLsnTg1H043TapwB/edit?rtpof=true",
  },
  {
    code: "CR 14",
    title: "Interventions for Uniformed Services",
    organization: "UNAIDS",
    date: "10 March 2006",
    description: "Experiences and strategies for HIV interventions targeting uniformed services, including military, police, and other security forces.",
    compilation: "Compiled by E. Mohamed Rafique, Resource Person; research provided by Seema Kochhar, Research Associate.",
    url: "https://docs.google.com/document/d/1KBbRdku4RtcaZl3e9Ue3a81F4xBffBAN/edit",
  },
  {
    code: "CR 15",
    title: "Traditional Cures for HIV",
    organization: "SHELTER",
    date: "14 March, 2006",
    description: "Experiences and perspectives on traditional and alternative approaches to HIV treatment, examining the role of traditional medicine in HIV care.",
    compilation: "Compiled by E. Mohamed Rafique, Resource Person; research provided by Seema Kochhar, Research Associate.",
    url: "https://docs.google.com/document/d/1lO9gh3Mpv8RtHM3YKiifmBWNpJSCsOrp/edit",
  },
  {
    code: "CR 16",
    title: "Sex Education in Schools",
    organization: "Reliance, Punjab",
    date: "22 March 2006",
    description: "Experiences and approaches to implementing sex education in schools, including curriculum development and stakeholder engagement strategies.",
    compilation: "Compiled by E. Mohamed Rafique, Resource Person; research provided by Seema Kochhar, Research Associate.",
    url: "https://docs.google.com/document/d/1lfTGHK_jysdx1QwQYZeG4qznCpjmzC6k/edit",
  },
  {
    code: "CR 17",
    title: "Women and HIV",
    organization: "PWN+, Chennai",
    date: "28 March 2006",
    description: "Strategic advice on addressing the specific needs and challenges of women living with HIV, including empowerment and support strategies.",
    compilation: "Compiled by E. Mohamed Rafique, Resource Person; research provided by Seema Kochhar, Research Associate.",
    url: "https://docs.google.com/document/d/15A3mUCd3HOTNQ2-tUNxWEIEaFiK_8VvH/edit",
  },
  {
    code: "CR 18",
    title: "Non-Allopathic Care providers for STI",
    organization: "London School of Tropical Medicine",
    date: "31 March 2006",
    description: "Experiences and advice on engaging non-allopathic care providers in sexually transmitted infection (STI) prevention and treatment programs.",
    compilation: "Compiled by E. Mohamed Rafique, Resource Person; research provided by Seema Kochhar, Research Associate.",
    url: "https://docs.google.com/document/d/1yEIhSdGb6nMp3CapC0wnPASTQL8wnA-m/edit",
  },
  {
    code: "CR 19",
    title: "Indicators on Residential Care",
    organization: "CCDT",
    date: "17 April 2006",
    description: "Experiences and frameworks for developing indicators to monitor and evaluate residential care services for people affected by HIV/AIDS.",
    compilation: "Compiled by E. Mohamed Rafique, Resource Person; research provided by Seema Kochhar, Research Associate.",
    url: "https://docs.google.com/document/d/1sf0EFDeMVTVbEiE_Uzc0zTgjh-I_K4oN/edit",
  },
  {
    code: "CR 20",
    title: "TB and HIV synergies",
    organization: "Medical & Health Services, Daman & Diu",
    date: "21 April 2006",
    description: "Experiences and advice on addressing the synergies between tuberculosis and HIV, including co-infection management and integrated service delivery.",
    compilation: "Compiled by E. Mohamed Rafique, Resource Person and Moderator; research provided by Seema Kochhar, Research Associate",
    url: "https://docs.google.com/document/d/1MeE_06BUeW2xax6lCoowwPR9QH83vcno/edit",
  },
  {
    code: "CR 21",
    title: "Economic Impact of AIDS",
    organization: "DAAC, Kozhikode",
    date: "25 April 2006",
    description: "Strategic advice on understanding and addressing the economic impact of AIDS on individuals, families, and communities.",
    compilation: "Compiled by E. Mohamed Rafique, Resource Person; research provided by Seema Kochhar, Research Associate.",
    url: "https://docs.google.com/document/d/1yb0rU7uooljcp1X4Pr0GaTvDSvk07y1i/edit",
  },
  {
    code: "CR 22",
    title: "Demolition and Service Delivery",
    organization: "SHARAN",
    date: "3 May 2006",
    description: "Strategic advice on maintaining service delivery during urban demolition and displacement, ensuring continuity of HIV/AIDS services for affected populations.",
    compilation: "Compiled by E. Mohamed Rafique, Resource Person; research provided by Seema Kochhar, Research Associate.",
    url: "https://docs.google.com/document/d/1QB00z3XUhK1qAH6empmv-huSWdVxh1yJ/edit",
  },
]

const conceptNotes = [
  {
    code: "CN 01",
    title: "Concept Note on Medical Camps",
    description: "Strategic framework for organizing and implementing medical camps as part of HIV/AIDS prevention and care services, including planning, implementation, and evaluation guidelines.",
    url: "https://docs.google.com/document/d/1uvAA76VI2hy7xrI3BQ2YYuG90il3fGb4/edit",
  },
  {
    code: "CN 02",
    title: "Concept Note on Mobile Clinics",
    description: "Comprehensive approach to mobile clinic services for HIV/AIDS prevention and care, addressing service delivery models, logistics, and community engagement strategies.",
    url: "https://docs.google.com/document/d/1v-0XYH-WoT4NdvdOdJUEEcSvVNX3IQF9/edit",
  },
]

const communityUpdates = [
  {
    title: "AIDS Community Update 01",
    description: "First newsletter of the AIDS Community, sharing knowledge, experiences, and updates from the HIV/AIDS development community across India.",
    url: "https://docs.google.com/document/d/1TtBL_QVtRroFrmtKaf0N8aO8i_BZHC9Q/edit?usp=sharing&ouid=114806208085926162684&rtpof=true&sd=",
  },
  {
    title: "AIDS Community Update 02",
    description: "Second edition of the community newsletter, featuring stories, best practices, and collaborative learning from AIDS Community members.",
    url: "https://docs.google.com/document/d/1I4RBhzRUp6Ib2WQgi8CGoAFJervr0oef/edit?usp=drive_link&ouid=114806208085926162684&rtpof=true&sd=true",
  },
  {
    title: "AIDS Community Update 03",
    description: "Third newsletter edition, continuing the tradition of knowledge sharing and community building within India's HIV/AIDS response network.",
    url: "https://docs.google.com/document/d/16ME-78CVtTkWHsL9LjxvvU3i0w8JWfFT/edit?usp=drive_link&ouid=114806208085926162684&rtpof=true&sd=true",
  },
]

// ================= NEW Dashboard DATASETS =================
const ihciMonitoringReports = [
  {
    period: "Annual 2020",
    file: "ihciannual20.html",
    title: "IHCI Annual Progress Review",
    description: "Full metrics evaluation, indicator performance overviews, and regional data reviews for the year 2020."
  },
  {
    period: "September 2020",
    file: "ihcisep20.html",
    title: "IHCI Monthly Dashboard - Sep 2020",
    description: "Initial baseline monitoring and healthcare field metrics tracking system implementation reports."
  },
  {
    period: "December 2020",
    file: "ihcidec20.html",
    title: "IHCI Monthly Dashboard - Dec 2020",
    description: "Year-end progress indicator summaries across targeted regional primary healthcare sites."
  },
  {
    period: "January 2021",
    file: "ihcijan21.html",
    title: "IHCI Monthly Dashboard - Jan 2021",
    description: "Early-quarter hypertension registry expansions, log system setups, and operational feedback."
  },
  {
    period: "February 2021",
    file: "ihcifeb21.html",
    title: "IHCI Monthly Dashboard - Feb 2021",
    description: "Active patient registration intervals and longitudinal monitoring benchmarks for hypertension control."
  },
  {
    period: "March 2021",
    file: "ihcimar21.html",
    title: "IHCI Monthly Dashboard - Mar 2021",
    description: "First-quarter clinic compliance indicators and data validation framework evaluations."
  },
  {
    period: "April 2021",
    file: "ihciapr21.html",
    title: "IHCI Monthly Dashboard - Apr 2021",
    description: "Mid-cohort clinic updates and structural healthcare field operational analysis updates."
  },
  {
    period: "May 2021",
    file: "ihcimay21.html",
    title: "IHCI Monthly Dashboard - May 2021",
    description: "Treatment adherence compliance stats and operational metrics tracking updates under field conditions."
  },
  {
    period: "June 2021",
    file: "ihcijun21.html",
    title: "IHCI Monthly Dashboard - Jun 2021",
    description: "Mid-year programmatic status updates, clinical metrics, and patient follow-up overviews."
  },
  {
    period: "July 2021",
    file: "ihcijul21.html",
    title: "IHCI Monthly Dashboard - Jul 2021",
    description: "Hypertension response indicator analysis across active program deployment districts."
  },
  {
    period: "August 2021",
    file: "ihciaug21.html",
    title: "IHCI Monthly Dashboard - Aug 2021",
    description: "Late-summer medical distribution logistics checks and localized tracking data collections."
  },
  {
    period: "September 2021",
    file: "ihcisep21.html",
    title: "IHCI Monthly Dashboard - Sep 2021",
    description: "Comparative regional performance indexes evaluation against baseline data trends."
  },
  {
    period: "October 2021",
    file: "ihcioct21.html",
    title: "IHCI Monthly Dashboard - Oct 2021",
    description: "Final quarter field monitoring data sets and final clinical outcomes summaries."
  }
]

const interactiveWebProducts = [
  {
    file: "chart.html",
    title: "IHCI Interactive Chart: A Tale of 4 Districts",
    description: "A data visualization charting interface mapping, isolating, and evaluating comparative hypertension control metrics across four operational index districts."
  },
  {
    file: "coapimodal.html",
    title: "COVID-19 Real-Time Live API Modal Node",
    description: "An integrated web script pop-up interface parsing, capturing, and transforming active public health data arrays dynamically via an external API connection."
  },
  {
    file: "cocheck.html",
    title: "Co-Check Digital Self-Assessment Tracker",
    description: "An open platform rendering customized client-side evaluation models based on the Community Life Competence Process (CLCP) framework approaches."
  },
  {
    file: "codsd.html",
    title: "CLCP Localized Data-Sharing Engine",
    description: "A structural information sharing script built to surface specialized indicators tracking regional safety measures and community resilience scores."
  },
  {
    file: "comemgame.html",
    title: "Coronavirus Educational Serious Game (CoMemGame)",
    description: "A micro-cognitive memory puzzle application designed to gamify virus structural identification and encourage preventive action awareness mechanics."
  },
  {
    file: "cotestbmj.html",
    title: "BMJ Clinical Quality Validation Framework",
    description: "A web assessment test environment built around the British Medical Journal intervention and clinical guidelines metrics."
  },
  {
    file: "fidyah.html",
    title: "Fidyah & Kaffarah Welfare Calculator Node",
    description: "A practical social assistance calculator running algorithmic loops to verify community support distribution amounts and financial contributions."
  },
  {
    file: "ihciquizcertificate.html",
    title: "IHCI Training Quiz & E-Certificate Node",
    description: "An automated clinical education platform that calculates exam performance modules and produces downloadable programmatic verification certificates."
  },
  {
    file: "tmjinfog.html",
    title: "TMJ Interactive Health Infographic Portal",
    description: "An dynamic graphic presentation framework leveraging localized vectors to make multifaceted wellness parameters legible to grassroot agents."
  }
]
