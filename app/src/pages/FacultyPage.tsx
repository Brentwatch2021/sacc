import { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Award, Building2, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const allCourses: Record<string, any[]> = {
  'renewable-energy-electrical-engineering': [
    { code: '120883', title: 'Solar PV Standalone Systems Installer', career: 'Residential & commercial PV installer', desc: 'Installs and configures standalone solar power systems for off-grid use.', duration: '1 Year', level: 'NQF Level 4' },
    { code: '120885', title: 'Solar PV Standalone System Mounter', career: 'PV module assembly specialist', desc: 'Mounts and secures solar panels on various surfaces.', duration: '6 Months', level: 'NQF Level 3' },
    { code: '120863', title: 'Solar PV Standalone Service Technician', career: 'PV maintenance & support', desc: 'Provides servicing and technical support for standalone solar systems.', duration: '1 Year', level: 'NQF Level 4' },
    { code: '99447', title: 'Solar PV Service Technician', career: 'Solar plant O&M specialist', desc: 'Conducts diagnostics and repairs on solar PV systems.', duration: '1 Year', level: 'NQF Level 4' },
    { code: '99559', title: 'Wind Turbine Service Technician', career: 'Wind turbine technician', desc: 'Maintains and repairs wind turbine systems.', duration: '1 Year', level: 'NQF Level 4' },
    { code: '97224', title: 'Hydro Power Plant Process Controller', career: 'Small-scale hydro system operator', desc: 'Operates and monitors hydroelectric power systems.', duration: '1 Year', level: 'NQF Level 4' },
    { code: '122681', title: 'Renewable Energy Technologist', career: 'Project developer, energy systems designer', desc: 'Designs and implements renewable energy solutions.', duration: '2 Years', level: 'NQF Level 5' },
    { code: '94619', title: 'Hot Water System Installer (Solar)', career: 'Solar water heating systems technician', desc: 'Installs solar water heating equipment.', duration: '6 Months', level: 'NQF Level 3' },
    { code: '94620', title: 'Hot Water System Installer (Heat Pump)', career: 'Heat pump system installer', desc: 'Installs and maintains energy-efficient heat pump systems.', duration: '6 Months', level: 'NQF Level 3' },
    { code: '118093', title: 'Radiotrician', career: 'Industrial signal & radio communication technician', desc: 'Works with radio transmission and signal systems.', duration: '1 Year', level: 'NQF Level 4' },
    { code: '99426', title: 'Energy Efficiency Technician', career: 'Energy auditor, efficiency consultant', desc: 'Conducts energy audits and recommends efficiency improvements.', duration: '1 Year', level: 'NQF Level 4' },
    { code: '91761', title: 'Electrician', career: 'Licensed electrician', desc: 'Installs and maintains electrical wiring and systems.', duration: '1 Year', level: 'NQF Level 4' },
    { code: '94701', title: 'Instrument Mechanician', career: 'Industrial instrumentation technician', desc: 'Calibrates and maintains measurement instruments in industry.', duration: '1 Year', level: 'NQF Level 4' },
  ],
  'engineering-technical-trades': [
    { code: '91782', title: 'Plumber', career: 'Licensed plumbing technician', desc: 'Installs and repairs piping systems.', duration: '1 Year', level: 'NQF Level 4' },
    { code: '91788', title: 'Purchasing Officer', career: 'Procurement officer', desc: 'Manages sourcing and purchasing of goods.', duration: '6 Months', level: 'NQF Level 4' },
    { code: '91789', title: 'Retail Manager / Store Manager', career: 'Retail operations manager', desc: 'Oversees daily operations in retail environments.', duration: '1 Year', level: 'NQF Level 4' },
    { code: '93544', title: 'Supply and Distribution Manager', career: 'Logistics & warehouse manager', desc: 'Coordinates inventory, shipping, and supply chain operations.', duration: '1 Year', level: 'NQF Level 5' },
    { code: '119264', title: 'E-Waste Operations Controller', career: 'E-waste recycling & green tech handler', desc: 'Manages disposal and recycling of electronic waste.', duration: '6 Months', level: 'NQF Level 4' },
    { code: '88895', title: 'Packaging Operator', career: 'Packaging line operator', desc: 'Operates machinery for product packaging.', duration: '3 Months', level: 'NQF Level 2' },
    { code: '96368', title: 'Clearing and Forwarding Agent', career: 'Customs & trade documentation specialist', desc: 'Handles import/export documentation and customs clearance.', duration: '1 Year', level: 'NQF Level 4' },
  ],
  'agriculture-environment-natural-resources': [
    { code: '104904', title: 'Aquaculture Farm Worker', career: 'Fish farm assistant', desc: 'Assists with daily tasks on aquaculture farms.', duration: '3 Months', level: 'NQF Level 2' },
    { code: '104912', title: 'Aquaculture Farmer', career: 'Aquaculture entrepreneur', desc: 'Operates and manages aquaculture businesses.', duration: '1 Year', level: 'NQF Level 4' },
    { code: '110667', title: 'Orchard & Vineyard Foreman', career: 'Production supervisor', desc: 'Oversees cultivation and harvesting in orchards and vineyards.', duration: '1 Year', level: 'NQF Level 4' },
    { code: '116275', title: 'Winemaker\'s Assistant', career: 'Assistant winemaker', desc: 'Assists in wine production and processing.', duration: '1 Year', level: 'NQF Level 4' },
    { code: '93622', title: 'Nurseryperson / Nursery Supervisor', career: 'Plant nursery manager', desc: 'Manages plant propagation and sales in nurseries.', duration: '1 Year', level: 'NQF Level 4' },
    { code: '98892', title: 'Landscape Gardener / Landscaping Supervisor', career: 'Green infrastructure specialist', desc: 'Designs and maintains green outdoor spaces.', duration: '1 Year', level: 'NQF Level 4' },
    { code: '121129', title: 'Garden Designer', career: 'Garden planner for homes and businesses', desc: 'Designs garden layouts for aesthetic and functional use.', duration: '1 Year', level: 'NQF Level 4' },
    { code: '121128', title: 'Landscape Designer', career: 'Urban landscape planner', desc: 'Plans and develops urban landscapes and recreational areas.', duration: '1 Year', level: 'NQF Level 4' },
  ],
  'aviation-robotics-drones': [
    { code: '121155', title: 'RPAS Technician', career: 'Drone systems technician', desc: 'Assembles and maintains remotely piloted aircraft systems.', duration: '1 Year', level: 'NQF Level 4' },
    { code: '121161', title: 'RPAS Pilot', career: 'Certified drone operator', desc: 'Operates drones for agricultural, security, or mapping purposes.', duration: '6 Months', level: 'NQF Level 4' },
  ],
  'education-training-development': [
    { code: '101321', title: 'Training & Development Practitioner', career: 'Corporate trainer, education facilitator', desc: 'Designs and delivers workplace training programs.', duration: '1 Year', level: 'NQF Level 5' },
    { code: '96372', title: 'Career Development Information Officer', career: 'Career guidance professional', desc: 'Offers career planning and job readiness support.', duration: '6 Months', level: 'NQF Level 4' },
    { code: '97154', title: 'Occupational Trainer', career: 'Workplace-based training professional', desc: 'Provides skills development within organizations.', duration: '1 Year', level: 'NQF Level 4' },
  ],
  'social-community-development': [
    { code: '97691', title: 'Community Development Practitioner', career: 'Community upliftment specialist', desc: 'Develops and manages community outreach projects.', duration: '1 Year', level: 'NQF Level 5' },
    { code: '97708', title: 'Community Development Worker', career: 'Field outreach & support worker', desc: 'Works directly with communities to implement development initiatives.', duration: '6 Months', level: 'NQF Level 4' },
  ],
  'lifestyle-services': [
    { code: '97226', title: 'Hairdresser', career: 'Hair stylist & salon operator', desc: 'Provides hair cutting, styling and treatment services.', duration: '1 Year', level: 'NQF Level 4' },
    { code: '121447', title: 'Advertiser', career: 'Junior creative / media assistant', desc: 'Assists with the creation and delivery of advertising campaigns.', duration: '6 Months', level: 'NQF Level 4' },
  ],
};

const facultyInfo: Record<string, any> = {
  'renewable-energy-electrical-engineering': {
    title: 'Renewable Energy & Electrical Engineering',
    description: 'Powering Africa\'s green transition with practical skills in solar, wind, and hydro systems. Our programmes are designed to meet the growing demand for renewable energy technicians in South Africa and beyond.',
    image: '/solar-workshop.jpg',
    color: '#2d8a5e',
    facilities: ['Solar PV Training Lab', 'Wind Turbine Simulator', 'Electrical Workshop', 'Battery Storage Facility'],
    partners: ['GC Solar', 'Huawei', 'REIASA', 'Eskom'],
    equipment: 'GC Solar provides state-of-the-art solar panels, inverters, and training equipment. Contact: training@gcsolar.co.za',
  },
  'engineering-technical-trades': {
    title: 'Engineering & Technical Trades',
    description: 'Hands-on skills for the built environment and industrial sectors. Learn from industry experts and gain practical experience in plumbing, supply chain, and technical trades.',
    image: '/plumbing-workshop.jpg',
    color: '#1e3a5f',
    facilities: ['Plumbing Workshop', 'E-Waste Processing Lab', 'Supply Chain Simulation Centre'],
    partners: ['Local Municipalities', 'Construction Companies'],
    equipment: 'Industry-standard tools and equipment for plumbing, e-waste processing, and logistics training.',
  },
  'agriculture-environment-natural-resources': {
    title: 'Agriculture, Environment & Natural Resources',
    description: 'Sustainable food production and environmental stewardship in the heart of the Cape Winelands. Learn aquaculture, vineyard management, and landscape design.',
    image: '/vineyard-training.jpg',
    color: '#8bc34a',
    facilities: ['Aquaculture Ponds', 'Vineyard Training Area', 'Nursery', 'Landscape Design Studio'],
    partners: ['Local Wine Estates', 'Agricultural Co-operatives'],
    equipment: 'Full aquaculture systems, vineyard equipment, and landscape design tools.',
  },
  'aviation-robotics-drones': {
    title: 'Aviation & Robotics (Drones)',
    description: 'Intelligent aerial systems for agriculture, security, and mapping. Become a certified drone pilot or technician in this rapidly growing field.',
    image: '/drone-training.jpg',
    color: '#03a9f4',
    facilities: ['Drone Flight Simulator', 'RPAS Maintenance Lab', 'Outdoor Flight Area'],
    partners: ['Cape Winelands Airport', 'SACAA'],
    equipment: 'DJI Matrice series drones, flight simulators, and maintenance equipment.',
  },
  'education-training-development': {
    title: 'Education, Training & Development',
    description: 'Empowering the next generation of educators and trainers. Develop skills in workplace training, career guidance, and occupational education.',
    image: '/library.jpg',
    color: '#9c27b0',
    facilities: ['Training Simulation Rooms', 'Digital Learning Lab', 'Resource Centre'],
    partners: ['Department of Education', 'SETAs'],
    equipment: 'Modern training aids, digital learning platforms, and resource libraries.',
  },
  'social-community-development': {
    title: 'Social & Community Development',
    description: 'Building capable professionals for community upliftment. Learn to design and implement development projects that make a real difference.',
    image: '/students-diverse.jpg',
    color: '#ff5722',
    facilities: ['Community Project Hub', 'Research Centre'],
    partners: ['NGOs', 'Government Departments'],
    equipment: 'Project management tools and community research resources.',
  },
  'lifestyle-services': {
    title: 'Lifestyle & Services',
    description: 'Personal service professionals with practical, high-demand career paths in hairdressing and advertising.',
    image: '/hero-campus.jpg',
    color: '#e91e63',
    facilities: ['Hairdressing Salon', 'Media Production Studio'],
    partners: ['Salon Chains', 'Advertising Agencies'],
    equipment: 'Professional salon equipment and media production tools.',
  },
};

export function FacultyPage() {
  const { slug } = useParams<{ slug: string }>();
  const info = facultyInfo[slug || ''];
  const courses = allCourses[slug || ''] || [];
  const [demoOpen, setDemoOpen] = useState(false);
  const [simRunning, setSimRunning] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!demoOpen || !simRunning) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    let t = 0;
    let frame = 0;

    const drawDrone = (x: number, y: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.fillStyle = '#1f78b4';
      ctx.strokeStyle = '#0b3e6f';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(-18, -10);
      ctx.lineTo(18, -10);
      ctx.quadraticCurveTo(24, -10, 24, -4);
      ctx.lineTo(24, 4);
      ctx.quadraticCurveTo(24, 10, 18, 10);
      ctx.lineTo(-18, 10);
      ctx.quadraticCurveTo(-24, 10, -24, 4);
      ctx.lineTo(-24, -4);
      ctx.quadraticCurveTo(-24, -10, -18, -10);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(-18, 0);
      ctx.lineTo(-34, -10);
      ctx.lineTo(-34, 10);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = '#f0f5ff';
      ctx.beginPath();
      ctx.ellipse(0, -10, 10, 4, 0, 0, Math.PI * 2);
      ctx.fill();

      for (let i = -1; i <= 1; i += 2) {
        ctx.save();
        ctx.translate(i * 20, 0);
        ctx.rotate((t * 12 * Math.PI) / 180);
        ctx.fillStyle = 'rgba(255,255,255,0.75)';
        ctx.fillRect(-2, -18, 4, 24);
        ctx.restore();
      }
      ctx.restore();
    };

      const draw = () => {
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      const sky = ctx.createLinearGradient(0, 0, 0, height);
      sky.addColorStop(0, '#6fc3ff');
      sky.addColorStop(0.55, '#b9e3ff');
      sky.addColorStop(1, '#e8f6ff');
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = '#d9ebff';
      ctx.fillRect(0, height * 0.55, width, height * 0.45);

      ctx.fillStyle = '#8cc1ff';
      ctx.fillRect(0, height * 0.5, width, height * 0.05);

      ctx.fillStyle = 'rgba(255,255,255,0.35)';
      for (let x = 0; x < width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, height * 0.6);
        ctx.lineTo(x + 20, height * 0.65);
        ctx.stroke();
      }

      const routeY = height * 0.28;
      const routeStart = width * 0.12;
      const routeEnd = width * 0.88;
      ctx.strokeStyle = '#ffdd57';
      ctx.lineWidth = 4;
      ctx.setLineDash([14, 10]);
      ctx.beginPath();
      ctx.moveTo(routeStart, routeY);
      for (let i = 1; i <= 5; i += 1) {
        const px = routeStart + ((routeEnd - routeStart) * i) / 5;
        const py = routeY + Math.sin((i + t) * 0.9) * 18;
        ctx.lineTo(px, py);
      }
      ctx.stroke();
      ctx.setLineDash([]);

      for (let i = 0; i <= 5; i += 1) {
        const px = routeStart + ((routeEnd - routeStart) * i) / 5;
        const py = routeY + Math.sin((i + t) * 0.9) * 18;
        ctx.fillStyle = '#ffffff';
        ctx.strokeStyle = '#0b3e6f';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(px, py, 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = '#0b3e6f';
        ctx.fillRect(px - 2, py - 6, 4, 12);
      }

      const droneX = routeStart + (routeEnd - routeStart) * ((Math.sin(t * 0.4) + 1) / 2);
      const droneY = routeY + Math.sin(t * 1.4) * 18 - 24;
      ctx.fillStyle = 'rgba(30,58,95,0.16)';
      ctx.beginPath();
      ctx.ellipse(droneX, droneY + 22, 40, 10, 0, 0, Math.PI * 2);
      ctx.fill();
      drawDrone(droneX, droneY);

      ctx.fillStyle = '#1e3a5f';
      ctx.font = '600 18px Inter, sans-serif';
      ctx.fillText('RPAS Training Simulation', 22, 34);
      ctx.font = '12px Inter, sans-serif';
      ctx.fillText('A live pre-flight inspection and mapping route.', 22, 54);

      ctx.fillStyle = 'rgba(255,255,255,0.7)';
      ctx.fillRect(width - 190, height - 62, 170, 42);
      ctx.fillStyle = '#0b3e6f';
      ctx.font = '500 11px Inter, sans-serif';
      ctx.fillText('Target inspection zone', width - 176, height - 42);
      ctx.strokeStyle = '#0b3e6f';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(width - 80, height - 28, 14, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(width - 80, height - 22);
      ctx.lineTo(width - 80, height - 10);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(width - 80, height - 14, 4, 0, Math.PI * 2);
      ctx.fill();

      t += 0.04;
      frame = requestAnimationFrame(draw);
    };
    draw();

    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
    };
  }, [demoOpen, simRunning]);

  if (!info) {
    return <div className="py-20 text-center"><h1 className="text-2xl font-bold">Faculty not found</h1></div>;
  }

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${info.image})` }}>
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{info.title}</h1>
          <p className="text-lg opacity-90">{info.description}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <Tabs defaultValue="courses" className="w-full">
            <TabsList className="w-full justify-start mb-8">
              <TabsTrigger value="courses">All Courses</TabsTrigger>
              <TabsTrigger value="facilities">Facilities</TabsTrigger>
              <TabsTrigger value="partners">Partners</TabsTrigger>
              <TabsTrigger value="equipment">Equipment</TabsTrigger>
            </TabsList>

            <TabsContent value="courses">
              <div className="mb-8 flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold text-[#1e3a5f]">Available Qualifications</h2>
                  <p className="text-gray-600">{courses.length} courses available</p>
                </div>
                <Link to="/apply" className="btn-primary">Apply Now</Link>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {courses.map((course, i) => {
                  const isDemoCourse = course.title === 'RPAS Pilot';
                  return (
                    <Card
                      key={i}
                      className={`hover:shadow-lg transition-shadow ${isDemoCourse ? 'cursor-pointer ring-1 ring-[#03a9f4]/30 hover:ring-[#03a9f4]' : ''}`}
                      onClick={() => isDemoCourse && setDemoOpen(true)}
                      role={isDemoCourse ? 'button' : undefined}
                      tabIndex={isDemoCourse ? 0 : undefined}
                      onKeyDown={(event) => {
                        if (isDemoCourse && (event.key === 'Enter' || event.key === ' ')) {
                          event.preventDefault();
                          setDemoOpen(true);
                        }
                      }}
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <Badge className="mb-2" style={{ backgroundColor: info.color }}>{course.code}</Badge>
                            <CardTitle className="text-lg">{course.title}</CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 text-sm mb-3">{course.desc}</p>
                        <div className="flex flex-wrap gap-2 text-sm">
                          <span className="flex items-center gap-1 text-gray-500"><Clock size={14} /> {course.duration}</span>
                          <span className="flex items-center gap-1 text-gray-500"><Award size={14} /> {course.level}</span>
                        </div>
                        <p className="text-[#2d8a5e] text-sm mt-3 font-medium">Career: {course.career}</p>
                        {isDemoCourse && (
                          <p className="mt-3 text-sm text-[#03a9f4] font-medium">Click to view training simulation</p>
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="facilities">
              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">Our Facilities</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {info.facilities.map((facility: string, i: number) => (
                  <Card key={i}>
                    <CardContent className="p-6 flex items-center gap-4">
                      <Building2 className="w-10 h-10" style={{ color: info.color }} />
                      <span className="font-medium">{facility}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="partners">
              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">Industry Partners</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {info.partners.map((partner: string, i: number) => (
                  <Card key={i}>
                    <CardContent className="p-6 flex items-center gap-4">
                      <Users className="w-10 h-10" style={{ color: info.color }} />
                      <span className="font-medium">{partner}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="equipment">
              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">Equipment & Resources</h2>
              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-700">{info.equipment}</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Dialog
            open={demoOpen}
            onOpenChange={(open) => {
              setDemoOpen(open);
              setSimRunning(open);
            }}
          >
            <DialogContent className="max-w-3xl max-h-[85vh] overflow-hidden bg-white">
              <DialogHeader className="border-b pb-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <DialogTitle className="text-2xl font-bold text-[#03a9f4]">RPAS Pilot Training Demo</DialogTitle>
                    <p className="text-gray-600 mt-2">The simulation starts automatically when this modal opens. Close it anytime to stop.</p>
                  </div>
                  <DialogClose className="btn-secondary self-start">Close</DialogClose>
                </div>
              </DialogHeader>
              <div className="p-4">
                <div className="rounded-3xl overflow-hidden border border-slate-200 bg-slate-950 relative">
                  <canvas ref={canvasRef} className="w-full h-[320px] block" />
                  {!simRunning && (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-950/70 text-white text-sm font-medium">
                      Click "Open" again to start the simulation.
                    </div>
                  )}
                </div>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-gray-700 flex-1">The demo is a live canvas animation of a drone inspection route. It begins immediately when the modal opens.</p>
                  <button
                    type="button"
                    onClick={() => setSimRunning(true)}
                    className="btn-primary"
                  >
                    Start Simulation
                  </button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </section>
    </div>
  );
}
