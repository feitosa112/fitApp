"use client";

import { useState } from "react";

export default function UserGoals() {
  const goals = [
    { id: "weight_loss", label: "Weight Loss" },
    { id: "strength", label: "Strength" },
    { id: "cardio", label: "Cardio" },
    { id: "wellness", label: "Wellness" },
  ];

  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);

  const handleCheckboxChange = (id: string) => {
    if (selectedGoals.includes(id)) {
      setSelectedGoals(selectedGoals.filter((goal) => goal !== id));
    } else {
      setSelectedGoals([...selectedGoals, id]);
    }
  };

  return (
    <section className="py-16 bg-[var(--surface)] px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-[var(--text-primary)]">
          Select Your Goals
        </h2>
        <p className="text-[var(--text-secondary)] mb-8">
          Choose the goals you want to focus on:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          {goals.map((goal) => (
            <div
              key={goal.id}
              className="flex items-center gap-3 p-4 border border-[var(--divider)] rounded-lg bg-[var(--background)]"
            >
              <input
                type="checkbox"
                id={goal.id}
                checked={selectedGoals.includes(goal.id)}
                onChange={() => handleCheckboxChange(goal.id)}
                className="w-5 h-5 accent-[var(--primary)]"
              />
              <label htmlFor={goal.id} className="cursor-pointer text-[var(--text-primary)]">
                {goal.label}
              </label>
            </div>
          ))}
        </div>

        {/* samo za debug */}
        
      </div>
    </section>
  );
}
