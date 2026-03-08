import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play, Users, BookOpen, Trophy, Globe, Star, Map, FlaskConical, Music } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Counter, FadeIn, SectionTitle } from '../components/UI';

export function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video Placeholder / Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523050335392-9ae86eb174b7?auto=format&fit=crop&q=80&w=1920" 
            alt="Students learning" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 bg-secondary text-primary rounded-full text-sm font-bold mb-6">
              EXCELLENCE IN EDUCATION
            </span>
            <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight mb-6">
              Shaping Future Leaders Through <span className="text-accent">Innovation</span> and Excellence
            </h1>
            <p className="text-xl text-white/80 mb-10 max-w-xl">
              A modern school where creativity, knowledge, and character grow together to prepare students for a global future.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/admissions" className="btn-secondary flex items-center gap-2">
                Apply Now <ArrowRight size={20} />
              </Link>
              <Link to="/academics" className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full font-semibold hover:bg-white/20 transition-all flex items-center gap-2">
                Explore Programs <Play size={18} />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Shapes */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-32 h-32 bg-accent/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-secondary/20 rounded-full blur-3xl"
        />
      </section>

      {/* Quick Highlights */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Trophy className="text-secondary" />, label: "Years of Excellence", value: 20, suffix: "+" },
            { icon: <Users className="text-accent" />, label: "Students Enrolled", value: 1500, suffix: "+" },
            { icon: <BookOpen className="text-highlight" />, label: "Expert Teachers", value: 80, suffix: "+" },
            { icon: <Globe className="text-primary" />, label: "Global Curriculum", value: 100, suffix: "%" },
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center group hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <Counter end={item.value} suffix={item.suffix} className="text-4xl text-primary mb-2" />
              <p className="text-slate-500 font-medium">{item.label}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-soft-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <FadeIn>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl z-10">
                <img 
                  src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=800" 
                  alt="Campus" 
                  className="w-full h-[500px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Secondary Overlapping Image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -bottom-12 -right-12 w-64 h-48 rounded-3xl overflow-hidden shadow-2xl border-8 border-white z-20 hidden md:block"
              >
                <img 
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=400" 
                  alt="Students interacting" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary rounded-full -z-10" />
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent rounded-3xl rotate-12 -z-10" />
            </FadeIn>
          </div>
          <div className="lg:w-1/2">
            <SectionTitle 
              title="Welcome to Horizon International School" 
              subtitle="We are dedicated to providing a transformative educational experience that nurtures curiosity and fosters leadership."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {[
                { title: "Innovation", desc: "Cutting-edge technology integrated into every classroom." },
                { title: "Leadership", desc: "Programs designed to build confidence and character." },
                { title: "Community", desc: "A diverse and inclusive environment for all students." },
                { title: "Excellence", desc: "Consistently high academic standards and results." },
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.1} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
            <Link to="/about" className="btn-primary">Learn More About Us</Link>
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            title="Our Academic Programs" 
            subtitle="Tailored learning pathways for every stage of your child's development."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Preschool", img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=600", desc: "Nurturing curiosity and social skills in our youngest learners." },
              { title: "Primary School", img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600", desc: "Building a strong foundation in literacy, numeracy, and critical thinking." },
              { title: "Middle School", img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=600", desc: "Encouraging independence and exploration across diverse subjects." },
              { title: "High School", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600", desc: "Preparing students for university success and global citizenship." },
              { title: "STEM Program", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600", desc: "Advanced science, technology, engineering, and math curriculum." },
              { title: "Arts & Creativity", img: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=600", desc: "Fostering expression through visual arts, music, and drama." },
            ].map((program, i) => (
              <FadeIn key={i} delay={i * 0.1} className="group cursor-pointer">
                <div className="relative h-80 rounded-3xl overflow-hidden mb-6">
                  <img 
                    src={program.img} 
                    alt={program.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                    <Link to="/academics" className="w-full py-3 bg-white text-primary rounded-xl font-bold text-center block">
                      Explore Program
                    </Link>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{program.title}</h3>
                <p className="text-slate-500 text-sm">{program.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-primary text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionTitle 
            title="Why Choose Horizon International?" 
            subtitle="We provide more than just an education; we provide a launchpad for life."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Digital Classrooms", desc: "Interactive learning with the latest educational tools." },
              { title: "Expert Faculty", desc: "Highly qualified teachers from around the world." },
              { title: "STEM Labs", desc: "State-of-the-art facilities for hands-on experimentation." },
              { title: "Sports Complex", desc: "Olympic-sized pool, tracks, and professional coaching." },
              { title: "Creative Arts", desc: "Dedicated studios for music, dance, and fine arts." },
              { title: "Global Network", desc: "Partnerships with top universities and schools worldwide." },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className="p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center mb-6 text-accent">
                  <ArrowRight size={24} />
                </div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </section>

      {/* Virtual Tour */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <SectionTitle 
                title="Virtual Campus Tour" 
                subtitle="Can't visit in person? Take a 360° virtual tour of our world-class facilities from the comfort of your home."
              />
              <div className="space-y-6 mb-10">
                {[
                  { label: "Modern Library", icon: <BookOpen size={20} /> },
                  { label: "Science & Tech Labs", icon: <FlaskConical size={20} /> },
                  { label: "Sports Complex", icon: <Trophy size={20} /> },
                  { label: "Performing Arts Center", icon: <Music size={20} /> },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary transition-all cursor-pointer group">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      {item.icon}
                    </div>
                    <span className="font-bold text-slate-700">{item.label}</span>
                  </div>
                ))}
              </div>
              <button className="btn-primary flex items-center gap-2">
                Start 360° Tour <Map size={20} />
              </button>
            </div>
            <div className="lg:w-1/2 relative">
              <FadeIn>
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl group cursor-pointer">
                  <img 
                    src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000" 
                    alt="Campus Tour" 
                    className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center text-primary shadow-2xl animate-pulse">
                      <Play size={32} fill="currentColor" />
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-soft-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            title="What Our Community Says" 
            subtitle="Hear from the parents and students who make Horizon International special."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: "Emily Watson", 
                role: "Parent", 
                text: "One of the best decisions we made for our child. The focus on both academics and character is truly unique.",
                img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100"
              },
              { 
                name: "James Miller", 
                role: "Grade 12 Student", 
                text: "The STEM program here is incredible. I've had opportunities to work on real-world projects that I wouldn't get anywhere else.",
                img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100"
              },
              { 
                name: "Sophia Chen", 
                role: "Alumni", 
                text: "Horizon prepared me perfectly for university. The global perspective I gained here has been invaluable in my career.",
                img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
              },
            ].map((t, i) => (
              <FadeIn key={i} delay={i * 0.1} className="p-10 rounded-[2.5rem] bg-white shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} className="fill-secondary text-secondary" />)}
                </div>
                <p className="text-slate-600 italic mb-8 flex-grow">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-bold text-slate-800">{t.name}</h4>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions CTA */}
      <section className="py-24 px-6 bg-secondary">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Start Your Journey With Us</h2>
            <p className="text-xl text-primary/80 mb-10">
              Join a community of learners dedicated to excellence and innovation. Admissions are now open for the next academic year.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/admissions" className="btn-primary">Apply Now</Link>
              <Link to="/admissions" className="px-6 py-3 bg-white text-primary rounded-full font-semibold hover:bg-slate-50 transition-all">Download Prospectus</Link>
              <Link to="/contact" className="px-6 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all">Schedule Visit</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
