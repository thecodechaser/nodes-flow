import { Send } from 'lucide-react';

export const outputNodeConfig = {
  title: "Output",
  icon: Send,
  fields: [
    { label: "Name", key: "outputName", type: "text", default: "output_" },
    { label: "Type", key: "outputType", type: "select", options: ["Text", "Image"] }
  ],
  handles: [
    { type: "target", position: "Left", idSuffix: "value" }
  ]
};
