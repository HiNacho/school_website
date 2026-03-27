import React from 'react';
import { FadeIn, SectionTitle } from '../components/UI';
import { ClipboardCheck, Calendar, FileText, CheckCircle2 } from 'lucide-react';

export function Admissions() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-32 bg-secondary text-primary overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Join Our Community</h1>
            <p className="text-xl text-primary/70 max-w-2xl">
              We welcome students from all backgrounds who are eager to learn, grow, and lead.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Admission Steps */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            title="How to Apply" 
            subtitle="Our simple 4-step process to join Nacho Website."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <FileText size={32} />, title: "1. Submit Application", desc: "Fill out our online application form and upload required documents." },
              { icon: <Calendar size={32} />, title: "2. Schedule Interview", desc: "Meet with our admissions team and take a placement assessment." },
              { icon: <ClipboardCheck size={32} />, title: "3. Review Process", desc: "Our committee reviews your application and assessment results." },
              { icon: <CheckCircle2 size={32} />, title: "4. Enrollment", desc: "Receive your offer letter and complete the registration process." },
            ].map((step, i) => (
              <FadeIn key={i} delay={i * 0.1} className="relative p-8 rounded-3xl bg-slate-50 border border-slate-100 group hover:shadow-xl transition-all">
                <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-slate-200 z-0" />
                )}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Form Placeholder */}
      <section className="py-24 px-6 bg-soft-white">
        <div className="max-w-3xl mx-auto bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl">
          <SectionTitle title="Inquiry Form" subtitle="Fill out the form below and our admissions team will get back to you shortly." />
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Parent First Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="John" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Parent Last Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Doe" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Email Address</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Grade Level Interested In</label>
              <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all">
                <option>Preschool</option>
                <option>Primary School</option>
                <option>Middle School</option>
                <option>High School</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Message / Questions</label>
              <textarea className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all h-32" placeholder="Tell us about your child..."></textarea>
            </div>
            <button type="button" className="w-full btn-primary py-4">Submit Inquiry</button>
          </form>
        </div>
      </section>
    </div>
  );
}
