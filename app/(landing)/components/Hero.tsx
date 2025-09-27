export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      {/* Background slika */}
      <img
        src="fitness-hero.jpg"  // ime fajla iz public foldera
        alt="Fitness Hero Background"
        className="w-full h-full object-cover"
      />

      {/* Overlay za kontrast */}
      <div className="absolute inset-0  bg-opacity-30 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-light-vibrant-primary">
          Your Motion. Your Progress.
        </h1>
        <p className="text-lg md:text-2xl mb-6 text-light-vibrant-secondary">
          Join DVeb Motion™ and reach your fitness goals faster.
        </p>
        <div className="space-x-4">
          <button className="btn-light-vibrant-primary px-6 py-3 rounded">
            Join as Free User
          </button>
          <button className="btn-light-vibrant-secondary px-6 py-3 rounded">
            Upgrade to Premium
          </button>
        </div>
      </div>
    </section>
  );
}
