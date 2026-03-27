import React from 'react';
import { FadeIn, SectionTitle } from '../components/UI';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export function Contact() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-32 bg-accent text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Have questions? We're here to help. Reach out to us for any inquiries or to schedule a campus tour.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <SectionTitle title="Contact Information" subtitle="Our team is available to assist you during school hours." />
            
            <div className="space-y-8">
              {[
                { icon: <MapPin className="text-primary" />, title: "Visit Us", content: "123 Education Excellence Way, Global City, GC 54321" },
                { icon: <Phone className="text-primary" />, title: "Call Us", content: "+1 (555) 123-4567" },
                { icon: <Mail className="text-primary" />, title: "Email Us", content: "info@nacho-website.com" },
                { icon: <Clock className="text-primary" />, title: "Office Hours", content: "Mon - Fri: 8:00 AM - 4:30 PM" },
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.1} className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-800 mb-1">{item.title}</h4>
                    <p className="text-slate-600">{item.content}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="h-64 rounded-3xl bg-slate-100 overflow-hidden border border-slate-200">
              <div className="w-full h-full flex items-center justify-center text-slate-400 font-medium">
                Interactive Map Placeholder
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-soft-white p-10 md:p-12 rounded-[3rem] border border-slate-100">
            <h3 className="text-2xl font-bold text-primary mb-8">Send us a Message</h3>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Full Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Your Name" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="your@email.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Subject</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="How can we help?" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Message</label>
                <textarea className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all h-40" placeholder="Your message..."></textarea>
              </div>
              <button type="button" className="w-full btn-primary py-4 flex items-center justify-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
