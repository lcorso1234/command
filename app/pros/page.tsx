export default function ProsPage() {
  const pros = [
    "Advanced Driving Safety Features",
    "Driver Analytics",
    "Dual Cameras",
    "Gas and Tire sensors",
    "Great for tracking finances",
    "Optimized GPS routing",
    "AI detection",
    "Fast tracking speeds (4 min)",
    "Low cost for small fleet",
    "Advanced Reporting",
    "Automated Alerts",
  ];

  return (
    <div className="min-h-screen bg-[#353e43] text-white">
      <main className="mx-auto flex min-h-screen max-w-4xl flex-col gap-6 px-6 py-16 text-[18px] leading-relaxed sm:px-10">
        <header className="space-y-2">
          <p className="text-sm uppercase tracking-[0.4em] text-white/70">
            Pros
          </p>
          <h1 className="text-4xl font-semibold text-white">
            Why their approach wins
          </h1>
          <p className="text-white/80">
            Capabilities baked in from day one so operations stay lean, safe, and
            transparent.
          </p>
        </header>
        <ul className="list-disc space-y-3 pl-5 text-white/90">
          {pros.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}
