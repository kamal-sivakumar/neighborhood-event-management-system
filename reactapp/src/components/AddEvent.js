import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

export default function AddEvent() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: '', description: '', date: '', location: '', contactNumber: '', organizerName: '' });

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://8080-bfcdbbacdcbcbafeefacdccfddffcdadbbbffbbcbf.premiumproject.examly.io/api/events', form);
      alert('Event added successfully!');
      navigate('/view');
    } catch (err) {
      console.error(err);
      alert('Failed to add event');
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Add Event</h2>
      <form onSubmit={handleSubmit} className="grid gap-3">
        <input placeholder="Event Title" name="title" value={form.title} onChange={handleChange} className="p-2 border rounded" />
        <textarea placeholder="Description" name="description" value={form.description} onChange={handleChange} className="p-2 border rounded" />
        <input placeholder="Location" name="location" value={form.location} onChange={handleChange} className="p-2 border rounded" />
        <input type="date" name="date" value={form.date} onChange={handleChange} className="p-2 border rounded" />
        <input placeholder="Contact Number" name="contactNumber" value={form.contactNumber} onChange={handleChange} className="p-2 border rounded" />
        <input placeholder="Organizer Name" name="organizerName" value={form.organizerName} onChange={handleChange} className="p-2 border rounded" />
        <div className="flex gap-2">
          <button type="submit" className="px-4 py-2 rounded bg-green-600 text-white">Add Event</button>
          <Link to="/" className="px-4 py-2 rounded border">Cancel</Link>
        </div>
      </form>
    </div>
  );
}
