import React from 'react';
import RequestPanel from './request/RequestPanel';
import ResponsePanel from './response/ResponsePanel';
import { useRequest } from '../context/RequestContext';

export const APITester: React.FC = () => {
  const { loading } = useRequest();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
      <RequestPanel />
      <ResponsePanel />
      
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-4 rounded-lg flex items-center space-x-3">
            <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-blue-500"></div>
            <span>Processing request...</span>
          </div>
        </div>
      )}
    </div>
  );
};