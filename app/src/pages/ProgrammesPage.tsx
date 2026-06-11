import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock, Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
// SolarPanel, HardHat, Sprout, Plane, GraduationCap, Users, Sparkles, 
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { ClassDto } from '@/data/types';
import { getClasses } from '@/services/classService';
import { useEffect, useState } from 'react';


// const faculties = [
//   {
//     id: 'renewable',
//     slug: 'renewable-energy-electrical-engineering',
//     icon: SolarPanel,
//     title: 'Renewable Energy & Electrical Engineering',
//     shortTitle: 'Renewable Energy',
//     description: 'Powering Africa\'s green transition with practical skills in solar, wind, and hydro systems.',
//     color: '#2d8a5e',
//     image: '/solar-workshop.jpg',
//     courses: 13,
//     duration: '6 Months - 2 Years',
//     levels: 'NQF Level 3-5',
//   },
//   {
//     id: 'engineering',
//     slug: 'engineering-technical-trades',
//     icon: HardHat,
//     title: 'Engineering & Technical Trades',
//     shortTitle: 'Engineering',
//     description: 'Hands-on skills for the built environment and industrial sectors.',
//     color: '#1e3a5f',
//     image: '/plumbing-workshop.jpg',
//     courses: 7,
//     duration: '3 Months - 1 Year',
//     levels: 'NQF Level 2-5',
//   },
//   {
//     id: 'agriculture',
//     slug: 'agriculture-environment-natural-resources',
//     icon: Sprout,
//     title: 'Agriculture, Environment & Natural Resources',
//     shortTitle: 'Agriculture',
//     description: 'Sustainable food production and environmental stewardship in the Cape Winelands.',
//     color: '#8bc34a',
//     image: '/vineyard-training.jpg',
//     courses: 8,
//     duration: '3 Months - 1 Year',
//     levels: 'NQF Level 2-4',
//   },
//   {
//     id: 'aviation',
//     slug: 'aviation-robotics-drones',
//     icon: Plane,
//     title: 'Aviation & Robotics (Drones)',
//     shortTitle: 'Aviation & Drones',
//     description: 'Intelligent aerial systems for agriculture, security, and mapping.',
//     color: '#03a9f4',
//     image: '/drone-training.jpg',
//     courses: 2,
//     duration: '6 Months - 1 Year',
//     levels: 'NQF Level 4',
//   },
//   {
//     id: 'education',
//     slug: 'education-training-development',
//     icon: GraduationCap,
//     title: 'Education, Training & Development',
//     shortTitle: 'Education',
//     description: 'Empowering the next generation of educators and trainers.',
//     color: '#9c27b0',
//     image: '/library.jpg',
//     courses: 3,
//     duration: '6 Months - 1 Year',
//     levels: 'NQF Level 4-5',
//   },
//   {
//     id: 'social',
//     slug: 'social-community-development',
//     icon: Users,
//     title: 'Social & Community Development',
//     shortTitle: 'Social Development',
//     description: 'Building capable professionals for community upliftment.',
//     color: '#ff5722',
//     image: '/students-diverse.jpg',
//     courses: 2,
//     duration: '6 Months - 1 Year',
//     levels: 'NQF Level 4-5',
//   },
//   {
//     id: 'lifestyle',
//     slug: 'lifestyle-services',
//     icon: Sparkles,
//     title: 'Lifestyle & Services',
//     shortTitle: 'Lifestyle',
//     description: 'Personal service professionals with practical, high-demand career paths.',
//     color: '#e91e63',
//     image: '/hero-campus.jpg',
//     courses: 2,
//     duration: '6 Months - 1 Year',
//     levels: 'NQF Level 4',
//   },
// ];

