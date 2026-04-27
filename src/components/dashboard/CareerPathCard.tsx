'use client';

import { motion } from 'framer-motion';
import { Briefcase, Building2, DollarSign } from 'lucide-react';
import { CareerOutlook } from '@/lib/ai/roadmap-generator';

interface CareerPathCardProps {
  outlook: CareerOutlook;
}

export function CareerPathCard({ outlook }: CareerPathCardProps) {
  return (
    <div className="glass-card p-8">
      <h2 className="text-2xl font-bold mb-6">
        Prospek <span className="gradient-text">Karier</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Roles */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-lg bg-accent-purple/15 flex items-center justify-center">
              <Briefcase className="w-4 h-4 text-accent-purple" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">Peran Target</span>
          </div>
          <div className="space-y-2">
            {outlook.roles.map((role, i) => (
              <motion.div
                key={role}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="px-3 py-2 rounded-lg bg-surface border border-border text-sm text-foreground"
              >
                {role}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Industries */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-lg bg-accent-blue/15 flex items-center justify-center">
              <Building2 className="w-4 h-4 text-accent-blue" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">Industri</span>
          </div>
          <div className="space-y-2">
            {outlook.industries.map((industry, i) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="px-3 py-2 rounded-lg bg-surface border border-border text-sm text-foreground"
              >
                {industry}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Salary */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-lg bg-accent-green/15 flex items-center justify-center">
              <DollarSign className="w-4 h-4 text-accent-green" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">Gaji Awal</span>
          </div>
          <div className="px-4 py-4 rounded-xl bg-gradient-to-br from-accent-green/10 to-accent-cyan/5 border border-accent-green/20">
            <p className="text-lg font-bold text-foreground">{outlook.salaryRange}</p>
            <p className="text-xs text-muted mt-1">Estimasi gaji entry-level</p>
          </div>
        </div>
      </div>
    </div>
  );
}
