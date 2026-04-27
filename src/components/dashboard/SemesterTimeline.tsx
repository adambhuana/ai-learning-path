'use client';

import { motion } from 'framer-motion';
import { BookOpen, Lightbulb } from 'lucide-react';
import { RoadmapStep } from '@/lib/ai/roadmap-generator';

interface SemesterTimelineProps {
  steps: RoadmapStep[];
  concentrationId: string;
}

const SEMESTER_COLORS = [
  '#8B5CF6', '#7C3AED', '#6D28D9',
  '#3B82F6', '#2563EB',
  '#06B6D4', '#0891B2',
  '#10B981', '#059669',
  '#F59E0B',
];

export function SemesterTimeline({ steps, concentrationId }: SemesterTimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-accent-purple via-accent-blue to-accent-cyan hidden md:block" />

      <div className="space-y-4">
        {steps.map((step, i) => {
          const color = SEMESTER_COLORS[i % SEMESTER_COLORS.length];

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex gap-5"
            >
              {/* Timeline node */}
              <div className="flex-shrink-0 hidden md:flex flex-col items-center">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-sm font-bold z-10"
                  style={{ background: color }}
                >
                  {i + 1}
                </div>
              </div>

              {/* Content card */}
              <div className="flex-1 glass-card p-6 group">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <div className="md:hidden inline-flex items-center justify-center w-8 h-8 rounded-lg text-white text-xs font-bold mr-3 mb-2" style={{ background: color }}>
                      {i + 1}
                    </div>
                    <h4
                      className="text-lg font-semibold inline md:block"
                      style={{ color }}
                    >
                      {step.semester}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">{step.focus}</p>
                  </div>
                </div>

                {/* Highlighted Courses */}
                {step.highlightCourses && step.highlightCourses.length > 0 && (
                  <div className="mb-3">
                    <div className="flex items-center gap-1.5 mb-2">
                      <BookOpen className="w-3.5 h-3.5 text-muted" />
                      <span className="text-xs text-muted font-medium">Mata Kuliah Utama</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {step.highlightCourses.map((course, j) => (
                        <span
                          key={j}
                          className="text-xs px-3 py-1.5 rounded-lg border border-border text-foreground"
                          style={{ background: `${color}10`, borderColor: `${color}30` }}
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tip */}
                {step.tip && (
                  <div className="flex items-start gap-2 mt-3 px-3 py-2.5 rounded-lg bg-accent-purple/5 border border-accent-purple/10">
                    <Lightbulb className="w-4 h-4 text-accent-purple flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-muted-foreground leading-relaxed">{step.tip}</p>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
