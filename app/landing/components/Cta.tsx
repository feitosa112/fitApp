"use client";
import "../styles/cta.css"

export default function Cta() {
  return (
    <section className="cta-section">
      <div className="cta-buttons">
        <button className="btn-primary">
          Join as Free User
        </button>
        <button className="btn-secondary">
          Upgrade to Premium
        </button>
      </div>
    </section>
  );
}
