'use client';

import { useChat } from '@ai-sdk/react';
import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Compass, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChatMessage } from '@/components/chat/ChatMessage';
import { ChatInput } from '@/components/chat/ChatInput';
import { QuickReplyButtons } from '@/components/chat/QuickReplyButtons';
import { ProgressBar } from '@/components/chat/ProgressBar';
import { TypingIndicator } from '@/components/chat/TypingIndicator';
import { ProcessingScreen } from '@/components/processing/ProcessingScreen';
import { parseRoadmapFromMessage, parseOptionsFromMessage } from '@/lib/ai/roadmap-generator';
import { saveRoadmap, getSessionId } from '@/lib/session';
import type { UIMessage } from 'ai';

/** Extract text content from a UIMessage's parts array */
function getMessageText(message: UIMessage): string {
  return message.parts
    .filter((p): p is { type: 'text'; text: string } => p.type === 'text')
    .map((p) => p.text)
    .join('');
}

/** Check if a message looks like the AI is about to generate a roadmap but didn't include JSON */
function looksLikeFinalizingMessage(text: string): boolean {
  const lowerText = text.toLowerCase();
  const finalizingPhrases = [
    'tunggu sebentar',
    'menyusun roadmap',
    'membuat roadmap',
    'menyiapkan',
    'berdasarkan semua informasi',
    'berdasarkan jawaban',
    'akan menyusun',
    'akan membuat',
    'saya akan menyiapkan',
    'mari saya buatkan',
    'berikut roadmap',
    'berikut adalah',
    'menyusun jalur',
    'membuat jalur',
    'membuat peta',
    'menyusun peta',
    'saya sudah cukup',
    'sudah cukup informasi',
    'sudah memiliki gambaran',
  ];
  return finalizingPhrases.some(phrase => lowerText.includes(phrase));
}

export default function OnboardingPage() {
  const router = useRouter();
  const [questionCount, setQuestionCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showProcessing, setShowProcessing] = useState(false);
  const [currentOptions, setCurrentOptions] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const sessionId = useRef<string>('');
  const hasStarted = useRef(false);
  const retryCount = useRef(0);

  useEffect(() => {
    sessionId.current = getSessionId();
  }, []);

  const { messages, sendMessage, status, error } = useChat({
    id: 'onboarding',
    onError: (err) => {
      console.error('Chat error:', err);
      setErrorMessage(
        err.message.includes('API key') || err.message.includes('401')
          ? 'API key OpenAI tidak ditemukan atau tidak valid. Tambahkan key ke .env.local dan restart server.'
          : `Terjadi kesalahan: ${err.message}`
      );
    },
    onFinish: ({ message }) => {
      if (message.role === 'assistant') {
        const text = getMessageText(message);

        // Check for roadmap completion
        const roadmap = parseRoadmapFromMessage(text);
        if (roadmap) {
          setIsComplete(true);
          setShowProcessing(true);
          saveRoadmap(roadmap);
          setTimeout(() => {
            router.push(`/dashboard/${sessionId.current}`);
          }, 3000);
          return;
        }

        // If the AI sent a "finalizing" message without JSON, auto-retry to get the JSON
        if (looksLikeFinalizingMessage(text) && retryCount.current < 2) {
          retryCount.current += 1;
          // Show processing screen immediately for better UX
          setShowProcessing(true);
          setTimeout(() => {
            sendMessage({
              text: 'Silakan langsung berikan roadmap dalam format JSON sekarang.',
            });
          }, 500);
          return;
        }

        // Parse options
        const { options } = parseOptionsFromMessage(text);
        setCurrentOptions(options);

        // Count AI questions for progress
        setQuestionCount((prev) => prev + 1);
      }
    },
  });

  const isLoading = status === 'submitted' || status === 'streaming';

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, scrollToBottom]);

  // Start conversation on mount
  useEffect(() => {
    if (!hasStarted.current) {
      hasStarted.current = true;
      sendMessage({
        text: 'Halo! Saya ingin menemukan jalur belajar Data Science yang ideal untuk saya.',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleQuickReply = (option: string) => {
    setCurrentOptions([]);
    setErrorMessage(null);
    sendMessage({ text: option });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;
    setCurrentOptions([]);
    setErrorMessage(null);
    sendMessage({ text: inputValue });
    setInputValue('');
  };

  const progress = Math.min((questionCount / 7) * 100, 100);

  if (showProcessing) {
    return <ProcessingScreen />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Kembali</span>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-purple to-accent-blue flex items-center justify-center">
              <Compass className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-semibold">PathFinder AI</span>
          </div>
          <div className="w-16" />
        </div>
        <ProgressBar progress={progress} questionCount={questionCount} />
      </header>

      {/* Chat area */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-4 py-6 space-y-1">
          <AnimatePresence mode="popLayout">
            {messages
              .filter((_, i) => i > 0)
              .map((message) => {
                const isAssistant = message.role === 'assistant';
                const text = getMessageText(message);

                // Don't render the raw JSON roadmap
                if (isAssistant) {
                  const roadmap = parseRoadmapFromMessage(text);
                  if (roadmap) return null;
                }

                // Don't render the auto-retry prompt
                if (!isAssistant && text.includes('format JSON sekarang')) return null;

                const parsed = isAssistant
                  ? parseOptionsFromMessage(text)
                  : null;
                const displayContent = parsed ? parsed.text : text;

                if (!displayContent.trim()) return null;

                return (
                  <ChatMessage
                    key={message.id}
                    role={message.role}
                    content={displayContent}
                  />
                );
              })}
          </AnimatePresence>

          {isLoading && <TypingIndicator />}

          {/* Error message */}
          {(errorMessage || error) && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 mx-2"
            >
              <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-red-300 font-medium">Kesalahan Koneksi</p>
                <p className="text-xs text-red-400/80 mt-1">
                  {errorMessage || error?.message || 'Gagal terhubung ke AI. Periksa API key kamu.'}
                </p>
              </div>
            </motion.div>
          )}

          {/* Quick reply buttons */}
          {!isLoading && currentOptions.length > 0 && !isComplete && (
            <QuickReplyButtons
              options={currentOptions}
              onSelect={handleQuickReply}
            />
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input area - hidden when options are available */}
      {!isComplete && (
        <ChatInput
          input={inputValue}
          isLoading={isLoading}
          hasOptions={currentOptions.length > 0}
          onChange={(e) => setInputValue(e.target.value)}
          onSubmit={handleFormSubmit}
        />
      )}
    </div>
  );
}
