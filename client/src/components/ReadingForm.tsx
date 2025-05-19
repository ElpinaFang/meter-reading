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
    <form onSubmit={handleSubmit}>
      <input name="userId" value={form.userId} onChange={handleChange} placeholder="User ID" required />
      <input name="electricity" value={form.electricity} onChange={handleChange} placeholder="Electricity" required />
      <input name="water" value={form.water} onChange={handleChange} placeholder="Water" required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReadingForm;
