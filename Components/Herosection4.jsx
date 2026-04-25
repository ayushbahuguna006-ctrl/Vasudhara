import React, { useState } from "react";

function Herosection4() {
  const [active, setActive] = useState(0);

  const initiatives = [
    {
      title: "A Healing Home",
      description:
        "Rescued animals experience healing through expert care, fostering a rewarding and positive environment for their improved welfare.",
    },
    {
      title: "Nutrition enhanced with Science",
      description:
        "From puzzle feeders to olfactory challenges, our science-backed enrichment methods enhance every wild animal's mental and physical well-being.",
    },
    {
      title: "Holistic Animal Welfare",
      description:
        "By blending permanent environmental upgrades and engaging activities, we create a balanced environment that prioritises holistic growth and happiness.",
    },
    {
      title: "Sustaining Wildlife Futures",
      description:
        "Through conservation breeding, habitat restoration, and scientific research, we safeguard endangered species and strengthen biodiversity for generations to come.",
    },
  ];

  return (
    <section className="min-h-screen bg-white -translate-y-5 overflow-hidden">
      <div className="max-w-7xl px-4 md:px-13">
        <div className="mb-12 translate-y-10">
          <p className="text-sm tracking-[0.35em] text-[#8a765d] font-semibold text-center md:text-start md:pl-4">
            OUR VISION
          </p>

          <h2 className="mt-3 text-4xl md:text-6xl font-semibold pl-2 text-[#26351f] text-center md:text-start leading-tight">
            Core Missions
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10  items-start ">
          <div className="flex flex-col gap-4 md:order-2 md:translate-x-40">
            {initiatives.map((item, index) => (
              <div
                key={index}
                onClick={() => setActive(index)}
                className={`group rounded-[2rem] cursor-pointer transition-all duration-300 border ${active === index
                    ? "bg-[#d9c7ab] border-[#c2aa86] shadow-xl shadow-black/10 scale-[1.02]"
                    : "bg-white/60 border-[#dfd2bd] hover:bg-[#efe4d2] hover:shadow-md"
                  }`}
              >
                <div className="p-6 md:p-7">
                  <div className="flex items-center justify-between gap-5">
                    <p
                      className={`text-base md:text-2xl font-light tracking-wide transition-colors ${active === index
                          ? "text-[#26351f]"
                          : "text-[#4c4438]"
                        }`}
                    >
                      {item.title}
                    </p>

                    <span
                      className={`min-w-9 h-9 rounded-full flex items-center justify-center text-lg transition-all duration-300 ${active === index
                          ? "bg-[#26351f] text-white rotate-180"
                          : "bg-[#ddd0bc] text-[#26351f] group-hover:bg-[#26351f] group-hover:text-white"
                        }`}
                    >
                      ↓
                    </span>
                  </div>

                  <div
                    className={`grid transition-all duration-300 ${active === index
                        ? "grid-rows-[1fr] opacity-100 mt-5"
                        : "grid-rows-[0fr] opacity-0"
                      }`}
                  >
                    <p className="overflow-hidden text-[#5f564b] leading-8 text-sm md:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative md:order-1">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#b9a176]/30 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#26351f]/20 rounded-full blur-3xl" />

            <div className="relative rounded-[2.5rem]  overflow-hidden shadow-2xl -translate-y-5 shadow-black/20 border md:translate-x-2 md:translate-y-4 border-white/60">
              <img
                src="/tree2.jpg"
                alt="Wildlife conservation"
                className="w-full h-[55vh] md:h-[65vh] object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-sm tracking-[0.25em] uppercase text-white/80">
                  Vasudhara
                </p>
                <h3 className="text-2xl md:text-4xl text-white/90 font-semibold mt-2">
                  Nurturing Biodiversity
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Herosection4;