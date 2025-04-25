import React from 'react';
import { useRequest } from '../../context/RequestContext';

const HTTP_METHODS = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS', 'HEAD'];

const UrlBar: React.FC = () => {
  const { method, setMethod, url, setUrl } = useRequest();

  const getMethodColor = (currentMethod: string) => {
    switch (currentMethod) {
      case 'GET': return 'bg-green-700 hover:bg-green-800';
      case 'POST': return 'bg-blue-700 hover:bg-blue-800';
      case 'PUT': return 'bg-orange-700 hover:bg-orange-800';
      case 'DELETE': return 'bg-red-700 hover:bg-red-800';
      case 'PATCH': return 'bg-purple-700 hover:bg-purple-800';
      default: return 'bg-gray-700 hover:bg-gray-800';
    }
  };

  return (
    <div className="p-4 border-b border-gray-700 flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:items-center sm:space-x-2">
      <div className="relative inline-block text-left">
        <select
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          className={`${getMethodColor(method)} text-white font-medium py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto`}
        >
          {HTTP_METHODS.map((httpMethod) => (
            <option key={httpMethod} value={httpMethod}>
              {httpMethod}
            </option>
          ))}
        </select>
      </div>
      
      <div className="flex-1">
        <input
          type="text"
          placeholder="Enter request URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100 placeholder-gray-400"
        />
      </div>
    </div>
  );
};

export default UrlBar;