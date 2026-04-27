'use client';

import { motion } from 'framer-motion';
import { Wrench } from 'lucide-react';

interface ToolsGridProps {
  tools: string[];
}

const TOOL_COLORS = [
  '#8B5CF6', '#3B82F6', '#06B6D4', '#10B981', '#F59E0B',
  '#EC4899', '#EF4444', '#6366F1', '#14B8A6', '#F97316',
];

export function ToolsGrid({ tools }: ToolsGridProps) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <Wrench className="w-5 h-5 text-accent-blue" />
        <h2 className="text-2xl font-bold">
          <span className="gradient-text">Tools</span> yang Direkomendasikan
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {tools.map((tool, i) => {
          const color = TOOL_COLORS[i % TOOL_COLORS.length];
          return (
            <motion.div
              key={tool}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="glass-card p-4 text-center group cursor-default"
            >
              <div
                className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center text-lg font-bold transition-transform group-hover:scale-110"
                style={{ background: `${color}15`, color }}
              >
                {tool.charAt(0).toUpperCase()}
              </div>
              <p className="text-sm font-medium text-foreground truncate">{tool}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
