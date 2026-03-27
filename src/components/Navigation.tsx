import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, GraduationCap, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { 
    name: 'Academics', 
    href: '/academics',
    dropdown: [
      { name: 'Preschool', href: '/academics/preschool' },
      { name: 'Primary School', href: '/academics/primary' },
      { name: 'Middle School', href: '/academics/middle' },
      { name: 'High School', href: '/academics/high' },
      { name: 'STEM Program', href: '/academics/stem' },
    ]
  },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Student Life', href: '/student-life' },
  { name: 'News & Events', href: '/news' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
            <GraduationCap size={24} />
          </div>
          <span className={cn(
            "font-display font-bold text-xl tracking-tight",
            isScrolled ? "text-primary" : "text-white"
          )}>
            NACHO <span className="text-accent font-light">WEBSITE</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent flex items-center gap-1",
                  location.pathname === link.href ? "text-accent" : "text-slate-800"
                )}
              >
                {link.name}
                {link.dropdown && <ChevronDown size={14} />}
              </Link>
              {link.dropdown && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                  <div className="py-2">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Link to="/admissions" className="btn-secondary py-2 px-4 text-sm">
            Apply Now
          </Link>
          <Link to="/contact" className="btn-outline py-2 px-4 text-sm border-white text-white hover:bg-white hover:text-primary" style={{ borderColor: isScrolled ? '#1E40AF' : 'white', color: isScrolled ? '#1E40AF' : 'white' }}>
            Book a Tour
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "lg:hidden p-2 rounded-lg",
            isScrolled ? "text-primary" : "text-white"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-slate-100 py-6 px-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.href}
                    className="text-lg font-medium text-slate-800 hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="ml-4 mt-2 flex flex-col gap-2 border-l-2 border-slate-100 pl-4">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="text-sm text-slate-500 hover:text-primary"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <Link to="/admissions" className="btn-primary text-center">
                  Apply Now
                </Link>
                <Link to="/contact" className="btn-outline text-center">
                  Book a Tour
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
              <GraduationCap size={24} />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">
              NACHO <span className="text-accent font-light">WEBSITE</span>
            </span>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed">
            Empowering students to become global citizens through innovation, creativity, and excellence in education.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
              <Youtube size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li><Link to="/about" className="hover:text-accent transition-colors">About Our School</Link></li>
            <li><Link to="/academics" className="hover:text-accent transition-colors">Academic Programs</Link></li>
            <li><Link to="/admissions" className="hover:text-accent transition-colors">Admissions Process</Link></li>
            <li><Link to="/student-life" className="hover:text-accent transition-colors">Student Life</Link></li>
            <li><Link to="/news" className="hover:text-accent transition-colors">Latest News</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-lg mb-6">Resources</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li><a href="#" className="hover:text-accent transition-colors">Parent Portal</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Teacher Portal</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Student Handbook</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">School Calendar</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Career Opportunities</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-lg mb-6">Contact Us</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-accent shrink-0" />
              <span>123 Education Excellence Way, Global City, GC 54321</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-accent shrink-0" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-accent shrink-0" />
              <span>admissions@nacho-website.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
        <p>© {new Date().getFullYear()} Nacho Website. All rights reserved.</p>
      </div>
    </footer>
  );
}
