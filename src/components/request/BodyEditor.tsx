import React, { useState } from 'react';
import { useRequest } from '../../context/RequestContext';

const BodyEditor: React.FC = () => {
  const { body, setBody, method } = useRequest();
  const [error, setError] = useState<string | null>(null);
  
  const isDisabled = method === 'GET' || method === 'HEAD';

  const handleBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setBody(value);
    
    // Try to validate JSON if there's content
    if (value.trim()) {
      try {
        JSON.parse(value);
        setError(null);
      } catch (err) {
        setError('Invalid JSON format');
      }
    } else {
      setError(null);
    }
  };

  const formatJson = () => {
    try {
      const parsed = JSON.parse(body);
      setBody(JSON.stringify(parsed, null, 2));
      setError(null);
    } catch (err) {
      setError('Cannot format: Invalid JSON');
    }
  };

  if (isDisabled) {
    return (
      <div className="p-8 text-center text-gray-500">
        Request body not applicable for {method} requests
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b border-gray-700 flex justify-between items-center">
        <h3 className="text-sm font-medium text-gray-300">JSON</h3>
        <button
          onClick={formatJson}
          disabled={!body.trim()}
          className={`text-sm ${body.trim() ? 'text-blue-400 hover:text-blue-300' : 'text-gray-500 cursor-not-allowed'}`}
        >
          Format
        </button>
      </div>
      
      <div className="flex-1 relative">
        <textarea
          value={body}
          onChange={handleBodyChange}
          placeholder="Enter JSON body"
          className="w-full h-full p-4 bg-gray-900 text-gray-100 font-mono text-sm resize-none focus:outline-none"
          spellCheck="false"
        />
        
        {error && (
          <div className="absolute bottom-2 right-2 bg-red-900 text-white px-3 py-1 rounded-md text-xs">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default BodyEditor;