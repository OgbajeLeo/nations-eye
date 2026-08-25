"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Calendar, Clock, User, Phone, Mail, FileText, CheckCircle2 } from "lucide-react";

type Option = {
  value: string;
  label: string;
};

const CustomSelect = ({ 
  options, 
  value, 
  onChange, 
  placeholder,
  icon: Icon
}: { 
  options: Option[]; 
  value: string; 
  onChange: (val: string) => void; 
  placeholder: string;
  icon?: React.ElementType;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-3.5 flex items-center justify-between rounded-xl border transition-all ${
          isOpen ? "border-primary-500 ring-4 ring-primary-50" : "border-gray-200 hover:border-gray-300"
        } bg-white text-left`}
      >
        <div className="flex items-center gap-3 text-gray-700">
          {Icon && <Icon className="w-5 h-5 text-primary-500" />}
          <span className={selectedOption ? "text-gray-900 font-medium" : "text-gray-400"}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </div>
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-gray-100 rounded-xl overflow-hidden py-1 animate-in fade-in slide-in-from-top-2 duration-200">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-3 text-left flex items-center justify-between hover:bg-primary-50 transition-colors ${
                value === option.value ? "bg-primary-50 text-primary-700 font-semibold" : "text-gray-700"
              }`}
            >
              {option.label}
              {value === option.value && <CheckCircle2 className="w-4 h-4 text-primary-600" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default function BookAppointmentPage() {
  const [time, setTime] = useState("");
  const [service, setService] = useState("");

  const timeOptions = [
    { value: "morning", label: "Morning (8:00 AM - 12:00 PM)" },
    { value: "afternoon", label: "Afternoon (12:00 PM - 4:00 PM)" },
    { value: "evening", label: "Late Afternoon (4:00 PM - 6:00 PM)" }
  ];

  const serviceOptions = [
    { value: "comprehensive", label: "Comprehensive Eye Examination" },
    { value: "pediatric", label: "Children's Eye Care" },
    { value: "glasses", label: "Glasses / Vision Assessment" },
    { value: "emergency", label: "Urgent / Emergency Care" },
    { value: "other", label: "Other" }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 lg:py-24 min-h-[calc(100vh-80px)] font-sans relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-200/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] overflow-hidden border border-white/50">
          <div className="bg-primary-950/95 relative overflow-hidden p-10 md:p-14 text-white text-center">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 tracking-tight relative z-10">Book Your Appointment</h1>
            <p className="text-primary-100/90 text-lg max-w-xl mx-auto font-medium relative z-10">
              Take the first step towards perfect vision. Schedule your personalized eye care consultation today.
            </p>
          </div>
          
          <div className="p-8 md:p-14">
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-sm font-bold text-gray-700 tracking-wide uppercase">Full Name</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400 group-focus-within:text-primary-500 transition-colors" />
                    </div>
                    <input type="text" id="name" className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:ring-4 focus:ring-primary-50 focus:border-primary-500 outline-none transition-all bg-white font-medium text-gray-800 placeholder:font-normal" placeholder="John Doe" required />
                  </div>
                </div>
                <div className="space-y-3">
                  <label htmlFor="phone" className="text-sm font-bold text-gray-700 tracking-wide uppercase">Phone Number</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400 group-focus-within:text-primary-500 transition-colors" />
                    </div>
                    <input type="tel" id="phone" className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:ring-4 focus:ring-primary-50 focus:border-primary-500 outline-none transition-all bg-white font-medium text-gray-800 placeholder:font-normal" placeholder="+234..." required />
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <label htmlFor="email" className="text-sm font-bold text-gray-700 tracking-wide uppercase">Email Address <span className="text-gray-400 font-normal normal-case">(Optional)</span></label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-primary-500 transition-colors" />
                  </div>
                  <input type="email" id="email" className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:ring-4 focus:ring-primary-50 focus:border-primary-500 outline-none transition-all bg-white font-medium text-gray-800 placeholder:font-normal" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="date" className="text-sm font-bold text-gray-700 tracking-wide uppercase">Preferred Date</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-gray-400 group-focus-within:text-primary-500 transition-colors" />
                    </div>
                    <input type="date" id="date" className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:ring-4 focus:ring-primary-50 focus:border-primary-500 outline-none transition-all bg-white font-medium text-gray-800" required />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-gray-700 tracking-wide uppercase">Preferred Time</label>
                  <CustomSelect 
                    options={timeOptions} 
                    value={time} 
                    onChange={setTime} 
                    placeholder="Select a time"
                    icon={Clock}
                  />
                  {/* Hidden input to ensure form submission works for this required field if needed */}
                  <input type="hidden" name="time" value={time} required />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-sm font-bold text-gray-700 tracking-wide uppercase">Service Needed</label>
                <CustomSelect 
                  options={serviceOptions} 
                  value={service} 
                  onChange={setService} 
                  placeholder="Select a service" 
                />
                <input type="hidden" name="service" value={service} required />
              </div>
              
              <div className="space-y-3">
                <label htmlFor="message" className="text-sm font-bold text-gray-700 tracking-wide uppercase">Additional Message</label>
                <div className="relative group">
                  <div className="absolute top-4 left-4 pointer-events-none">
                    <FileText className="h-5 w-5 text-gray-400 group-focus-within:text-primary-500 transition-colors" />
                  </div>
                  <textarea id="message" rows={4} className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:ring-4 focus:ring-primary-50 focus:border-primary-500 outline-none transition-all bg-white font-medium text-gray-800 placeholder:font-normal resize-none" placeholder="Please describe any symptoms or specific concerns..."></textarea>
                </div>
              </div>
              
              <div className="pt-4">
                <button type="submit" className="w-full py-4.5 bg-primary-600 hover:bg-primary-500 text-white rounded-xl font-bold text-lg transition-all hover:-translate-y-0.5 active:translate-y-0 relative overflow-hidden group">
                  <span className="relative z-10">Confirm Appointment Request</span>
                  <div className="absolute inset-0 h-full w-0 bg-white/20 transition-all duration-300 ease-out group-hover:w-full"></div>
                </button>
              </div>
              
              <p className="text-sm text-gray-500 text-center font-medium mt-6 bg-gray-50 py-3 rounded-lg border border-gray-100">
                <span className="text-primary-600 font-semibold mr-1">Note:</span> 
                Our team will contact you shortly to confirm your schedule.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
