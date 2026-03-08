import React from 'react';
import { FadeIn, SectionTitle } from '../components/UI';
import { Calendar, ArrowRight } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    title: "Horizon Students Win Regional Science Fair",
    date: "Oct 15, 2024",
    category: "Achievement",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
    excerpt: "Our Grade 10 students took home the first prize for their innovative water purification project."
  },
  {
    id: 2,
    title: "Annual Sports Day 2024: A Day of Spirit",
    date: "Oct 10, 2024",
    category: "Events",
    img: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=600",
    excerpt: "Students from all houses competed in various track and field events, showcasing amazing sportsmanship."
  },
  {
    id: 3,
    title: "New STEM Lab Inauguration",
    date: "Oct 05, 2024",
    category: "Campus",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=600",
    excerpt: "We are excited to announce the opening of our new state-of-the-art robotics and coding laboratory."
  },
  {
    id: 4,
    title: "Parent-Teacher Conference Schedule",
    date: "Sep 28, 2024",
    category: "Announcement",
    img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=600",
    excerpt: "Please check the portal for your scheduled time slots for the upcoming conferences."
  }
];

export function News() {
  return (
    <div className="pt-20">
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            title="News & Events" 
            subtitle="Stay updated with the latest happenings and achievements at Horizon International."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {newsItems.map((item, i) => (
              <FadeIn key={item.id} delay={i * 0.1} className="group flex flex-col md:flex-row gap-8 bg-slate-50 rounded-[2rem] overflow-hidden border border-slate-100 hover:shadow-xl transition-all">
                <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <div className="md:w-3/5 p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider">{item.category}</span>
                    <span className="flex items-center gap-1 text-slate-400 text-xs font-medium">
                      <Calendar size={14} /> {item.date}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">{item.excerpt}</p>
                  <button className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                    Read More <ArrowRight size={18} />
                  </button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-white/70 mb-10 text-lg">Subscribe to our monthly newsletter to receive school updates, event invitations, and educational resources.</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input type="email" placeholder="Your email address" className="flex-grow px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:bg-white/20 transition-all" />
              <button type="button" className="btn-secondary whitespace-nowrap">Subscribe Now</button>
            </form>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
