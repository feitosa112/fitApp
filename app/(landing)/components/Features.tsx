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
    <section className="py-20 bg-[var(--surface)]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[var(--text-primary)]">
          🚀 Ključne funkcionalnosti
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[var(--background)] border border-[var(--divider)] rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                {feature.title}
              </h3>
              <p className="text-[var(--text-secondary)] text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
