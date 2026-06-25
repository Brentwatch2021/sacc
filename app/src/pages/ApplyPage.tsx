import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, FileText, Upload, User, GraduationCap, AlertCircle, BookOpen, Clock, Award, Info } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { allCourses, getCourseByCode, type Course } from '@/data/courses';
import { CourseDetailModal } from '@/components/CourseDetailModal';

const faculties = [
  { id: 'renewable', name: 'Renewable Energy & Electrical Engineering', slug: 'renewable-energy-electrical-engineering' },
  { id: 'engineering', name: 'Engineering & Technical Trades', slug: 'engineering-technical-trades' },
  { id: 'agriculture', name: 'Agriculture, Environment & Natural Resources', slug: 'agriculture-environment-natural-resources' },
  { id: 'aviation', name: 'Aviation & Robotics (Drones)', slug: 'aviation-robotics-drones' },
  { id: 'education', name: 'Education, Training & Development', slug: 'education-training-development' },
  { id: 'social', name: 'Social & Community Development', slug: 'social-community-development' },
  { id: 'lifestyle', name: 'Lifestyle & Services', slug: 'lifestyle-services' },
];

const qualifications = [
  { value: 'nsc', label: 'National Senior Certificate (NSC)' },
  { value: 'ncv', label: 'NCV Level 4' },
  { value: 'nated', label: 'NATED N6' },
  { value: 'other', label: 'Other NQF Level 4' },
];

