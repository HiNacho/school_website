import React from 'react';
import { FadeIn, SectionTitle } from '../components/UI';
import { BookOpen, FlaskConical, Palette, Cpu, Languages, Music } from 'lucide-react';

export function Academics() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-32 bg-primary text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Academic Excellence</h1>
            <p className="text-xl text-white/70 max-w-2xl">
              Our curriculum is designed to challenge, inspire, and prepare students for the complexities of the modern world.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            title="Our Curriculum" 
            subtitle="We offer a globally-recognized curriculum that balances academic rigor with creative exploration."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <BookOpen />, title: "Core Subjects", desc: "Strong emphasis on English, Mathematics, and Sciences." },
              { icon: <Languages />, title: "World Languages", desc: "Mandarin, Spanish, and French programs from primary level." },
              { icon: <FlaskConical />, title: "STEM Focus", desc: "Integrated science and technology projects in all grades." },
              { icon: <Palette />, title: "Visual Arts", desc: "Exploring various mediums from painting to digital design." },
              { icon: <Music />, title: "Performing Arts", desc: "Comprehensive music and drama programs with annual shows." },
              { icon: <Cpu />, title: "Digital Literacy", desc: "Coding and robotics integrated into the weekly schedule." },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 text-primary">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* School Levels */}
      <section className="py-24 px-6 bg-soft-white">
        <div className="max-w-7xl mx-auto space-y-24">
          {[
            { 
              title: "Preschool (Ages 3-5)", 
              img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=800",
              desc: "Our preschool program focuses on play-based learning, social development, and early literacy and numeracy skills in a nurturing environment.",
              features: ["Reggio Emilia inspired", "Small class sizes", "Outdoor learning spaces"]
            },
            { 
              title: "Primary School (Grades 1-5)", 
              img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
              desc: "In primary school, we build a solid foundation across all core subjects while encouraging students to become independent and inquisitive learners.",
              features: ["Inquiry-based learning", "Specialist teachers for Arts & PE", "Personalized learning plans"],
              reverse: true
            },
            { 
              title: "Middle & High School (Grades 6-12)", 
              img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
              desc: "Our secondary program prepares students for university and beyond, with a focus on critical thinking, research skills, and global perspectives.",
              features: ["IB Diploma Program", "University counseling", "Advanced STEM labs"]
            }
          ].map((level, i) => (
            <div key={i} className={`flex flex-col ${level.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
              <FadeIn className="lg:w-1/2">
                <div className="rounded-[2rem] overflow-hidden shadow-2xl">
                  <img src={level.img} alt={level.title} className="w-full h-[400px] object-cover" referrerPolicy="no-referrer" />
                </div>
              </FadeIn>
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-primary mb-6">{level.title}</h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">{level.desc}</p>
                <ul className="space-y-4">
                  {level.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-slate-700 font-medium">
                      <div className="w-2 h-2 bg-secondary rounded-full" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
