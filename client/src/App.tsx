import React from 'react';
import ReadingForm from './components/ReadingForm';
import Dashboard from './components/Dashboard';
import ChartSection from './components/ChartSection';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-10">
      <h1 className="text-3xl font-bold text-center text-blue-800">Utility Usage Tracker</h1>
      <ReadingForm />
      <Dashboard />
      <ChartSection />
    </div>
  );
}

export default App;
