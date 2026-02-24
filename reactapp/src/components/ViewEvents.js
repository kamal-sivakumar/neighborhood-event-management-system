import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function ViewEvents() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://8080-bfcdbbacdcbcbafeefacdccfddffcdadbbbffbbcbf.premiumproject.examly.io/api/events")
      .then((res) => setEvents(res.data))
      .catch(() => window.alert("Failed to fetch events"));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`https://8080-bfcdbbacdcbcbafeefacdccfddffcdadbbbffbbcbf.premiumproject.examly.io/api/events/${id}`).then(() => {
      window.alert("Event deleted successfully!");
      setEvents((prev) => prev.filter((e) => e.eventId !== id));
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Events</h2>
      {events.length === 0 ? (
        <p>No events found.</p>
      ) : (
        <ul className="space-y-3">
          {events.map((event) => (
            <li key={event.eventId} className="p-3 border rounded flex justify-between items-center">
              <span>
                <strong>{event.title}</strong> - {event.description}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => navigate(`/update/${event.eventId}`)}
                  className="px-3 py-1 bg-blue-500 text-white rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(event.eventId)}
                  className="px-3 py-1 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4">
        <Link to="/add" className="px-4 py-2 rounded bg-green-600 text-white">Add New Event</Link>
      </div>
    </div>
  );
}
