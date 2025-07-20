import { File } from 'lucide-react';

export const loggerNodeConfig = {
  title: "Logger",
  icon: File,
  fields: [
    { label: "Label", key: "label", type: "text", default: "log_" }
  ],
  handles: [
    { type: "target", position: "Left", idSuffix: "input" }
  ]
};
