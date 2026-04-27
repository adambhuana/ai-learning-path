'use client';

import { motion } from 'framer-motion';
import { Rocket, ArrowRight } from 'lucide-react';

interface FirstActionCardProps {
  action: string;
}

export function FirstActionCard({ action }: FirstActionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative overflow-hidden rounded-2xl"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/20 via-transparent to-accent-cyan/20" />

      <div className="relative p-6 md:p-8 border border-accent-purple/20 rounded-2xl">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-purple to-accent-blue flex items-center justify-center flex-shrink-0">
            <Rocket className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold text-accent-cyan uppercase tracking-wider">Langkah Pertama</span>
              <ArrowRight className="w-3 h-3 text-accent-cyan" />
            </div>
            <p className="text-lg font-medium text-foreground leading-relaxed">{action}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
