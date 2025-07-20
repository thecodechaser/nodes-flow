import { Brain } from 'lucide-react';

export const llmNodeConfig = {
  title: "LLM",
  icon: Brain,
  fields: [],
  handles: [
    { type: "target", position: "Left", idSuffix: "system", style: { top: `${100 / 3}%` } },
    { type: "target", position: "Left", idSuffix: "prompt", style: { top: `${200 / 3}%` } },
    { type: "source", position: "Right", idSuffix: "response" }
  ]
};
