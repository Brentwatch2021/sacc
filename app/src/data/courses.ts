export interface Course {
  code: string;
  title: string;
  career: string;
  desc: string;
  duration: string;
  level: string;
  credits?: number;
  saqaInfo?: {
    purpose: string;
    entryRequirements: string[];
    modules: {
      knowledge: string[];
      practical: string[];
      workExperience: string[];
    };
    careerOpportunities: string[];
    articulation: string[];
  };
}

export const allCourses: Record<string, Course[]> = {
  renewable: [
    { 
      code: '120883', 
      title: 'Solar PV Standalone Systems Installer', 
      career: 'Residential & commercial PV installer', 
      desc: 'Installs and configures standalone solar power systems for off-grid use. This qualification prepares learners to design, install, and commission standalone photovoltaic systems.', 
      duration: '1 Year', 
      level: 'NQF Level 4',
      credits: 211,
      saqaInfo: {
        purpose: 'This qualification prepares learners to install, commission, and maintain standalone solar PV systems. It covers system design, component installation, and safety procedures.',
        entryRequirements: ['NQF Level 3 qualification or equivalent', 'Mathematics and Physical Science at Grade 10 level', 'Basic understanding of electrical systems'],
        modules: {
          knowledge: [
            'Workplace fundamentals (9 credits)',
            'Tools, equipment and materials (7 credits)',
            'Electricity and electronics (18 credits)',
            'Wireways, wiring and earthing (11 credits)',
            'Electrical supply systems and transformers (9 credits)',
            'Protection systems and lightning protection (8 credits)',
            'Renewable energy (3 credits)',
            'Components of PV systems (20 credits)'
          ],
          practical: [
            'Mitigate and respond to hazards (8 credits)',
            'Work at heights (4 credits)',
            'Use tools, measuring instruments and equipment (7 credits)',
            'Design, construct and test electrical circuits (4 credits)',
            'Plan and prepare for PV system installation (10 credits)',
            'Install mechanical components of PV system (10 credits)',
            'Install electrical components and inter-connect system (15 credits)'
          ],
          workExperience: [
            'Structured planning and communication processes (4 credits)',
            'Processes to plan and prepare for installation (22 credits)',
            'Processes to install mechanical components (15 credits)',
            'Processes to install electrical components (27 credits)'
          ]
        },
        careerOpportunities: [
          'Solar PV Installer',
          'Standalone System Technician',
          'Off-grid Energy Consultant',
          'Renewable Energy Entrepreneur'
        ],
        articulation: [
          'Solar PV Service Technician (NQF Level 5)',
          'National Diploma in Electrical Engineering',
          'Bachelor of Technology in Renewable Energy'
        ]
      }
    },
    { 
      code: '120885', 
      title: 'Solar PV Standalone System Mounter', 
      career: 'PV module assembly specialist', 
      desc: 'Mounts and secures solar panels on various surfaces. Part-qualification forming part of the full Solar PV Standalone Systems Installer.', 
      duration: '6 Months', 
      level: 'NQF Level 3',
      credits: 67
    },
    { 
      code: '120863', 
      title: 'Solar PV Standalone Service Technician', 
      career: 'PV maintenance & support', 
      desc: 'Provides servicing and technical support for standalone solar systems. Maintains, troubleshoots, and repairs solar installations.', 
      duration: '1 Year', 
      level: 'NQF Level 4',
      credits: 211
    },
    { 
      code: '99447', 
      title: 'Solar PV Service Technician', 
      career: 'Solar plant O&M specialist', 
      desc: 'Conducts diagnostics and repairs on solar PV systems. Performs preventative and corrective maintenance on photovoltaic installations.', 
      duration: '1 Year', 
      level: 'NQF Level 5',
      credits: 344,
      saqaInfo: {
        purpose: 'This qualification prepares learners to perform maintenance (preventative, scheduled, and unscheduled) on solar photovoltaic systems. Technicians learn to isolate systems, diagnose faults, replace components, and perform system repairs.',
        entryRequirements: ['NQF Level 4 qualification', 'Mathematics at NQF Level 4', 'Electrical systems knowledge'],
        modules: {
          knowledge: [
            'Workplace fundamentals (9 credits)',
            'Tools, equipment and materials (7 credits)',
            'Electricity and electronics (18 credits)',
            'Wireways, wiring and earthing (11 credits)',
            'Electrical supply systems and transformers (9 credits)',
            'Protection systems and lightning protection (8 credits)',
            'Power plant basics and control (7 credits)',
            'Rotating electrical machinery (5 credits)',
            'Mechanics, hydraulics and actuators (5 credits)',
            'Renewable energy (3 credits)',
            'Components of PV systems (20 credits)',
            'Designing and installing grid-connected and stand-alone systems (7 credits)',
            'Maintenance, troubleshooting and repairs (13 credits)'
          ],
          practical: [
            'Mitigate and respond to hazards (8 credits)',
            'Work at heights (4 credits)',
            'Use tools, measuring instruments and equipment (7 credits)',
            'Design, construct and test circuits (4 credits)',
            'Plan and prepare for PV system installation (10 credits)',
            'Install mechanical components (10 credits)',
            'Install electrical components and inter-connect (15 credits)',
            'Maintain, test, diagnose and replace PV panels (4 credits)'
          ],
          workExperience: [
            'Participation in planning and preparation processes (8 credits)',
            'Participation in diagnosis and resolution procedures (8 credits)',
            'Operations and maintenance processes (8 credits)',
            'Parts and component assembly and installation (8 credits)'
          ]
        },
        careerOpportunities: [
          'Solar PV Service Technician',
          'PV Plant Maintenance Specialist',
          'Solar Farm Technician',
          'PV System Troubleshooter'
        ],
        articulation: [
          'National Diploma in Electrical Engineering',
          'Bachelor of Technology in Engineering',
          'Professional Engineer registration'
        ]
      }
    },
    { 
      code: '99559', 
      title: 'Wind Turbine Service Technician', 
      career: 'Wind turbine technician', 
      desc: 'Maintains and repairs wind turbine systems. Works at heights to ensure optimal turbine operation.', 
      duration: '1 Year', 
      level: 'NQF Level 5',
      credits: 123,
      saqaInfo: {
        purpose: 'This qualification prepares learners to install, maintain, and repair wind turbines. Technicians work at heights to inspect, diagnose, and fix turbine equipment.',
        entryRequirements: ['NQF Level 4 qualification', 'Physical fitness certificate', 'No fear of heights', 'Valid medical certificate'],
        modules: {
          knowledge: [
            'Renewable energy and the environment (15 credits)',
            'Wind Turbine Technology (26 credits)',
            'Principles of Occupational Health and Safety (3 credits)'
          ],
          practical: [
            'Apply health and safety requirements (3 credits)',
            'Use and operate rigging gear in wind turbine environment (2 credits)',
            'Select, use and care for engineering tools (2 credits)',
            'Inspect, diagnose and address malfunctioning of mechanical equipment (5 credits)',
            'Assembly and installation of mechanical parts (11 credits)',
            'Diagnose and address malfunctioning of electrical equipment (5 credits)',
            'Assembly and installation of electrical components (6 credits)',
            'Inspect, assess and maintain electrical components (5 credits)',
            'Inspect, assess and address composite parts (8 credits)'
          ],
          workExperience: [
            'Participation in planning and preparation processes (8 credits)',
            'Participation in diagnosis and resolution procedures (8 credits)',
            'Operations and maintenance processes (8 credits)',
            'Parts and component assembly and installation (8 credits)'
          ]
        },
        careerOpportunities: [
          'Wind Turbine Service Technician',
          'Wind Farm Maintenance Specialist',
          'Turbine Installation Technician',
          'Renewable Energy Field Technician'
        ],
        articulation: [
          'National Diploma in Mechanical Engineering',
          'Bachelor of Technology in Engineering'
        ]
      }
    },
    { 
      code: '97224', 
      title: 'Hydro Power Plant Process Controller', 
      career: 'Small-scale hydro system operator', 
      desc: 'Operates and monitors hydroelectric power systems. Manages water flow, turbine operation, and power generation.', 
      duration: '1 Year', 
      level: 'NQF Level 4',
      credits: 145
    },
    { 
      code: '122681', 
      title: 'Renewable Energy Technologist', 
      career: 'Project developer, energy systems designer', 
      desc: 'Designs and implements renewable energy solutions. Works on solar, wind, and hybrid energy projects.', 
      duration: '2 Years', 
      level: 'NQF Level 5',
      credits: 240
    },
    { 
      code: '94619', 
      title: 'Hot Water System Installer (Solar)', 
      career: 'Solar water heating systems technician', 
      desc: 'Installs solar water heating equipment for residential and commercial applications.', 
      duration: '6 Months', 
      level: 'NQF Level 3',
      credits: 67
    },
    { 
      code: '94620', 
      title: 'Hot Water System Installer (Heat Pump)', 
      career: 'Heat pump system installer', 
      desc: 'Installs and maintains energy-efficient heat pump systems for water heating.', 
      duration: '6 Months', 
      level: 'NQF Level 3',
      credits: 67
    },
    { 
      code: '118093', 
      title: 'Radiotrician', 
      career: 'Industrial signal & radio communication technician', 
      desc: 'Works with radio transmission and signal systems for industrial applications.', 
      duration: '1 Year', 
      level: 'NQF Level 4',
      credits: 156
    },
    { 
      code: '99426', 
      title: 'Energy Efficiency Technician', 
      career: 'Energy auditor, efficiency consultant', 
      desc: 'Conducts energy audits and recommends efficiency improvements for buildings and systems.', 
      duration: '1 Year', 
      level: 'NQF Level 4',
      credits: 145
    },
    { 
      code: '91761', 
      title: 'Electrician', 
      career: 'Licensed electrician', 
      desc: 'Installs and maintains electrical wiring and systems for residential, commercial, and industrial applications.', 
      duration: '1 Year', 
      level: 'NQF Level 4',
      credits: 156
    },
    { 
      code: '94701', 
      title: 'Instrument Mechanician', 
      career: 'Industrial instrumentation technician', 
      desc: 'Calibrates and maintains measurement instruments in industrial settings. Works with pressure, flow, level, and temperature measurement systems.', 
      duration: '1 Year', 
      level: 'NQF Level 4',
      credits: 469,
      saqaInfo: {
        purpose: 'This qualification prepares learners to install, repair, maintain, and adjust instruments used to measure and control industrial processes. Instrument Mechanicians work with flow, pressure, level, temperature, and analysis instrumentation.',
        entryRequirements: ['NQF Level 3 qualification', 'Mathematics and Physical Science', 'Technical aptitude'],
        modules: {
          knowledge: [
            'Occupational Health and Safety legislation (6 credits)',
            'Electricity and Electronics (13 credits)',
            'Complex electronic components and circuits (20 credits)',
            'Introduction to Instrumentation (3 credits)',
            'Engineering tools and Test Equipment (10 credits)',
            'Pressure and pressure measurement (5 credits)',
            'Flow and flow measurement (5 credits)',
            'Level and level measurement (5 credits)',
            'Temperature and temperature measurement (5 credits)',
            'Final control elements (5 credits)',
            'Pneumatic systems (4 credits)',
            'Hydraulic Systems (4 credits)',
            'Relay logic circuits (8 credits)',
            'Introduction to Programmable Logic Controllers (10 credits)',
            'Programmable Instrumentation/SMART (6 credits)',
            'Process Control Loops and Automatic Control (15 credits)',
            'Instrumentation Drawings (3 credits)',
            'Process communication systems (10 credits)',
            'Fault finding on instrumentation equipment (5 credits)'
          ],
          practical: [
            'Select, use and care of engineering tools and test equipment (25 credits)',
            'Analyse, design and construct an electronic circuit (10 credits)',
            'Calibrate and test instrumentation equipment (50 credits)',
            'Install/remove instruments and components (12 credits)',
            'Compare measured variable values and adjust process loops (25 credits)',
            'Carry out fault diagnosis and repair faults (20 credits)',
            'Maintain systems, instruments and components (20 credits)'
          ],
          workExperience: [
            'Calibration processes and procedures (40 credits)',
            'Processes of removal and installation (15 credits)',
            'Processes of optimising process control loops (50 credits)',
            'Diagnostic processes for fault finding (30 credits)',
            'Maintenance processes for equipment reliability (30 credits)'
          ]
        },
        careerOpportunities: [
          'Instrument Mechanician',
          'Process Control Technician',
          'Instrumentation Supervisor',
          'Control Systems Specialist',
          'Plant Instrumentation Engineer'
        ],
        articulation: [
          'National Diploma in Electrical Engineering',
          'Bachelor of Technology in Engineering',
          'Professional Engineer registration'
        ]
      }
    },
  ],
  engineering: [
    { 
      code: '91782', 
      title: 'Plumber', 
      career: 'Licensed plumbing technician', 
      desc: 'Installs and repairs piping systems for water supply, drainage, and sanitation.', 
      duration: '1 Year', 
      level: 'NQF Level 4',
      credits: 278,
      saqaInfo: {
        purpose: 'This qualification prepares learners to install, maintain, and repair plumbing systems including water supply, drainage, and sanitary ware.',
        entryRequirements: ['NQF Level 2 qualification', 'Mathematics at Grade 10 level'],
        modules: {
          knowledge: [
            'Health, Safety, Quality and Legislation',
            'Tools, Equipment, Components and Site Practice',
            'Analytical Thinking and Complex Problem Solving',
            'Workplace Relationships and Performance',
            'Drawings and Applied Sciences',
            'Theory of Water and Drainage',
            'Above and Below Ground Drainage Systems',
            'Sanitary Ware',
            'Hot and Cold-Water Systems',
            'Maintenance and Repair Theory',
            'Sheet Metal and Pipework'
          ],
          practical: [
            'Care for, Use, and Store Trade-related Tools and Equipment',
            'Prepare, Cut and Assemble Basic Sheet Metal and Pipe Work',
            'Install and Test Above Ground Soil Waste and Vent Systems',
            'Maintain Above-Ground Soil Waste and Vent Systems',
            'Install and Test Below Ground Drainage Systems',
            'Maintain Below-Ground Drainage Systems'
          ],
          workExperience: [
            'Processes for mounting solar water heating systems',
            'Site preparation and planning processes',
            'Processes for solar water heating system installation',
            'Procedures for assessment, diagnosis and repair'
          ]
        },
        careerOpportunities: [
          'Licensed Plumber',
          'Plumbing Contractor',
          'Maintenance Plumber',
          'Construction Plumber'
        ],
        articulation: [
          'National Diploma in Building Services',
          'Bachelor of Technology in Construction'
        ]
      }
    },
    { 
      code: '91788', 
      title: 'Purchasing Officer', 
      career: 'Procurement officer', 
      desc: 'Manages sourcing and purchasing of goods and services for organizations.', 
      duration: '6 Months', 
      level: 'NQF Level 4',
      credits: 134
    },
    { 
      code: '91789', 
      title: 'Retail Manager / Store Manager', 
      career: 'Retail operations manager', 
      desc: 'Oversees daily operations in retail environments including staff management and customer service.', 
      duration: '1 Year', 
      level: 'NQF Level 4',
      credits: 156
    },
    { 
      code: '93544', 
      title: 'Supply and Distribution Manager', 
      career: 'Logistics & warehouse manager', 
      desc: 'Coordinates inventory, shipping, and supply chain operations for businesses.', 
      duration: '1 Year', 
      level: 'NQF Level 5',
      credits: 156
    },
    { 
      code: '119264', 
      title: 'E-Waste Operations Controller', 
      career: 'E-waste recycling & green tech handler', 
      desc: 'Manages disposal and recycling of electronic waste in an environmentally responsible manner.', 
      duration: '6 Months', 
      level: 'NQF Level 4',
      credits: 134
    },
    { 
      code: '88895', 
      title: 'Packaging Operator', 
      career: 'Packaging line operator', 
      desc: 'Operates machinery for product packaging in manufacturing settings.', 
      duration: '3 Months', 
      level: 'NQF Level 2',
      credits: 67
    },
    { 
      code: '96368', 
      title: 'Clearing and Forwarding Agent', 
      career: 'Customs & trade documentation specialist', 
      desc: 'Handles import/export documentation and customs clearance processes.', 
      duration: '1 Year', 
      level: 'NQF Level 4',
      credits: 145
    },
  ],
  agriculture: [
    { 
      code: '104904', 
      title: 'Aquaculture Farm Worker', 
      career: 'Fish farm assistant', 
      desc: 'Assists with daily tasks on aquaculture farms including feeding and maintenance.', 
      duration: '3 Months', 
      level: 'NQF Level 2',
      credits: 67
    },
    { 
      code: '104912', 
      title: 'Aquaculture Farmer', 
      career: 'Aquaculture entrepreneur', 
      desc: 'Operates and manages aquaculture businesses including fish breeding and production.', 
      duration: '1 Year', 
      level: 'NQF Level 4',
      credits: 156
    },
    { 
      code: '110667', 
      title: 'Orchard & Vineyard Foreman', 
      career: 'Production supervisor', 
      desc: 'Oversees cultivation and harvesting in orchards and vineyards in the Cape Winelands.', 
      duration: '1 Year', 
      level: 'NQF Level 4',
      credits: 145
    },
    { 
      code: '116275', 
      title: 'Winemaker\'s Assistant', 
      career: 'Assistant winemaker', 
      desc: 'Assists in wine production and processing in the Cape Winelands wine industry.', 
      duration: '1 Year', 
      level: 'NQF Level 4',
      credits: 156
    },
    { 
      code: '93622', 
      title: 'Nurseryperson / Nursery Supervisor', 
      career: 'Plant nursery manager', 
      desc: 'Manages plant propagation and sales in nurseries.', 
      duration: '1 Year', 
      level: 'NQF Level 4',
      credits: 145
    },
    { 
      code: '98892', 
      title: 'Landscape Gardener / Landscaping Supervisor', 
      career: 'Green infrastructure specialist', 
      desc: 'Designs and maintains green outdoor spaces for residential and commercial properties.', 
      duration: '1 Year', 
      level: 'NQF Level 4',
      credits: 156
    },
    { 
      code: '121129', 
      title: 'Garden Designer', 
      career: 'Garden planner for homes and businesses', 
      desc: 'Designs garden layouts for aesthetic and functional use.', 
      duration: '1 Year', 
      level: 'NQF Level 4',
      credits: 145
    },
    { 
      code: '121128', 
      title: 'Landscape Designer', 
      career: 'Urban landscape planner', 
      desc: 'Plans and develops urban landscapes and recreational areas.', 
      duration: '1 Year', 
      level: 'NQF Level 4',
      credits: 156
    },
  ],
  aviation: [
    { 
      code: '121155', 
      title: 'RPAS Technician', 
      career: 'Drone systems technician', 
      desc: 'Assembles and maintains remotely piloted aircraft systems (drones) for various applications.', 
      duration: '1 Year', 
      level: 'NQF Level 4',
      credits: 156
    },
    { 
      code: '121161', 
      title: 'RPAS Pilot', 
      career: 'Certified drone operator', 
      desc: 'Operates drones for agricultural, security, or mapping purposes. SACAA certified.', 
      duration: '6 Months', 
      level: 'NQF Level 4',
      credits: 89
    },
  ],
  education: [
    { 
      code: '101321', 
      title: 'Training & Development Practitioner', 
      career: 'Corporate trainer, education facilitator', 
      desc: 'Designs and delivers workplace training programs for organizations.', 
      duration: '1 Year', 
      level: 'NQF Level 5',
      credits: 156
    },
    { 
      code: '96372', 
      title: 'Career Development Information Officer', 
      career: 'Career guidance professional', 
      desc: 'Offers career planning and job readiness support to students and job seekers.', 
      duration: '6 Months', 
      level: 'NQF Level 4',
      credits: 89
    },
    { 
      code: '97154', 
      title: 'Occupational Trainer', 
      career: 'Workplace-based training professional', 
      desc: 'Provides skills development within organizations and workplaces.', 
      duration: '1 Year', 
      level: 'NQF Level 4',
      credits: 134
    },
  ],
  social: [
    { 
      code: '97691', 
      title: 'Community Development Practitioner', 
      career: 'Community upliftment specialist', 
      desc: 'Develops and manages community outreach projects for social development.', 
      duration: '1 Year', 
      level: 'NQF Level 5',
      credits: 156
    },
    { 
      code: '97708', 
      title: 'Community Development Worker', 
      career: 'Field outreach & support worker', 
      desc: 'Works directly with communities to implement development initiatives.', 
      duration: '6 Months', 
      level: 'NQF Level 4',
      credits: 89
    },
  ],
  lifestyle: [
    { 
      code: '97226', 
      title: 'Hairdresser', 
      career: 'Hair stylist & salon operator', 
      desc: 'Provides hair cutting, styling and treatment services in salons.', 
      duration: '1 Year', 
      level: 'NQF Level 4',
      credits: 156
    },
    { 
      code: '121447', 
      title: 'Advertiser', 
      career: 'Junior creative / media assistant', 
      desc: 'Assists with the creation and delivery of advertising campaigns.', 
      duration: '6 Months', 
      level: 'NQF Level 4',
      credits: 89
    },
  ],
};

