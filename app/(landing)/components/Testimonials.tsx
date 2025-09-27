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
    <section className="py-20 bg-[var(--surface)]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Testimonials */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[var(--text-primary)]">
          💬 Šta kažu naši korisnici
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-[var(--background)] border border-[var(--divider)] rounded-2xl shadow-md p-6"
            >
              <p className="text-[var(--text-secondary)] italic mb-4">
                &quot;{t.text}&quot;
              </p>
              <h3 className="text-[var(--text-primary)] font-semibold">{t.name}</h3>
            </div>
          ))}
        </div>

        {/* Stats Counter */}
        <div className="flex justify-center gap-12 mb-16">
          <div>
            <p className="text-4xl font-bold text-[var(--primary)]">+25K</p>
            <p className="text-[var(--text-secondary)]">Aktivnih korisnika</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-[var(--primary)]">98%</p>
            <p className="text-[var(--text-secondary)]">Zadovoljstvo korisnika</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-[var(--primary)]">120+</p>
            <p className="text-[var(--text-secondary)]">Trenera i mentora</p>
          </div>
        </div>

        {/* Integrations */}
        <h3 className="text-2xl font-semibold mb-6 text-[var(--text-primary)]">
          🔗 Poveži svoje omiljene aplikacije
        </h3>
        <div className="flex justify-center gap-12">
          {integrations.map((i, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-5xl">{i.icon}</span>
              <p className="text-[var(--text-secondary)] mt-2">{i.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
