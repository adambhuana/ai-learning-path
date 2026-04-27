'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Compass, ArrowLeft, RefreshCw } from 'lucide-react';
import Link from 'next/link';
import { getRoadmap } from '@/lib/session';
import { GeneratedRoadmap } from '@/lib/ai/roadmap-generator';
import { CONCENTRATION_TRACKS } from '@/lib/curriculum-data';
import { PersonaCard } from '@/components/dashboard/PersonaCard';
import { ConcentrationCard } from '@/components/dashboard/ConcentrationCard';
import { SemesterTimeline } from '@/components/dashboard/SemesterTimeline';
import { ToolsGrid } from '@/components/dashboard/ToolsGrid';
import { CareerPathCard } from '@/components/dashboard/CareerPathCard';
import { FirstActionCard } from '@/components/dashboard/FirstActionCard';

export default function DashboardPage() {
  const params = useParams();
  const [roadmap, setRoadmap] = useState<GeneratedRoadmap | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = getRoadmap() as GeneratedRoadmap | null;
    if (data) {
      setRoadmap(data);
    }
    setLoading(false);
  }, [params]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <RefreshCw className="w-8 h-8 text-accent-purple animate-spin" />
      </div>
    );
  }

  if (!roadmap) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Peta jalan tidak ditemukan</h2>
          <p className="text-muted-foreground mb-6">Mulai proses onboarding untuk membuat jalur belajar personalmu.</p>
          <Link href="/onboarding">
            <button className="gradient-btn px-6 py-3 rounded-xl">
              <span>Mulai Onboarding</span>
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const concentration = CONCENTRATION_TRACKS.find(t => t.id === roadmap.concentration.id);

  return (
    <div className="min-h-screen">
      {/* Ambient backgrounds */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-accent-purple/5 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-accent-blue/5 blur-[100px]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Beranda</span>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-purple to-accent-blue flex items-center justify-center">
              <Compass className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-semibold">Jalur Belajarmu</span>
          </div>
          <Link href="/onboarding">
            <button className="text-xs px-3 py-1.5 rounded-lg bg-surface-bright border border-border text-muted-foreground hover:text-foreground hover:border-accent-purple/30 transition-all">
              <RefreshCw className="w-3 h-3 inline mr-1" />
              Ulangi
            </button>
          </Link>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="relative z-10 max-w-5xl mx-auto px-4 py-8 space-y-8">
        {/* Hero / Persona */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <PersonaCard persona={roadmap.persona} timeline={roadmap.timeline} />
        </motion.div>

        {/* Concentration Recommendation */}
        {concentration && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ConcentrationCard
              track={concentration}
              reason={roadmap.concentration.reason}
            />
          </motion.div>
        )}

        {/* First Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <FirstActionCard action={roadmap.firstAction} />
        </motion.div>

        {/* Semester Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-6">
            Peta Jalan <span className="gradient-text">Semestermu</span>
          </h2>
          <SemesterTimeline steps={roadmap.roadmap} concentrationId={roadmap.concentration.id} />
        </motion.div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <ToolsGrid tools={roadmap.tools} />
        </motion.div>

        {/* Career Outlook */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <CareerPathCard outlook={roadmap.careerOutlook} />
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-center py-12"
        >
          <p className="text-muted-foreground mb-4">Siap memulai perjalanan Data Science-mu?</p>
          <button className="gradient-btn px-8 py-4 rounded-xl text-base">
            <span>🚀 Mulai Belajar</span>
          </button>
          <p className="text-xs text-muted mt-4">Simpan halaman ini untuk melihat peta jalanmu kapan saja</p>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6 text-center relative z-10">
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} PathFinder AI — Penasihat Kurikulum Data Science
        </p>
      </footer>
    </div>
  );
}
