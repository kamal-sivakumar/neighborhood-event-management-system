import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">Neighborhood Event Hub</h1>
      <p className="mb-6">Welcome! Manage your local events easily.</p>
      <div className="flex gap-3">
        <Link to="/add" className="px-4 py-2 rounded shadow bg-indigo-600 text-white">Add Event</Link>
        <Link to="/view" className="px-4 py-2 rounded shadow border">View Events</Link>
      </div>
    </div>
  );
}
