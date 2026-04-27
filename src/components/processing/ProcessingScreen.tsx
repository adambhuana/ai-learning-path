'use client';

import { motion } from 'framer-motion';
import { Brain, Sparkles, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';

const PROCESSING_MESSAGES = [
  'Menganalisis profil kamu...',
  'Mencocokkan tujuanmu dengan kurikulum...',
  'Memilih jalur konsentrasi idealmu...',
  'Membangun peta jalan semester...',
  'Mengidentifikasi tools yang direkomendasikan...',
  'Menyusun jalur belajar personalmu...',
];

export function ProcessingScreen() {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % PROCESSING_MESSAGES.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        {/* Animated brain icon */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 border border-accent-purple/20 flex items-center justify-center animate-pulse-glow"
        >
          <Brain className="w-12 h-12 text-accent-purple" />
        </motion.div>

        {/* Sparkles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center justify-center gap-2 mb-4"
        >
          <Sparkles className="w-5 h-5 text-accent-cyan" />
          <span className="text-sm font-medium text-accent-cyan">AI sedang bekerja</span>
          <Sparkles className="w-5 h-5 text-accent-cyan" />
        </motion.div>

        {/* Rotating messages */}
        <div className="h-8 relative overflow-hidden">
          <motion.p
            key={messageIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-lg text-foreground font-medium"
          >
            {PROCESSING_MESSAGES[messageIndex]}
          </motion.p>
        </div>

        {/* Spinner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <Loader2 className="w-6 h-6 text-muted animate-spin mx-auto" />
        </motion.div>
      </div>
    </div>
  );
}
