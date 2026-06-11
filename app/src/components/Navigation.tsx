import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, User, Lock, Menu, ChevronDown, Info, BookOpen, FileText, Handshake, DollarSign, MapPin } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navItems = [
  { 
    name: 'Home', 
    href: '/',
    icon: null
  },
  { 
    name: 'About', 
    href: '/about',
    icon: Info,
    dropdown: [
      { name: 'About SSACT', href: '/about' },
      { name: 'Our Vision', href: '/about#vision' },
      { name: 'Leadership', href: '/about#leadership' },
      { name: 'Campus', href: '/about#campus' },
      { name: 'Future Cape Winelands University', href: '/about#cwu' },
    ]
  },
  { 
    name: 'Programmes', 
    href: '/programmes',
    icon: BookOpen,
    dropdown: [
      { name: 'All Programmes', href: '/programmes' },
      { name: 'Renewable Energy', href: '/faculty/renewable-energy-electrical-engineering' },
      { name: 'Engineering', href: '/faculty/engineering-technical-trades' },
      { name: 'Agriculture', href: '/faculty/agriculture-environment-natural-resources' },
      { name: 'Aviation & Drones', href: '/faculty/aviation-robotics-drones' },
      { name: 'Education', href: '/faculty/education-training-development' },
      { name: 'Social Development', href: '/faculty/social-community-development' },
      { name: 'Lifestyle', href: '/faculty/lifestyle-services' },
    ]
  },
  { 
    name: 'Admissions', 
    href: '/admissions',
    icon: FileText,
    dropdown: [
      { name: 'Fees & Costs', href: '/admissions' },
      { name: 'Bursaries', href: '/admissions#bursaries' },
      { name: 'Important Dates', href: '/admissions#dates' },
      { name: 'How to Apply', href: '/admissions#process' },
      { name: 'Apply Now', href: '/apply' },
    ]
  },
  { 
    name: 'Partnerships', 
    href: '/partnerships',
    icon: Handshake,
    dropdown: [
      { name: 'Industry Partners', href: '/partnerships' },
      { name: 'International', href: '/partnerships#international' },
      { name: 'Government', href: '/partnerships#government' },
      { name: 'Become a Partner', href: '/contact' },
    ]
  },
  { 
    name: 'Investors', 
    href: '/investors',
    icon: DollarSign,
    dropdown: [
      { name: 'SA Global Dynamics', href: '/investors' },
      { name: 'GC Solar', href: '/investors#gc-solar' },
      { name: 'REISA', href: '/investors#reisa' },
      { name: 'Government Funders', href: '/investors#government' },
    ]
  },
  { 
    name: 'Contact', 
    href: '/contact',
    icon: MapPin,
    dropdown: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'Student Portal', href: '/portal/student' },
      { name: 'Staff Login', href: '/portal/staff' },
    ]
  },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#1e3a5f] text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="https://wa.me/27776012775" className="flex items-center gap-2 hover:text-[#c9a227] transition-colors">
              <Phone size={14} /> +27 77 601 2775
            </a>
            <span className="hidden sm:flex items-center gap-2"><Mail size={14} /> info@ssac.tech</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/portal/student" className="flex items-center gap-2 hover:text-[#c9a227] transition-colors"><User size={14} /> Student Portal</Link>
            <Link to="/portal/staff" className="hidden sm:flex items-center gap-2 hover:text-[#c9a227] transition-colors"><Lock size={14} /> Staff Login</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-3">
              <img src="/SSAC-Logo-1000px (1).png" alt="SSACT Logo" className="h-14 w-auto" />
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-[#2d8a5e]">SSACT</h1>
                <p className="text-xs text-gray-600">Building the Future Cape Winelands University</p>
              </div>
            </Link>

            {/* Desktop Navigation with Dropdowns */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div 
                  key={item.name} 
                  className="relative"
                  onMouseEnter={() => item.dropdown && setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.dropdown ? (
                    <>
                      <Link 
                        to={item.href}
                        className={`flex items-center gap-1 px-3 py-2 font-medium transition-colors text-sm rounded-lg hover:bg-gray-100 ${location.pathname === item.href ? 'text-[#2d8a5e]' : 'text-gray-700'}`}
                      >
                        {item.name}
                        <ChevronDown size={14} className={`transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                      </Link>
                      {openDropdown === item.name && (
                        <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-2xl border-2 border-gray-200 py-2 z-50">
                          {item.dropdown.map((subItem) => (
                            <Link 
                              key={subItem.name} 
                              to={subItem.href} 
                              className="block px-4 py-2.5 text-sm font-medium text-gray-800 hover:bg-[#2d8a5e] hover:text-white transition-colors"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link 
                      to={item.href}
                      className={`block px-3 py-2 font-medium transition-colors text-sm rounded-lg hover:bg-gray-100 ${location.pathname === item.href ? 'text-[#2d8a5e]' : 'text-gray-700'}`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <Link to="/apply" className="btn-primary text-sm hidden sm:block">Apply Now</Link>
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <button className="lg:hidden p-2"><Menu size={24} /></button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80 bg-white border-l border-gray-200 overflow-y-auto max-h-screen">
                  <div className="flex flex-col gap-2 mt-8 bg-white pb-8">
                    {navItems.map((item) => (
                      <div key={item.name}>
                        <Link 
                          to={item.href} 
                          onClick={() => setMobileMenuOpen(false)} 
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                        >
                          {item.name}
                        </Link>
                        {item.dropdown && (
                          <div className="ml-4 border-l-2 border-gray-200 pl-4">
                            {item.dropdown.map((subItem) => (
                              <Link 
                                key={subItem.name}
                                to={subItem.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block p-2 text-sm text-gray-600 hover:text-[#2d8a5e]"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                    <Link to="/apply" className="btn-primary text-center mt-4" onClick={() => setMobileMenuOpen(false)}>Apply Now</Link>
                    <div className="border-t border-gray-200 pt-4 mt-4">
                      <Link to="/portal/student" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                        <User size={18} /> Student Portal
                      </Link>
                      <Link to="/portal/staff" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                        <Lock size={18} /> Staff Login
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
