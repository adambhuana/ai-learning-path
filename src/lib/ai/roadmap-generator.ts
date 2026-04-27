export interface PersonaData {
  title: string;
  emoji: string;
  description: string;
}

export interface ConcentrationRecommendation {
  id: string;
  reason: string;
}

export interface RoadmapStep {
  semester: string;
  focus: string;
  highlightCourses: string[];
  tip: string;
}

export interface CareerOutlook {
  roles: string[];
  industries: string[];
  salaryRange: string;
}

export interface GeneratedRoadmap {
  complete: boolean;
  persona: PersonaData;
  concentration: ConcentrationRecommendation;
  roadmap: RoadmapStep[];
  tools: string[];
  timeline: string;
  firstAction: string;
  careerOutlook: CareerOutlook;
}

export function parseRoadmapFromMessage(content: string): GeneratedRoadmap | null {
  try {
    // Strategy 1: Extract JSON from markdown code block (```json ... ```)
    const jsonMatch = content.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
    if (jsonMatch) {
      const parsed = JSON.parse(jsonMatch[1]) as GeneratedRoadmap;
      if (parsed.complete && parsed.persona && parsed.concentration && parsed.roadmap) {
        return normalizeRoadmap(parsed);
      }
    }

    // Strategy 2: Find a JSON object with "complete": true anywhere in the text
    const directMatch = content.match(/\{[\s\S]*"complete"\s*:\s*true[\s\S]*\}/);
    if (directMatch) {
      // Find the balanced JSON object
      const jsonStr = extractBalancedJson(directMatch[0]);
      if (jsonStr) {
        const parsed = JSON.parse(jsonStr) as GeneratedRoadmap;
        if (parsed.persona && parsed.concentration && parsed.roadmap) {
          return normalizeRoadmap(parsed);
        }
      }
    }

    // Strategy 3: Try parsing the entire content as JSON (if AI only sent JSON)
    const trimmed = content.trim();
    if (trimmed.startsWith('{') && trimmed.endsWith('}')) {
      const parsed = JSON.parse(trimmed) as GeneratedRoadmap;
      if (parsed.persona && parsed.concentration && parsed.roadmap) {
        parsed.complete = true;
        return normalizeRoadmap(parsed);
      }
    }

    return null;
  } catch {
    return null;
  }
}

/** Normalize concentration IDs to match expected values */
function normalizeRoadmap(roadmap: GeneratedRoadmap): GeneratedRoadmap {
  // Normalize concentration ID (handle "data-engineering", "data engineering", "Data Engineering", etc.)
  const id = roadmap.concentration.id.toLowerCase().trim();
  if (id.includes('ai') || id.includes('ml') || id.includes('machine')) {
    roadmap.concentration.id = 'ai-ml';
  } else if (id.includes('business') || id.includes('bi') || id.includes('intelligence')) {
    roadmap.concentration.id = 'business-intelligence';
  } else if (id.includes('data') && (id.includes('eng') || id.includes('big'))) {
    roadmap.concentration.id = 'data-engineering';
  }

  return roadmap;
}

/** Extract a balanced JSON object from a string that might have extra content */
function extractBalancedJson(str: string): string | null {
  let depth = 0;
  let start = -1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '{') {
      if (depth === 0) start = i;
      depth++;
    } else if (str[i] === '}') {
      depth--;
      if (depth === 0 && start >= 0) {
        return str.slice(start, i + 1);
      }
    }
  }
  return null;
}

export function parseOptionsFromMessage(content: string): { text: string; options: string[] } {
  const optionsMatch = content.match(/\[OPTIONS\]\s*([\s\S]*?)\s*\[\/OPTIONS\]/);
  if (!optionsMatch) {
    return { text: content, options: [] };
  }

  const text = content.replace(/\[OPTIONS\][\s\S]*?\[\/OPTIONS\]/, '').trim();
  const options = optionsMatch[1].split('|').map(o => o.trim()).filter(Boolean);

  return { text, options };
}
