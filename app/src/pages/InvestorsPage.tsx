import { Link } from 'react-router-dom';
import { Building2, Mail, Globe, ExternalLink, HandshakeIcon, Leaf, Zap, Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const governmentFunders = [
  {
    name: 'National Student Financial Aid Scheme (NSFAS)',
    description: 'Provides comprehensive bursaries and student loans to eligible students, covering tuition, accommodation, meals, and learning materials.',
    type: 'Government Bursary',
  },
  {
    name: 'Western Cape Government',
    description: 'Supports skills development initiatives in the province through various grants and partnerships with educational institutions.',
    type: 'Provincial Grant',
  },
  {
    name: 'Department of Higher Education and Training (DHET)',
    description: 'Provides funding for infrastructure development and programme accreditation through various TVET college support mechanisms.',
    type: 'National Funding',
  },
];

export function InvestorsPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-r from-[#1e3a5f] to-[#2d8a5e]">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <Badge className="bg-[#c9a227] mb-4">Partners & Funders</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Investors & Partners</h1>
          <p className="text-lg opacity-90">Building the Future Cape Winelands University through strategic partnerships and investment</p>
        </div>
      </section>

      {/* Primary Funder - SA Global */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-[#2d8a5e] mb-3">Primary Funder</Badge>
            <h2 className="text-3xl font-bold text-[#1e3a5f]">SA Global Dynamics</h2>
            <p className="text-gray-600 mt-2">Architects of Africa's Sustainable Future</p>
          </div>

          <Card className="overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <img src="/sa-global-logo.png" alt="SA Global Dynamics" className="h-20 w-auto" />
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  SA Global Dynamics is more than an investment group – they are architects of Africa's sustainable future. 
                  They identify and invest in high-impact sectors that combine profitability with long-term social and environmental value.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  As our primary funder, SA Global Dynamics supports SSACT's mission to build the Future Cape Winelands University, 
                  providing the resources needed to develop world-class facilities and programmes.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Renewable Energy', 'EV & E-Mobility', 'Smart Agriculture', 'Education', 'Emerging Technology'].map((sector) => (
                    <Badge key={sector} variant="outline" className="border-[#2d8a5e] text-[#2d8a5e]">{sector}</Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  <a href="https://globaldynamicinc.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#2d8a5e] hover:underline">
                    <Globe size={18} /> Visit Website <ExternalLink size={14} />
                  </a>
                  <a href="mailto:cco@globaldynamicinc.com" className="flex items-center gap-2 text-[#2d8a5e] hover:underline">
                    <Mail size={18} /> cco@globaldynamicinc.com
                  </a>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#2d8a5e]/10 to-[#1e3a5f]/10 p-8 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="text-4xl font-bold text-[#2d8a5e]">500K+</p>
                    <p className="text-sm text-gray-600">Communities Impacted</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-[#2d8a5e]">8+</p>
                    <p className="text-sm text-gray-600">Countries</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-[#2d8a5e]">8</p>
                    <p className="text-sm text-gray-600">Investment Divisions</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Equipment Provider - GC Solar */}
      <section id="gc-solar" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-[#e67e22] mb-3">Equipment Provider</Badge>
            <h2 className="text-3xl font-bold text-[#1e3a5f]">GC Solar</h2>
            <p className="text-gray-600 mt-2">Solar Equipment & Training Academy</p>
          </div>

          <Card className="overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="bg-gradient-to-br from-[#e67e22]/10 to-[#2d8a5e]/10 p-8 flex items-center justify-center order-2 lg:order-1">
                <img src="/gc-solar-logo.png" alt="GC Solar" className="h-32 w-auto" />
              </div>
              <div className="p-8 order-1 lg:order-2">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Founded in 2011, GC Solar has emerged as a dynamic, community-centred leader in Southern Africa's photovoltaic industry. 
                  They are more than just distributors – they combine a broad PV product range with personal service, expert training, and agile logistics.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  GC Solar provides SSACT with state-of-the-art solar panels, inverters, batteries, and training equipment for our 
                  Renewable Energy faculty. Their accredited Skills Development Training Academy (QCTO, SAPVIA, merSETA, EWSETA) 
                  ensures our students receive industry-recognised certification.
                </p>
                <div className="mb-6">
                  <p className="text-sm text-gray-500 mb-2">Accredited By:</p>
                  <div className="flex flex-wrap gap-2">
                    {['QCTO', 'SAPVIA', 'merSETA', 'EWSETA'].map((acc) => (
                      <Badge key={acc} className="bg-[#e67e22]">{acc}</Badge>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <a href="https://gcsolar.co.za" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#e67e22] hover:underline">
                    <Globe size={18} /> www.gcsolar.co.za <ExternalLink size={14} />
                  </a>
                  <a href="mailto:training@gcsolar.co.za" className="flex items-center gap-2 text-[#e67e22] hover:underline">
                    <Mail size={18} /> training@gcsolar.co.za
                  </a>
                  <p className="flex items-center gap-2 text-gray-600">
                    <Building2 size={18} /> Johannesburg HQ & Cape Town Training Centre
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* REISA */}
      <section id="reisa" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-[#03a9f4] mb-3">Community Partner</Badge>
            <h2 className="text-3xl font-bold text-[#1e3a5f]">REISA</h2>
            <p className="text-gray-600 mt-2">Renewable Energy Investments South Africa</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <img src="/reisa-logo.png" alt="REISA" className="h-16 w-auto" />
                  <div>
                    <CardTitle>About REISA</CardTitle>
                    <p className="text-sm text-gray-500">One of South Africa's largest solar farms</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  REISA generates approximately 179,000 MWh of clean renewable energy annually from 343,200 solar modules 
                  across 210 hectares in the Northern Cape. They are committed to socio-economic development in host communities.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center p-4 bg-[#03a9f4]/10 rounded-lg">
                    <p className="text-2xl font-bold text-[#03a9f4]">179,000</p>
                    <p className="text-xs text-gray-600">MWh/year</p>
                  </div>
                  <div className="text-center p-4 bg-[#03a9f4]/10 rounded-lg">
                    <p className="text-2xl font-bold text-[#03a9f4]">343,200</p>
                    <p className="text-xs text-gray-600">Solar Modules</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Community Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Leaf className="w-5 h-5 text-[#03a9f4] mt-0.5" />
                    <div>
                      <p className="font-medium">Solar Street Light Projects</p>
                      <p className="text-sm text-gray-600">Dibeng and Olifantshoek initiatives improving community safety</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-[#03a9f4] mt-0.5" />
                    <div>
                      <p className="font-medium">Education Bursaries</p>
                      <p className="text-sm text-gray-600">Funding for students in renewable energy programmes</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <HandshakeIcon className="w-5 h-5 text-[#03a9f4] mt-0.5" />
                    <div>
                      <p className="font-medium">Enterprise Development</p>
                      <p className="text-sm text-gray-600">Supporting local businesses and entrepreneurs</p>
                    </div>
                  </li>
                </ul>
                <a href="http://reisasolar.co.za" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#03a9f4] hover:underline mt-4">
                  <Globe size={18} /> Visit Website <ExternalLink size={14} />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Government Funders */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-[#1e3a5f] mb-3">Government Support</Badge>
            <h2 className="text-3xl font-bold text-[#1e3a5f]">Public Funding Partners</h2>
            <p className="text-gray-600 mt-2">SSACT receives support from various government initiatives</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {governmentFunders.map((funder, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Award className="w-10 h-10 text-[#1e3a5f] mb-2" />
                  <CardTitle className="text-lg">{funder.name}</CardTitle>
                  <Badge variant="outline" className="w-fit">{funder.type}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{funder.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#2d8a5e] to-[#1e3a5f] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Partner With Us</h2>
          <p className="text-lg opacity-90 mb-8">
            Join SA Global Dynamics, GC Solar, REISA, and our other partners in building the Future Cape Winelands University. 
            Together, we can create transformative educational opportunities for Africa's youth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-white">Contact Us</Link>
            <a href="mailto:cco@globaldynamicinc.com" className="btn-primary border-2 border-white">
              Email Our Partners
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
