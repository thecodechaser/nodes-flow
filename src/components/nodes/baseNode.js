import { useState } from 'react';
import { Handle, Position } from 'reactflow';

const posMap = {
  Left: Position.Left,
  Right: Position.Right,
  Top: Position.Top,
  Bottom: Position.Bottom,
};

export const BaseNode = ({ id, data, config }) => {
  const [state, setState] = useState(() => {
    const initial = {};
    config.fields.forEach((field) => {
      initial[field.key] =
        data?.[field.key] ||
        (field.default ? field.default + id : field.options?.[0] || '');
    });
    return initial;
  });

  const handleChange = (key) => (e) => {
    setState((prev) => ({ ...prev, [key]: e.target.value }));
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
      "
    >
      <div className="p-4 mb-3 text-lg font-semibold text-gray-800 bg-teal-200 rounded-t-lg">
      <config.icon className="w-5 h-5 mb-1 mr-1 text-gray-600 align-middle" />
        {config.title}
      </div>

      <div className="p-4 space-y-4 ">
        {config.fields.map((field) => (
          <div key={field.key} className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700">
              {field.label}
            </label>

            {field.type === 'text' && (
              <input
              type="text"
              value={state[field.key]}
              onChange={handleChange(field.key)}
              className="p-2 font-mono text-gray-800 transition bg-white rounded-md shadow-none appearance-none text-field focus:outline-none focus:ring-2 focus:ring-blue-500"
            />            
            )}

            {field.type === 'select' && (
              <select
                value={state[field.key]}
                onChange={handleChange(field.key)}
                className="px-3 py-2 transition bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {field.options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            )}
          </div>
        ))}
      </div>

      {config.handles.map((handle) => (
        <Handle
          key={handle.idSuffix}
          type={handle.type}
          position={posMap[handle.position]}
          id={`${id}-${handle.idSuffix}`}
          style={{
            backgroundColor: 'rgba(0, 0, 255, 0.349)',
            borderRadius: '9999px',
          }}
          className="w-1 h-1 !bg-gray-600 !border-2 !border-gray-600"
        />
      ))}
    </div>
  );
};