export const faculties = [
  {
    id: 'renewable',
    slug: 'renewable-energy-electrical-engineering',
    icon: 'SolarPanel',
    title: 'Renewable Energy & Electrical Engineering',
    shortTitle: 'Renewable Energy',
    description: 'Powering Africa\'s green transition with practical skills in solar, wind, and hydro systems. Our programmes are designed to meet the growing demand for renewable energy technicians in South Africa and beyond.',
    color: '#2d8a5e',
    courses: allCourses.renewable,
    image: '/solar-workshop.jpg',
    facilities: ['Solar PV Training Lab', 'Wind Turbine Simulator', 'Electrical Workshop', 'Battery Storage Facility'],
    partners: ['GC Solar', 'Huawei', 'REISA', 'Eskom'],
  },
  {
    id: 'engineering',
    slug: 'engineering-technical-trades',
    icon: 'HardHat',
    title: 'Engineering & Technical Trades',
    shortTitle: 'Engineering',
    description: 'Hands-on skills for the built environment and industrial sectors. Learn from industry experts and gain practical experience in plumbing, supply chain, and technical trades.',
    color: '#1e3a5f',
    courses: allCourses.engineering,
    image: '/plumbing-workshop.jpg',
    facilities: ['Plumbing Workshop', 'E-Waste Processing Lab', 'Supply Chain Simulation Centre'],
    partners: ['Local Municipalities', 'Construction Companies'],
  },
  {
    id: 'agriculture',
    slug: 'agriculture-environment-natural-resources',
    icon: 'Sprout',
    title: 'Agriculture, Environment & Natural Resources',
    shortTitle: 'Agriculture',
    description: 'Sustainable food production and environmental stewardship in the heart of the Cape Winelands. Learn aquaculture, vineyard management, and landscape design.',
    color: '#8bc34a',
    courses: allCourses.agriculture,
    image: '/vineyard-training.jpg',
    facilities: ['Aquaculture Ponds', 'Vineyard Training Area', 'Nursery', 'Landscape Design Studio'],
    partners: ['Local Wine Estates', 'Agricultural Co-operatives'],
  },
  {
    id: 'aviation',
    slug: 'aviation-robotics-drones',
    icon: 'Plane',
    title: 'Aviation & Robotics (Drones)',
    shortTitle: 'Aviation & Drones',
    description: 'Intelligent aerial systems for agriculture, security, and mapping. Become a certified drone pilot or technician in this rapidly growing field.',
    color: '#03a9f4',
    courses: allCourses.aviation,
    image: '/drone-training.jpg',
    facilities: ['Drone Flight Simulator', 'RPAS Maintenance Lab', 'Outdoor Flight Area'],
    partners: ['Cape Winelands Airport', 'SACAA'],
  },
  {
    id: 'education',
    slug: 'education-training-development',
    icon: 'GraduationCap',
    title: 'Education, Training & Development',
    shortTitle: 'Education',
    description: 'Empowering the next generation of educators and trainers. Develop skills in workplace training, career guidance, and occupational education.',
    color: '#9c27b0',
    courses: allCourses.education,
    image: '/library.jpg',
    facilities: ['Training Simulation Rooms', 'Digital Learning Lab', 'Resource Centre'],
    partners: ['Department of Education', 'SETAs'],
  },
  {
    id: 'social',
    slug: 'social-community-development',
    icon: 'Users',
    title: 'Social & Community Development',
    shortTitle: 'Social Development',
    description: 'Building capable professionals for community upliftment. Learn to design and implement development projects that make a real difference.',
    color: '#ff5722',
    courses: allCourses.social,
    image: '/students-diverse.jpg',
    facilities: ['Community Project Hub', 'Research Centre'],
    partners: ['NGOs', 'Government Departments'],
  },
  {
    id: 'lifestyle',
    slug: 'lifestyle-services',
    icon: 'Sparkles',
    title: 'Lifestyle & Services',
    shortTitle: 'Lifestyle',
    description: 'Personal service professionals with practical, high-demand career paths in hairdressing and advertising.',
    color: '#e91e63',
    courses: allCourses.lifestyle,
    image: '/hero-campus.jpg',
    facilities: ['Hairdressing Salon', 'Media Production Studio'],
    partners: ['Salon Chains', 'Advertising Agencies'],
  },
];

export function getCourseByCode(code: string): Course | undefined {
  for (const facultyCourses of Object.values(allCourses)) {
    const course = facultyCourses.find(c => c.code === code);
    if (course) return course;
  }
  return undefined;
}
