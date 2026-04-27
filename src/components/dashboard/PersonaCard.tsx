'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Clock } from 'lucide-react';
import { PersonaData } from '@/lib/ai/roadmap-generator';

interface PersonaCardProps {
  persona: PersonaData;
  timeline: string;
}

export function PersonaCard({ persona, timeline }: PersonaCardProps) {
  return (
    <div className="glass-card p-8 glow-border overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-accent-purple/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 border border-accent-purple/20 flex items-center justify-center text-4xl flex-shrink-0"
          >
            {persona.emoji}
          </motion.div>

          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <GraduationCap className="w-4 h-4 text-accent-purple" />
              <span className="text-xs font-medium text-accent-purple uppercase tracking-wider">Profil Kamu</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{persona.title}</h1>
            <p className="text-muted-foreground leading-relaxed">{persona.description}</p>
          </div>

          <div className="flex-shrink-0 px-5 py-3 rounded-xl bg-surface-bright border border-border text-center">
            <Clock className="w-4 h-4 text-accent-cyan mx-auto mb-1" />
            <p className="text-xs text-muted mb-0.5">Estimasi Waktu</p>
            <p className="text-sm font-semibold text-foreground">{timeline}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
