import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Phone,
  Mail,
  User,
  Lock,
  Menu,
  ChevronDown,
  Info,
  BookOpen,
  FileText,
  Handshake,
  DollarSign,
  MapPin,
  X,
} from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navItems = [
  { name: 'Home', href: '/', icon: null },
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
    ],
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
    ],
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
    ],
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
    ],
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
    ],
  },
  { name: 'Contact', href: '/contact', icon: MapPin },
];

type ThemeColours = {
  primary: string;
  secondary: string;
  accent: string;
};

const defaultTheme: ThemeColours = {
  primary: '#2d8a5e',
  secondary: '#1e3a5f',
  accent: '#c9a227',
};

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [themeModalOpen, setThemeModalOpen] = useState(false);

  const location = useLocation();

  const [themeColours, setThemeColours] = useState<ThemeColours>(() => {
    try {
      const savedTheme = localStorage.getItem('ssact-theme');

      return savedTheme
        ? { ...defaultTheme, ...JSON.parse(savedTheme) }
        : defaultTheme;
    } catch {
      return defaultTheme;
    }
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    localStorage.setItem('ssact-theme', JSON.stringify(themeColours));

    document.documentElement.style.setProperty('--ssact-green', themeColours.primary);
    document.documentElement.style.setProperty('--ssact-navy', themeColours.secondary);
    document.documentElement.style.setProperty('--ssact-gold', themeColours.accent);
  }, [themeColours]);

  const updateThemeColour = (key: keyof ThemeColours, value: string) => {
    setThemeColours(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname === href || location.pathname.startsWith(`${href}/`);
  };

  return (
    <>
      {/* Top Bar */}
      <div
        className="text-white py-2 px-4 text-sm"
        style={{ backgroundColor: 'var(--ssact-navy)' }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="transition-colors flex items-center gap-2">
              <Phone size={14} />
              <a href="tel:+27211234567">021 123 4567</a>
            </span>

            <span className="transition-colors flex items-center gap-2">
              <Mail size={14} />
              <a href="mailto:info@ssac.tech">info@ssac.tech</a>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/portal/student" className="flex items-center gap-2 transition-colors">
              <User size={14} /> Student Portal
            </Link>

            <Link
              to="/portal/staff"
              className="hidden sm:flex items-center gap-2 transition-colors"
            >
              <Lock size={14} /> Staff Login
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          isScrolled ? 'shadow-lg' : 'shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center gap-3">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/SSAC-Logo-1000px (1).png"
                alt="SSACT Logo"
                className="h-14 w-auto"
              />

              <div className="hidden sm:block">
                <h1
                  className="text-lg font-bold"
                  style={{ color: 'var(--ssact-green)' }}
                >
                  SSACT
                </h1>
                <p className="text-xs text-gray-600">
                  Building the Future Cape Winelands University
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map(item => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to={item.href}
                    className="flex items-center gap-1 px-3 py-2 font-medium transition-colors text-sm rounded-lg hover:bg-gray-100 text-gray-700"
                    style={{
                      color: isActive(item.href) ? 'var(--ssact-green)' : undefined,
                    }}
                  >
                    {item.name}

                    {item.dropdown && (
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${
                          openDropdown === item.name ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </Link>

                  {item.dropdown && openDropdown === item.name && (
                    <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-2xl border-2 border-gray-200 py-2 z-50">
                      {item.dropdown.map(subItem => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-2.5 text-sm font-medium text-gray-800 transition-colors hover:text-white"
                          style={
                            {
                              '--tw-ring-color': 'var(--ssact-green)',
                            } as React.CSSProperties
                          }
                          onMouseEnter={e => {
                            e.currentTarget.style.backgroundColor = 'var(--ssact-green)';
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.backgroundColor = '';
                          }}
                          onClick={() => setOpenDropdown(null)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              {/* Theme Button */}
              <button
                onClick={() => setThemeModalOpen(true)}
                className="p-3 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
                title="Choose Theme"
                type="button"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 3C7.03 3 3 6.58 3 11C3 14.87 6.13 18 10 18H11.5C12.33 18 13 18.67 13 19.5C13 20.33 13.67 21 14.5 21H15C18.31 21 21 18.31 21 15V12C21 7.03 16.97 3 12 3Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle cx="7.5" cy="10" r="1.5" fill={themeColours.primary} />
                  <circle cx="12" cy="7.5" r="1.5" fill={themeColours.secondary} />
                  <circle cx="16.5" cy="10" r="1.5" fill={themeColours.accent} />
                </svg>
              </button>

              <Link
                to="/apply"
                className="text-white font-semibold rounded-lg px-6 py-3 transition-all whitespace-nowrap"
                style={{ backgroundColor: 'var(--ssact-green)' }}
              >
                Apply Now
              </Link>

              {/* Mobile Menu */}
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <button className="lg:hidden p-2" type="button">
                    <Menu size={24} />
                  </button>
                </SheetTrigger>

                <SheetContent
                  side="right"
                  className="w-80 bg-white border-l border-gray-200 overflow-y-auto max-h-screen"
                >
                  <div className="flex flex-col gap-2 mt-8 bg-white pb-8">
                    {navItems.map(item => (
                      <div key={item.name}>
                        <Link
                          to={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors font-medium text-gray-700"
                          style={{
                            color: isActive(item.href) ? 'var(--ssact-green)' : undefined,
                          }}
                        >
                          {item.name}
                        </Link>

                        {item.dropdown && (
                          <div className="ml-4 border-l-2 border-gray-200 pl-4">
                            {item.dropdown.map(subItem => (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block p-2 text-sm text-gray-600 transition-colors"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}

                    <Link
                      to="/apply"
                      className="text-white font-semibold rounded-lg px-6 py-3 text-center mt-4"
                      style={{ backgroundColor: 'var(--ssact-green)' }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Apply Now
                    </Link>

                    <div className="border-t border-gray-200 pt-4 mt-4">
                      <Link
                        to="/portal/student"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <User size={18} /> Student Portal
                      </Link>

                      <Link
                        to="/portal/staff"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
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

      {/* Theme Modal */}
      {themeModalOpen && (
        <div className="fixed inset-0 z-[999] bg-black/50 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-xl font-bold text-gray-800">Choose Website Theme</h2>

              <button
                onClick={() => setThemeModalOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100"
                type="button"
              >
                <X size={20} />
              </button>
            </div>

            <select className="w-full border border-gray-300 rounded-lg p-3 mb-5">
              <option>SSACT Default Theme</option>
            </select>

            <div className="space-y-4">
              {[
                { key: 'primary', label: 'Primary Colour', cssVar: '--ssact-green' },
                { key: 'secondary', label: 'Secondary Colour', cssVar: '--ssact-navy' },
                { key: 'accent', label: 'Accent Colour', cssVar: '--ssact-gold' },
              ].map(item => (
                <div
                  key={item.key}
                  className="flex items-center justify-between border border-gray-200 rounded-xl p-4"
                >
                  <div>
                    <p className="font-semibold text-gray-800">{item.label}</p>
                    <p className="text-sm text-gray-500">
                      {item.cssVar}: {themeColours[item.key as keyof ThemeColours]}
                    </p>
                  </div>

                  <input
                    type="color"
                    value={themeColours[item.key as keyof ThemeColours]}
                    onChange={e =>
                      updateThemeColour(item.key as keyof ThemeColours, e.target.value)
                    }
                    className="w-12 h-12 cursor-pointer rounded-lg"
                  />
                </div>
              ))}
            </div>

            <button
              onClick={() => setThemeModalOpen(false)}
              className="w-full mt-6 text-white font-semibold rounded-lg px-6 py-3"
              style={{ backgroundColor: 'var(--ssact-green)' }}
              type="button"
            >
              Save Theme
            </button>
          </div>
        </div>
      )}
    </>
  );
}