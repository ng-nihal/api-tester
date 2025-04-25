import React from 'react';
import { useRequest } from '../../context/RequestContext';

const ResponseHeaders: React.FC = () => {
  const { response } = useRequest();
  
  if (!response) {
    return null;
  }

  // Convert headers to array for display
  const headers = Array.from(response.headers.entries()).map(([key, value]) => ({ key, value }));
  
  return (
    <div className="h-full overflow-auto">
      <div className="p-4">
        {headers.length > 0 ? (
          <div className="border border-gray-700 rounded-md overflow-hidden">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Header
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody className="bg-gray-800 divide-y divide-gray-700">
                {headers.map((header, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 text-sm text-gray-300 font-mono">
                      {header.key}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-300 font-mono break-all">
                      {header.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            No headers received
          </div>
        )}
      </div>
    </div>
  );
};

export default ResponseHeaders;