export function ApplyPage() {
  const [step, setStep] = useState(1);
  const [selectedFaculty, setSelectedFaculty] = useState('');
  const [leadSource, setLeadSource] = useState("");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedCourseCode, setSelectedCourseCode] = useState('');
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [detailCourse, setDetailCourse] = useState<Course | null>(null);
  const [dateValue, setDateValue] = useState("");
  const [highestQualification, setHighestQualification] = useState("");
  const [yearCompleted, setYearCompleted] = useState("");
  const [fileNames, setFileNames] = useState({
  cv: "",
  id: "",
  academic: "",
  photo: "",
});
const submitted =
  new URLSearchParams(window.location.search).get("submitted") === "true";

  const getCoursesForFaculty = (facultyId: string) => {
    return allCourses[facultyId as keyof typeof allCourses] || [];
  };

  const handleCourseSelect = (courseCode: string) => {
    const course = getCourseByCode(courseCode);
    if (course) {
      setSelectedCourse(course);
      setSelectedCourseCode(courseCode);
    }
  };

  const handleViewDetails = (course: Course) => {
    setDetailCourse(course);
    setDetailModalOpen(true);
  };

  const handleApplyFromModal = (courseCode: string) => {
    setDetailModalOpen(false);
    const course = getCourseByCode(courseCode);
    if (course) {
      setSelectedCourse(course);
      setSelectedCourseCode(courseCode);
      // Scroll to course selection area
      document.getElementById('course-selection')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const formatZohoDate = (value: string) => {
  if (!value) return "";

  const [year, month, day] = value.split("-");
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  return `${day}-${months[Number(month) - 1]}-${year}`;
};

  if (submitted) {
    return (
      <div className="bg-white min-h-screen">
        <section className="py-20">
          <div className="max-w-2xl mx-auto px-4">
            <Card className="text-center">
              <CardContent className="p-12">
                <div className="w-20 h-20 rounded-full bg-[#2d8a5e] text-white flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h1 className="text-3xl font-bold text-[#1e3a5f] mb-4">Application Submitted!</h1>
                <p className="text-gray-600 mb-6">
                  Thank you for applying to SSACT. We have received your application and will review it shortly.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-500">Your Reference Number</p>
                  <p className="text-2xl font-bold text-[#2d8a5e]">SSACT-2026-{Math.floor(Math.random() * 100000).toString().padStart(5, '0')}</p>
                </div>
                <p className="text-gray-600 mb-8">
                  We will contact you within 5 working days with the outcome of your application. 
                  Please save your reference number for future correspondence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/" className="btn-primary">Return to Home</Link>
                  <Link to="/programmes" className="btn-secondary">Explore Programmes</Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative h-[300px] flex items-center justify-center bg-gradient-to-r from-[#1e3a5f] to-[#2d8a5e]">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <Badge className="bg-[#c9a227] mb-4">2026 Admissions</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Apply to SSACT</h1>
          <p className="text-lg opacity-90">Take the first step towards your future career</p>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-[#1e3a5f]">Step {step} of 3</span>
              <span className="text-sm text-gray-500">Application Progress</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div 
                className="h-2 bg-[#2d8a5e] rounded-full transition-all"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>


<form
  action="https://forms.zohopublic.com/ssactportal1/form/Enroll/formperma/mKlD0JfamjLrRDvMr475Xm2nwruWyw6O8HjKWx9_LXw/htmlRecords/submit"
  method="POST"
  encType="multipart/form-data"
  acceptCharset="UTF-8"
>


   <input type="hidden" name="zf_referrer_name" value="" />
   <input type="hidden" name="zf_redirect_url" value="https://ssac.tech/" />
   <input type="hidden" name="zc_gad" value="" />
          {/* <form onSubmit={handleSubmit}> */}
<div className={step === 1 ? "block" : "hidden"}>
  <Card>
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <User className="w-5 h-5 text-[#2d8a5e]" />
        Personal Information
      </CardTitle>
    </CardHeader>

    <CardContent className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label>First Name *</Label>
          <Input name="Name_First" required placeholder="Enter your first name" />
        </div>
        <div>
          <Label>Last Name *</Label>
          <Input name="Name_Last" required placeholder="Enter your last name" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label>ID Number / Passport *</Label>
          <Input name="SingleLine" required placeholder="South African ID or Passport number" />
        </div>
        <div>
          <Label>Date of Birth *</Label>
          <Input
            type="date"
              value={dateValue}
          onChange={(e) => setDateValue(e.target.value)}
          />

<input
  type="hidden"
  name="Date"
  value={formatZohoDate(dateValue)}
/>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label>Email Address *</Label>
          <Input name="Email" type="email" required placeholder="your@email.com" />
        </div>
        <div>
          <Label>Cell Phone Number *</Label>
          <Input name="PhoneNumber_countrycode" required placeholder="+27 XX XXX XXXX" />
        </div>
      </div>

      <div>
        <Label>Physical Address *</Label>
        <Textarea
          name="MultiLine"
          required
          placeholder="Enter your full residential address"
          rows={3}
        />
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => setStep(2)}
          className="btn-primary"
        >
          Next: Programme Selection
        </button>
      </div>
    </CardContent>
  </Card>
</div>

            <div className={step === 2 ? "block" : "hidden"}>
              <Card id="course-selection">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-[#2d8a5e]" />
                    Programme Selection
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Selected Course Display */}
                  {selectedCourse && (
                    <div className="bg-[#2d8a5e]/10 border border-[#2d8a5e]/30 rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <Badge className="bg-[#2d8a5e] mb-2">Selected Programme</Badge>
                          <h4 className="font-bold text-[#1e3a5f]">{selectedCourse.title}</h4>
                          <p className="text-sm text-gray-600 mt-1">{selectedCourse.desc}</p>
                          <div className="flex gap-4 mt-2 text-sm">
                            <span className="flex items-center gap-1 text-gray-600">
                              <Clock className="w-4 h-4" /> {selectedCourse.duration}
                            </span>
                            <span className="flex items-center gap-1 text-gray-600">
                              <Award className="w-4 h-4" /> {selectedCourse.level}
                            </span>
                            <span className="flex items-center gap-1 text-gray-600">
                              <BookOpen className="w-4 h-4" /> SAQA ID: {selectedCourse.code}
                            </span>
                          </div>
                        </div>
                        <button 
                          type="button"
                          onClick={() => handleViewDetails(selectedCourse)}
                          className="text-[#2d8a5e] hover:underline text-sm flex items-center gap-1"
                        >
                          <Info className="w-4 h-4" /> View Details
                        </button>
                      </div>
                    </div>
                  )}

                  <div>
                    <Label>Select Faculty *</Label>
                    <Select required onValueChange={(value) => {
                      setSelectedFaculty(value);
                      setSelectedCourse(null);
                      setSelectedCourseCode('');
                    }}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a faculty" />
                      </SelectTrigger>
                      <SelectContent>
                        {faculties.map((f) => (
                          <SelectItem key={f.id} value={f.id}>{f.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {selectedFaculty && (
                    
                    <div>
                      <input type="hidden" name="SingleLine1" value={selectedFaculty}/>
                      <Label>Available Qualifications *</Label>
                      <p className="text-sm text-gray-500 mb-3">
                        Click "View Details" to see full qualification information, or select a programme to apply.
                      </p>
                      <div className="grid gap-3">
                        {getCoursesForFaculty(selectedFaculty).map((course, i) => (
                          <div 
                            key={i} 
                            className={`border rounded-lg p-4 transition-all ${
                              selectedCourseCode === course.code 
                                ? 'border-[#2d8a5e] bg-[#2d8a5e]/5' 
                                : 'border-gray-200 hover:border-[#2d8a5e]/50'
                            }`}
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <h4 className="font-semibold text-[#1e3a5f]">{course.title}</h4>
                                  <Badge variant="outline" className="text-xs">SAQA {course.code}</Badge>
                                </div>
                                <p className="text-sm text-gray-600 mb-2">{course.desc}</p>
                                <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                                  <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" /> {course.duration}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Award className="w-4 h-4" /> {course.level}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <BookOpen className="w-4 h-4" /> {course.credits || 'TBA'} credits
                                  </span>
                                </div>
                              </div>
                              <div className="flex flex-col gap-2 ml-4">
                                <button
                                  type="button"
                                  onClick={() => handleViewDetails(course)}
                                  className="text-sm text-[#2d8a5e] hover:underline flex items-center gap-1"
                                >
                                  <Info className="w-4 h-4" /> Details
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleCourseSelect(course.code)}
                                  className={`text-sm px-3 py-1.5 rounded-lg transition-colors ${
                                    selectedCourseCode === course.code
                                      ? 'bg-[#2d8a5e] text-white'
                                      : 'bg-gray-100 text-gray-700 hover:bg-[#2d8a5e]/10'
                                  }`}
                                >
                                  {selectedCourseCode === course.code ? 'Selected' : 'Select'}
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                    </div>
                    
                  )}
                  <input type="hidden" name="SingleLine2" value={selectedCourse?.title}/>
                  <div>
  <Label>Highest Qualification *</Label>

  <Select
    required
    onValueChange={(value) => {
      setHighestQualification(value);
    }}
  >
    <SelectTrigger>
      <SelectValue placeholder="Select your highest qualification" />
    </SelectTrigger>

    <SelectContent>
      {qualifications.map((q) => (
        <SelectItem
          key={q.value}
          value={q.label}
        >
          {q.label}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>

  <input
    type="hidden"
    name="SingleLine3"
    value={highestQualification}
  />
</div>
                  
                  <div>
                    <Label>Year Completed *</Label>
                    <Input type="number" min="1990" max={new Date().getFullYear()} value={yearCompleted} onChange={(e) => setYearCompleted(e.target.value)}
/>

<input
  type="hidden"
  name="SingleLine4"
  value={yearCompleted}
/>
                  </div>
                  
                  <div className="flex justify-between">
                    <button type="button" onClick={() => setStep(1)} className="btn-secondary">
                      Back
                    </button>
                    <button 
                      type="button" 
                      onClick={() => setStep(3)} 
                      className="btn-primary"
                      disabled={!selectedCourse}
                    >
                      Next: Documents
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className={step === 3 ? "block" : "hidden"}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#2d8a5e]" />
                    Documents & Declaration
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Selected Course Summary */}
                  {selectedCourse && (
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-500 mb-1">Applying for:</p>
                      <h4 className="font-bold text-[#1e3a5f]">{selectedCourse.title}</h4>
                      <p className="text-sm text-gray-600">SAQA ID: {selectedCourse.code} | {selectedCourse.duration} | {selectedCourse.level}</p>
                    </div>
                  )}

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="font-medium text-[#1e3a5f] mb-2">Required Documents</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <Upload className="w-4 h-4 text-[#2d8a5e]" />
                        Certified copy of ID/Passport
                      </li>
                      <li className="flex items-center gap-2">
                        <Upload className="w-4 h-4 text-[#2d8a5e]" />
                        Certified academic results
                      </li>
                      <li className="flex items-center gap-2">
                        <Upload className="w-4 h-4 text-[#2d8a5e]" />
                        Proof of residence
                      </li>
                      <li className="flex items-center gap-2">
                        <Upload className="w-4 h-4 text-[#2d8a5e]" />
                        Recent passport-sized photo
                      </li>
                    </ul>
                  </div>
                  
                  <input
  id="cv-upload"
  type="file"
  name="FileUpload"
  accept=".pdf,.jpg,.jpeg,.png"
  className="hidden"
  onChange={(e) =>
    setFileNames((prev) => ({
      ...prev,
      cv: e.target.files?.[0]?.name || "",
    }))
  }
/>

<label
  htmlFor="cv-upload"
  className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#2d8a5e] transition-colors cursor-pointer block"
>
  <Upload className="w-10 h-10 text-gray-400 mx-auto mb-2" />
  <p className="text-gray-600">
    {fileNames.cv || "Click to upload CV"}
  </p>
  <p className="text-sm text-gray-400">PDF, JPG, or PNG max 5MB</p>
</label>

                  <div>
  <Label htmlFor="id-upload">Upload ID/Passport</Label>

  <input
    id="id-upload"
    type="file"
    name="FileUpload1"
    accept=".pdf,.jpg,.jpeg,.png"
    className="hidden"
    onChange={(e) =>
      setFileNames((prev) => ({
        ...prev,
        id: e.target.files?.[0]?.name || "",
      }))
    }
  />

  <label
    htmlFor="id-upload"
    className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#2d8a5e] transition-colors cursor-pointer block"
  >
    <Upload className="w-10 h-10 text-gray-400 mx-auto mb-2" />
    <p className="text-gray-600">
      {fileNames.id || "Click to upload ID/Passport"}
    </p>
    <p className="text-sm text-gray-400">
      PDF, JPG, or PNG (max 5MB)
    </p>
  </label>
</div>

                  <div>
  <Label htmlFor="academic-upload">Upload Academic Results</Label>

  <input
    id="academic-upload"
    type="file"
    name="FileUpload2"
    accept=".pdf,.jpg,.jpeg,.png"
    className="hidden"
    onChange={(e) =>
      setFileNames((prev) => ({
        ...prev,
        academic: e.target.files?.[0]?.name || "",
      }))
    }
  />

  <label
    htmlFor="academic-upload"
    className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#2d8a5e] transition-colors cursor-pointer block"
  >
    <Upload className="w-10 h-10 text-gray-400 mx-auto mb-2" />
    <p className="text-gray-600">
      {fileNames.academic || "Click to upload Academic Results"}
    </p>
    <p className="text-sm text-gray-400">
      PDF, JPG, or PNG (max 5MB)
    </p>
  </label>
</div>

                  <div>
  <Label htmlFor="photo-upload">Upload ID Photo</Label>

  <input
    id="photo-upload"
    type="file"
    name="FileUpload3"
    accept=".pdf,.jpg,.jpeg,.png"
    className="hidden"
    onChange={(e) =>
      setFileNames((prev) => ({
        ...prev,
        photo: e.target.files?.[0]?.name || "",
      }))
    }
  />

  <label
    htmlFor="photo-upload"
    className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#2d8a5e] transition-colors cursor-pointer block"
  >
    <Upload className="w-10 h-10 text-gray-400 mx-auto mb-2" />
    <p className="text-gray-600">
      {fileNames.photo || "Click to upload ID Photo"}
    </p>
    <p className="text-sm text-gray-400">
      PDF, JPG, or PNG (max 5MB)
    </p>
  </label>
</div>
                  
                  <div>
  <Label>How did you hear about us?</Label>

  <Select onValueChange={(value) => setLeadSource(value)}>
    <SelectTrigger>
      <SelectValue placeholder="Select an option" />
    </SelectTrigger>

    <SelectContent>
      <SelectItem value="Social Media">Social Media</SelectItem>
      <SelectItem value="Friend/Family">Friend/Family</SelectItem>
      <SelectItem value="School/Career Counsellor">
        School/Career Counsellor
      </SelectItem>
      <SelectItem value="Online Search">Online Search</SelectItem>
      <SelectItem value="Open Day/Event">Open Day/Event</SelectItem>
      <SelectItem value="Other">Other</SelectItem>
    </SelectContent>
  </Select>

  <input
    type="hidden"
    name="SingleLine5"
    value={leadSource}
  />
</div>


                  <div className="flex items-start gap-2 p-4 bg-[#c9a227]/10 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-[#c9a227] flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-gray-700">
                      <p className="font-medium">Application Fee</p>
                      <p>A non-refundable application fee of R200 is required. Payment details will be sent via email after submission.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Checkbox id="terms" required />
                    <Label htmlFor="terms" className="text-sm">
                      I confirm that all information provided is accurate and complete. I understand that providing false information may result in the rejection of my application or termination of my studies. I agree to SSACT's terms and conditions and privacy policy.
                    </Label>
                  </div>
                  
                  <div className="flex justify-between">
                    <button type="button" onClick={() => setStep(2)} className="btn-secondary">
                      Back
                    </button>
                    <button type="submit" className="btn-primary">
                      Submit Application
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </form>

          {/* Help */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Need help with your application?{' '}
              <Link to="/contact" className="text-[#2d8a5e] hover:underline">Contact our admissions team</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Course Detail Modal */}
      <CourseDetailModal 
        course={detailCourse}
        isOpen={detailModalOpen}
        onClose={() => setDetailModalOpen(false)}
        onApply={handleApplyFromModal}
      />
    </div>
  );
}
