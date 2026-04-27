'use client';

import { motion } from 'framer-motion';

interface QuickReplyButtonsProps {
  options: string[];
  onSelect: (option: string) => void;
}

export function QuickReplyButtons({ options, onSelect }: QuickReplyButtonsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="flex flex-wrap gap-2.5 py-3 pl-12"
    >
      {options.map((option, i) => (
        <motion.button
          key={option}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.08 }}
          onClick={() => onSelect(option)}
          className="px-4 py-2.5 rounded-xl bg-surface-bright border border-border text-sm text-foreground hover:border-accent-purple/40 hover:bg-accent-purple/10 hover:shadow-md hover:shadow-accent-purple/5 transition-all active:scale-95 cursor-pointer text-left"
        >
          {option}
        </motion.button>
      ))}
    </motion.div>
  );
}
