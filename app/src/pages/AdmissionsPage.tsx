import { Link } from 'react-router-dom';
import { CreditCard, Calendar, FileText, CheckCircle, Banknote, GraduationCap, Clock, AlertCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const feeStructure = [
  { programme: 'NQF Level 2-3 Certificates', duration: '3-6 Months', tuition: 'R 8,500 - R 12,000', registration: 'R 1,500' },
  { programme: 'NQF Level 4 Certificates', duration: '1 Year', tuition: 'R 18,000 - R 25,000', registration: 'R 2,000' },
  { programme: 'NQF Level 5 Diplomas', duration: '1-2 Years', tuition: 'R 28,000 - R 35,000', registration: 'R 2,500' },
];

const bursaries = [
  {
    name: 'NSFAS Bursary',
    description: 'Full bursary covering tuition, accommodation, meals, and learning materials for eligible students.',
    eligibility: ['South African citizen', 'Combined household income under R350,000/year', 'Registered at public institution'],
    coverage: '100% of tuition and living expenses',
    icon: GraduationCap,
  },
  {
    name: 'REISA Community Bursary',
    description: 'Bursaries for students from communities near REISA solar farm in the Northern Cape.',
    eligibility: ['Resident of Kathu, Olifantshoek, Dibeng, Siyathemba, Babatas or Mapoteng', 'Studying renewable energy related programmes'],
    coverage: 'Full tuition and stipend',
    icon: CreditCard,
  },
  {
    name: 'GC Solar Technical Bursary',
    description: 'Industry bursary for students pursuing solar PV and renewable energy qualifications.',
    eligibility: ['Enrolled in Solar PV programmes', 'Academic excellence', 'Financial need'],
    coverage: 'Tuition + practical training',
    icon: Banknote,
  },
  {
    name: 'Merit Bursary',
    description: 'Academic excellence bursary for top-performing students.',
    eligibility: ['Achieved 75% or higher in previous qualification', 'Full-time registration'],
    coverage: 'Up to 50% of tuition fees',
    icon: CheckCircle,
  },
];

const importantDates = [
  { date: '1 August 2025', event: 'Applications Open for 2026' },
  { date: '30 September 2025', event: 'Early Bird Application Deadline' },
  { date: '31 October 2025', event: 'NSFAS Application Deadline' },
  { date: '30 November 2025', event: 'Final Application Deadline' },
  { date: '15 December 2025', event: 'Admission Decisions Released' },
  { date: '10 January 2026', event: 'Registration Opens' },
  { date: '1 February 2026', event: 'Classes Begin' },
];

export function AdmissionsPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-r from-[#1e3a5f] to-[#2d8a5e]">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <Badge className="bg-[#c9a227] mb-4">2026 Admissions</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions & Fees</h1>
          <p className="text-lg opacity-90">Everything you need to know about applying to SSACT</p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 bg-[#2d8a5e]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            <Link to="/apply" className="flex items-center gap-2 text-white font-medium hover:underline">
              <FileText size={18} /> Apply Online
            </Link>
            <a href="#fees" className="flex items-center gap-2 text-white font-medium hover:underline">
              <CreditCard size={18} /> Fee Structure
            </a>
            <a href="#bursaries" className="flex items-center gap-2 text-white font-medium hover:underline">
              <GraduationCap size={18} /> Bursaries
            </a>
            <a href="#dates" className="flex items-center gap-2 text-white font-medium hover:underline">
              <Calendar size={18} /> Important Dates
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Tabs defaultValue="fees" className="w-full">
            <TabsList className="w-full justify-center mb-8">
              <TabsTrigger value="fees">Fees & Costs</TabsTrigger>
              <TabsTrigger value="bursaries">Bursaries</TabsTrigger>
              <TabsTrigger value="dates">Important Dates</TabsTrigger>
              <TabsTrigger value="process">Application Process</TabsTrigger>
            </TabsList>

            <TabsContent value="fees">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-[#1e3a5f]">2026 Fee Structure</h2>
                  <p className="text-gray-600">Estimated tuition fees by qualification level</p>
                </div>

                <Card>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="text-left p-4 font-semibold text-[#1e3a5f]">Programme Level</th>
                          <th className="text-left p-4 font-semibold text-[#1e3a5f]">Duration</th>
                          <th className="text-left p-4 font-semibold text-[#1e3a5f]">Tuition Fees</th>
                          <th className="text-left p-4 font-semibold text-[#1e3a5f]">Registration</th>
                        </tr>
                      </thead>
                      <tbody>
                        {feeStructure.map((fee, i) => (
                          <tr key={i} className="border-t">
                            <td className="p-4">{fee.programme}</td>
                            <td className="p-4 text-gray-600">{fee.duration}</td>
                            <td className="p-4 text-[#2d8a5e] font-medium">{fee.tuition}</td>
                            <td className="p-4 text-gray-600">{fee.registration}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Card>

                <div className="mt-8 grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CreditCard className="w-5 h-5 text-[#2d8a5e]" />
                        Additional Costs
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between">
                          <span className="text-gray-600">Textbooks & Materials</span>
                          <span className="font-medium">R 2,000 - R 5,000/year</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-600">Practical Kit (where applicable)</span>
                          <span className="font-medium">R 1,500 - R 3,000</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-600">Student ID Card</span>
                          <span className="font-medium">R 100</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-600">Examination Fees</span>
                          <span className="font-medium">Included in tuition</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Banknote className="w-5 h-5 text-[#2d8a5e]" />
                        Payment Options
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#2d8a5e] mt-0.5" />
                          <span className="text-gray-700">Full payment upfront (5% discount)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#2d8a5e] mt-0.5" />
                          <span className="text-gray-700">Monthly payment plans available</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#2d8a5e] mt-0.5" />
                          <span className="text-gray-700">Quarterly instalments</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#2d8a5e] mt-0.5" />
                          <span className="text-gray-700">NSFAS and bursary payments accepted</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="bursaries" id="bursaries">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-[#1e3a5f]">Available Bursaries</h2>
                  <p className="text-gray-600">Financial support options for qualifying students</p>
                </div>

                <div className="space-y-6">
                  {bursaries.map((bursary, i) => (
                    <Card key={i} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-[#2d8a5e]/10 flex items-center justify-center flex-shrink-0">
                            <bursary.icon className="w-6 h-6 text-[#2d8a5e]" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-[#1e3a5f] mb-2">{bursary.name}</h3>
                            <p className="text-gray-600 mb-4">{bursary.description}</p>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                <p className="text-sm font-medium text-gray-500 mb-1">Eligibility:</p>
                                <ul className="space-y-1">
                                  {bursary.eligibility.map((item, j) => (
                                    <li key={j} className="text-sm text-gray-700 flex items-start gap-1">
                                      <span className="text-[#2d8a5e]">•</span> {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-500 mb-1">Coverage:</p>
                                <p className="text-sm text-[#2d8a5e] font-medium">{bursary.coverage}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-[#c9a227]/10 rounded-lg flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-[#c9a227] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-[#1e3a5f]">Bursary Application Deadline</p>
                    <p className="text-sm text-gray-600">All bursary applications must be submitted by 31 October 2025 for the 2026 academic year.</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="dates" id="dates">
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-[#1e3a5f]">2026 Academic Calendar</h2>
                  <p className="text-gray-600">Key dates for the upcoming academic year</p>
                </div>

                <div className="space-y-4">
                  {importantDates.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-16 h-16 rounded-lg bg-[#2d8a5e] text-white flex flex-col items-center justify-center flex-shrink-0">
                        <span className="text-xs">{item.date.split(' ')[1]}</span>
                        <span className="text-xl font-bold">{item.date.split(' ')[0]}</span>
                      </div>
                      <div>
                        <p className="font-bold text-[#1e3a5f]">{item.event}</p>
                        <p className="text-sm text-gray-500">{item.date} {item.date.split(' ')[2]}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="process" id="process">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-[#1e3a5f]">Application Process</h2>
                  <p className="text-gray-600">How to apply to SSACT in 4 easy steps</p>
                </div>

                <div className="space-y-6">
                  {[
                    { step: 1, title: 'Choose Your Programme', description: 'Browse our 7 faculties and 50+ qualifications. Review the entry requirements and ensure you meet the criteria.', icon: FileText },
                    { step: 2, title: 'Prepare Your Documents', description: 'Gather all required documents: certified ID, academic results, proof of residence, and a recent passport photo.', icon: CreditCard },
                    { step: 3, title: 'Complete Online Application', description: 'Fill out our online application form. Upload your documents and pay the non-refundable application fee of R200.', icon: Clock },
                    { step: 4, title: 'Await Our Response', description: 'We will review your application and contact you within 5 working days with a decision or request for additional information.', icon: CheckCircle },
                  ].map((item, i) => (
                    <Card key={i}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-[#2d8a5e] text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
                            {item.step}
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-[#1e3a5f] mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="text-center mt-8">
                  <Link to="/apply" className="btn-primary">Start Your Application</Link>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#2d8a5e] to-[#1e3a5f] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
          <p className="text-lg opacity-90 mb-8">
            Our admissions team is ready to assist you with any questions about fees, bursaries, or the application process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-white">Contact Admissions</Link>
            <a href="mailto:admissions@ssac.tech" className="btn-primary border-2 border-white">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
