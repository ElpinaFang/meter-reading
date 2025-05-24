import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { getReadings } from '../services/api';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

interface MeterReading {
  id: number;
  userId: string;
  readingDate: string;
  electricity: number;
  water: number;
}

const ChartSection = () => {
  const [readings, setReadings] = useState<MeterReading[]>([]);

  useEffect(() => {
    getReadings().then((res: { data: MeterReading[] }) => {
      const sorted = res.data.sort(
        (a, b) => new Date(a.readingDate).getTime() - new Date(b.readingDate).getTime()
      );
      setReadings(sorted);
    });
  }, []);

  const chartData = {
    labels: readings.map((r) => new Date(r.readingDate).toLocaleDateString()),
    datasets: [
      {
        label: 'Electricity (kWh)',
        data: readings.map((r) => r.electricity),
        borderColor: 'rgb(234, 179, 8)',
        backgroundColor: 'rgba(234, 179, 8, 0.2)',
      },
      {
        label: 'Water (L)',
        data: readings.map((r) => r.water),
        borderColor: 'rgb(37, 99, 235)',
        backgroundColor: 'rgba(37, 99, 235, 0.2)',
      },
    ],
  };

  return (
    <div className="mt-12 bg-white p-6 rounded shadow">
      <h3 className="text-xl font-semibold text-blue-800 mb-4">📈 Usage Trends</h3>
      <Line data={chartData} />
    </div>
  );
};

export default ChartSection;
