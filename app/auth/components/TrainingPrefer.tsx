"use client";

import { useState } from "react";
import "../styles/auth.css";

export default function WorkoutType() {
  const workoutTypes = [
    { id: "gym", label: "Gym" },
    { id: "home", label: "Home" },
    { id: "equipment_free", label: "Equipment-Free" },
  ];

  const [selectedWorkout, setSelectedWorkout] = useState<string>("");

  return (
    <section className="section-bg">
      <div className="section-container text-center">
        <h2 className="section-title">Select Your Preferred Workout Type</h2>
        <p className="section-subtitle">Choose the type of training you prefer:</p>

        <div className="radio-grid">
          {workoutTypes.map((type) => (
            <div
              key={type.id}
              className={`radio-card ${
                selectedWorkout === type.id ? "radio-card-selected" : ""
              }`}
              onClick={() => setSelectedWorkout(type.id)}
            >
              <input
                type="radio"
                id={type.id}
                name="workoutType"
                value={type.id}
                checked={selectedWorkout === type.id}
                onChange={() => setSelectedWorkout(type.id)}
                className="radio-input"
              />
              <label htmlFor={type.id} className="radio-label">
                {type.label}
              </label>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
