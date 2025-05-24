import React, { useState } from 'react';
import { postReading } from '../services/api';

const ReadingForm = () => {
  const [form, setForm] = useState({ userId: '', electricity: '', water: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-md p-6 flex flex-col md:flex-row items-center gap-4"
    >
      <input
        type="text"
        name="userId"
        value={form.userId}
        onChange={handleChange}
        placeholder="User ID"
        required
        className="flex-1 px-4 py-2 border rounded w-full"
      />
      <input
        type="number"
        name="electricity"
        value={form.electricity}
        onChange={handleChange}
        placeholder="Electricity (kWh)"
        required
        className="flex-1 px-4 py-2 border rounded w-full"
      />
      <input
        type="number"
        name="water"
        value={form.water}
        onChange={handleChange}
        placeholder="Water (L)"
        required
        className="flex-1 px-4 py-2 border rounded w-full"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded w-full md:w-auto"
      >
        Submit
      </button>
    </form>
  );
};

export default ReadingForm;
