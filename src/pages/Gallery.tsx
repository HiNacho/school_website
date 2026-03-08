import React, { useState } from 'react';
import { FadeIn, SectionTitle } from '../components/UI';

const categories = ['All', 'Campus', 'Students', 'Events', 'Activities'];

const galleryItems = [
  { id: 1, category: 'Campus', img: 'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=600', title: 'Main Campus' },
  { id: 2, category: 'Students', img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600', title: 'Group Study' },
  { id: 3, category: 'Events', img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=600', title: 'Annual Sports Day' },
  { id: 4, category: 'Activities', img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=600', title: 'Science Lab' },
  { id: 5, category: 'Campus', img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=600', title: 'Library' },
  { id: 6, category: 'Students', img: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=600', title: 'Graduation' },
  { id: 7, category: 'Events', img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=600', title: 'Cultural Fest' },
  { id: 8, category: 'Activities', img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600', title: 'Art Class' },
  { id: 9, category: 'Campus', img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600', title: 'IT Center' },
];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="pt-20">
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            title="School Gallery" 
            subtitle="Take a glimpse into the vibrant life at Horizon International School."
            centered
          />

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  activeCategory === cat 
                    ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, i) => (
              <FadeIn key={item.id} delay={i * 0.05} className="group cursor-pointer">
                <div className="relative aspect-square rounded-3xl overflow-hidden mb-4">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{item.title}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
