import { Globe } from 'lucide-react';

export const apiNodeConfig = {
  title: "API Call",
  icon: Globe,
  fields: [
    { label: "Endpoint", key: "endpoint", type: "text", default: "https://api.example.com" },
    { label: "Method", key: "method", type: "select", options: ["GET", "POST", "PUT", "DELETE"] }
  ],
  handles: [
    { type: "target", position: "Left", idSuffix: "trigger" },
    { type: "source", position: "Right", idSuffix: "response" }
  ]
};
