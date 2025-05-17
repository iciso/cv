import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PublicationsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-teal-700 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center text-white hover:text-teal-200">
              <ArrowLeft className="mr-2" size={20} />
              <span>Back to CV</span>
            </Link>
            <h1 className="text-2xl md:text-3xl font-bold">Publications & Research</h1>
            <div className="w-24"></div> {/* Spacer for alignment */}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="space-y-8">
          {/* UN Consultancy Publications */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-teal-700 mb-4">UN Consultancy Publications (2010-2012)</h2>
            <ul className="list-decimal pl-5 space-y-3 text-gray-700">
              <li>
                The Report of the NACO, WHO and UNICEF's National Consultation to provide interventions for
                out-of-school youth in India.
              </li>
              <li>
                Similarly, the National Strategic Framework for HIV prevention among out of school youth at risk and
                especially vulnerable, completed by me for UNICEF India
              </li>
              <li>
                In addition, the Operational Guidelines for implementing District-Level HIV prevention programs for
                Adolescents in Community Settings was done for UNICEF India
              </li>
              <li>
                A Desk review on Oral Substitution Therapy done for UNAIDS Eastern Europe and Central Asia, which is a
                global update for 2010.
              </li>
              <li>
                The Program Book of the UNIFEM MOIA ICOE Program for Women Migrant Workers migrating from India to the
                Gulf countries
              </li>
              <li>
                Report of the Workshop titled, "Call of the Caribbean: Towards AIDS Competence in Trinidad and Tobago"
              </li>
            </ul>
          </section>

          {/* Research Papers */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-teal-700 mb-4">
              National and International Research Papers Presented
            </h2>
            <ul className="list-decimal pl-5 space-y-3 text-gray-700">
              <li>
                Role of Family Physician in Health and Sex Education - Indian Medical Association Medical Education and
                Research Award - 1, Oration presented at the National Conference of the Indian Medical Association
                College of General Practitioners held at Pune from May 24 - 26th, 1996.
              </li>
              <li>
                Presented a paper titled, `HIV/AIDS in the family' at the Annual Conference of the Indian Association of
                Family Physicians on the World AIDS Day - 1st December 1996 at Gulbarga.
              </li>
              <li>
                "Workplace Initiatives on HIV/AIDS in Tata Tea Ltd.," was presented at the Business and AIDS: A
                Commitment to Action, Satellite Symposium at the 5th International Congress on AIDS in Asia and the
                Pacific (ICAAP) 23rd October 1999, Putra World Trade Centre, Kuala Lumpur.
              </li>
              <li>
                Congressional Briefing Speaker at the Partnerships for Health – The Effect of Health on India's
                Development, "HIV/AIDS: Economic Consequences in a Decade for India", 6 – 8 P.M. June 7, 2000; Room
                1300, Longworth Building, Independence Avenue, Washington D.C.
              </li>
              <li>
                Conducted Skill Building Workshop on "Interactive Web Pages on HIV/AIDS" at the 6th ICAAP in October
                2001.
              </li>
              <li>
                "Interactive Web Pages and HIV/AIDS" was presented at the 5th International Home and Community Care
                (HCC) Conference for People with HIV/AIDS on 19th December 2001 at Chiang Mai, Thailand.
              </li>
              <li>
                Panel Discussant on "Information Networks" at the 5HCC at Chiang Mai, Thailand held from 17th to 22nd
                December 2001. Also worked as the Health and Development Network's Key Correspondent (HDN-KC) for the
                5HCC.
              </li>
              <li>
                Participated as Consultant for the Workshop on "Orientation on Private Sector Mobilization to HIV/AIDS",
                held by UNAIDS and the Asian Business Council on AIDS at Bangkok from 22nd to 27th March 2002, where
                consultants drew up individual country menus for action.
              </li>
              <li>
                Was a Consultant in the 'International Policymakers Conference on HIV/AIDS', which formed the "Delhi
                Declaration". This was held at Vigyan Bhavan, New Delhi on May 11th and 12th 2002.
              </li>
              <li>
                At the XIV International AIDS Conference in Barcelona held from the 6th July to the 12th July 2002 apart
                from working as a HDN Key Correspondent the following was presented:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>
                    "Overview of the care, support and treatment at the National level in the Business Sector" in
                    Session IV of the India Satellite Conference
                  </li>
                  <li>
                    "Strategies to address stigma and discrimination at workplace" at the Stigma and Discrimination
                    Satellite Conference
                  </li>
                  <li>"Interactive Web page Development on HIV/AIDS"</li>
                </ul>
              </li>
              <li>
                Represented the Indian Business Coalition on AIDS at a Press and Media Conference arranged by the Asian
                Business Coalition on AIDS in Bangkok in March 2003.
              </li>
              <li>
                Presented the country's Treatment Scenario at the First International Treatment Preparedness Summit at
                Cape Town, South Africa in April 2003.
              </li>
              <li>
                'From the Tatas to the Indian business coalition on AIDS: The growth of workplace initiatives on
                HIV/AIDS' presented at XV International AIDS Conference, Bangkok, Thailand - July 11-16, 2004.
              </li>
              <li>
                One Stop Shop for establishing Workplace Interventions in the Business sector – A Skill Building
                Workshop at the 7th ICAAP, Kobe, July 2005
              </li>
              <li>
                NACP III e-consultation – presented at the 5th AIDS-India International Conference at Chennai in October
                2005
              </li>
              <li>At the HIV/AIDS and TB Jan 2006 presented, 'The Solution Exchange – AIDS Community'</li>
              <li>
                'Skill Building Workshop for HIV and AIDS Moderators' presented at the XVI International AIDS
                Conference, Toronto in August 2006.
              </li>
              <li>
                Abstract of, 'Advocating Sex Education in Indian schools' presented at the International AIDS Conference
                at Mexico in Aug 2008.
              </li>
              <li>Abstract and plan of providing UNAIDS and UNDP Conference Hubs for the AIDS 2008</li>
            </ul>
          </section>

          {/* Published Papers */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-teal-700 mb-4">Published Papers</h2>
            <ul className="list-decimal pl-5 space-y-3 text-gray-700">
              <li>On Pyoderma; Kerala Medical Journal, Vol.34, No: 5, p.152 Oct. 1993.</li>
              <li>Needed: A clear-cut AIDS policy, The Indian Express, Editorial page, Nov.30th 1993.</li>
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
              <li>
                AIDS: the truth and the myth; Nammude Arogyam, Part I - pp 31-35 Jan.1996; Part II - pp32-35 Feb.1996.
              </li>
              <li>
                Common Bacterial Skin Diseases in Children; Review article IAP Journal of Practical Pediatrics, Vol.4,
                No: 1, Jan-Mar 1996. in Children;
              </li>
              <li>Colloidon Baby - 2 Case Reports; The Antiseptic, Vol.93, No: 5, p.167, May 1996.</li>
              <li>The ripple effect of HIV/AIDS; Tata Tea Seithigal, Vol.3, No.1, pp 24-25, July - August 1996.</li>
              <li>Sex Education; Tata Tea Seithigal, Vol.3, No.2, pp20, 22. Sep - Oct 1996.</li>
              <li>HIV/AIDS: Economic consequences for a decade in India - Kerala Medical Journal, Dec 1996.</li>
              <li>Community Pediatrics: Essential Newborn Care, Pediatric Companion, Dec 1996.</li>
              <li>Know your Health - Hypertension: Tata Tea Seithigal, pp 12, 13. July 1998.</li>
              <li>Know your Health - The Diet in Diabetes: Tata Tea Seithigal, pp22, 23. November-December 1998.</li>
              <li>Know your Health – A pain in the Neck: Tata Tea Seithigal, pp25, 26. January-February 1999.</li>
              <li>
                Self Appraisal in Sexual Health Programs – Sangamam: Partnerships for Sexual Health in Kerala, Quarterly
                news letter of the State Management Agency pp7 & 8., 1999.
              </li>
              <li>Know your Health – A Precious Baby at the Party: Tata Tea Seithigal, pp21, 22. May-June 1999.</li>
              <li>Know your Health – The Puff that strikes: Tata Tea Seithigal, pp24, 25. Nov-Dec 1999.</li>
              <li>Article on NACP III e-consultation</li>
              <li>Report of the Solution Exchange Action Group for Local Community Response to HIV</li>
              <li>A paper titled, "The Internet and AIDS Education In India"</li>
              <li>
                Article, "Synergizing Knowledge and action: AIDS Community of Solution Exchange" in the January 2007
                issue of eHealth
              </li>
              <li>
                "Some Impressions from the SALT Visits to Northern Thailand in December 2007" as a HDN Key Correspondent
                publication.
              </li>
            </ul>
          </section>

          {/* Blogs */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-teal-700 mb-4">Blogs</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>AIDS 2002: A Catalonian Experience</li>
              <li>Critical Reflection On The Macarthur Foundation</li>
              <li>Munnar to Melbourne: the 6 ICAAP</li>
              <li>On the Telephone</li>
              <li>Rambling Roads</li>
              <li>Beyond Knowledge Fairs</li>
              <li>Barriers to inclusion for those living with HIV</li>
              <li>Global Health Council Interview</li>
              <li>Chiang Mai 2001: A Key Correspondent's Report</li>
              <li>NACP III and Avahan - An Interview</li>
              <li>Book Review: AIDS and Maternity in India</li>
              <li>Selamat Datang Ke Kuala Lumpur</li>
              <li>CLCP was there before the Facilitators!</li>
            </ul>
          </section>
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
