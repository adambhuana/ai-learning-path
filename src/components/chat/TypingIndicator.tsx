'use client';

import { motion } from 'framer-motion';
import { Bot } from 'lucide-react';

export function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="flex gap-3 py-3"
    >
      <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br from-accent-purple to-accent-blue flex items-center justify-center">
        <Bot className="w-4 h-4 text-white" />
      </div>
      <div className="bg-surface-bright border border-border rounded-2xl rounded-tl-md px-5 py-4 flex items-center gap-1.5">
        <span className="typing-dot w-2 h-2 rounded-full bg-accent-purple/60 inline-block" />
        <span className="typing-dot w-2 h-2 rounded-full bg-accent-blue/60 inline-block" />
        <span className="typing-dot w-2 h-2 rounded-full bg-accent-cyan/60 inline-block" />
      </div>
    </motion.div>
  );
}
