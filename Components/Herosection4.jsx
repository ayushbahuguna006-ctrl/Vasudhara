import React, { useState } from "react";

function Herosection4() {
  const [active, setActive] = useState(0);

  const initiatives = [
    {
      title: "RESCUE AND RECOVERY",
      description:
        "At Vantara, rescue is the foundation of animal care. We locate and secure wildlife impacted by habitat loss, conflict, or confinement, conducting every operation with precision and compassion.",
    },
    {
      title: "TREATMENT AND CARE",
      description:
        "Our veterinary teams provide specialised treatment, nutrition, monitoring, and long-term medical support to help every rescued animal recover safely.",
    },
    {
      title: "REHABILITATION AND SUPPORT",
      description:
        "We create structured recovery environments where animals receive behavioural support, habitat care, and continuous supervision.",
    },
    {
      title: "CONSERVATION, BREEDING AND REBUILDING",
      description:
        "Through conservation breeding, research, and habitat-focused support, we help rebuild vulnerable wildlife populations for the future.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#e8dccb] via-[#f7f2ea] to-[#e8dccb] -translate-y-10 overflow-hidden">
      <div className="max-w-7xl px-4 md:px-13">
        <div className="mb-12 translate-y-10">
          <p className="text-sm tracking-[0.35em] text-[#8a765d] font-semibold text-center md:text-start md:pl-4">
            OUR CORE
          </p>

          <h2 className="mt-3 text-4xl md:text-6xl font-semibold pl-2 text-[#26351f]/50 text-center md:text-start leading-tight">
            Core Missions
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start ">
          <div className="flex flex-col gap-4 md:order-2 md:translate-x-40">
            {initiatives.map((item, index) => (
              <div
                key={index}
                onClick={() => setActive(index)}
                className={`group rounded-[2rem] cursor-pointer transition-all duration-300 border ${
                  active === index
                    ? "bg-[#d9c7ab] border-[#c2aa86] shadow-xl shadow-black/10 scale-[1.02]"
                    : "bg-white/60 border-[#dfd2bd] hover:bg-[#efe4d2] hover:shadow-md"
                }`}
              >
                <div className="p-6 md:p-7">
                  <div className="flex items-center justify-between gap-5">
                    <p
                      className={`text-base md:text-lg font-semibold tracking-wide transition-colors ${
                        active === index
                          ? "text-[#26351f]"
                          : "text-[#4c4438]"
                      }`}
                    >
                      {item.title}
                    </p>

                    <span
                      className={`min-w-9 h-9 rounded-full flex items-center justify-center text-lg transition-all duration-300 ${
                        active === index
                          ? "bg-[#26351f] text-white rotate-180"
                          : "bg-[#ddd0bc] text-[#26351f] group-hover:bg-[#26351f] group-hover:text-white"
                      }`}
                    >
                      ↓
                    </span>
                  </div>

                  <div
                    className={`grid transition-all duration-300 ${
                      active === index
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

            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/20 border md:translate-x-2 md:translate-y-4 border-white/60">
              <img
                src="/tree2.jpg"
                alt="Wildlife conservation"
                className="w-full h-[55vh] md:h-[80vh] object-cover -mt-17"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-sm tracking-[0.25em] uppercase text-white/80">
                  Vantara
                </p>
                <h3 className="text-2xl md:text-4xl font-semibold mt-2">
                  Planting lives with care.
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