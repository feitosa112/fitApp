"use client";

import { useState } from "react";
import "../styles/notifications.css";

type Notification = {
  id: number;
  type: "training" | "system";
  message: string;
  read: boolean;
};

export default function Notifications() {
  const [filter, setFilter] = useState<"all" | "training" | "system">("all");
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 1, type: "training", message: "Tvoj trening počinje u 18:00", read: false },
    { id: 2, type: "system", message: "Nadogradnja aplikacije dostupna", read: false },
    { id: 3, type: "training", message: "Novi izazov je spreman!", read: true },
  ]);

  const filtered = notifications.filter(n => filter === "all" || n.type === filter);

  const markAsRead = (id: number) => {
    setNotifications(prev =>
      prev.map(n => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const deleteNotification = (id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <section className="notifications-section">
      <div className="notif-header">
        <h2>Notifications & Reminders</h2>
        <div className="notif-filters">
          <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>All</button>
          <button className={filter === "training" ? "active" : ""} onClick={() => setFilter("training")}>Training</button>
          <button className={filter === "system" ? "active" : ""} onClick={() => setFilter("system")}>System</button>
        </div>
      </div>

      <div className="notif-list">
        {filtered.length === 0 && <p className="empty-msg">No notifications</p>}
        {filtered.map(n => (
          <div key={n.id} className={`notif-item ${n.read ? "read" : ""}`}>
            <p>{n.message}</p>
            <div className="notif-actions">
              {!n.read && <button onClick={() => markAsRead(n.id)}>Mark as read</button>}
              <button onClick={() => deleteNotification(n.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
