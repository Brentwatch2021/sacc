import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Award, Users, BookOpen, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const values = [
  { icon: Heart, title: 'Inclusivity', description: 'We believe education should be accessible to all, regardless of background or circumstances.' },
  { icon: Award, title: 'Excellence', description: 'We strive for the highest standards in teaching, learning, and student support.' },
  { icon: Users, title: 'Community', description: 'We are deeply connected to our local communities and their development needs.' },
  { icon: BookOpen, title: 'Innovation', description: 'We embrace new technologies and teaching methods to prepare students for the future.' },
];

const milestones = [
  { year: '2018', title: 'Foundation', description: 'SSACT established with a vision to transform TVET education in the Western Cape.' },
  { year: '2020', title: 'First Graduates', description: 'Our first cohort of students graduated with industry-recognised qualifications.' },
  { year: '2022', title: 'Expansion', description: 'Added Aviation & Drones faculty to meet growing demand for RPAS professionals.' },
  { year: '2024', title: 'CWU Partnership', description: 'Announced partnership with Cape Winelands University for higher education pathways.' },
  { year: '2026', title: 'Future University', description: 'SSACT becomes the foundation of the Future Cape Winelands University.' },
];

const leadership = [
  { name: 'Prof. Thabo Mokoena', role: 'Principal & CEO', image: '/principal.jpg', bio: 'Over 20 years experience in higher education leadership.' },
  { name: 'Dr. Sarah Williams', role: 'Deputy Principal: Academics', image: '/deputy-principal.jpg', bio: 'PhD in Educational Leadership, former UWC lecturer.' },
  { name: 'Mr. David Nkosi', role: 'CFO', image: '/cfo.jpg', bio: 'Chartered Accountant with extensive experience in education finance.' },
  { name: 'Ms. Fatima Patel', role: 'Registrar', image: '/registrar.jpg', bio: 'Expert in academic administration and student affairs.' },
];

