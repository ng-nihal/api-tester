export interface RequestHistory {
  id: string;
  url: string;
  method: string;
  timestamp: number;
  statusCode?: number;
}

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS' | 'HEAD';

export interface Header {
  key: string;
  value: string;
}