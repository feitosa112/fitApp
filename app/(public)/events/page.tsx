"use client";

import { useParams, useRouter } from "next/navigation";
import "./../events.css";

const mockEventDetails = {
  1: {
    title: "Full Body Live Workout",
    description: "Detaljan opis treninga sa Markom...",
    trainer: "Marko Jovanović",
    duration: "60 min",
    premium: false,
  },
  2: {
    title: "Healthy Nutrition Webinar",
    description: "Webinar o zdravoj ishrani...",
    trainer: "Ana Petrović",
    duration: "90 min",
    premium: true,
  },
};

export default function EventDetailsPage() {
  const { id } = useParams();
  const router = useRouter();

  const event = mockEventDetails[id as keyof typeof mockEventDetails];

  if (!event) {
    return <p>Event not found</p>;
  }

  return (
    <section className="event-details">
      <h1>{event.title}</h1>
      <p>{event.description}</p>
      <p>
        <strong>Trainer:</strong> {event.trainer}
      </p>
      <p>
        <strong>Duration:</strong> {event.duration}
      </p>

      <button
        className="btn-join"
        onClick={() =>
          event.premium
            ? router.push("/auth/subscription")
            : alert("You joined the event!")
        }
      >
        {event.premium ? "Register Now" : "Join Event"}
      </button>
    </section>
  );
}
