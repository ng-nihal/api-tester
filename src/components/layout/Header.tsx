import React from 'react';
import { Monitor } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 border-b border-gray-700">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Monitor className="h-6 w-6 text-blue-400" />
            <h1 className="text-xl font-semibold">API Tester</h1>
          </div>
          <div className="text-sm text-gray-400">v0.1.0</div>
        </div>
      </div>
    </header>
  );
};

export default Header;