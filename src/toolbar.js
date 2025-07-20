// toolbar.js

import { DraggableNode } from './draggableNode';
import {
  Inbox,
  Brain,
  Send,
  FileText,
  Divide,
  Shuffle,
  File,
  Timer,
  Globe,
} from 'lucide-react';

export const PipelineToolbar = () => {
  return (
    <div className="bg-gray-200 py-4 px-6 border-b border-gray-300 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold text-gray-700 mb-3 text-center">
        🧩 Pipeline Nodes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 justify-center mx-[250px]">
        <DraggableNode
          type="customInput"
          label={
            <>
              <Inbox className="w-4 h-4 inline-block align-middle mr-1" /> Input
            </>
          }
        />
        <DraggableNode
          type="llm"
          label={
            <>
              <Brain className="w-4 h-4 inline-block align-middle mr-1" /> LLM
            </>
          }
        />
        <DraggableNode
          type="customOutput"
          label={
            <>
              <Send className="w-4 h-4 inline-block align-middle mr-1" /> Output
            </>
          }
        />
        <DraggableNode
          type="text"
          label={
            <>
              <FileText className="w-4 h-4 inline-block align-middle mr-1" /> Text
            </>
          }
        />
        <DraggableNode
          type="math"
          label={
            <>
              <Divide className="w-4 h-4 inline-block align-middle mr-1" /> Math
            </>
          }
        />
        <DraggableNode
          type="switch"
          label={
            <>
              <Shuffle className="w-4 h-4 inline-block align-middle mr-1" /> Switch
            </>
          }
        />
        <DraggableNode
          type="logger"
          label={
            <>
              <File className="w-4 h-4 inline-block align-middle mr-1" /> Logger
            </>
          }
        />
        <DraggableNode
          type="delay"
          label={
            <>
              <Timer className="w-4 h-4 inline-block align-middle mr-1" /> Delay
            </>
          }
        />
        <DraggableNode
          type="api"
          label={
            <>
              <Globe className="w-4 h-4 inline-block align-middle mr-1" /> API
            </>
          }
        />
      </div>
    </div>
  );
};
