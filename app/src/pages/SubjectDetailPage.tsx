import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  Award,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  GraduationCap,
  Hammer,
  MapPin,
  ShieldCheck,
  Sparkles,
  Wallet,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useState } from 'react';

// const subject = {
//   Id: '4591973000000363038',
//   Code: '91782',
//   Title: 'Plumber',
//   Career: 'Licensed plumbing technician',
//   Description: 'Installs and repairs piping systems.',
//   Duration: '1 Year',
//   Level: 'NQF Level 4',
//   Overview: `This occupational qualification prepares learners for a career in the plumbing industry.

// Students gain practical and theoretical knowledge in domestic, commercial, and industrial plumbing systems.

// Training includes installation, maintenance, fault finding, and compliance with South African regulations.`,
//   EntryRequirements: `Grade 10 or equivalent.

// Basic Mathematics and English literacy recommended.`,
//   CareerOutcomes: `Licensed Plumber
// Maintenance Technician
// Construction Plumber
// Facilities Maintenance Officer
// Self-Employed Contractor`,
//   SkillsCovered: `Pipe Installation
// Leak Detection
// Water Reticulation
// Drainage Systems
// Reading Technical Drawings
// Health and Safety Compliance`,
//   Assessment: `Practical workshops
// Theory assessments
// Portfolio of evidence
// Final trade preparation assessment`,
//   EmploymentOpportunities: `Construction Companies
// Municipal Infrastructure Projects
// Property Maintenance Companies
// Industrial Facilities
// Private Contracting Businesses`,
//   Cost: 'R24,500',
//   StudyMode: 'Full Time',
//   Campus: 'Cape Winelands Campus',
//   Certification: 'National Occupational Certificate',
// };

export function SubjectDetailPage() {

    const { subjectId } = useParams();

const [subject, setSubject] = useState<any>(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);

useEffect(() => {
  console.log('subjectId from URL:', subjectId);

  if (!subjectId) {
    setError('No subject id found in URL');
    setLoading(false);
    return;
  }

  setLoading(true);
  setError(null);

  fetch(`https://studentportaltest-a9afaje8c3hjctap.southafricanorth-01.azurewebsites.net/api/subjects/${subjectId}/notes`)
    .then((res) => {
      console.log('response status:', res.status);

      if (!res.ok) {
        throw new Error('Failed to load qualification details');
      }

      return res.json();
    })
    .then((data) => {
      console.log('subject data:', data);
      setSubject(data);
    })
    .catch((err) => {
      console.error(err);
      setError(err.message);
    })
    .finally(() => setLoading(false));
}, [subjectId]);

if (loading) {
  return (
    <div className="py-20 text-center">
      Loading qualification...
    </div>
  );
}

if (error) {
  return (
    <div className="py-20 text-center text-red-600">
      {error}
    </div>
  );
}

if (!subject) {
  return (
    <div className="py-20 text-center">
      Qualification not found
    </div>
  );
}

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f4fbf6] via-white to-[#f8faf6]">
      <section className="relative overflow-hidden bg-[#123c2c] text-white">
        <div className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-[#facc15]/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#2d8a5e]/30 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 py-10 md:py-16">
          <Link
            to="/programmes"
            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white mb-8"
          >
            <ArrowLeft size={16} />
            Back to Programmes
          </Link>

          <div className="grid lg:grid-cols-[1.4fr_0.8fr] gap-8 items-center">
            <div>
              <div className="flex flex-wrap gap-3 mb-5">
                <Badge className="bg-[#facc15] text-[#123c2c] hover:bg-[#facc15]">
                  Course Code: {subject.Code}
                </Badge>
                <Badge className="bg-white/15 text-white border border-white/20 hover:bg-white/20">
                  {subject.Level}
                </Badge>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-5">
                {subject.Title}
              </h1>

              <p className="text-lg md:text-xl text-white/85 max-w-3xl leading-relaxed">
                {subject.Description}
              </p>

              <div className="grid sm:grid-cols-3 gap-3 mt-8">
                <HeroStat icon={<Clock size={20} />} label="Duration" value={subject.Duration} />
                <HeroStat icon={<Award size={20} />} label="Level" value={subject.Level} />
                <HeroStat icon={<BriefcaseBusiness size={20} />} label="Career" value={subject.Career} />
              </div>
            </div>

            <Card className="bg-white/95 backdrop-blur border-0 shadow-2xl">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-2xl bg-[#2d8a5e]/10 flex items-center justify-center">
                    <Sparkles className="text-[#2d8a5e]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Start your trade career</p>
                    <h2 className="text-2xl font-bold text-[#123c2c]">Apply Today</h2>
                  </div>
                </div>

                <div className="space-y-4">
                  <SummaryRow icon={<Wallet size={18} />} label="Cost" value={subject.Cost} />
                  <SummaryRow icon={<GraduationCap size={18} />} label="Study Mode" value={subject.StudyMode} />
                  <SummaryRow icon={<MapPin size={18} />} label="Campus" value={subject.Campus} />
                  <SummaryRow icon={<ShieldCheck size={18} />} label="Certification" value={subject.Certification} />
                </div>

                <Link
                  to={`/apply?subjectId=${subject.Id}`}
                  className="mt-7 block w-full rounded-xl bg-[#2d8a5e] px-5 py-4 text-center font-bold text-white shadow-lg hover:bg-[#236d4b] transition"
                >
                  Apply for this Qualification
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-10 md:py-14">
        <div className="grid lg:grid-cols-[1fr_360px] gap-8">
          <main className="space-y-6">
            <ContentPanel
              icon={<Hammer />}
              title="Programme Overview"
              content={subject.Overview}
              featured
            />

            <div className="grid md:grid-cols-2 gap-6">
              <ContentPanel
                icon={<GraduationCap />}
                title="Entry Requirements"
                content={subject.EntryRequirements}
              />
              <ContentPanel
                icon={<ClipboardCheck />}
                title="Assessment"
                content={subject.Assessment}
              />
            </div>

            <ContentPanel
              icon={<BriefcaseBusiness />}
              title="Employment Opportunities"
              content={subject.EmploymentOpportunities}
            />
          </main>

          <aside className="space-y-6 lg:sticky lg:top-6 self-start">
            <ListPanel
              icon={<CheckCircle2 />}
              title="Skills Covered"
              items={toLines(subject.SkillsCovered)}
              accent="green"
            />

            <ListPanel
              icon={<Award />}
              title="Career Outcomes"
              items={toLines(subject.CareerOutcomes)}
              accent="yellow"
            />

            <Card className="overflow-hidden border-0 shadow-xl bg-[#123c2c] text-white">
              <CardContent className="p-6">
                <Building2 className="mb-4 text-[#facc15]" size={34} />
                <h3 className="text-xl font-bold mb-2">Why this qualification?</h3>
                <p className="text-white/80 leading-relaxed">
                  Practical trade training, clear career outcomes, and a qualification pathway designed for real workplace demand.
                </p>
              </CardContent>
            </Card>
          </aside>
        </div>
      </section>
    </div>
  );
}

function HeroStat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white/10 border border-white/15 p-4 backdrop-blur">
      <div className="flex items-center gap-2 text-[#facc15] mb-1">{icon}</div>
      <p className="text-xs uppercase tracking-wide text-white/60">{label}</p>
      <p className="font-bold text-white">{value}</p>
    </div>
  );
}

function SummaryRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 rounded-xl bg-[#f4fbf6] p-4">
      <div className="mt-0.5 text-[#2d8a5e]">{icon}</div>
      <div>
        <p className="text-xs uppercase tracking-wide text-gray-500">{label}</p>
        <p className="font-bold text-[#123c2c]">{value}</p>
      </div>
    </div>
  );
}

function ContentPanel({
  icon,
  title,
  content,
  featured = false,
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
  featured?: boolean;
}) {
  return (
    <Card className={`border-0 shadow-lg ${featured ? 'bg-white ring-1 ring-[#2d8a5e]/20' : 'bg-white'}`}>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-[#123c2c]">
          <span className="h-11 w-11 rounded-2xl bg-[#2d8a5e]/10 text-[#2d8a5e] flex items-center justify-center">
            {icon}
          </span>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-4 text-gray-700 leading-relaxed">
          {toParagraphs(content).map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function ListPanel({
  icon,
  title,
  items,
  accent,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
  accent: 'green' | 'yellow';
}) {
  const iconClass = accent === 'green' ? 'bg-[#2d8a5e]/10 text-[#2d8a5e]' : 'bg-[#facc15]/20 text-[#a16207]';

  return (
    <Card className="border-0 shadow-lg bg-white">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-[#123c2c]">
          <span className={`h-11 w-11 rounded-2xl flex items-center justify-center ${iconClass}`}>
            {icon}
          </span>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-3">
          {items.map((item, index) => (
            <div key={index} className="flex items-start gap-3 rounded-xl bg-gray-50 p-3">
              <CheckCircle2 className="text-[#2d8a5e] mt-0.5 shrink-0" size={18} />
              <span className="text-gray-700 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function toParagraphs(value: string) {
  return value
    .split(/\n\s*\n/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function toLines(value: string) {
  return value
    .split('\n')
    .map((item) => item.trim())
    .filter(Boolean);
}
