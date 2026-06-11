import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Lock, LogOut, FileText, CalendarDays, Wallet, BookMarked, ClipboardList, MessageCircle, HelpCircle, Settings, CheckCircle, Briefcase, Users, Bell, GraduationCap, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const studentQuickLinks = [
  { icon: FileText, label: 'Results', color: 'bg-blue-100 text-blue-600', href: '#' },
  { icon: CalendarDays, label: 'Timetable', color: 'bg-green-100 text-green-600', href: '#' },
  { icon: Wallet, label: 'Fees', color: 'bg-yellow-100 text-yellow-600', href: '#' },
  { icon: BookMarked, label: 'Library', color: 'bg-purple-100 text-purple-600', href: '#' },
  { icon: ClipboardList, label: 'Assignments', color: 'bg-orange-100 text-orange-600', href: '#' },
  { icon: MessageCircle, label: 'Messages', color: 'bg-pink-100 text-pink-600', href: '#' },
  { icon: HelpCircle, label: 'Support', color: 'bg-cyan-100 text-cyan-600', href: '#' },
  { icon: Settings, label: 'Settings', color: 'bg-gray-100 text-gray-600', href: '#' },
];

const recentActivities = [
  { action: 'Assignment submitted', course: 'Solar PV Systems', date: '2 hours ago', icon: CheckCircle },
  { action: 'Fee payment received', course: 'R 15,000.00', date: '3 days ago', icon: Wallet },
  { action: 'New course material', course: 'Electrical Safety', date: '1 week ago', icon: BookMarked },
];

const upcomingEvents = [
  { title: 'Solar PV Practical Exam', date: '15 April 2026', type: 'Exam' },
  { title: 'Industry Visit - GC Solar', date: '22 April 2026', type: 'Event' },
  { title: 'Assignment Due: Energy Audit', date: '28 April 2026', type: 'Deadline' },
];

const recentApplications = [
  { name: 'Sipho Nkosi', programme: 'Solar PV Installer', status: 'Pending', date: '2 hours ago' },
  { name: 'Maria Peters', programme: 'Aquaculture', status: 'Approved', date: '1 day ago' },
  { name: 'James Brown', programme: 'RPAS Pilot', status: 'Review', date: '2 days ago' },
  { name: 'Linda Molefe', programme: 'Plumber', status: 'Pending', date: '3 days ago' },
];

