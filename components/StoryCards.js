export const storyCards = [
  {
    title: "Stories by J.M.",
    text: "Warm Christian storytelling written in a personal voice, with room for faith, memory, healing, and hope.",
  },
  {
    title: "Reflections for the Heart",
    text: "Gentle devotional thoughts for quiet mornings, late evenings, and the moments when the soul needs encouragement.",
  },
  {
    title: "A Place to Return",
    text: "A peaceful home for Jeanna’s writings, built around Scripture, tenderness, and the steady light of God’s love.",
  },
];

export default function StoryCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {storyCards.map((card) => (
        <article key={card.title} className="rounded-[1.5rem] border border-gold/25 bg-cream/95 p-7 text-brown shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-gold/55">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-gold/25 text-2xl text-copper">✦</div>
          <h3 className="font-serif text-3xl font-black">{card.title}</h3>
          <p className="mt-4 leading-8 text-brown/80">{card.text}</p>
        </article>
      ))}
    </div>
  );
}
