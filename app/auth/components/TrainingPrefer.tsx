"use client";

import { useState } from "react";

export default function WorkoutType() {
  const workoutTypes = [
    { id: "gym", label: "Gym" },
    { id: "home", label: "Home" },
    { id: "equipment_free", label: "Equipment-Free" },
  ];

  const [selectedWorkout, setSelectedWorkout] = useState<string>("");

  return (
    <section className="py-12 bg-[var(--surface)] px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">
          Select Your Preferred Workout Type
        </h2>
        <p className="text-[var(--text-secondary)] mb-6 text-sm">
          Choose the type of training you prefer:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-left">
          {workoutTypes.map((type) => (
            <div
              key={type.id}
              className={`flex items-center gap-2 p-3 border border-[var(--divider)] rounded-lg cursor-pointer bg-[var(--background)] ${
                selectedWorkout === type.id ? "border-[var(--primary)] bg-[var(--primary)]/10" : ""
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
                className="w-4 h-4 accent-[var(--primary)]"
              />
              <label htmlFor={type.id} className="cursor-pointer text-[var(--text-primary)] text-sm">
                {type.label}
              </label>
            </div>
          ))}
        </div>

        
        
      </div>
    </section>
  );
}

