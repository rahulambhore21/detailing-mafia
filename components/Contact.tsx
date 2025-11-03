import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-900 px-4 py-2 rounded-full mb-4">
            Contact Us
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            Get In <span className="text-blue-900">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to give your car the royal treatment? Book an appointment or reach out to us
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact form */}
          <Card className="bg-gray-900 border-blue-900/20">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Book An Appointment</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      className="bg-black border-gray-700 text-white placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      className="bg-black border-gray-700 text-white placeholder:text-gray-500"
                    />
                  </div>
                </div>

                <Input
                  type="email"
                  placeholder="Email Address"
                  className="bg-black border-gray-700 text-white placeholder:text-gray-500"
                />

                <Select>
                  <SelectTrigger className="bg-black border-gray-700 text-white">
                    <SelectValue placeholder="Select Service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="detailing">Premium Detailing</SelectItem>
                    <SelectItem value="ceramic">Ceramic Coating</SelectItem>
                    <SelectItem value="paint">Paint Correction</SelectItem>
                    <SelectItem value="steam">Steam Wash</SelectItem>
                    <SelectItem value="interior">Interior Detailing</SelectItem>
                    <SelectItem value="ppf">PPF & Wrapping</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="bg-black border-gray-700 text-white">
                    <SelectValue placeholder="Select Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mumbai">Mumbai</SelectItem>
                    <SelectItem value="delhi">Delhi</SelectItem>
                    <SelectItem value="bangalore">Bangalore</SelectItem>
                    <SelectItem value="hyderabad">Hyderabad</SelectItem>
                    <SelectItem value="pune">Pune</SelectItem>
                    <SelectItem value="chennai">Chennai</SelectItem>
                  </SelectContent>
                </Select>

                <Input
                  type="date"
                  className="bg-black border-gray-700 text-white"
                />

                <Textarea
                  placeholder="Additional Message (Optional)"
                  rows={4}
                  className="bg-black border-gray-700 text-white placeholder:text-gray-500"
                />

                <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-6">
                  Book Appointment
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact info */}
          <div className="space-y-6">
            <Card className="bg-gray-900 border-blue-900/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl text-white mb-2">Phone</h3>
                    <p className="text-gray-400">+91 99999 99999</p>
                    <p className="text-gray-400">+91 88888 88888</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-blue-900/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl text-white mb-2">Email</h3>
                    <p className="text-gray-400">info@thedetailingmafia.com</p>
                    <p className="text-gray-400">support@thedetailingmafia.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-blue-900/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl text-white mb-2">Locations</h3>
                    <p className="text-gray-400">50+ Studios across India</p>
                    <p className="text-gray-400">Mumbai, Delhi, Bangalore & More</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-blue-900/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl text-white mb-2">Working Hours</h3>
                    <p className="text-gray-400">Monday - Saturday: 9:00 AM - 8:00 PM</p>
                    <p className="text-gray-400">Sunday: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}