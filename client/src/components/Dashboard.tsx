import React, { useEffect, useState } from 'react';
import { getReadings } from '../services/api';

interface MeterReading {
  id: number;
  userId: string;
  readingDate: string;
  electricity: number;
  water: number;
}

const Dashboard = () => {
  const [readings, setReadings] = useState<MeterReading[]>([]);

  useEffect(() => {
    getReadings().then((res: { data: MeterReading[] }) => setReadings(res.data));
  }, []);

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold text-blue-800 mb-4 text-center">📊 Readings Dashboard</h2>
      <div className="grid gap-4">
        {readings.map((r) => (
          <div
            key={r.id}
            className="bg-white p-4 shadow rounded border border-gray-200 hover:shadow-lg transition"
          >
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>User: <span className="font-medium text-gray-800">{r.userId}</span></span>
              <span>{new Date(r.readingDate).toLocaleDateString()}</span>
            </div>
            <div className="flex justify-around text-lg font-semibold">
              <div className="text-yellow-600">⚡ {r.electricity} kWh</div>
              <div className="text-blue-600">💧 {r.water} L</div>
            </div>
          </div>
        ))}
        {readings.length === 0 && (
          <p className="text-center text-gray-500">No readings found.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
