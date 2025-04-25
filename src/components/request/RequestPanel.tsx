import React from 'react';
import { Tabs } from '../ui/Tabs';
import UrlBar from './UrlBar';
import HeadersEditor from './HeadersEditor';
import BodyEditor from './BodyEditor';
import { useRequest } from '../../context/RequestContext';

const RequestPanel: React.FC = () => {
  const { executeRequest } = useRequest();

  const tabs = [
    { id: 'headers', label: 'Headers', content: <HeadersEditor /> },
    { id: 'body', label: 'Body', content: <BodyEditor /> },
  ];

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 shadow-lg overflow-hidden flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-lg font-medium">Request</h2>
      </div>
      
      <UrlBar />
      
      <div className="flex-1 overflow-hidden">
        <Tabs tabs={tabs} />
      </div>
      
      <div className="p-4 border-t border-gray-700 flex justify-end">
        <button
          onClick={executeRequest}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
        >
          Send Request
        </button>
      </div>
    </div>
  );
};

export default RequestPanel;