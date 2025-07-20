import { Divide } from 'lucide-react';

export const mathNodeConfig = {
  title: "Math",
  icon: Divide,
  fields: [
    { label: "Operation", key: "operation", type: "select", options: ["Add", "Subtract", "Multiply", "Divide"] }
  ],
  handles: [
    { type: "target", position: "Left", idSuffix: "a", style: { top: "30%" } },
    { type: "target", position: "Left", idSuffix: "b", style: { top: "70%" } },
    { type: "source", position: "Right", idSuffix: "result" }
  ]
};
