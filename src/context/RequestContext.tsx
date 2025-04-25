import React, { createContext, useContext, useState, ReactNode } from 'react';

type HeaderPair = {
  key: string;
  value: string;
};

type ResponseType = {
  status: number;
  statusText: string;
  data: any;
  headers: Headers;
};

interface RequestContextType {
  url: string;
  setUrl: (url: string) => void;
  method: string;
  setMethod: (method: string) => void;
  headers: HeaderPair[];
  setHeaders: (headers: HeaderPair[]) => void;
  body: string;
  setBody: (body: string) => void;
  response: ResponseType | null;
  setResponse: (response: ResponseType | null) => void;
  loading: boolean;
  responseTime: number | null;
  executeRequest: () => void;
  requestHistory: {
    url: string;
    method: string;
    timestamp: number;
  }[];
}

const RequestContext = createContext<RequestContextType | undefined>(undefined);

export const RequestProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [url, setUrl] = useState<string>('https://jsonplaceholder.typicode.com/todos/1');
  const [method, setMethod] = useState<string>('GET');
  const [headers, setHeaders] = useState<HeaderPair[]>([
    { key: 'Content-Type', value: 'application/json' }
  ]);
  const [body, setBody] = useState<string>('');
  const [response, setResponse] = useState<ResponseType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [responseTime, setResponseTime] = useState<number | null>(null);
  const [requestHistory, setRequestHistory] = useState<{ url: string; method: string; timestamp: number }[]>([]);

  const executeRequest = async () => {
    if (!url) return;
    
    // Add to history
    setRequestHistory([
      { url, method, timestamp: Date.now() },
      ...requestHistory.slice(0, 9) // Keep last 10 items
    ]);
    
    setLoading(true);
    setResponse(null);
    
    const startTime = performance.now();
    
    try {
      // Prepare headers
      const requestHeaders = new Headers();
      headers.forEach(header => {
        if (header.key && header.value) {
          requestHeaders.append(header.key, header.value);
        }
      });
      
      // Prepare options
      const options: RequestInit = {
        method,
        headers: requestHeaders,
        mode: 'cors',
      };
      
      // Add body if not GET or HEAD
      if (method !== 'GET' && method !== 'HEAD' && body.trim()) {
        try {
          // Try parsing as JSON first (validates it's proper JSON)
          const bodyData = JSON.parse(body);
          options.body = JSON.stringify(bodyData);
        } catch (e) {
          // If it's not valid JSON, send as is
          options.body = body;
        }
      }
      
      const res = await fetch(url, options);
      const endTime = performance.now();
      setResponseTime(Math.round(endTime - startTime));
      
      // Try to parse response as JSON first
      let data: any;
      const contentType = res.headers.get('content-type');
      
      if (contentType && contentType.includes('application/json')) {
        data = await res.json();
      } else {
        // If not JSON, get as text
        data = await res.text();
      }
      
      setResponse({
        status: res.status,
        statusText: res.statusText,
        data,
        headers: res.headers
      });
    } catch (error) {
      const endTime = performance.now();
      setResponseTime(Math.round(endTime - startTime));
      
      console.error('Request error:', error);
      
      setResponse({
        status: 0,
        statusText: 'Error',
        data: error instanceof Error ? error.message : 'Unknown error',
        headers: new Headers()
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <RequestContext.Provider
      value={{
        url,
        setUrl,
        method,
        setMethod,
        headers,
        setHeaders,
        body,
        setBody,
        response,
        setResponse,
        loading,
        responseTime,
        executeRequest,
        requestHistory
      }}
    >
      {children}
    </RequestContext.Provider>
  );
};

export const useRequest = (): RequestContextType => {
  const context = useContext(RequestContext);
  if (context === undefined) {
    throw new Error('useRequest must be used within a RequestProvider');
  }
  return context;
};