export function ProgrammesPage() {

  const [classes, setClasses] = useState<ClassDto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getClasses()
      .then(setClasses)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    console.log('Classes loaded:', classes);
  }, [classes]);

  if (loading) {
  return (
    <>
      <style>{`
        .loader-container {
          min-height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 20px;
        }

        .solar-loader {
          width: 400px;
          height: 400px;
          position: relative;
          display: grid;
          place-items: center;
          overflow: hidden;
          border-radius: 32px;
          background:
            radial-gradient(circle at 50% 30%, #fff176 0 8%, transparent 23%),
            linear-gradient(135deg, #00c6ff, #00ff00 55%, #cf6005);
          box-shadow: 0 25px 60px #0004;
          font-family: system-ui, sans-serif;
          perspective: 900px;
        }

        .solar-loader::before {
          content: "";
          position: absolute;
          inset: -40%;
          background:
            repeating-conic-gradient(
              from 0deg,
              #ffffff55 0 8deg,
              transparent 8deg 18deg
            );
          animation: rays 8s linear infinite;
          opacity: .35;
        }

        .sun {
          position: absolute;
          top: 46px;
          width: 86px;
          height: 86px;
          border-radius: 50%;
          background: radial-gradient(circle, #fffde7, #ffd600 45%, #ff7a00);
          box-shadow: 0 0 35px #fff176, 0 0 80px #ff9800;
          animation: pulse 1.8s ease-in-out infinite;
        }

        .orbit {
          position: absolute;
          width: 260px;
          height: 260px;
          border-radius: 50%;
          border: 2px dashed #ffffff80;
          animation: spin 3s linear infinite;
        }

        .orbit span {
          position: absolute;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #00ffcc;
          box-shadow: 0 0 18px currentColor;
        }

        .orbit span:nth-child(1) {
          top: -7px;
          left: 123px;
          color: #00ffcc;
        }

        .orbit span:nth-child(2) {
          right: -7px;
          top: 123px;
          color: #fff200;
        }

        .orbit span:nth-child(3) {
          bottom: -7px;
          left: 123px;
          color: #00ff00;
        }

        .orbit span:nth-child(4) {
          left: -7px;
          top: 123px;
          color: #00c6ff;
        }

        .panel-wrap {
          position: absolute;
          top: 155px;
          transform-style: preserve-3d;
          animation: floatPanel 2.4s ease-in-out infinite;
        }

        .panel {
          width: 210px;
          height: 120px;
          padding: 10px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 6px;
          border-radius: 14px;
          background: linear-gradient(145deg, #102a43, #081826);
          border: 4px solid #8ee7ff;
          box-shadow:
            0 18px 30px #0007,
            inset 0 0 20px #00c6ff66;
          transform: rotateX(58deg) rotateZ(-16deg);
        }

        .panel i {
          border-radius: 6px;
          background:
            linear-gradient(
              135deg,
              #20e3ff 0 45%,
              #1376ff 45% 100%
            );
          box-shadow: inset 0 0 12px #ffffff88;
          animation: shimmer 1.2s ease-in-out infinite alternate;
        }

        .panel i:nth-child(odd) {
          animation-delay: .25s;
        }

        .stand {
          width: 14px;
          height: 70px;
          margin: -12px auto 0;
          background: linear-gradient(#d7f9ff, #5f9ea0);
          border-radius: 10px;
          box-shadow: 0 10px 18px #0005;
        }

        .base {
          width: 130px;
          height: 18px;
          margin: -4px auto 0;
          border-radius: 50%;
          background: #183b56;
          box-shadow: 0 10px 25px #0007;
        }

        .text {
          position: absolute;
          bottom: 34px;
          color: white;
          font-weight: 800;
          letter-spacing: .5px;
          text-shadow: 0 3px 10px #0007;
          animation: textGlow 1.5s ease-in-out infinite alternate;
        }

        .error-message {
          color: #ff4d4f;
          font-size: 18px;
          font-weight: 600;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @keyframes rays {
          to { transform: rotate(360deg); }
        }

        @keyframes pulse {
          50% {
            transform: scale(1.08);
            box-shadow:
              0 0 55px #fff176,
              0 0 110px #ff9800;
          }
        }

        @keyframes floatPanel {
          50% {
            transform:
              translateY(-14px)
              rotateY(8deg);
          }
        }

        @keyframes shimmer {
          to {
            filter: brightness(1.45);
            transform: translateY(-2px);
          }
        }

        @keyframes textGlow {
          to { opacity: .65; }
        }
      `}</style>

      <div className="loader-container">
        <div className="solar-loader">
          <div className="sun"></div>

          <div className="orbit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="panel-wrap">
            <div className="panel">
              <i></i><i></i><i></i><i></i>
              <i></i><i></i><i></i><i></i>
              <i></i><i></i><i></i><i></i>
            </div>

            <div className="stand"></div>
            <div className="base"></div>
          </div>
        </div>
      </div>
    </>
  );
}
 if (error) {
  return (
    <>
      <style>{`
        .loader-container {
          min-height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 20px;
        }

        .solar-loader {
          width: 400px;
          height: 400px;
          position: relative;
          display: grid;
          place-items: center;
          overflow: hidden;
          border-radius: 32px;
          background:
            radial-gradient(circle at 50% 30%, #fff176 0 8%, transparent 23%),
            linear-gradient(135deg, #00c6ff, #7b2ff7 55%, #ff4ecd);
          box-shadow: 0 25px 60px #0004;
          font-family: system-ui, sans-serif;
          perspective: 900px;
        }

        .solar-loader::before {
          content: "";
          position: absolute;
          inset: -40%;
          background:
            repeating-conic-gradient(
              from 0deg,
              #ffffff55 0 8deg,
              transparent 8deg 18deg
            );
          animation: rays 8s linear infinite;
          opacity: .35;
        }

        .sun {
          position: absolute;
          top: 46px;
          width: 86px;
          height: 86px;
          border-radius: 50%;
          background: radial-gradient(circle, #fffde7, #ffd600 45%, #ff7a00);
          box-shadow: 0 0 35px #fff176, 0 0 80px #ff9800;
          animation: pulse 1.8s ease-in-out infinite;
        }

        .orbit {
          position: absolute;
          width: 260px;
          height: 260px;
          border-radius: 50%;
          border: 2px dashed #ffffff80;
          animation: spin 3s linear infinite;
        }

        .orbit span {
          position: absolute;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #00ffcc;
          box-shadow: 0 0 18px currentColor;
        }

        .orbit span:nth-child(1) {
          top: -7px;
          left: 123px;
          color: #00ffcc;
        }

        .orbit span:nth-child(2) {
          right: -7px;
          top: 123px;
          color: #fff200;
        }

        .orbit span:nth-child(3) {
          bottom: -7px;
          left: 123px;
          color: #ff4ecd;
        }

        .orbit span:nth-child(4) {
          left: -7px;
          top: 123px;
          color: #00c6ff;
        }

        .panel-wrap {
          position: absolute;
          top: 155px;
          transform-style: preserve-3d;
          animation: floatPanel 2.4s ease-in-out infinite;
        }

        .panel {
          width: 210px;
          height: 120px;
          padding: 10px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 6px;
          border-radius: 14px;
          background: linear-gradient(145deg, #102a43, #081826);
          border: 4px solid #8ee7ff;
          box-shadow:
            0 18px 30px #0007,
            inset 0 0 20px #00c6ff66;
          transform: rotateX(58deg) rotateZ(-16deg);
        }

        .panel i {
          border-radius: 6px;
          background:
            linear-gradient(
              135deg,
              #20e3ff 0 45%,
              #1376ff 45% 100%
            );
          box-shadow: inset 0 0 12px #ffffff88;
          animation: shimmer 1.2s ease-in-out infinite alternate;
        }

        .panel i:nth-child(odd) {
          animation-delay: .25s;
        }

        .stand {
          width: 14px;
          height: 70px;
          margin: -12px auto 0;
          background: linear-gradient(#d7f9ff, #5f9ea0);
          border-radius: 10px;
          box-shadow: 0 10px 18px #0005;
        }

        .base {
          width: 130px;
          height: 18px;
          margin: -4px auto 0;
          border-radius: 50%;
          background: #183b56;
          box-shadow: 0 10px 25px #0007;
        }

        .text {
          position: absolute;
          bottom: 34px;
          color: white;
          font-weight: 800;
          letter-spacing: .5px;
          text-shadow: 0 3px 10px #0007;
          animation: textGlow 1.5s ease-in-out infinite alternate;
        }

        .error-message {
          color: #ff4d4f;
          font-size: 18px;
          font-weight: 600;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @keyframes rays {
          to { transform: rotate(360deg); }
        }

        @keyframes pulse {
          50% {
            transform: scale(1.08);
            box-shadow:
              0 0 55px #fff176,
              0 0 110px #ff9800;
          }
        }

        @keyframes floatPanel {
          50% {
            transform:
              translateY(-14px)
              rotateY(8deg);
          }
        }

        @keyframes shimmer {
          to {
            filter: brightness(1.45);
            transform: translateY(-2px);
          }
        }

        @keyframes textGlow {
          to { opacity: .65; }
        }
      `}</style>

      <div className="loader-container">
        <div className="solar-loader">
          <div className="sun"></div>

          <div className="orbit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="panel-wrap">
            <div className="panel">
              <i></i><i></i><i></i><i></i>
              <i></i><i></i><i></i><i></i>
              <i></i><i></i><i></i><i></i>
            </div>

            <div className="stand"></div>
            <div className="base"></div>
          </div>

          <div className="text">
            Charging solar data...
          </div>
        </div>

        <div className="error-message">
          Failed to fetch
        </div>
      </div>
    </>
  );
}

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-r from-[#1e3a5f] to-[#2d8a5e]">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <Badge className="bg-[#c9a227] mb-4">50+ Qualifications</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Programmes</h1>
          <p className="text-lg opacity-90">Industry-aligned qualifications that respond to Africa's needs</p>
        </div>
      </section>

      {/* Faculties Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-3">{classes.length} Faculties, 50+ Qualifications</h2>
            <p className="text-gray-600">Choose from a wide range of career-focused programmes</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {classes.map((faculty) => (
              <Link 
                key={faculty.Id} 
                to={`/faculty/${faculty.Slug}`}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={faculty.Image} 
                    alt={faculty.Title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-lg">{faculty.ShortTitle}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{faculty.Description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1 text-gray-500">
                      </span>
                      <span className="flex items-center gap-1 text-gray-500">
                        <Clock size={14} /> {faculty.Duration}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t flex items-center justify-between">
                    <Badge style={{ backgroundColor: '#8bc34a', color: 'white', borderColor: 'white' }} variant="outline">
                      {faculty.Levels}
                    </Badge>
                    <span className="text-[#2d8a5e] font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      View Courses <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-3">How to Apply</h2>
            <p className="text-gray-600">Follow these simple steps to start your journey</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Choose a Programme', description: 'Browse our faculties and select a qualification that matches your career goals.' },
              { step: '2', title: 'Check Requirements', description: 'Ensure you meet the entry requirements for your chosen programme.' },
              { step: '3', title: 'Apply Online', description: 'Complete our online application form and upload required documents.' },
              { step: '4', title: 'Await Response', description: 'We will review your application and contact you within 5 working days.' },
            ].map((item, i) => (
              <Card key={i} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-[#2d8a5e] text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-[#1e3a5f] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/apply" className="btn-primary">Start Your Application</Link>
          </div>
        </div>
      </section>

      {/* Entry Requirements */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-3">Entry Requirements</h2>
            <p className="text-gray-600">What you need to apply for our programmes</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#2d8a5e]" />
                  Academic Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#2d8a5e]">•</span>
                    <span className="text-gray-700">National Senior Certificate (NSC) or equivalent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2d8a5e]">•</span>
                    <span className="text-gray-700">NCV Level 4 for certain programmes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2d8a5e]">•</span>
                    <span className="text-gray-700">NATED N6 for advanced qualifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2d8a5e]">•</span>
                    <span className="text-gray-700">Recognition of Prior Learning (RPL) available</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-[#2d8a5e]" />
                  Documents Required
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#2d8a5e]">•</span>
                    <span className="text-gray-700">Certified copy of ID or Passport</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2d8a5e]">•</span>
                    <span className="text-gray-700">Certified academic results</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2d8a5e]">•</span>
                    <span className="text-gray-700">Proof of residence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2d8a5e]">•</span>
                    <span className="text-gray-700">Recent passport photo</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#2d8a5e] to-[#1e3a5f] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg opacity-90 mb-8">
            Applications for 2026 are now open. Secure your place at SSACT today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/apply" className="btn-white">Apply Now</Link>
            <Link to="/contact" className="btn-primary border-2 border-white">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
