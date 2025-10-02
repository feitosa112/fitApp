"use client";

export default function Features() {
  const features = [
    {
      icon: "🏋️‍♂️",
      title: "Personalizovani treninzi",
      description: "Programi vežbanja prilagođeni tvom cilju i nivou kondicije.",
    },
    {
      icon: "🥗",
      title: "Nutricioni planovi",
      description: "Zdravi i balansirani obroci koji podržavaju tvoj napredak.",
    },
    {
      icon: "📊",
      title: "Analitika napretka",
      description: "Detaljna statistika i grafikoni o tvom napretku.",
    },
    {
      icon: "👥",
      title: "Community i izazovi",
      description: "Poveži se sa drugima i učestvuj u izazovima.",
    },
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        <h2 className="features-title">🚀 Ključne funkcionalnosti</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
