import React from 'react';
import { X, Plus } from 'lucide-react';
import { useRequest } from '../../context/RequestContext';

const HeadersEditor: React.FC = () => {
  const { headers, setHeaders } = useRequest();

  const handleAddHeader = () => {
    setHeaders([...headers, { key: '', value: '' }]);
  };

  const handleRemoveHeader = (index: number) => {
    const newHeaders = [...headers];
    newHeaders.splice(index, 1);
    setHeaders(newHeaders);
  };

  const handleHeaderChange = (index: number, field: 'key' | 'value', value: string) => {
    const newHeaders = [...headers];
    newHeaders[index][field] = value;
    setHeaders(newHeaders);
  };

  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-medium text-gray-300">Headers</h3>
        <button 
          onClick={handleAddHeader}
          className="text-sm text-blue-400 hover:text-blue-300 flex items-center space-x-1"
        >
          <Plus size={16} />
          <span>Add Header</span>
        </button>
      </div>

      {headers.length === 0 ? (
        <div className="text-center py-6 text-gray-500">
          No headers added. Click "Add Header" to add a new header.
        </div>
      ) : (
        <div className="space-y-2">
          {headers.map((header, index) => (
            <div key={index} className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Header name"
                value={header.key}
                onChange={(e) => handleHeaderChange(index, 'key', e.target.value)}
                className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-100 placeholder-gray-400 text-sm"
              />
              <input
                type="text"
                placeholder="Value"
                value={header.value}
                onChange={(e) => handleHeaderChange(index, 'value', e.target.value)}
                className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-100 placeholder-gray-400 text-sm"
              />
              <button
                onClick={() => handleRemoveHeader(index)}
                className="p-2 text-gray-400 hover:text-red-400"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeadersEditor;