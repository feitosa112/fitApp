"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./styles/events.css";

type Event = {
  id: string;
  title: string;
  date: string;
  time: string;
  type: "Webinar" | "Radionica" | "Live trening";
  description: string;
  premium: boolean;
  past?: boolean;
};

const mockEvents: Event[] = [
  {
    id: "1",
    title: "Full Body Live Workout",
    date: "2025-10-05",
    time: "18:00",
    type: "Live trening",
    description: "Intenzivan trening celog tela sa trenerom Markom.",
    premium: false,
  },
  {
    id: "2",
    title: "Healthy Nutrition Webinar",
    date: "2025-10-10",
    time: "20:00",
    type: "Webinar",
    description: "Nauči kako da balansiraš ishranu i trening.",
    premium: true,
  },
  {
    id: "3",
    title: "HIIT Workshop",
    date: "2025-09-15",
    time: "17:00",
    type: "Radionica",
    description: "Praktična radionica za HIIT treninge.",
    premium: false,
    past: true,
  },
];

export default function EventsPage() {
  const [filter, setFilter] = useState("all");
  const router = useRouter();

  const filteredEvents = mockEvents.filter((event) =>
    filter === "all" ? true : event.type === filter
  );

  return (
    <section className="events">
      <h1 className="events-title">Upcoming & Past Events</h1>

      {/* Filters */}
      <div className="filters">
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All Events</option>
          <option value="Webinar">Webinari</option>
          <option value="Radionica">Radionice</option>
          <option value="Live trening">Live treninzi</option>
        </select>
      </div>

      {/* Events List */}
      <div className="events-list">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div
              key={event.id}
              className={`event-card ${event.past ? "past" : ""}`}
              onClick={() => router.push(`/events/${event.id}`)}
            >
              <h2>{event.title}</h2>
              <p className="event-meta">
                {event.date} – {event.time} | {event.type}
              </p>
              <p className="event-desc">{event.description}</p>
              {event.premium ? (
                <span className="tag premium">Premium</span>
              ) : (
                <span className="tag free">Free</span>
              )}
            </div>
          ))
        ) : (
          <p className="no-events">Trenutno nema dostupnih događaja.</p>
        )}
      </div>
    </section>
  );
}
