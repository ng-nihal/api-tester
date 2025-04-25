import React from 'react';
import { Tabs } from '../ui/Tabs';
import ResponseViewer from './ResponseViewer';
import StatusBar from './StatusBar';
import { useRequest } from '../../context/RequestContext';
import ResponseHeaders from './ResponseHeaders';

const ResponsePanel: React.FC = () => {
  const { response } = useRequest();
  
  const tabs = [
    { id: 'body', label: 'Body', content: <ResponseViewer /> },
    { id: 'headers', label: 'Headers', content: <ResponseHeaders /> },
  ];

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 shadow-lg overflow-hidden flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-lg font-medium">Response</h2>
      </div>
      
      <StatusBar />
      
      <div className="flex-1 overflow-hidden">
        {response ? (
          <Tabs tabs={tabs} />
        ) : (
          <div className="h-full flex items-center justify-center text-gray-500">
            Send a request to see the response
          </div>
        )}
      </div>
    </div>
  );
};

export default ResponsePanel;