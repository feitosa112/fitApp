"use client";

import { useState } from "react";
import "../styles/auth.css";

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
    <section className="section-bg">
      <div className="section-container text-center">
        <h2 className="section-title">Select Your Goals</h2>
        <p className="section-subtitle">Choose the goals you want to focus on:</p>

        <div className="checkbox-grid">
          {goals.map((goal) => (
            <div key={goal.id} className="checkbox-card">
              <input
                type="checkbox"
                id={goal.id}
                checked={selectedGoals.includes(goal.id)}
                onChange={() => handleCheckboxChange(goal.id)}
                className="checkbox-input"
              />
              <label htmlFor={goal.id} className="checkbox-label">
                {goal.label}
              </label>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
