import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageCircle, Clock, Send, Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const contactInfo = [
  { icon: MapPin, title: 'Address', content: 'SSACT Campus\nPaarl, Western Cape\nSouth Africa', color: 'text-[#2d8a5e]' },
  { icon: Phone, title: 'Phone/WhatsApp', content: '+27 77 601 2775', color: 'text-[#1e3a5f]' },
  { icon: Mail, title: 'Email', content: 'info@ssac.tech\nadmissions@ssac.tech', color: 'text-[#e67e22]' },
  { icon: Clock, title: 'Office Hours', content: 'Monday - Friday\n08:00 - 16:30', color: 'text-[#9c27b0]' },
];

const departments = [
  { name: 'General Enquiries', email: 'info@ssac.tech' },
  { name: 'Admissions', email: 'admissions@ssac.tech' },
  { name: 'Student Accounts', email: 'accounts@ssac.tech' },
  { name: 'Partnerships', email: 'partnerships@ssac.tech' },
  { name: 'Human Resources', email: 'hr@ssac.tech' },
];

export function ContactPage() {
const [submitted, setSubmitted] = useState(false);
const [department, setDepartment] = useState("");
const handleSubmit = () => {
  setTimeout(() => {
    setSubmitted(true);
  }, 800);
};

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-r from-[#1e3a5f] to-[#2d8a5e]">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <Badge className="bg-[#c9a227] mb-4">Get in Touch</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg opacity-90">We'd love to hear from you. Reach out for any enquiries.</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, i) => (
              <Card key={i} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <info.icon className={`w-10 h-10 mx-auto mb-4 ${info.color}`} />
                  <h3 className="font-bold text-[#1e3a5f] mb-2">{info.title}</h3>
                  <p className="text-gray-600 text-sm whitespace-pre-line">{info.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Departments */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">Send Us a Message</h2>
              
              {submitted ? (
  <Card className="bg-[#2d8a5e]/10 border-[#2d8a5e]">
    <CardContent className="p-8 text-center">
      <div className="w-16 h-16 rounded-full bg-[#2d8a5e] text-white flex items-center justify-center mx-auto mb-4">
        <Send className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">
        Message Sent!
      </h3>
      <p className="text-gray-600">
        Thank you for contacting us. We will respond within 24-48 hours.
      </p>
    </CardContent>
  </Card>
) : (
  <form
    action="https://forms.zohopublic.com/ssactportal1/form/SendusaMessage/formperma/kG8YX74RC-IG3lwD8Az6m1IZt5ojC5FrwnBki6qPoQ8/htmlRecords/submit"
    method="POST"
    target="zohoHiddenFrame"
    acceptCharset="UTF-8"
    encType="multipart/form-data"
    onSubmit={handleSubmit}
    className="space-y-4"
  >
    <iframe name="zohoHiddenFrame" className="hidden" />

    <input type="hidden" name="zf_referrer_name" value="" />
    <input type="hidden" name="zf_redirect_url" value="" />
    <input type="hidden" name="zc_gad" value="" />

    <Input name="Name_First" required placeholder="Your first name" />
    <Input name="Name_Last" required placeholder="Your last name" />
    <Input name="Email" type="email" required placeholder="your@email.com" />
    <Input name="PhoneNumber_countrycode" placeholder="+27 XX XXX XXXX" />

    <div>
  <Label>Department *</Label>

  <input
    type="hidden"
    name="Dropdown"
    value={department}
  />

  <Select
    required
    value={department}
    onValueChange={setDepartment}
  >
    <SelectTrigger>
      <SelectValue placeholder="Select department" />
    </SelectTrigger>

    <SelectContent>
      {departments.map((dept, i) => (
        <SelectItem
          key={i}
          value={dept.name}
        >
          {dept.name}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
</div>

    <Textarea
      name="MultiLine"
      required
      placeholder="How can we help you?"
      rows={5}
    />

    <button type="submit" className="btn-primary w-full">
      <Send className="w-4 h-4 inline mr-2" /> Send Message
    </button>
  </form>
)}
            </div>

            {/* Departments & Map */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Department Contacts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {departments.map((dept, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium text-[#1e3a5f]">{dept.name}</span>
                        <a href={`mailto:${dept.email}`} className="text-sm text-[#2d8a5e] hover:underline">
                          {dept.email}
                        </a>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Connect With Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-3">
                    {[Facebook, Instagram, Twitter, Linkedin, Youtube].map((Icon, i) => (
                      <a 
                        key={i} 
                        href="#" 
                        className="w-10 h-10 rounded-full bg-[#2d8a5e] text-white flex items-center justify-center hover:bg-[#1e3a5f] transition-colors"
                      >
                        <Icon size={18} />
                      </a>
                    ))}
                  </div>
                  <div className="mt-4 p-4 bg-[#25d366]/10 rounded-lg">
                    <a href="https://wa.me/27776012775" className="flex items-center gap-3 text-[#25d366]">
                      <MessageCircle className="w-6 h-6" />
                      <div>
                        <p className="font-medium">Chat on WhatsApp</p>
                        <p className="text-sm">+27 77 601 2775</p>
                      </div>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card>
                <CardHeader>
                  <CardTitle>Find Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-10 h-10 text-[#2d8a5e] mx-auto mb-2" />
                      <p className="text-gray-600">Paarl, Western Cape</p>
                      <p className="text-sm text-gray-500">GPS: -33.7342, 18.9621</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-16 bg-gradient-to-r from-[#2d8a5e] to-[#1e3a5f] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
          <p className="text-lg opacity-90 mb-8">
            Check our frequently asked questions or chat with our AI assistant for quick answers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn-white">Ask AI Assistant</Link>
            <a href="tel:+27213456789" className="btn-primary border-2 border-white">
              <Phone className="w-4 h-4 inline mr-2" /> Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
