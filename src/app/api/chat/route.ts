import { createOpenAI } from '@ai-sdk/openai';
import { streamText, convertToModelMessages } from 'ai';
import { getSystemPrompt } from '@/lib/ai/system-prompt';

export const maxDuration = 60;

// Create OpenAI provider using APP_OPENAI_BASE_URL to avoid
// system-level OPENAI_BASE_URL (Ollama at localhost:11434) conflict
const openai = createOpenAI({
  baseURL: process.env.APP_OPENAI_BASE_URL || 'https://api.openai.com/v1',
  apiKey: process.env.APP_OPENAI_API_KEY,
  compatibility: 'compatible',
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  const systemPrompt = getSystemPrompt();

  // Convert UIMessages (parts-based) to ModelMessages (content-based) for streamText
  const modelMessages = await convertToModelMessages(messages);

  const result = streamText({
    // Use openai.chat() to hit /chat/completions instead of /responses
    model: openai.chat('gpt-4o'),
    system: systemPrompt,
    messages: modelMessages,
  });

  return result.toUIMessageStreamResponse();
}

