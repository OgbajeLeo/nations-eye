import Link from "next/link";
import { HOSPITAL_INFO } from "@/lib/content";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-gray-300 py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white leading-tight">
              The Premium Nation's<br /><span className="text-primary-400">Eye Hospital</span>
            </h3>
            <p className="text-sm text-gray-400">
              Professional eye care in Nsukka, Enugu State. Focused on protecting your vision and helping you see life more clearly.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/" className="hover:text-primary-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-primary-400 transition-colors">Services</Link></li>
              <li><Link href="/team" className="hover:text-primary-400 transition-colors">Our Team</Link></li>
              <li><Link href="/eye-health" className="hover:text-primary-400 transition-colors">Eye Health</Link></li>
              <li><Link href="/contact" className="hover:text-primary-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Patient Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Patient Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/book-appointment" className="hover:text-primary-400 transition-colors text-white font-medium">Book Appointment</Link></li>
              <li><Link href="/emergency" className="hover:text-accent-500 transition-colors">Emergency Eye Care</Link></li>
              <li><Link href="/patient-info" className="hover:text-primary-400 transition-colors">Patient Information</Link></li>
              <li><Link href="/patient-info#faq" className="hover:text-primary-400 transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-primary-400 shrink-0" />
                <span>{HOSPITAL_INFO.phone}</span>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-primary-400 shrink-0" />
                <span>{HOSPITAL_INFO.email}</span>
              </li>
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-primary-400 shrink-0" />
                <span>{HOSPITAL_INFO.address}</span>
              </li>
              <li className="flex gap-3">
                <Clock className="h-5 w-5 text-primary-400 shrink-0" />
                <div>
                  <p>Mon - Fri: {HOSPITAL_INFO.openingHours.weekdays}</p>
                  <p>Sat - Sun: {HOSPITAL_INFO.openingHours.weekend}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} {HOSPITAL_INFO.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors">Medical Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
