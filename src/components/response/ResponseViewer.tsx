import React, { useState, useEffect } from 'react';
import { useRequest } from '../../context/RequestContext';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const ResponseViewer: React.FC = () => {
  const { response } = useRequest();
  const [content, setContent] = useState<string>('');
  const [contentType, setContentType] = useState<string>('');
  const [isJson, setIsJson] = useState<boolean>(false);
  
  useEffect(() => {
    if (!response) return;
    
    const contentTypeHeader = response.headers.get('content-type') || '';
    setContentType(contentTypeHeader);
    setIsJson(contentTypeHeader.includes('application/json'));
    
    // Format response based on content type
    if (response.data) {
      if (typeof response.data === 'object') {
        setContent(JSON.stringify(response.data, null, 2));
        setIsJson(true);
      } else {
        setContent(String(response.data));
      }
    } else {
      setContent('');
    }
  }, [response]);
  
  if (!response) {
    return null;
  }
  
  return (
    <div className="h-full overflow-auto">
      <div className="w-full h-full">
        <SyntaxHighlighter
          language={isJson ? 'json' : 'text'}
          style={atomOneDark}
          customStyle={{
            margin: 0,
            padding: '1rem',
            height: '100%',
            borderRadius: 0,
            fontSize: '0.9rem',
            backgroundColor: '#1a1a1a',
          }}
        >
          {content || '(No content)'}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default ResponseViewer;