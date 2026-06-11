import { Link } from 'react-router-dom';
import { Handshake, Building2, GraduationCap, Plane, Globe, CheckCircle, ExternalLink, Mail } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const industryPartners = [
  {
    name: 'GC Solar',
    logo: '/gc-solar-logo.png',
    description: 'Equipment provider and training partner for our Renewable Energy faculty.',
    benefits: ['State-of-the-art solar equipment', 'Accredited training materials', 'Workplace experience opportunities'],
    contact: 'training@gcsolar.co.za',
    website: 'https://gcsolar.co.za',
  },
  {
    name: 'Huawei',
    description: 'Technology partner providing equipment and training for ICT and renewable energy programmes.',
    benefits: ['Latest technology equipment', 'Certification programmes', 'Industry expert lectures'],
    contact: 'southafrica@huawei.com',
    website: 'https://huawei.com/za',
  },
  {
    name: 'Eskom',
    description: 'South Africa\'s electricity utility, partnering on energy training and graduate placement.',
    benefits: ['Work-integrated learning', 'Graduate recruitment', 'Industry mentorship'],
    contact: 'careers@eskom.co.za',
    website: 'https://eskom.co.za',
  },
  {
    name: 'Cape Winelands Airport',
    description: 'Aviation partner for our RPAS (drone) and aviation programmes.',
    benefits: ['Flight training facilities', 'Certified instructors', 'Real-world experience'],
    contact: 'info@cwairport.co.za',
    website: 'https://cwairport.co.za',
  },
];

const internationalPartners = [
  {
    country: 'China',
    partners: ['Chinese TVET Colleges', 'Huawei ICT Academy'],
    opportunities: ['Student exchanges', 'Lecturer development programmes', 'Joint research projects', 'International certification'],
  },
  {
    country: 'Germany',
    partners: ['GIZ (Deutsche Gesellschaft für Internationale Zusammenarbeit)'],
    opportunities: ['Technical training support', 'Curriculum development', 'Equipment donations'],
  },
];

const governmentPartners = [
  { name: 'Department of Higher Education and Training (DHET)', role: 'Accreditation and quality assurance' },
  { name: 'Western Cape Education Department', role: 'Provincial support and partnerships' },
  { name: 'merSETA', role: 'Skills development funding and accreditation' },
  { name: 'EWSETA', role: 'Energy and water sector training authority' },
  { name: 'QCTO', role: 'Quality Council for Trades and Occupations' },
];

export function PartnershipsPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-r from-[#1e3a5f] to-[#2d8a5e]">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <Badge className="bg-[#c9a227] mb-4">Collaboration</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Partnerships</h1>
          <p className="text-lg opacity-90">Working together to create opportunities for our students</p>
        </div>
      </section>

      {/* Industry Partners */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-[#2d8a5e] mb-3">Industry</Badge>
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-3">Industry Partners</h2>
            <p className="text-gray-600">Leading companies that support our programmes and students</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {industryPartners.map((partner, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    {partner.logo ? (
                      <img src={partner.logo} alt={partner.name} className="h-16 w-auto" />
                    ) : (
                      <div className="w-16 h-16 rounded-lg bg-[#2d8a5e]/10 flex items-center justify-center">
                        <Building2 className="w-8 h-8 text-[#2d8a5e]" />
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-[#1e3a5f]">{partner.name}</h3>
                      <p className="text-gray-600 text-sm mb-3">{partner.description}</p>
                      <div className="space-y-1 mb-3">
                        {partner.benefits.map((benefit, j) => (
                          <p key={j} className="text-sm text-gray-700 flex items-center gap-1">
                            <CheckCircle className="w-3 h-3 text-[#2d8a5e]" /> {benefit}
                          </p>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <a href={`mailto:${partner.contact}`} className="text-sm text-[#2d8a5e] hover:underline flex items-center gap-1">
                          <Mail size={14} /> {partner.contact}
                        </a>
                        <a href={partner.website} target="_blank" rel="noopener noreferrer" className="text-sm text-[#2d8a5e] hover:underline flex items-center gap-1">
                          <ExternalLink size={14} /> Website
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* International Partnerships */}
      <section id="international" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-[#03a9f4] mb-3">Global</Badge>
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-3">International Partnerships</h2>
            <p className="text-gray-600">Connecting our students to global opportunities</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {internationalPartners.map((partnership, i) => (
              <Card key={i}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Globe className="w-8 h-8 text-[#03a9f4]" />
                    <CardTitle>{partnership.country}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-2">Partner Institutions:</p>
                    <div className="flex flex-wrap gap-2">
                      {partnership.partners.map((p, j) => (
                        <Badge key={j} variant="outline">{p}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-2">Opportunities:</p>
                    <ul className="space-y-1">
                      {partnership.opportunities.map((opp, j) => (
                        <li key={j} className="text-sm text-gray-700 flex items-center gap-1">
                          <CheckCircle className="w-3 h-3 text-[#03a9f4]" /> {opp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-6">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <Plane className="w-12 h-12 text-[#03a9f4]" />
                <div>
                  <h3 className="text-lg font-bold text-[#1e3a5f]">China-SA Education Exchange Programme</h3>
                  <p className="text-gray-600">
                    Our flagship international partnership offers students the opportunity to participate in study tours, 
                    exchange programmes, and joint research projects with Chinese TVET colleges. Selected students may 
                    spend 2-4 weeks in China, experiencing advanced technical training and cultural immersion.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Government Partners */}
      <section id="government" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-[#1e3a5f] mb-3">Public Sector</Badge>
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-3">Government & SETA Partners</h2>
            <p className="text-gray-600">Supporting quality education and skills development</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {governmentPartners.map((partner, i) => (
              <Card key={i} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-6 h-6 text-[#1e3a5f] flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-[#1e3a5f]">{partner.name}</h4>
                      <p className="text-sm text-gray-600">{partner.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="py-16 bg-gradient-to-r from-[#2d8a5e] to-[#1e3a5f] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Handshake className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Become a Partner</h2>
          <p className="text-lg opacity-90 mb-8">
            Join our network of industry leaders and help shape the future of education in Africa. 
            Partner with SSACT to access skilled graduates, contribute to curriculum development, 
            and make a meaningful impact on community development.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8 text-left">
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-bold mb-2">Access Talent</h4>
              <p className="text-sm opacity-90">Recruit from our pool of work-ready graduates</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-bold mb-2">Shape Curriculum</h4>
              <p className="text-sm opacity-90">Influence our programmes to meet industry needs</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-bold mb-2">CSR Impact</h4>
              <p className="text-sm opacity-90">Meet your social responsibility goals</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-white">Discuss Partnership</Link>
            <a href="mailto:partnerships@ssac.tech" className="btn-primary border-2 border-white">
              Email Partnership Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
