import React from 'react';
import { useRequest } from '../../context/RequestContext';

const StatusBar: React.FC = () => {
  const { response, responseTime } = useRequest();
  
  if (!response) {
    return null;
  }

  const getStatusColor = (status: number) => {
    if (status >= 200 && status < 300) return 'bg-green-600';
    if (status >= 300 && status < 400) return 'bg-blue-600';
    if (status >= 400 && status < 500) return 'bg-orange-600';
    if (status >= 500) return 'bg-red-600';
    return 'bg-gray-600';
  };

  return (
    <div className="px-4 py-3 border-b border-gray-700 flex items-center space-x-6">
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-400">Status:</span>
        <span className={`px-2 py-1 rounded-md text-xs font-medium ${getStatusColor(response.status)} text-white`}>
          {response.status} {response.statusText}
        </span>
      </div>
      
      {responseTime !== null && (
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-400">Time:</span>
          <span className="text-sm text-gray-200">{responseTime} ms</span>
        </div>
      )}
    </div>
  );
};

export default StatusBar;