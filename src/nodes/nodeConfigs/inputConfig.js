import { Inbox } from 'lucide-react';

export const inputNodeConfig = {
  title: "Input",
  icon: Inbox,
  fields: [
    { label: "Name", key: "inputName", type: "text", default: "input_" },
    { label: "Type", key: "inputType", type: "select", options: ["Text", "File"] }
  ],
  handles: [
    { type: "source", position: "Right", idSuffix: "value" }
  ]
};
