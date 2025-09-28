"use client";

import { useState } from "react";
import "../styles/progress-overview.css";

export default function ProgressOverview() {
  const [period, setPeriod] = useState<"weekly" | "monthly">("weekly");

  return (
    <section className="progress-overview">
      <div className="po-header">
        <h2>Progress Overview</h2>
        <div className="po-toggle">
          <button
            className={period === "weekly" ? "active" : ""}
            onClick={() => setPeriod("weekly")}
          >
            Weekly
          </button>
          <button
            className={period === "monthly" ? "active" : ""}
            onClick={() => setPeriod("monthly")}
          >
            Monthly
          </button>
        </div>
      </div>

      <div className="po-chart">Chart Placeholder</div>

      <button className="po-cta">View Detailed Analytics</button>
    </section>
  );
}
