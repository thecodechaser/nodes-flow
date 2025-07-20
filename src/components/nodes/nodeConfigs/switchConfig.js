import { Shuffle } from 'lucide-react';

export const switchNodeConfig = {
  title: "Switch",
  icon: Shuffle,
  fields: [
    { label: "Condition", key: "condition", type: "select", options: ["Equals", "GreaterThan", "LessThan"] }
  ],
  handles: [
    { type: "target", position: "Left", idSuffix: "input" },
    { type: "source", position: "Right", idSuffix: "true" },
    { type: "source", position: "Right", idSuffix: "false", style: { top: "70%" } }
  ]
};
