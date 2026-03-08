import React from 'react';
import { FadeIn, SectionTitle } from '../components/UI';
import { Target, Eye, Heart, Award, ShieldCheck, Zap } from 'lucide-react';

export function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-32 bg-primary text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Story & Mission</h1>
            <p className="text-xl text-white/70 max-w-2xl">
              Horizon International School was founded on the belief that every child has the potential to lead and innovate.
            </p>
          </FadeIn>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" 
            alt="Students" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: <Target className="text-primary" />, title: "Our Mission", desc: "To inspire and empower students to achieve their full potential through a rigorous and innovative curriculum." },
            { icon: <Eye className="text-accent" />, title: "Our Vision", desc: "To be a global leader in education, recognized for fostering creativity, critical thinking, and character." },
            { icon: <Heart className="text-highlight" />, title: "Our Values", desc: "Integrity, Respect, Excellence, and Community are the pillars of everything we do." },
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1} className="p-10 rounded-[2rem] bg-slate-50 border border-slate-100 text-center">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mx-auto mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 px-6 bg-soft-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            title="Our Leadership Team" 
            subtitle="Meet the visionaries behind Horizon International School."
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Dr. Sarah Jenkins", role: "Principal", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
              { name: "Mark Thompson", role: "Vice Principal", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
              { name: "Elena Rodriguez", role: "Head of Academics", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" },
              { name: "David Chen", role: "Director of Innovation", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
            ].map((member, i) => (
              <FadeIn key={i} delay={i * 0.1} className="group">
                <div className="relative rounded-3xl overflow-hidden mb-4 aspect-[4/5]">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-xl font-bold text-slate-800">{member.name}</h4>
                <p className="text-primary font-medium">{member.role}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionTitle title="Our Journey" centered />
          <div className="space-y-12">
            {[
              { year: "2004", title: "The Beginning", desc: "Horizon International School opened its doors with just 50 students." },
              { year: "2010", title: "Campus Expansion", desc: "We moved to our state-of-the-art campus in Global City." },
              { year: "2015", title: "STEM Excellence", desc: "Launched our award-winning STEM and Innovation program." },
              { year: "2024", title: "Global Recognition", desc: "Ranked among the top 10 international schools in the region." },
            ].map((item, i) => (
              <FadeIn key={i} className="flex gap-8">
                <div className="text-3xl font-bold text-accent shrink-0 w-20">{item.year}</div>
                <div className="pt-1.5">
                  <h4 className="text-xl font-bold text-primary mb-2">{item.title}</h4>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
