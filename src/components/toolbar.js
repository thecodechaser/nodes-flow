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
    <div className="px-6 pt-2 pb-4 bg-gray-200 border-b border-gray-300 shadow-md rounded-xl">
      <h1 className="pt-2 text-xl font-semibold text-blue-700 cursor-pointer">
          Nodes Flow
        </h1>
      <h2 className="mb-3 text-lg font-semibold text-center text-gray-700 toolbar">
        🧩 Pipeline Nodes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 justify-center mx-[250px]">
        <DraggableNode
          type="customInput"
          label={
            <>
              <Inbox className="inline-block w-4 h-4 mr-1 align-middle" /> Input
            </>
          }
        />
        <DraggableNode
          type="llm"
          label={
            <>
              <Brain className="inline-block w-4 h-4 mr-1 align-middle" /> LLM
            </>
          }
        />
        <DraggableNode
          type="customOutput"
          label={
            <>
              <Send className="inline-block w-4 h-4 mr-1 align-middle" /> Output
            </>
          }
        />
        <DraggableNode
          type="text"
          label={
            <>
              <FileText className="inline-block w-4 h-4 mr-1 align-middle" /> Text
            </>
          }
        />
        <DraggableNode
          type="math"
          label={
            <>
              <Divide className="inline-block w-4 h-4 mr-1 align-middle" /> Math
            </>
          }
        />
        <DraggableNode
          type="switch"
          label={
            <>
              <Shuffle className="inline-block w-4 h-4 mr-1 align-middle" /> Switch
            </>
          }
        />
        <DraggableNode
          type="logger"
          label={
            <>
              <File className="inline-block w-4 h-4 mr-1 align-middle" /> Logger
            </>
          }
        />
        <DraggableNode
          type="delay"
          label={
            <>
              <Timer className="inline-block w-4 h-4 mr-1 align-middle" /> Delay
            </>
          }
        />
        <DraggableNode
          type="api"
          label={
            <>
              <Globe className="inline-block w-4 h-4 mr-1 align-middle" /> API
            </>
          }
        />
      </div>
    </div>
  );
};
