export default function ConsPage() {
  const cons = [
    "Not user-friendly (No straight forward process)",
    "Not custom made to company's process (Made for everyone)",
    "Costly for larger fleets",
    "You need multiple devices (A lot of hardware)",
    "Difficult setup (screws, nails, etc)",
    "Low quality to no customer care",
    "Hidden costs and uncertain pricing",
    "Excess of features",
    "Not specialized in cargo load security",
    "Less human approach (Not hands on)",
    "Not made from Security Company",
  ];

  return (
    <div className="min-h-screen bg-[#353e43] text-white">
      <main className="mx-auto flex min-h-screen max-w-4xl flex-col gap-6 px-6 py-16 text-[18px] leading-relaxed sm:px-10">
        <header className="space-y-2">
          <p className="text-sm uppercase tracking-[0.4em] text-white/70">
            Cons
          </p>
          <h1 className="text-4xl font-semibold text-white">Where they fall short</h1>
          <p className="text-white/80">
            Common frustrations teams face when relying on off-the-shelf fleet and security tech.
          </p>
        </header>
        <ul className="list-disc space-y-3 pl-5 text-white/90 pb-[1vw]">
          {cons.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}
