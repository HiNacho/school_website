import React from 'react';
import { FadeIn, SectionTitle } from '../components/UI';
import { Layout, Users, Settings, Bell, LogOut, BookOpen, Calendar, MessageSquare } from 'lucide-react';

export function Portal() {
  return (
    <div className="pt-20 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 space-y-4">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">JD</div>
                <div>
                  <h4 className="font-bold text-slate-800">John Doe</h4>
                  <p className="text-xs text-slate-500">Student • Grade 10</p>
                </div>
              </div>
              <nav className="space-y-2">
                {[
                  { icon: <Layout size={18} />, label: "Dashboard", active: true },
                  { icon: <BookOpen size={18} />, label: "My Courses" },
                  { icon: <Calendar size={18} />, label: "Schedule" },
                  { icon: <MessageSquare size={18} />, label: "Messages" },
                  { icon: <Bell size={18} />, label: "Notifications" },
                  { icon: <Settings size={18} />, label: "Settings" },
                ].map((item, i) => (
                  <button key={i} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${item.active ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-600 hover:bg-slate-50'}`}>
                    {item.icon}
                    {item.label}
                  </button>
                ))}
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-highlight hover:bg-highlight/5 mt-8">
                  <LogOut size={18} />
                  Logout
                </button>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-grow space-y-8">
            <FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: "Attendance", value: "98%", color: "bg-emerald-500" },
                  { label: "GPA", value: "3.9", color: "bg-primary" },
                  { label: "Assignments", value: "12 Pending", color: "bg-secondary" },
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                    <p className="text-sm text-slate-500 mb-2">{stat.label}</p>
                    <h3 className="text-3xl font-bold text-slate-800">{stat.value}</h3>
                    <div className={`h-1.5 w-full ${stat.color} mt-4 rounded-full opacity-20`} />
                  </div>
                ))}
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Upcoming Classes */}
              <FadeIn delay={0.1} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold text-slate-800 mb-6">Upcoming Classes</h3>
                <div className="space-y-6">
                  {[
                    { time: "09:00 AM", subject: "Advanced Physics", room: "Lab 3" },
                    { time: "10:30 AM", subject: "World History", room: "Room 204" },
                    { time: "01:00 PM", subject: "Calculus II", room: "Room 105" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50">
                      <div className="flex items-center gap-4">
                        <div className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">{item.time}</div>
                        <div>
                          <h4 className="font-bold text-slate-800">{item.subject}</h4>
                          <p className="text-xs text-slate-500">{item.room}</p>
                        </div>
                      </div>
                      <button className="text-primary hover:underline text-sm font-bold">Details</button>
                    </div>
                  ))}
                </div>
              </FadeIn>

              {/* Recent Announcements */}
              <FadeIn delay={0.2} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold text-slate-800 mb-6">Announcements</h3>
                <div className="space-y-6">
                  {[
                    { date: "Oct 12", title: "Winter Break Schedule Released", author: "Admin" },
                    { date: "Oct 10", title: "New Robotics Club Meeting", author: "Mr. Smith" },
                    { date: "Oct 08", title: "Science Fair Registration Open", author: "Ms. Jenkins" },
                  ].map((item, i) => (
                    <div key={i} className="border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                      <p className="text-xs text-slate-400 mb-1">{item.date} • {item.author}</p>
                      <h4 className="font-bold text-slate-800 hover:text-primary cursor-pointer transition-colors">{item.title}</h4>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
