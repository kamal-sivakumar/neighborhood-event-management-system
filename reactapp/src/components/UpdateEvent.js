import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

export default function UpdateEvent() {
  const { id } = useParams(); // comes from eventId
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    contactNumber: '',
    organizerName: ''
  });

  useEffect(() => {
    const loadEvent = async () => {
      try {
        const res = await axios.get(`https://8080-bfcdbbacdcbcbafeefacdccfddffcdadbbbffbbcbf.premiumproject.examly.io/api/events/${id}`);
        setForm(res.data);
      } catch (err) {
        console.error(err);
        alert('Failed to load event');
      }
    };
    loadEvent();
  }, [id]);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://8080-bfcdbbacdcbcbafeefacdccfddffcdadbbbffbbcbf.premiumproject.examly.io/api/events/${id}`, form);

      alert('Event updated successfully!');
      navigate('/view');
    } catch (err) {
      console.error(err);
      alert('Failed to update event');
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Update Event</h2>
      <form onSubmit={handleSubmit} className="grid gap-3">
        <input placeholder="Event Title" name="title" value={form.title} onChange={handleChange} className="p-2 border rounded" />
        <textarea placeholder="Description" name="description" value={form.description} onChange={handleChange} className="p-2 border rounded" />
        <input placeholder="Location" name="location" value={form.location} onChange={handleChange} className="p-2 border rounded" />
        <input type="date" name="date" value={form.date} onChange={handleChange} className="p-2 border rounded" />
        <input placeholder="Contact Number" name="contactNumber" value={form.contactNumber} onChange={handleChange} className="p-2 border rounded" />
        <input placeholder="Organizer Name" name="organizerName" value={form.organizerName} onChange={handleChange} className="p-2 border rounded" />
        <div className="flex gap-2">
          <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white">Update Event</button>
          <Link to="/view" className="px-4 py-2 rounded border">Cancel</Link>
        </div>
      </form>
    </div>
  );
}
