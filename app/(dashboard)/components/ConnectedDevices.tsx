"use client";

import { useState } from "react";
import "../styles/dashboard.css";

interface Device {
  id: string;
  name: string;
  icon: string;
  status: "connected" | "disconnected";
}

export default function ConnectedDevices() {
  const [devices, setDevices] = useState<Device[]>([
    { id: "apple_watch", name: "Apple Watch", icon: "⌚", status: "connected" },
    { id: "garmin", name: "Garmin", icon: "📟", status: "disconnected" },
    { id: "spotify", name: "Spotify", icon: "🎵", status: "connected" },
  ]);

  return (
    <section className="devices-section">
      <h2 className="section-title">Connected Devices</h2>
      <div className="devices-grid">
        {devices.map((device) => (
          <div key={device.id} className="device-card">
            <div className="device-icon">{device.icon}</div>
            <div className="device-info">
              <span className="device-name">{device.name}</span>
              <span className={`device-status ${device.status}`}>
                {device.status === "connected" ? "Connected" : "Disconnected"}
              </span>
            </div>
            <div className="device-actions">
              <button className="btn-secondary">Manage</button>
            </div>
          </div>
        ))}
      </div>
      <div className="connect-new">
        <button className="btn-primary">Connect New Device</button>
      </div>
    </section>
  );
}
