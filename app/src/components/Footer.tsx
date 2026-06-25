import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageCircle, Facebook, Instagram, Twitter, Linkedin, Youtube, SolarPanel, HardHat, Sprout, Plane, GraduationCap, Users, Sparkles, ShoppingBag, Send, CheckCircle } from 'lucide-react';

const faculties = [
  { id: 'renewable', slug: 'renewable-energy-electrical-engineering', icon: SolarPanel, shortTitle: 'Renewable Energy' },
  { id: 'engineering', slug: 'engineering-technical-trades', icon: HardHat, shortTitle: 'Engineering' },
  { id: 'agriculture', slug: 'agriculture-environment-natural-resources', icon: Sprout, shortTitle: 'Agriculture' },
  { id: 'aviation', slug: 'aviation-robotics-drones', icon: Plane, shortTitle: 'Aviation & Drones' },
  { id: 'education', slug: 'education-training-development', icon: GraduationCap, shortTitle: 'Education' },
  { id: 'social', slug: 'social-community-development', icon: Users, shortTitle: 'Social Development' },
  { id: 'lifestyle', slug: 'lifestyle-services', icon: Sparkles, shortTitle: 'Lifestyle' },
];

function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData();
    formData.append("Email", email);
    formData.append("zf_referrer_name", "");
    formData.append("zf_redirect_url", "");
    formData.append("zc_gad", "");

    try {
      await fetch(
        "https://forms.zohopublic.com/ssactportal1/form/SubscribetoNewsletter/formperma/2UdPiDhLAXdxZuJQviAeCPuAD8mlLaf6gNAeYgDHCz4/htmlRecords/submit",
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
        }
      );

      setSubmitted(true);
      setEmail("");
    } catch (error) {
      console.error("Newsletter subscription failed:", error);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex items-center gap-2 text-[#2d8a5e]">
        <CheckCircle size={16} />
        <span className="text-sm">Thank you for subscribing!</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        maxLength={255}
        required
        placeholder="Enter your email"
        className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-[#2d8a5e]"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-[#2d8a5e] hover:bg-[#247a4e] disabled:opacity-50 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
      >
        <Send size={14} />
        {loading ? "Submitting..." : "Subscribe"}
      </button>
    </form>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#0f1f2e] text-white/80 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-[#2d8a5e]/20 to-[#1e3a5f]/20 rounded-xl p-6 mb-8 border border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-white font-bold text-lg mb-1">Subscribe to Our Newsletter</h3>
              <p className="text-sm text-white/70">Stay updated with the latest news, events, and opportunities at SSACT.</p>
            </div>
            <div className="w-full md:w-auto md:min-w-[320px]">
              <NewsletterSignup />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img src="/SSAC-Logo-1000px (1).png" alt="SSACT Logo" className="h-16 bg-white p-2 rounded-lg mb-4" />
            <p className="text-sm mb-4">Sub-Saharan Africa College of Technology is committed to building the future of Africa with inclusive, industry-aligned qualifications.</p>
            <p className="text-[#c9a227] text-sm italic">Creating futures. Empowering people. Driving sustainability.</p>
            <div className="flex gap-3 mt-4">
              {[Facebook, Instagram, Twitter, Linkedin, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#2d8a5e] transition-colors"><Icon size={16} /></a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Programmes', 'Admissions', 'Partnerships', 'Investors', 'Contact'].map((name) => (
                <li key={name}><Link to={`/${name.toLowerCase()}`} className="text-sm hover:text-[#c9a227] transition-colors">{name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Faculties */}
          <div>
            <h4 className="text-white font-bold mb-4">Faculties</h4>
            <ul className="space-y-2">
              {faculties.map((f) => (
                <li key={f.id}><Link to={`/faculty/${f.slug}`} className="text-sm hover:text-[#c9a227] transition-colors">{f.shortTitle}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact & Store */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm mb-6">
              <li className="flex items-center gap-2"><MapPin size={14} /> Paarl, Western Cape</li>
              <li className="flex items-center gap-2"><Phone size={14} /> +27 (0)21 345 6789</li>
              <li className="flex items-center gap-2"><Mail size={14} /> info@ssac.tech</li>
              <li className="flex items-center gap-2"><a href="https://wa.me/27776012775" className="hover:text-[#c9a227] transition-colors flex items-center gap-2"><MessageCircle size={14} /> +27 77 601 2775</a></li>
            </ul>
            
            <h4 className="text-white font-bold mb-3">Alumni Store</h4>
            <a 
              href="https://matieshop.co.za/product-category/more-stellenbosch-merch/maties-alumni/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#c9a227] hover:bg-[#b8941f] text-[#0f1f2e] px-4 py-2 rounded-lg text-sm font-bold transition-colors"
            >
              <ShoppingBag size={16} /> Visit Alumni Store
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">&copy; 2026 Sub-Saharan Africa College of Technology. All rights reserved.</p>
          <p className="text-[#c9a227] text-sm">Part of the Cape Winelands University Group</p>
        </div>
      </div>

<iframe aria-label='upload test' className="height:500px;width:99%;border:none;" src='https://forms.zohopublic.com/wirrem1990gm1/form/uploadtest/formperma/hXGRZ35qL5XY2H9ib7jFwrBBTMtZwX5vcco10hguBNc' >
</iframe>



    </footer>
  );
}
