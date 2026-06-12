//import { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Award, Building2, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
//import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useEffect, useState } from 'react';

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
  const { slug, id } = useParams<{ slug: string; id: string }>();
  const info = facultyInfo[slug || ''];
  const courses = allCourses[slug || ''] || [];
  
  const [subjects, setSubjects] = useState<any[]>([]);
  const [subjectsLoading, setSubjectsLoading] = useState(false);
  const [subjectsError, setSubjectsError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    setSubjectsLoading(true);
    setSubjectsError(null);

    
    fetch(`https://studentportaltest-a9afaje8c3hjctap.southafricanorth-01.azurewebsites.net/api/classes/${id}/subjects`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch subjects');
        }

        return res.json();
      })
      .then(setSubjects)
      .catch((err) => setSubjectsError(err.message))
      .finally(() => setSubjectsLoading(false));
  }, [id]);

  //const displayCourses = subjects.length > 0 ? subjects : courses;

  if (!info) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold">Faculty not found</h1>
      </div>
    );
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
                  <p className="text-gray-600">{subjects.length} courses available</p>
                </div>
                <Link to="/apply" className="btn-primary">Apply Now</Link>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
  {subjects.map((course, i) => (
    <Link
      key={course.Id ?? i}
      to={`/subjects/${course.Id}`}
      className="group block"
    >
      <Card className="h-full cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] border border-gray-100 group-hover:border-[#2d8a5e]/40">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div>
              <Badge
                className="mb-2 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: info.color }}
              >
                {course.Code}
              </Badge>

              <CardTitle className="text-lg group-hover:text-[#2d8a5e] transition-colors">
                {course.Title}
              </CardTitle>
            </div>

            <span className="text-[#2d8a5e] opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
              View →
            </span>
          </div>
        </CardHeader>

        <CardContent>
          <p className="text-gray-600 text-sm mb-3">
            {course.Description}
          </p>

          <div className="flex flex-wrap gap-2 text-sm">
            <span className="flex items-center gap-1 text-gray-500">
              <Clock size={14} /> {course.Duration}
            </span>

            <span className="flex items-center gap-1 text-gray-500">
              <Award size={14} /> {course.Level}
            </span>
          </div>

          <p className="text-[#2d8a5e] text-sm mt-3 font-medium">
            Career: {course.Career}
          </p>

          <div className="mt-4 flex items-center text-[#2d8a5e] font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300">
            Click to view qualification details →
          </div>
        </CardContent>
      </Card>
    </Link>
  ))}
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
        </div>
      </section>
    </div>
  );
}
