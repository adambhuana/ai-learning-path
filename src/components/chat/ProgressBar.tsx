'use client';

import { motion } from 'framer-motion';

interface ProgressBarProps {
  progress: number;
  questionCount: number;
}

export function ProgressBar({ progress, questionCount }: ProgressBarProps) {
  return (
    <div className="px-4 pb-3">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs text-muted">
            {questionCount === 0 ? 'Memulai...' : `Pertanyaan ${Math.min(questionCount, 7)} dari 7`}
          </span>
          <span className="text-xs text-muted font-medium">{Math.round(progress)}%</span>
        </div>
        <div className="h-1.5 bg-surface-bright rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan relative"
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="absolute inset-0 shimmer" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
