'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Star } from 'lucide-react';
import { ConcentrationTrack } from '@/lib/curriculum-data';

interface ConcentrationCardProps {
  track: ConcentrationTrack;
  reason: string;
}

export function ConcentrationCard({ track, reason }: ConcentrationCardProps) {
  return (
    <div className="glass-card p-8 relative overflow-hidden">
      {/* Color accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: `linear-gradient(to right, ${track.color}, ${track.color}80)` }}
      />

      <div className="flex items-start gap-3 mb-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
          style={{ background: `${track.color}15` }}
        >
          {track.icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <Star className="w-4 h-4" style={{ color: track.color }} />
            <span className="text-xs font-medium uppercase tracking-wider" style={{ color: track.color }}>
              Konsentrasi yang Direkomendasikan
            </span>
          </div>
          <h3 className="text-xl font-bold">{track.name}</h3>
        </div>
      </div>

      <p className="text-muted-foreground text-sm mb-5 pl-15">{reason}</p>

      <div className="grid sm:grid-cols-2 gap-3">
        {track.courses.map((course, i) => (
          <motion.div
            key={course.name}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-surface border border-border"
          >
            <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: track.color }} />
            <span className="text-sm text-foreground">{course.name}</span>
            <span className="text-xs text-muted ml-auto">{course.credits} CP</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
