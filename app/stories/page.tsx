import Link from "next/link"
import { ArrowLeft, ExternalLink, Mail, Linkedin, Github, Twitter, Facebook, Globe, BookOpen } from "lucide-react"

export default function StoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-teal-700 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center text-white hover:text-teal-200">
              <ArrowLeft className="mr-2" size={20} />
              <span>Back to CV</span>
            </Link>
            <h1 className="text-2xl md:text-3xl font-bold">Stories & Community Papers</h1>
            <div className="w-24"></div> {/* Spacer for alignment */}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="flex items-center mb-6">
            <BookOpen className="mr-3 text-teal-600" size={32} />
            <div>
              <h2 className="text-2xl font-bold text-teal-700">The Constellation Stories</h2>
              <p className="text-gray-600">42 Community-Focused Narratives</p>
            </div>
          </div>

          <p className="text-lg text-gray-700 mb-8">
            This collection of 42 stories represents community-focused narratives published on behalf of The
            Constellation. These stories explore community life competence, social inclusion, and participatory
            development approaches in accessible, narrative formats that resonate with community members. The word
            "stories" is used intentionally as a more community-friendly alternative to "papers," making these important
            insights accessible to all.
          </p>

          <div className="mb-8 p-4 bg-teal-50 rounded-lg border-l-4 border-teal-500">
            <h3 className="text-lg font-semibold text-teal-800 mb-2">About The Constellation</h3>
            <p className="text-teal-700">
              The Constellation is a global network of people and organizations committed to community life competence.
              These stories document real experiences, insights, and learnings from communities around the world who are
              taking charge of their own development and well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stories.map((story, index) => (
              <div
                key={index}
                className="border rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-teal-700 flex-grow">{story.title}</h3>
                    <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded-full text-xs font-medium ml-2">
                      Story {index + 1}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{story.description}</p>
                  <div className="flex items-center justify-between">
                    <a
                      href={story.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors"
                    >
                      Read Story <ExternalLink className="ml-2" size={16} />
                    </a>
                    <div className="text-sm text-gray-500">Published on The Constellation</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold text-teal-700 mb-4">Explore More</h3>
            <p className="text-gray-700 mb-4">
              These stories are part of a larger collection of resources and insights available through The
              Constellation's community platform. Each story represents real experiences and learnings from communities
              engaged in life competence processes.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://aidscompetence.ning.com/profiles/blog/list?user=2ebpkq9vx51ya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-teal-600 hover:text-teal-800 font-medium"
              >
                View Page 1 <ExternalLink className="ml-1" size={16} />
              </a>
              <a
                href="https://aidscompetence.ning.com/profiles/blog/list?user=2ebpkq9vx51ya&page=2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-teal-600 hover:text-teal-800 font-medium"
              >
                View Page 2 <ExternalLink className="ml-1" size={16} />
              </a>
              <a
                href="https://aidscompetence.ning.com/profiles/blog/list?user=2ebpkq9vx51ya&page=3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-teal-600 hover:text-teal-800 font-medium"
              >
                View Page 3 <ExternalLink className="ml-1" size={16} />
              </a>
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

const stories = [
  {
    title: "8 Maxims on Being Humane resonate in 3 Scriptures",
    description:
      "Exploring universal human values that transcend religious boundaries and resonate across different spiritual traditions.",
    url: "https://aidscompetence.ning.com/profiles/blogs/8-maxims-on-being-humane-resonate-in-3-scriptures",
  },
  {
    title: "The Role of KM",
    description:
      "Understanding the critical role of Knowledge Management in community development and organizational learning.",
    url: "https://aidscompetence.ning.com/profiles/blogs/the-role-of-km",
  },
  {
    title: "Steps of Dream Building Using SALT & compared to WoT",
    description:
      "A detailed exploration of dream building processes using SALT methodology compared to other approaches.",
    url: "https://aidscompetence.ning.com/profiles/blogs/steps-of-dream-building-using-salt-amp-compared-to-wot",
  },
  {
    title: "Definitions of Transparency",
    description:
      "Examining different perspectives and definitions of transparency in community and organizational contexts.",
    url: "https://aidscompetence.ning.com/profiles/blogs/definitions-of-transparency",
  },
  {
    title: "Icons of The Constellation",
    description:
      "Understanding the symbolic representations and visual identity elements that define The Constellation's work.",
    url: "https://aidscompetence.ning.com/profiles/blogs/icons-of-the-constellation",
  },
  {
    title: "Membership Type: Who are we?",
    description: "Defining the different types of membership and identity within The Constellation community network.",
    url: "https://aidscompetence.ning.com/profiles/blogs/membership-type-who-are-we",
  },
  {
    title: "The Constellation: A Constellation of Communities: Towards True Community Ownership",
    description:
      "Exploring the vision of authentic community ownership and the network of communities working together.",
    url: "https://aidscompetence.ning.com/profiles/blogs/the-constellation-a-constellation-of-communities-towards-true",
  },
  {
    title: "The Unquenchable Thirst: A Journey Within The Constellation",
    description:
      "A personal journey narrative exploring the deep motivations and aspirations within The Constellation's work.",
    url: "https://aidscompetence.ning.com/profiles/blogs/the-unquenchable-thirst-a-journey-within-the-constellation",
  },
  {
    title: "Knowledge is Power: Community Ownership of Knowledge",
    description:
      "Examining how communities can take ownership of knowledge creation, sharing, and application processes.",
    url: "https://aidscompetence.ning.com/profiles/blogs/knowledge-is-power-community-ownership-of-knowledge",
  },
  {
    title: "Why CLCP is far better than Targeted Interventions (TI) - Part III",
    description:
      "The third part of a comprehensive analysis comparing Community Life Competence Process with traditional targeted interventions.",
    url: "https://aidscompetence.ning.com/profiles/blogs/why-clcp-is-far-better-than-targeted-interventions-ti-part-iii",
  },
  {
    title: "Defining key terms in the context of CLCP",
    description:
      "A glossary and explanation of essential terminology used in Community Life Competence Process methodology.",
    url: "https://aidscompetence.ning.com/profiles/blogs/defining-key-terms-in-the-context-of-clcp",
  },
  {
    title: "Tree of Emotions: How Beautiful Is Our SALT",
    description:
      "Exploring the emotional dimensions and beauty of the SALT (Support, Appreciate, Learn, Transfer) approach.",
    url: "https://aidscompetence.ning.com/profiles/blogs/tree-of-emotions-how-beautiful-is-our-salt",
  },
  {
    title: "The Constellation's Theory of Ownership by Philip Forth",
    description: "Philip Forth's theoretical framework on community ownership within The Constellation's methodology.",
    url: "https://aidscompetence.ning.com/profiles/blogs/the-constellation-s-theory-of-ownership-by-philip-forth",
  },
  {
    title:
      '"We will not influence final decision making by the TMJ Community" - Sifting the After Event Reflection (AER) for Evidence of Community Ownership',
    description:
      "An analysis of community ownership evidence through After Event Reflection processes in the TMJ Community context.",
    url: "https://aidscompetence.ning.com/profiles/blogs/we-will-not-influence-final-decision-making-by-the-tmj-community",
  },
  {
    title: "Failures, Fears, and Frustrations: The more the merrier!",
    description: "Embracing challenges and setbacks as valuable learning opportunities in community development work.",
    url: "https://aidscompetence.ning.com/profiles/blogs/failures-fears-and-frustrations-the-more-the-merrier",
  },
  {
    title: "COVID-19 Self Assessment- for Individuals, Communities & doctors and health care workers",
    description:
      "Community-based self-assessment tools developed during the COVID-19 pandemic for various stakeholder groups.",
    url: "https://aidscompetence.ning.com/profiles/blogs/covid-19-self-assessments-for-individuals-and-communities",
  },
  {
    title: "CLCP to change Ward-Counselors to Ward-Members or Leaders!",
    description:
      "Transforming traditional counselor roles into community leadership positions through CLCP methodology.",
    url: "https://aidscompetence.ning.com/profiles/blogs/clcp-to-change-ward-counselors-to-ward-members-or-leaders",
  },
  {
    title: "A Journey of Joy: Story of Beatrice",
    description:
      "A personal narrative following Beatrice's transformative journey within the community development process.",
    url: "https://aidscompetence.ning.com/profiles/blogs/a-journey-of-joy-story-of-beatrice",
  },
  {
    title: "Impossible Dreams in Story, Song, and Sketches!",
    description:
      "Creative expressions of community aspirations through various artistic mediums and storytelling approaches.",
    url: "https://aidscompetence.ning.com/profiles/blogs/impossible-dreams-in-story-song-and-sketches",
  },
  {
    title: "Go for the uncomfortable dream - What makes us Human",
    description:
      "Exploring the human capacity to pursue challenging aspirations and the growth that comes from discomfort.",
    url: "https://aidscompetence.ning.com/profiles/blogs/go-for-the-uncomfortable-dream-what-makes-us-human",
  },
  {
    title: "First SALT visit to New Harijan Colony in Peroor Village, near Ettumanoor Town, Kerala, India.",
    description: "Documentation of the initial SALT visit to a community in Kerala, India, and the insights gained.",
    url: "https://aidscompetence.ning.com/profiles/blogs/first-salt-visit-to-new-harijan-colony-in-peroor-village-near",
  },
  {
    title: "Comparing when to use Peer Assist and Knowledge Fairs",
    description:
      "Strategic guidance on selecting appropriate knowledge sharing methodologies for different community contexts.",
    url: "https://aidscompetence.ning.com/profiles/blogs/comparing-when-to-use-peer-assist-and-knowledge-fairs-1",
  },
  {
    title: '"Your Religion says you must reduce other\'s vulnerabilities!"',
    description:
      "Exploring religious and spiritual motivations for community service and vulnerability reduction efforts.",
    url: "https://aidscompetence.ning.com/profiles/blogs/your-religion-says-you-must-reduce-other-s-vulnerabilities",
  },
  {
    title: "My Life, My Choice (MLMC) Program in Picture and Rhyme: Hindi & English",
    description:
      "Creative presentation of the My Life, My Choice program using visual and poetic elements in multiple languages.",
    url: "https://aidscompetence.ning.com/profiles/blogs/my-life-my-choice-mlmc-program-in-picture-and-rhyme-hindi-english",
  },
  {
    title: "Little drops of knowledge: The National Knowledge Fair, India",
    description:
      "Insights and experiences from India's National Knowledge Fair, highlighting community wisdom and learning.",
    url: "https://aidscompetence.ning.com/profiles/blogs/little-drops-of-knowledge-the-national-knowledge-fair-india",
  },
  {
    title: "Why CLCP is far better than Targeted Interventions (TI) - Part II",
    description:
      "The second part of the comprehensive analysis comparing CLCP methodology with traditional targeted interventions.",
    url: "https://aidscompetence.ning.com/profiles/blogs/why-clcp-is-far-better-than-targeted-interventions-ti-part-ii",
  },
  {
    title: "Targeted Intervention (TI) and CLCP: Target and Universal Coverage",
    description:
      "Examining the differences between targeted approaches and universal coverage strategies in community development.",
    url: "https://aidscompetence.ning.com/profiles/blogs/targeted-intervention-ti-and-clcp-target-and-universal-coverage",
  },
  {
    title: "Call of the Caribbean: Part II: The SALT Visits and the Self Assessment Framework",
    description:
      "Second part of the Caribbean series focusing on SALT methodology and community self-assessment processes.",
    url: "https://aidscompetence.ning.com/profiles/blogs/call-of-the-caribbean-part-ii",
  },
  {
    title: "Call of the Caribbean: Part III: One End is another's Beginning:",
    description:
      "The concluding part of the Caribbean series exploring continuity and new beginnings in community work.",
    url: "https://aidscompetence.ning.com/profiles/blogs/call-of-the-caribbean-part-iii",
  },
  {
    title: "Self/Community Assessment Framework on HIV for Trinidad and Tobago",
    description: "A specialized assessment framework developed for HIV-related community work in Trinidad and Tobago.",
    url: "https://aidscompetence.ning.com/profiles/blogs/selfcommunity-assessment",
  },
  {
    title: "Call of the Caribbean Part I : Towards AIDS Competence in Trinidad and Tobago",
    description:
      "The first part of the Caribbean series documenting the journey towards AIDS competence in Trinidad and Tobago.",
    url: "https://aidscompetence.ning.com/profiles/blogs/call-of-the-caribbean-towards",
  },
  {
    title: "Delhi Knowledge Fair: The innate Knowledge of the Community",
    description:
      "Experiences and insights from the Delhi Knowledge Fair, celebrating indigenous community knowledge systems.",
    url: "https://aidscompetence.ning.com/profiles/blogs/delhi-knowledge-fair-the",
  },
  {
    title: "In Unrealistic Unimaginable Dreams lie the real future",
    description: "Exploring how seemingly impossible aspirations often contain the seeds of transformative change.",
    url: "https://aidscompetence.ning.com/profiles/blogs/in-unrealistic-unimaginable",
  },
  {
    title: "How to convert a TI project into a CLCP one!",
    description:
      "Practical guidance for transforming traditional targeted intervention projects into CLCP-based initiatives.",
    url: "https://aidscompetence.ning.com/profiles/blogs/how-to-convert-a-ti-project",
  },
  {
    title: "Why CLCP is far better than Targeted Interventions (TI) - Part I",
    description:
      "The first part of a detailed comparison between CLCP methodology and traditional targeted intervention approaches.",
    url: "https://aidscompetence.ning.com/profiles/blogs/why-clcp-is-far-better-than-1",
  },
  {
    title: "AAR of India to Nepal Cross Border Field Visit - Draft",
    description:
      "After Action Review of a cross-border field visit between India and Nepal, documenting learnings and insights.",
    url: "https://aidscompetence.ning.com/profiles/blogs/aar-of-india-to-nepal-cross",
  },
  {
    title: "Inspiration forcing the Response - Maova village, Nagaland, India",
    description:
      "A story from Maova village in Nagaland, India, showing how inspiration drives community response and action.",
    url: "https://aidscompetence.ning.com/profiles/blogs/inspiration-forcing-the",
  },
  {
    title: "From the North-East Knowledge Fair: CLCP was there before the CLCP facilitators",
    description:
      "Insights from the North-East Knowledge Fair revealing how CLCP principles existed in communities before formal introduction.",
    url: "https://aidscompetence.ning.com/profiles/blogs/from-the-northeast-knowledge",
  },
  {
    title: "Why CLCP is far better than Targeted Interventions (TI) Part I",
    description:
      "The foundational argument for why Community Life Competence Process surpasses traditional targeted interventions.",
    url: "https://aidscompetence.ning.com/profiles/blogs/why-clcp-is-far-better-than",
  },
  {
    title: "SALT Visits and AAR in CARE India",
    description:
      "Documentation of SALT visits and After Action Reviews conducted within CARE India's programming context.",
    url: "https://aidscompetence.ning.com/profiles/blogs/salt-visits-and-aar-in-care",
  },
  {
    title: "Acknowledgment and Recognition",
    description:
      "Reflecting on the importance of acknowledging contributions and recognizing community achievements in development work.",
    url: "https://aidscompetence.ning.com/profiles/blogs/acknowledgment-and-recognition",
  },
  {
    title: "The AAR of Journeys of Joy: the EMPHASIS India Knowledge Fair",
    description:
      "After Action Review of the EMPHASIS India Knowledge Fair, capturing the journeys of joy and learning experiences.",
    url: "https://aidscompetence.ning.com/profiles/blogs/the-aar-of-journeys-of-joy-the",
  },
  // Additional stories here (up to 42 stories)
]