export function PortalPage() {
  const { type } = useParams<{ type: string }>();
  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (userId && password) {
      setLoggedIn(true);
    }
  };

  const isStudent = type === 'student';
  const portalTitle = isStudent ? 'Student Portal' : 'Staff Portal';
  const portalDescription = isStudent 
    ? 'Access your academic information, results, and more' 
    : 'Administrative access for SSACT staff members';

  if (!loggedIn) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center py-16">
        <div className="max-w-md w-full mx-4">
          <Card>
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-full bg-[#2d8a5e]/10 flex items-center justify-center mx-auto mb-4">
                  {isStudent ? <GraduationCap className="w-8 h-8 text-[#2d8a5e]" /> : <Lock className="w-8 h-8 text-[#1e3a5f]" />}
                </div>
                <h1 className="text-2xl font-bold text-[#1e3a5f]">{portalTitle}</h1>
                <p className="text-gray-600">{portalDescription}</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <Label>{isStudent ? 'Student Number' : 'Staff Number'}</Label>
                  <Input 
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    placeholder={isStudent ? 'e.g., SSACT2026001' : 'e.g., STF001'}
                    required
                  />
                </div>
                <div>
                  <Label>Password</Label>
                  <Input 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <button type="submit" className={`btn-primary w-full ${!isStudent && 'bg-[#1e3a5f]'}`}>
                  Login
                </button>
              </form>

              <div className="mt-6 text-center text-sm">
                <a href="#" className="text-[#2d8a5e] hover:underline">Forgot password?</a>
                {isStudent && (
                  <>
                    <span className="mx-2">|</span>
                    <a href="#" className="text-[#2d8a5e] hover:underline">First time login</a>
                  </>
                )}
              </div>

              <div className="mt-6 pt-6 border-t text-center">
                <Link to="/" className="text-gray-500 hover:text-[#2d8a5e] text-sm">
                  ← Back to Website
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Student Dashboard
  if (isStudent) {
    return (
      <div className="bg-gray-50 min-h-screen">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src="/students-diverse.jpg" />
                  <AvatarFallback>TM</AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="font-bold text-[#1e3a5f]">Welcome, Thabo M.</h1>
                  <p className="text-sm text-gray-500">Student No: SSACT2026001</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button className="relative p-2 hover:bg-gray-100 rounded-lg">
                  <Bell className="w-5 h-5 text-gray-600" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
                </button>
                <button onClick={() => setLoggedIn(false)} className="flex items-center gap-2 text-gray-600 hover:text-[#2d8a5e]">
                  <LogOut className="w-4 h-4" /> Logout
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard */}
        <main className="max-w-7xl mx-auto px-4 py-8">
          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <Card>
              <CardContent className="p-4">
                <p className="text-sm text-gray-500">Current Programme</p>
                <p className="font-bold text-[#1e3a5f]">Solar PV Installer</p>
                <p className="text-sm text-gray-500">Faculty: Renewable Energy</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <p className="text-sm text-gray-500">Academic Progress</p>
                <p className="font-bold text-[#2d8a5e]">75% Complete</p>
                <Progress value={75} className="mt-2" />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <p className="text-sm text-gray-500">Fee Status</p>
                <p className="font-bold text-[#2d8a5e]">Paid in Full</p>
                <p className="text-sm text-gray-500">Next due: N/A</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Quick Links */}
            <div className="lg:col-span-2">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Quick Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-4 gap-3">
                    {studentQuickLinks.map((item, i) => (
                      <a key={i} href={item.href} className={`p-4 rounded-xl ${item.color} hover:opacity-80 transition-opacity text-center`}>
                        <item.icon className="w-6 h-6 mx-auto mb-2" />
                        <span className="text-sm font-medium">{item.label}</span>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentActivities.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <item.icon className="w-5 h-5 text-[#2d8a5e]" />
                        <div className="flex-1">
                          <p className="font-medium text-sm">{item.action}</p>
                          <p className="text-xs text-gray-500">{item.course}</p>
                        </div>
                        <span className="text-xs text-gray-400">{item.date}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div>
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Upcoming Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {upcomingEvents.map((event, i) => (
                      <div key={i} className="p-3 border rounded-lg">
                        <div className="flex items-center justify-between mb-1">
                          <Badge className={
                            event.type === 'Exam' ? 'bg-red-500' : 
                            event.type === 'Deadline' ? 'bg-orange-500' : 'bg-blue-500'
                          }>{event.type}</Badge>
                          <span className="text-xs text-gray-500">{event.date}</span>
                        </div>
                        <p className="font-medium text-sm">{event.title}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Announcements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-[#2d8a5e]/10 rounded-lg">
                      <p className="font-medium text-sm text-[#1e3a5f]">New Course Material Available</p>
                      <p className="text-xs text-gray-600">Solar PV Systems - Module 3 now available</p>
                    </div>
                    <div className="p-3 bg-[#c9a227]/10 rounded-lg">
                      <p className="font-medium text-sm text-[#1e3a5f]">Industry Visit</p>
                      <p className="text-xs text-gray-600">Visit to GC Solar on 22 April 2026</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Staff Dashboard
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-[#1e3a5f] text-white">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="w-12 h-12">
                <AvatarImage src="/principal.jpg" />
                <AvatarFallback>PM</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="font-bold">Welcome, Prof. Mokoena</h1>
                <p className="text-sm opacity-80">Principal & CEO</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-white/10 rounded-lg">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </button>
              <button onClick={() => setLoggedIn(false)} className="flex items-center gap-2 hover:text-gray-300">
                <LogOut className="w-4 h-4" /> Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Students', value: '2,847', icon: Users, color: 'bg-blue-500' },
            { label: 'New Applications', value: '456', icon: FileText, color: 'bg-green-500' },
            { label: 'Pending Fees', value: 'R 1.2M', icon: Wallet, color: 'bg-yellow-500' },
            { label: 'Staff Members', value: '156', icon: Briefcase, color: 'bg-purple-500' },
          ].map((stat, i) => (
            <Card key={i}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <div className={`${stat.color} text-white p-3 rounded-lg`}>
                    <stat.icon className="w-5 h-5" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {['Manage Students', 'Process Applications', 'View Reports', 'Update Timetables', 'Send Announcements', 'Manage Staff'].map((action, i) => (
                  <button key={i} className="w-full text-left p-3 rounded-lg hover:bg-gray-100 flex items-center justify-between group">
                    <span>{action}</span>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#2d8a5e]" />
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Applications */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentApplications.map((app, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-sm">{app.name}</p>
                      <p className="text-xs text-gray-500">{app.programme}</p>
                    </div>
                    <div className="text-right">
                      <Badge className={
                        app.status === 'Approved' ? 'bg-green-500' : 
                        app.status === 'Pending' ? 'bg-yellow-500' : 'bg-blue-500'
                      }>
                        {app.status}
                      </Badge>
                      <p className="text-xs text-gray-400 mt-1">{app.date}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 text-center text-[#2d8a5e] text-sm hover:underline">
                View All Applications
              </button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
