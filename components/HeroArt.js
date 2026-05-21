export default function HeroArt() {
  return (
    <div className="hero-card relative overflow-hidden rounded-[2rem] border border-gold/50 bg-[#101936] shadow-2xl shadow-black/40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_42%_18%,rgba(255,190,66,0.95),transparent_8%),radial-gradient(circle_at_60%_34%,rgba(255,113,44,0.82),transparent_13%),linear-gradient(180deg,#18213d_0%,#2a1b22_43%,#1a120f_100%)]" />
      <div className="absolute inset-0 opacity-75 bg-[radial-gradient(circle_at_30%_22%,rgba(255,255,255,.9)_0_1px,transparent_2px),radial-gradient(circle_at_76%_18%,rgba(244,200,106,.9)_0_1px,transparent_2px),radial-gradient(circle_at_12%_48%,rgba(255,255,255,.75)_0_1px,transparent_2px)] [background-size:180px_180px,240px_240px,300px_300px]" />
      <div className="absolute left-0 right-0 top-[34%] h-[28%] bg-[linear-gradient(180deg,rgba(255,152,50,0.25),rgba(20,31,36,0.05)),radial-gradient(ellipse_at_center,rgba(255,224,126,0.85),transparent_40%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[48%] bg-[linear-gradient(180deg,transparent,#120b09_70%),radial-gradient(ellipse_at_65%_35%,rgba(131,84,39,0.5),transparent_26%)]" />

      <div className="absolute right-[10%] top-[43%] h-36 w-36 rounded-full bg-[radial-gradient(circle,#fff7c8_0_7%,#ffae35_8%_26%,#ff5d1d_27%_42%,transparent_43%)] blur-[1px]" />
      <div className="absolute right-[12%] top-[42%] h-32 w-24 animate-pulse bg-[radial-gradient(ellipse_at_center,#fff8bb_0_9%,#ffb23f_10%_28%,#e8521e_29%_48%,transparent_50%)]" style={{ clipPath: "polygon(50% 0%, 68% 34%, 88% 12%, 78% 54%, 100% 42%, 78% 75%, 58% 100%, 42% 100%, 22% 75%, 0 42%, 22% 54%, 12% 12%, 32% 34%)" }} />
      <div className="absolute right-[8%] top-[58%] h-14 w-44 rounded-full border-[12px] border-[#7f4f28] bg-[#2a160e] shadow-xl" />

      <div className="absolute left-[14%] bottom-[25%] h-28 w-24 rounded-b-[1.5rem] rounded-t-[.5rem] border-4 border-[#f5e5c8] bg-[#9b211d] shadow-xl">
        <div className="absolute left-4 right-4 top-3 h-4 rounded-full bg-[#fff8ec]" />
        <div className="absolute -left-8 top-10 h-14 w-10 rounded-full border-[7px] border-[#9b211d] bg-transparent" />
        <div className="absolute left-8 -top-12 h-12 w-4 rounded-full bg-white/35 blur-sm" />
      </div>

      <div className="absolute left-[47%] bottom-[24%] h-52 w-20 rotate-[-9deg] rounded-[2rem] bg-[linear-gradient(90deg,#27150e,#6f472d,#1d100b)] shadow-2xl" />
      <div className="absolute left-[58%] bottom-[24%] h-52 w-20 rotate-[10deg] rounded-[2rem] bg-[linear-gradient(90deg,#21110b,#7d5133,#1d100b)] shadow-2xl" />
      <div className="absolute left-[46%] bottom-[18%] h-16 w-28 rotate-[-8deg] rounded-[50%] bg-[#1b0d08] shadow-2xl" />
      <div className="absolute left-[56%] bottom-[18%] h-16 w-28 rotate-[8deg] rounded-[50%] bg-[#1b0d08] shadow-2xl" />

      <div className="absolute bottom-0 left-0 right-0 h-[26%] bg-[linear-gradient(90deg,rgba(72,43,22,0.85),rgba(43,25,14,0.95)),repeating-linear-gradient(0deg,rgba(255,255,255,0.08)_0_1px,transparent_1px_10px)]" />

      <div className="relative flex min-h-[540px] items-end p-6 md:min-h-[610px]">
        <div className="grid w-full gap-5 rounded-[1.5rem] border border-gold/35 bg-cream/95 p-6 text-brown shadow-2xl backdrop-blur sm:grid-cols-[0.9fr_1px_1.1fr] sm:items-center md:p-8">
          <div className="flex justify-center sm:justify-start">
            <img src="/images/goddome-logo.svg" alt="God Dome" className="h-28 w-auto max-w-[250px] object-contain" />
          </div>
          <div className="hidden h-28 w-px bg-brown/30 sm:block" />
          <div>
            <p className="font-serif text-4xl font-black leading-tight text-brown">Faithful Words</p>
            <p className="mt-3 max-w-sm text-lg font-bold leading-7 text-copper">warm stories, coffee, firelight, and faith</p>
          </div>
        </div>
      </div>
    </div>
  );
}
