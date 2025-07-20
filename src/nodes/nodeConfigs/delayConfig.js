import { Timer } from 'lucide-react';

export const delayNodeConfig = {
  title: "Delay",
  icon: Timer,
  fields: [
    { label: "Milliseconds", key: "delayMs", type: "text", default: "1000" }
  ],
  handles: [
    { type: "target", position: "Left", idSuffix: "input" },
    { type: "source", position: "Right", idSuffix: "output" }
  ]
};
