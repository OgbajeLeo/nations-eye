import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone, Calendar, Star, Activity, ShieldCheck, Eye, MapPin } from "lucide-react";
import { HOSPITAL_INFO } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-primary-950 text-white">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-primary-800/40 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[600px] h-[600px] bg-accent-600/30 rounded-full blur-3xl opacity-50"></div>
        
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10 py-20 lg:py-32 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-accent-500 animate-pulse"></span>
              <span className="text-sm font-medium">Accepting New Patients in Nsukka</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
              Clearer Vision.<br />
              <span className="text-primary-300">Better Care.</span><br />
              A Healthier Tomorrow.
            </h1>
            
            <p className="text-lg text-primary-100 max-w-xl leading-relaxed">
              Professional eye care focused on protecting your vision and helping you see life more clearly. Visit The Premium Nation's Eye Hospital in Nsukka for comprehensive eye examinations and quality eye-care services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                href="/book-appointment"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-primary-600 text-white px-8 py-4 font-semibold hover:bg-primary-500 transition-all border-2 border-r-4 border-b-4 border-primary-950 active:translate-y-[2px] active:translate-x-[2px]"
              >
                Book an Appointment
              </Link>
              <a 
                href={`tel:${HOSPITAL_INFO.phone}`}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-white/10 backdrop-blur-md border-2 border-r-4 border-b-4 border-white text-white px-8 py-4 font-semibold hover:bg-white/20 transition-all active:translate-y-[2px] active:translate-x-[2px]"
              >
                Contact Us
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full relative">
            <div className="aspect-square md:aspect-[4/3] lg:aspect-[4/3] xl:aspect-square rounded-2xl overflow-hidden shadow-2xl relative border border-white/10">
               <img 
                 src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                 alt="Eye care professional examining a patient"
                 className="object-cover w-full h-full"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-6 rounded-xl shadow-xl border border-gray-100 max-w-xs hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="bg-red-50 text-red-600 p-3 rounded-lg">
                  <Activity className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Emergency Eye Care</h4>
                  <Link href="/emergency" className="text-sm text-primary-600 font-medium hover:underline flex items-center gap-1 mt-1">
                    Get Assistance <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Your Vision Deserves Premium Care
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            At The Premium Nation's Eye Hospital, we believe that quality eye care begins with understanding every patient's unique visual needs. Our goal is to provide a welcoming environment where patients can receive professional eye-care services and the information they need to make informed decisions about their vision.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-primary-900 mb-2">10+</span>
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Years of Service</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-primary-900 mb-2">10000+</span>
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Patients Served</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex gap-1 text-yellow-500 mb-3 mt-1">
                <Star className="fill-current w-8 h-8" /><Star className="fill-current w-8 h-8" /><Star className="fill-current w-8 h-8" /><Star className="fill-current w-8 h-8" /><Star className="fill-current w-8 h-8" />
              </div>
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Top Google Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Eye Care Under One Roof
            </h2>
            <p className="text-lg text-gray-600">
              From routine vision assessments to urgent eye-care needs, our services are designed to help you protect, maintain and improve your vision.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
              <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Comprehensive Eye Examinations</h3>
              <p className="text-gray-600 mb-8 line-clamp-3">
                Regular eye examinations help assess your vision and identify potential eye-health concerns.
              </p>
              <Link href="/services" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
                Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-2 h-full bg-red-500"></div>
              <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <Activity className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Emergency Eye Care</h3>
              <p className="text-gray-600 mb-8 line-clamp-3">
                When an unexpected eye problem occurs, timely professional attention can be important.
              </p>
              <Link href="/emergency" className="inline-flex items-center text-red-600 font-medium hover:text-red-700">
                Get Emergency Assistance <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
              <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Eye Care Clinic</h3>
              <p className="text-gray-600 mb-8 line-clamp-3">
                Professional eye-care services delivered in a patient-focused environment.
              </p>
              <Link href="/services" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
                Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Patients Choose The Premium Nation's Eye Hospital
              </h2>
              <p className="text-gray-600 mb-8">
                We are committed to providing professional eye-care services while creating a welcoming environment where patients feel heard, respected and cared for.
              </p>
              <Link 
                href="/about"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md border-2 border-r-4 border-b-4 border-primary-950 bg-transparent text-primary-600 px-6 py-3 font-semibold hover:bg-primary-50 transition-all active:translate-y-[2px] active:translate-x-[2px]"
              >
                Learn More About Us
              </Link>
            </div>
            
            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
              {[
                { title: "Patient-Centred Care", desc: "We put the needs, comfort and experience of every patient at the heart of our care." },
                { title: "Professional Eye Care", desc: "Access professional eye-care services in a dedicated eye-care environment." },
                { title: "Convenient Location", desc: "Located in Nsukka, Enugu State, making quality eye care accessible to patients in the area." },
                { title: "Easy Access", desc: "Find our location, contact our team and request an appointment from anywhere." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-accent-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PATIENT JOURNEY */}
      <section className="py-24 bg-primary-950 text-white relative">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-accent-500/20 text-accent-400 text-sm font-semibold tracking-wider uppercase mb-4 border border-accent-500/30">
              The Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Approach</h2>
            <p className="text-lg text-primary-200">A straightforward, patient-focused journey to better vision.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                num: "01", 
                title: "Listen & Understand", 
                desc: "We take time to hear your concerns, symptoms, and unique visual needs in a comfortable setting.",
                image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              { 
                num: "02", 
                title: "Assess & Diagnose", 
                desc: "We conduct a thorough examination using advanced technology tailored specifically to you.",
                image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              { 
                num: "03", 
                title: "Care & Protect", 
                desc: "We provide personalized guidance and a clear plan to protect and improve your eye health.",
                image: "https://images.unsplash.com/photo-1532187643603-511a41a4a6e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
            ].map((step, i) => (
              <div key={i} className="group relative rounded-3xl overflow-hidden bg-primary-900 border border-primary-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-primary-950/40 group-hover:bg-primary-950/10 transition-colors duration-500 z-10"></div>
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <div className="w-12 h-12 bg-primary-950/80 backdrop-blur-md rounded-full flex items-center justify-center text-accent-400 font-bold text-xl border border-white/10 shadow-lg">
                      {step.num}
                    </div>
                  </div>
                  {/* Gradient Overlay for seamless transition to text */}
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary-900 to-transparent z-10"></div>
                </div>
                <div className="p-8 pt-4 relative z-20">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-primary-200 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMERGENCY CTA */}
      <section className="bg-red-50 border-y border-red-100 py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-6">
            <Phone className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Having an Eye Emergency?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Some eye problems require prompt professional attention. If you are experiencing a sudden or serious eye problem, contact The Premium Nation's Eye Hospital as soon as possible for guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`tel:${HOSPITAL_INFO.phone}`}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-red-600 text-white px-8 py-3 font-semibold hover:bg-red-700 transition-all border-2 border-r-4 border-b-4 border-red-950 active:translate-y-[2px] active:translate-x-[2px]"
            >
              Contact the Hospital
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16">
            What Our Patients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm text-left border border-gray-100">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  <Star className="fill-current w-5 h-5" /><Star className="fill-current w-5 h-5" /><Star className="fill-current w-5 h-5" /><Star className="fill-current w-5 h-5" /><Star className="fill-current w-5 h-5" />
                </div>
                <p className="text-gray-600 italic mb-6">
                  "[Patient testimonial placeholder. Awaiting verified Google reviews or hospital supplied testimonials.]"
                </p>
                <div className="font-bold text-gray-900">[Patient Name/Initial]</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION & CTA */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-50/50"></div>
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl relative z-10">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
            <div className="md:w-1/2 p-10 lg:p-14 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-primary-950 mb-4">
                Book Your Eye-Care Appointment
              </h2>
              <p className="text-gray-600 mb-8">
                Take the first step towards better eye care. Contact our team to schedule your visit.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-gray-700">
                  <MapPin className="text-primary-600 w-5 h-5" />
                  <span>{HOSPITAL_INFO.address}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Phone className="text-primary-600 w-5 h-5" />
                  <span>{HOSPITAL_INFO.phone}</span>
                </div>
              </div>
              <Link 
                href="/book-appointment"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-primary-600 text-white px-8 py-4 font-semibold hover:bg-primary-500 transition-all border-2 border-r-4 border-b-4 border-primary-950 active:translate-y-[2px] active:translate-x-[2px] w-full sm:w-auto text-center"
              >
                Request Appointment <Calendar className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="md:w-1/2 bg-gray-200 min-h-[300px]">
              {/* Map Placeholder */}
              <iframe 
                src={HOSPITAL_INFO.mapUrl} 
                className="w-full h-full border-0" 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
