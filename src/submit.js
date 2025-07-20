// submit.js

import { useStore } from './store';
import { useState } from 'react';
import { CheckCircle, XCircle, AlertCircle, Loader2, X } from 'lucide-react';
import { checkDAG } from './helper/checkDag';

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const { num_nodes, num_edges, is_dag } = checkDAG(nodes, edges);
      setResult({ num_nodes, num_edges, is_dag });
    } catch (err) {
      setError(err.message || 'DAG check failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center w-full gap-4 pt-6 pb-12 bg-gray-200">
      {result && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="relative w-full max-w-sm px-6 py-5 text-gray-800 bg-white border border-green-300 rounded-lg shadow-xl result-dialog animate-fade-in">
            <button
              className="absolute text-white border-none outline-none submit-button top-3 right-3 focus:outline-none"
              onClick={() => setResult(null)}
            >
              <X className="w-5 h-5 pt-1" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <h3 className="text-lg font-semibold">Pipeline Submitted</h3>
            </div>
            <div className="p-4 space-y-3 text-sm bg-white rounded-xl">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-600">📦 Nodes</span>
                <span className="font-semibold text-gray-900">
                  {result.num_nodes}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-600">🔗 Edges</span>
                <span className="font-semibold text-gray-900">
                  {result.num_edges}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {result.is_dag ? (
                  <div className="flex items-center gap-2 font-medium text-green-600">
                    <CheckCircle className="w-5 h-5" />
                    <span>This pipeline is a DAG</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 font-medium text-red-600">
                    <XCircle className="w-5 h-5" />
                    <span>This pipeline has cycles</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {error && (
        <div className="w-full max-w-md px-4 py-3 text-sm text-red-700 bg-red-100 border border-red-300 rounded-md">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4" />
            <span>Error: {error}</span>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={handleSubmit}
        disabled={loading}
        className="flex items-center gap-2 px-6 py-4 font-semibold text-white border-none rounded outline-none submit-button focus:outline-none disabled:opacity-50"
      >
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <CheckCircle className="w-4 h-4" />
        )}
        {loading ? 'Submitting...' : 'Submit Pipeline'}
      </button>
    </div>
  );
};
