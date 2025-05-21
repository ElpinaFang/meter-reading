import React, { useState } from 'react';
import { postReading } from '../services/api';

const ReadingForm = () => {
  const [form, setForm] = useState({ userId: '', electricity: '', water: '' });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const payload = {
      ...form,
      electricity: parseFloat(form.electricity),
      water: parseFloat(form.water),
      readingDate: new Date().toISOString(),
    };
    await postReading(payload);
    setForm({ userId: '', electricity: '', water: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white shadow rounded">
      <input
        name="userId"
        value={form.userId}
        onChange={handleChange}
        className="w-full border rounded px-3 py-2"
        placeholder="User ID"
        required
      />
      <input
        name="electricity"
        value={form.electricity}
        onChange={handleChange}
        className="w-full border rounded px-3 py-2"
        placeholder="Electricity"
        required
      />
      <input
        name="water"
        value={form.water}
        onChange={handleChange}
        className="w-full border rounded px-3 py-2"
        placeholder="Water"
        required
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Submit
      </button>
    </form>
  );
};

export default ReadingForm;
