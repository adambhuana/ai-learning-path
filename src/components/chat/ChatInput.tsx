'use client';

import { Send } from 'lucide-react';
import { ChangeEvent, FormEvent } from 'react';

interface ChatInputProps {
  input: string;
  isLoading: boolean;
  hasOptions: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent) => void;
}

export function ChatInput({ input, isLoading, hasOptions, onChange, onSubmit }: ChatInputProps) {
  // Hide the text input when quick reply options are available
  if (hasOptions) {
    return null;
  }

  return (
    <div className="sticky bottom-0 bg-background/80 backdrop-blur-xl border-t border-border">
      <div className="max-w-3xl mx-auto px-4 py-4">
        <form onSubmit={onSubmit} className="flex items-center gap-3">
          <div className="flex-1 relative">
            <input
              type="text"
              value={input}
              onChange={onChange}
              placeholder={isLoading ? 'AI sedang berpikir...' : 'Ketik jawabanmu...'}
              disabled={isLoading}
              className="w-full px-5 py-3.5 rounded-xl bg-surface-bright border border-border text-foreground placeholder:text-muted text-[15px] focus:outline-none focus:border-accent-purple/50 focus:ring-1 focus:ring-accent-purple/20 transition-all disabled:opacity-50"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-purple to-accent-blue flex items-center justify-center text-white disabled:opacity-30 hover:shadow-lg hover:shadow-accent-purple/20 transition-all active:scale-95"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
        <p className="text-xs text-muted text-center mt-2">
          Ketik jawaban kamu di sini
        </p>
      </div>
    </div>
  );
}
