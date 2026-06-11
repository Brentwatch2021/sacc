import { BookOpen, Clock, Award, GraduationCap, Briefcase, CheckCircle, ArrowRight, FileText, Users } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { Course } from '@/data/courses';

interface CourseDetailModalProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
  onApply: (courseCode: string) => void;
}

export function CourseDetailModal({ course, isOpen, onClose, onApply }: CourseDetailModalProps) {
  if (!course) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white">
        <DialogHeader className="border-b pb-4">
          <div className="flex items-start justify-between">
            <div>
              <Badge className="bg-[#2d8a5e] mb-2">SAQA ID: {course.code}</Badge>
              <DialogTitle className="text-2xl font-bold text-[#1e3a5f]">{course.title}</DialogTitle>
              <p className="text-gray-600 mt-2">{course.desc}</p>
            </div>
          </div>
        </DialogHeader>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
          <div className="bg-gray-50 rounded-lg p-3 text-center">
            <Clock className="w-6 h-6 text-[#2d8a5e] mx-auto mb-1" />
            <p className="text-xs text-gray-500">Duration</p>
            <p className="font-semibold text-[#1e3a5f]">{course.duration}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 text-center">
            <Award className="w-6 h-6 text-[#2d8a5e] mx-auto mb-1" />
            <p className="text-xs text-gray-500">NQF Level</p>
            <p className="font-semibold text-[#1e3a5f]">{course.level}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 text-center">
            <BookOpen className="w-6 h-6 text-[#2d8a5e] mx-auto mb-1" />
            <p className="text-xs text-gray-500">Credits</p>
            <p className="font-semibold text-[#1e3a5f]">{course.credits || 'TBA'}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 text-center">
            <Briefcase className="w-6 h-6 text-[#2d8a5e] mx-auto mb-1" />
            <p className="text-xs text-gray-500">Career</p>
            <p className="font-semibold text-[#1e3a5f] text-sm">{course.career}</p>
          </div>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="w-full grid grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="modules">Modules</TabsTrigger>
            <TabsTrigger value="careers">Careers</TabsTrigger>
            <TabsTrigger value="entry">Entry</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="bg-[#2d8a5e]/5 rounded-lg p-4">
              <h4 className="font-bold text-[#1e3a5f] mb-2 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#2d8a5e]" /> Purpose
              </h4>
              <p className="text-gray-700">{course.saqaInfo?.purpose || course.desc}</p>
            </div>

            {course.saqaInfo?.articulation && (
              <div>
                <h4 className="font-bold text-[#1e3a5f] mb-2 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-[#2d8a5e]" /> Further Study Options
                </h4>
                <ul className="space-y-2">
                  {course.saqaInfo.articulation.map((option, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <ArrowRight className="w-4 h-4 text-[#2d8a5e]" /> {option}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </TabsContent>

          <TabsContent value="modules" className="space-y-4">
            {course.saqaInfo?.modules ? (
              <>
                <div>
                  <h4 className="font-bold text-[#1e3a5f] mb-2 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-[#2d8a5e]" /> Knowledge Modules
                  </h4>
                  <ul className="space-y-1 bg-gray-50 rounded-lg p-3">
                    {course.saqaInfo.modules.knowledge.map((module, i) => (
                      <li key={i} className="text-sm text-gray-700 py-1 border-b last:border-0">{module}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-[#1e3a5f] mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#2d8a5e]" /> Practical Skill Modules
                  </h4>
                  <ul className="space-y-1 bg-gray-50 rounded-lg p-3">
                    {course.saqaInfo.modules.practical.map((module, i) => (
                      <li key={i} className="text-sm text-gray-700 py-1 border-b last:border-0">{module}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-[#1e3a5f] mb-2 flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#2d8a5e]" /> Work Experience Modules
                  </h4>
                  <ul className="space-y-1 bg-gray-50 rounded-lg p-3">
                    {course.saqaInfo.modules.workExperience.map((module, i) => (
                      <li key={i} className="text-sm text-gray-700 py-1 border-b last:border-0">{module}</li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <p className="text-gray-600 text-center py-8">Detailed module information coming soon. Contact us for more details.</p>
            )}
          </TabsContent>

          <TabsContent value="careers" className="space-y-4">
            {course.saqaInfo?.careerOpportunities ? (
              <>
                <div className="bg-[#2d8a5e]/5 rounded-lg p-4">
                  <h4 className="font-bold text-[#1e3a5f] mb-3 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-[#2d8a5e]" /> Career Opportunities
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {course.saqaInfo.careerOpportunities.map((career, i) => (
                      <div key={i} className="flex items-center gap-2 bg-white rounded-lg p-3 shadow-sm">
                        <CheckCircle className="w-5 h-5 text-[#2d8a5e]" />
                        <span className="text-gray-700">{career}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-[#1e3a5f] mb-2">Primary Career Path</h4>
                  <p className="text-gray-700">{course.career}</p>
                </div>
              </>
            ) : (
              <div className="bg-[#2d8a5e]/5 rounded-lg p-4">
                <h4 className="font-bold text-[#1e3a5f] mb-2">Career Path</h4>
                <p className="text-gray-700">{course.career}</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="entry" className="space-y-4">
            {course.saqaInfo?.entryRequirements ? (
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-bold text-[#1e3a5f] mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#2d8a5e]" /> Entry Requirements
                </h4>
                <ul className="space-y-2">
                  {course.saqaInfo.entryRequirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="text-[#2d8a5e] mt-1">•</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-bold text-[#1e3a5f] mb-2">Entry Requirements</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• NQF Level 3 qualification or equivalent</li>
                  <li>• Mathematics and English proficiency</li>
                  <li>• Valid South African ID or study permit</li>
                </ul>
              </div>
            )}

            <div className="bg-[#c9a227]/10 rounded-lg p-4">
              <h4 className="font-bold text-[#1e3a5f] mb-2">Recognition of Prior Learning (RPL)</h4>
              <p className="text-gray-700 text-sm">
                SSACT recognizes prior learning and experience. If you have relevant work experience 
                or informal training, you may be eligible for RPL assessment. Contact our admissions 
                office for more information.
              </p>
            </div>
          </TabsContent>
        </Tabs>

        {/* Apply Button */}
        <div className="border-t pt-4 flex flex-col sm:flex-row gap-3">
          <button 
            onClick={() => onApply(course.code)}
            className="btn-primary flex-1 flex items-center justify-center gap-2"
          >
            Apply for {course.title} <ArrowRight className="w-4 h-4" />
          </button>
          <button 
            onClick={onClose}
            className="btn-secondary"
          >
            Close
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
