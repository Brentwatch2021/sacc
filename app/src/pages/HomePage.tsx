import { Link } from 'react-router-dom';
import { Download, CreditCard, Calendar, MapPin, Star, SolarPanel, HardHat, Sprout, Plane, GraduationCap, Users, Sparkles, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const stats = [
  { value: '50+', label: 'Qualifications' },
  { value: '7', label: 'Faculties' },
  { value: '95%', label: 'Employment Rate' },
  { value: '2,800+', label: 'Students' },
];

const faculties = [
  { id: 'renewable', slug: 'renewable-energy-electrical-engineering', icon: SolarPanel, title: 'Renewable Energy & Electrical Engineering', shortTitle: 'Renewable Energy', color: '#2d8a5e', image: '/solar-workshop.jpg' },
  { id: 'engineering', slug: 'engineering-technical-trades', icon: HardHat, title: 'Engineering & Technical Trades', shortTitle: 'Engineering', color: '#1e3a5f', image: '/plumbing-workshop.jpg' },
  { id: 'agriculture', slug: 'agriculture-environment-natural-resources', icon: Sprout, title: 'Agriculture, Environment & Natural Resources', shortTitle: 'Agriculture', color: '#8bc34a', image: '/vineyard-training.jpg' },
  { id: 'aviation', slug: 'aviation-robotics-drones', icon: Plane, title: 'Aviation & Robotics (Drones)', shortTitle: 'Aviation & Drones', color: '#03a9f4', image: '/drone-training.jpg' },
  { id: 'education', slug: 'education-training-development', icon: GraduationCap, title: 'Education, Training & Development', shortTitle: 'Education', color: '#9c27b0', image: '/library.jpg' },
  { id: 'social', slug: 'social-community-development', icon: Users, title: 'Social & Community Development', shortTitle: 'Social Development', color: '#ff5722', image: '/students-diverse.jpg' },
  { id: 'lifestyle', slug: 'lifestyle-services', icon: Sparkles, title: 'Lifestyle & Services', shortTitle: 'Lifestyle', color: '#e91e63', image: '/hero-campus.jpg' },
];

const news = [
  { date: '31 March 2026', title: '2026 Admissions Now Open', description: 'Applications for the 2026 academic year are now open. Secure your place in our renewable energy, engineering, and aviation programmes.', image: '/students-diverse.jpg', badge: 'Admissions' },
  { date: '20 February 2026', title: 'New Solar PV Training Centre Launched', description: 'SSACT unveils state-of-the-art solar photovoltaic training facilities in partnership with Huawei and GC Solar.', image: '/solar-workshop.jpg', badge: 'Facilities' },
  { date: '15 January 2026', title: 'China-SA Education Partnership Expanded', description: 'Exciting new collaboration with Chinese TVET colleges provides student exchange opportunities.', image: '/drone-training.jpg', badge: 'Partnerships' },
];

export function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/hero-campus.jpg)' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a5f3f]/95 via-[#2d8a5e]/85 to-[#1e3a5f]/80" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white py-20">
          <Badge className="bg-[#c9a227] text-white mb-6 text-sm px-4 py-1"><Star className="w-4 h-4 inline mr-1" /> 2026 Admissions Now Open</Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">Creating Future-Ready<br /><span className="text-[#c9a227]">Professionals</span> for Africa</h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-95 max-w-3xl mx-auto">Take the first step towards becoming the master of your own future. Quality education and skills training for a greener, smarter Africa.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/apply" className="btn-white text-lg">Apply Now for 2026</Link>
            <a href="https://forms.zohopublic.com/ssactportal1/form/CourseApplication/formperma/l4BgDLQWgXlyxN24gonZgImcOK-OQhlHm8ib2Q91isA" className="btn-primary border-2 border-white text-lg">PV GREENCARD REGISTRATION</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-4">
                <p className="text-3xl font-bold text-[#c9a227]">{stat.value}</p>
                <p className="text-sm opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <div className="bg-[#2d8a5e] py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {[{ name: 'Download Prospectus', icon: Download, href: '#' }, { name: 'Fees & Bursaries', icon: CreditCard, href: '/admissions' }, { name: 'Academic Calendar', icon: Calendar, href: '#' }, { name: 'Find Us', icon: MapPin, href: '/contact' }].map((link) => (
              <Link key={link.name} to={link.href} className="flex items-center gap-2 text-white font-medium hover:underline transition-all"><link.icon size={18} /> {link.name}</Link>
            ))}
          </div>
        </div>
      </div>

      {/* News */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-3">Latest News</h2>
            <p className="text-gray-600">Stay updated with the latest from SSACT</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden relative">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform" />
                  <Badge className="absolute top-4 left-4 bg-[#2d8a5e]">{item.badge}</Badge>
                </div>
                <div className="p-6">
                  <div className="text-[#e67e22] font-semibold text-sm mb-2 flex items-center gap-2"><Calendar size={16} /> {item.date}</div>
                  <h3 className="text-lg font-bold text-[#1e3a5f] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculties */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-3">Our Faculties</h2>
            <p className="text-gray-600">Industry-aligned qualifications that respond to Africa's needs</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {faculties.map((faculty) => (
              <Link key={faculty.id} to={`/faculty/${faculty.slug}`} className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all group">
                <div className="h-40 overflow-hidden">
                  <img src={faculty.image} alt={faculty.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="p-6 border-l-4" style={{ borderColor: faculty.color }}>
                  <faculty.icon className="w-10 h-10 mb-4" style={{ color: faculty.color }} />
                  <h3 className="text-lg font-bold text-[#1e3a5f] mb-2 group-hover:text-[#2d8a5e] transition-colors">{faculty.title}</h3>
                  <span className="text-[#2d8a5e] font-medium text-sm flex items-center gap-1">View All Courses <ArrowRight size={14} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 bg-gradient-to-r from-[#1e3a5f] to-[#2d8a5e] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">The Future Cape Winelands University</h2>
          <p className="text-lg opacity-90 mb-8">SSACT is the foundation of an exciting evolution toward comprehensive higher education in the Western Cape. Our journey from college to university represents our commitment to providing world-class education for Africa's future leaders.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['50+ Qualifications', '7 Faculties', '95% Employment Rate', 'International Partnerships'].map((tag) => (
              <Badge key={tag} className="bg-white/20 text-white px-4 py-2">{tag}</Badge>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
