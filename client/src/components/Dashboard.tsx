import React, { useEffect, useState } from 'react';
import { getReadings } from '../services/api';

const Dashboard = () => {
  const [readings, setReadings] = useState<any[]>([]);

  useEffect(() => {
    getReadings().then(res => setReadings(res.data));
  }, []);

  return (
    <div>
      <h2>Meter Readings</h2>
      <ul>
        {readings.map(r => (
          <li key={r.id}>
            {r.userId} | {r.readingDate.slice(0, 10)} | ⚡ {r.electricity} kWh | 💧 {r.water} L
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
