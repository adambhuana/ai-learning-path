'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Brain, Compass, Map, Sparkles, GraduationCap, Code, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import { PROGRAM_STATS, CONCENTRATION_TRACKS } from '@/lib/curriculum-data';

export default function HomePage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-accent-purple/5 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-accent-blue/5 blur-[120px]" />
        <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] rounded-full bg-accent-cyan/3 blur-[100px]" />
      </div>

      <header className="relative z-10">
        <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-purple to-accent-blue flex items-center justify-center">
              <Compass className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-foreground">PathFinder AI</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <Link href="/onboarding" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Mulai Sekarang →
            </Link>
          </motion.div>
        </nav>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-6">
        <section className="pt-16 pb-20 md:pt-24 md:pb-32">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border mb-8">
              <Sparkles className="w-4 h-4 text-accent-purple" />
              <span className="text-sm text-muted-foreground">Penasihat Akademik Berbasis AI</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Temukan Jalur{' '}<span className="gradient-text">Data Science</span><br />Terbaikmu
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Jawab beberapa pertanyaan dan biarkan penasihat AI kami membuat peta jalan personal semester demi semester melalui kurikulum{' '}
              <span className="text-foreground font-medium">{PROGRAM_STATS.totalCredits} SKS</span>{' '}Data Science.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/onboarding">
                <button className="gradient-btn text-base px-8 py-4 rounded-xl flex items-center gap-3 mx-auto">
                  <span>Mulai Perjalananmu</span>
                  <ArrowRight className="w-5 h-5 relative z-10" />
                </button>
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex flex-wrap justify-center gap-8 mt-14">
              {[
                { value: `${PROGRAM_STATS.totalCredits}`, label: 'Satuan Kredit' },
                { value: `${PROGRAM_STATS.totalSemesters}`, label: 'Semester' },
                { value: `${PROGRAM_STATS.concentrationTracks}`, label: 'Spesialisasi' },
                { value: `${PROGRAM_STATS.mbkmSemesters}`, label: 'Program MBKM' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="pb-20">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cara <span className="gradient-text">Kerjanya</span></h2>
            <p className="text-muted-foreground max-w-lg mx-auto">Tiga langkah mudah untuk mendapatkan peta jalan belajar personalmu</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Brain, title: 'Chat dengan AI', description: 'Jawab pertanyaan terarah tentang tujuan, latar belakang, dan minatmu dalam format percakapan.', step: '01', color: 'from-accent-purple to-accent-pink' },
              { icon: Compass, title: 'Dicocokkan', description: 'AI kami menganalisis profilmu dan mencocokkanmu dengan jalur konsentrasi dan kecepatan belajar yang ideal.', step: '02', color: 'from-accent-blue to-accent-purple' },
              { icon: Map, title: 'Peta Jalanmu', description: 'Terima rencana semester demi semester dengan mata kuliah unggulan, tools, dan jalur karier.', step: '03', color: 'from-accent-cyan to-accent-blue' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }} className="glass-card p-8 relative group">
                <div className="absolute top-6 right-6 text-5xl font-black text-white/[0.03] group-hover:text-white/[0.06] transition-colors">{item.step}</div>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="pb-24">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">3 Jalur <span className="gradient-text">Konsentrasi</span></h2>
            <p className="text-muted-foreground max-w-lg mx-auto">Pilih spesialisasimu di Semester 5 berdasarkan tujuan kariermu</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {CONCENTRATION_TRACKS.map((track, i) => {
              const icons = [Code, Brain, BarChart3];
              const Icon = icons[i];
              return (
                <motion.div key={track.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }} className="glass-card p-8 group cursor-default">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110" style={{ background: `${track.color}20` }}>
                    <Icon className="w-7 h-7" style={{ color: track.color }} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{track.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{track.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {track.courses.slice(0, 3).map((course, j) => (
                      <span key={j} className="text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground">{course.name}</span>
                    ))}
                    <span className="text-xs px-3 py-1.5 rounded-full border border-border text-muted">+{track.courses.length - 3} lainnya</span>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted mb-2">Jalur Karier</p>
                    <div className="flex flex-wrap gap-1.5">
                      {track.careers.slice(0, 3).map((career, j) => (
                        <span key={j} className="text-xs font-medium px-2 py-1 rounded-md" style={{ background: `${track.color}15`, color: track.color }}>{career}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mt-16">
            <Link href="/onboarding">
              <button className="gradient-btn text-base px-10 py-4 rounded-xl inline-flex items-center gap-3">
                <GraduationCap className="w-5 h-5 relative z-10" />
                <span>Temukan Jalurku Sekarang</span>
                <ArrowRight className="w-5 h-5 relative z-10" />
              </button>
            </Link>
            <p className="text-muted text-sm mt-4">Hanya sekitar 2 menit • Tanpa perlu daftar</p>
          </motion.div>
        </section>

        <footer className="border-t border-border py-8 text-center">
          <p className="text-sm text-muted">© {new Date().getFullYear()} PathFinder AI — Penasihat Kurikulum Data Science</p>
        </footer>
      </main>
    </div>
  );
}
