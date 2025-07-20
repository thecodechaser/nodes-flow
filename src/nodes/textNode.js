// textNode.js

import { useState, useEffect, useRef } from 'react';
import { Handle, Position } from 'reactflow';
import {
  FileText,
} from 'lucide-react';

const VARIABLE_REGEX = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const [height, setHeight] = useState(80);
  const textareaRef = useRef(null);

  useEffect(() => {
    const matches = [...currText.matchAll(VARIABLE_REGEX)];
    const vars = Array.from(new Set(matches.map((m) => m[1])));
    setVariables(vars);
  }, [currText]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      setHeight(textareaRef.current.scrollHeight + 40);
    }
  }, [currText]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <div
      className="
        w-[300px] 
        bg-white 
        rounded-lg 
        shadow-md 
        font-sans
        transition
        duration-200
        hover:shadow-lg
        hover:border-green-400
        node-card
        pb-16
      "
      style={{ height }}
    >
      {variables.map((variable, index) => (
        <Handle
          key={variable}
          type="target"
          position={Position.Left}
          id={`${id}-${variable}`}
          style={{
            top: 32 + index * 24,
            backgroundColor: 'rgba(0, 0, 255, 0.349)',
            borderRadius: '9999px',
          }}
          className="w-1 h-1 !bg-gray-600 !border-2 !border-gray-600"
        />
      ))}

      <div className="p-4 mb-2 text-lg font-semibold text-gray-800 bg-teal-200 rounded-t-lg"><FileText className="w-4 h-4 text-gray-600 align-middle" /> Text</div>

      <textarea
        ref={textareaRef}
        className="w-5/6 h-full p-2 m-4 font-mono transition border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
        value={currText}
        onChange={handleTextChange}
        spellCheck={false}
      />

      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        style={{
          top: '50%',
          backgroundColor: 'rgba(0, 0, 255, 0.349)',
          borderRadius: '9999px',
        }}
        className="w-1 h-1 !bg-gray-600 !border-2 !border-gray-600"
      />
    </div>
  );
};