export function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-r from-[#1e3a5f] to-[#2d8a5e]">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <Badge className="bg-[#c9a227] mb-4">About SSACT</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Building Africa's Future</h1>
          <p className="text-lg opacity-90">Sub-Saharan Africa College of Technology is committed to creating future-ready professionals through quality education and skills training.</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="vision" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-[#2d8a5e]/5 to-[#2d8a5e]/10 border-[#2d8a5e]/20">
              <CardContent className="p-8">
                <Target className="w-12 h-12 text-[#2d8a5e] mb-4" />
                <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">Our Mission</h2>
                <p className="text-gray-700 leading-relaxed">
                  To provide inclusive, industry-aligned education that empowers students with practical skills and knowledge 
                  to succeed in the modern workforce. We are committed to driving sustainable development across Sub-Saharan Africa 
                  through quality technical and vocational training.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#1e3a5f]/5 to-[#1e3a5f]/10 border-[#1e3a5f]/20">
              <CardContent className="p-8">
                <Eye className="w-12 h-12 text-[#1e3a5f] mb-4" />
                <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">Our Vision</h2>
                <p className="text-gray-700 leading-relaxed">
                  To become the leading institution for technical and vocational education in Africa, 
                  recognised for excellence in teaching, innovation, and graduate employability. 
                  We aspire to be the foundation of the Future Cape Winelands University.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-3">Our Core Values</h2>
            <p className="text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <Card key={i} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <value.icon className="w-12 h-12 text-[#2d8a5e] mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-[#1e3a5f] mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-3">Our Journey</h2>
            <p className="text-gray-600">Key milestones in our development</p>
          </div>
          <div className="space-y-8">
            {milestones.map((milestone, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#2d8a5e] text-white flex items-center justify-center font-bold">
                    {milestone.year.slice(-2)}
                  </div>
                  {i < milestones.length - 1 && <div className="w-0.5 h-full bg-[#2d8a5e]/30 mt-2" />}
                </div>
                <div className="pb-8">
                  <Badge className="bg-[#c9a227] mb-2">{milestone.year}</Badge>
                  <h3 className="text-lg font-bold text-[#1e3a5f]">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-3">Our Leadership</h2>
            <p className="text-gray-600">Meet the team guiding SSACT's vision</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((person, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-[#1e3a5f]">{person.name}</h3>
                  <p className="text-[#2d8a5e] text-sm font-medium">{person.role}</p>
                  <p className="text-gray-600 text-sm mt-2">{person.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Campus */}
      <section id="campus" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">Our Campus</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Located in the beautiful Cape Winelands, our campus offers a inspiring environment for learning and growth. 
                With state-of-the-art facilities including solar training labs, aquaculture ponds, and drone flight areas, 
                students gain hands-on experience with industry-standard equipment.
              </p>
              <ul className="space-y-3">
                {[
                  'Modern classrooms with smart technology',
                  'Specialised workshops and labs for each faculty',
                  'Library and resource centre',
                  'Student common areas and cafeteria',
                  'Sports facilities and outdoor spaces',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#2d8a5e]" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="/hero-campus.jpg" alt="Campus" className="rounded-lg shadow-md" />
              <img src="/library.jpg" alt="Library" className="rounded-lg shadow-md mt-8" />
              <img src="/solar-workshop.jpg" alt="Workshop" className="rounded-lg shadow-md -mt-8" />
              <img src="/students-diverse.jpg" alt="Students" className="rounded-lg shadow-md" />
            </div>
          </div>
        </div>
      </section>

      {/* Future Cape Winelands University */}
      <section id="cwu" className="py-16 bg-gradient-to-r from-[#1e3a5f] to-[#2d8a5e] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-[#c9a227] mb-4">Our Future</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">The Future Cape Winelands University</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              SSACT is the foundation of an exciting evolution toward comprehensive higher education in the Western Cape.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <p className="text-4xl font-bold text-[#c9a227] mb-2">50+</p>
                <p className="text-sm opacity-90">Qualifications</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <p className="text-4xl font-bold text-[#c9a227] mb-2">7</p>
                <p className="text-sm opacity-90">Faculties</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <p className="text-4xl font-bold text-[#c9a227] mb-2">95%</p>
                <p className="text-sm opacity-90">Employment Rate</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <p className="text-4xl font-bold text-[#c9a227] mb-2">2026</p>
                <p className="text-sm opacity-90">University Status</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Journey to University Status</h3>
              <p className="opacity-90 mb-4 leading-relaxed">
                The transformation from SSACT to the Future Cape Winelands University represents our commitment to providing 
                world-class education for Africa's future leaders. This evolution will expand our offerings from vocational 
                training to comprehensive degree programmes.
              </p>
              <ul className="space-y-2">
                {[
                  'Expanded degree programmes',
                  'Research and innovation centres',
                  'International partnerships',
                  'Graduate school opportunities',
                  'Industry-integrated learning',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#c9a227]" />
                    <span className="opacity-90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Timeline</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#c9a227] flex items-center justify-center font-bold flex-shrink-0">2018</div>
                  <div>
                    <p className="font-medium">SSACT Established</p>
                    <p className="text-sm opacity-80">Foundation laid for quality TVET education</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#c9a227] flex items-center justify-center font-bold flex-shrink-0">2024</div>
                  <div>
                    <p className="font-medium">CWU Partnership Announced</p>
                    <p className="text-sm opacity-80">Collaboration with Cape Winelands University</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#c9a227] flex items-center justify-center font-bold flex-shrink-0">2026</div>
                  <div>
                    <p className="font-medium">University Status</p>
                    <p className="text-sm opacity-80">SSACT becomes Future Cape Winelands University</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0f1f2e] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Join the SSACT Community</h2>
          <p className="text-lg opacity-90 mb-8">
            Take the first step towards a rewarding career. Explore our programmes and apply for 2026.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/programmes" className="btn-white">Explore Programmes</Link>
            <Link to="/apply" className="btn-primary border-2 border-white">Apply Now</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
