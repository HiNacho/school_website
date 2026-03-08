import React from 'react';
import { FadeIn, SectionTitle } from '../components/UI';
import { Bike, Music, Camera, Trophy, Users, Heart } from 'lucide-react';

export function StudentLife() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-32 bg-highlight text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Student Life</h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Beyond the classroom, our students explore their passions, build lifelong friendships, and develop leadership skills.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Clubs & Activities */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            title="Clubs & Extracurriculars" 
            subtitle="With over 30 clubs to choose from, there's something for everyone."
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Trophy />, title: "Competitive Sports", desc: "Football, Basketball, Swimming, and Athletics teams." },
              { icon: <Music />, title: "Music & Band", desc: "Orchestra, Jazz band, and contemporary music groups." },
              { icon: <Camera />, title: "Media & Photography", desc: "Capturing school life and learning digital editing." },
              { icon: <Users />, title: "Student Council", desc: "Developing leadership and representing student voices." },
              { icon: <Bike />, title: "Outdoor Adventure", desc: "Hiking, camping, and environmental awareness programs." },
              { icon: <Heart />, title: "Community Service", desc: "Volunteering and supporting local and global causes." },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all">
                <div className="w-14 h-14 rounded-2xl bg-highlight/10 text-highlight flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Life Gallery */}
      <section className="py-24 px-6 bg-soft-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="A Glimpse Into Our Day" centered />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-lg h-48 lg:h-auto">
              <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-lg h-48 lg:h-auto">
              <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-lg h-48 lg:h-auto">
              <img src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-lg h-48 lg:h-auto">
              <img src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
