import React from 'react';
import { APITester } from './components/APITester';
import Header from './components/layout/Header';
import { RequestProvider } from './context/RequestContext';

function App() {
  return (
    <RequestProvider>
      <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-6">
          <APITester />
        </main>
      </div>
    </RequestProvider>
  );
}

export default App;