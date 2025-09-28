"use client";

export default function Trust() {
  const testimonials = [
    {
      name: "Ana K.",
      text: "Uz DVeb Motion pronašla sam motivaciju da vežbam svaki dan! Rezultati su neverovatni.",
    },
    {
      name: "Marko P.",
      text: "Nutricioni planovi su mi pomogli da izgubim 10kg na zdrav način. Preporuka svima!",
    },
    {
      name: "Jelena R.",
      text: "Najviše volim community izazove – stalno imam osećaj podrške i timskog duha.",
    },
  ];

  const integrations = [
    { name: "Apple Health", icon: "🍎" },
    { name: "Google Fit", icon: "📱" },
    { name: "Spotify", icon: "🎵" },
  ];

  return (
    <section className="trust-section">
      <div className="trust-container">
        {/* Testimonials */}
        <h2 className="trust-title">💬 Šta kažu naši korisnici</h2>
        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-text">&quot;{t.text}&quot;</p>
              <h3 className="testimonial-name">{t.name}</h3>
            </div>
          ))}
        </div>

        {/* Stats Counter */}
        <div className="stats-counter">
          <div className="stat">
            <p className="stat-number">+25K</p>
            <p className="stat-label">Aktivnih korisnika</p>
          </div>
          <div className="stat">
            <p className="stat-number">98%</p>
            <p className="stat-label">Zadovoljstvo korisnika</p>
          </div>
          <div className="stat">
            <p className="stat-number">120+</p>
            <p className="stat-label">Trenera i mentora</p>
          </div>
        </div>

        {/* Integrations */}
        <h3 className="integrations-title">🔗 Poveži svoje omiljene aplikacije</h3>
        <div className="integrations-grid">
          {integrations.map((i, index) => (
            <div key={index} className="integration-item">
              <span className="integration-icon">{i.icon}</span>
              <p className="integration-name">{i.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
