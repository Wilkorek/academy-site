import React from "react";
import Image from "next/image";
import { FaPen } from "react-icons/fa";

const Hero = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
        {/* Brand Info */}
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-10">
          <div className="text-center md:text-left space-y-6 lg:max-w-[400px]">
            <h1 className="text-5xl lg:text-6xl font-bold leading-relaxed font-averia">
              Zdrowy,
              <br />
              Sprawny <span className="text-orange-500">Umysł!</span>
            </h1>
            <p className="text-2xl tracking-wide">
              Rusz głową i baw się świetnie!
            </p>
            <p className="text-gray-400">
              Zapraszamy na zajęcia szachowe, gdzie nauczysz się logicznego
              myślenia, strategii i szybkiego podejmowania decyzji. Przyjdź i
              przekonaj się, że szachy to nie tylko gra, ale prawdziwa przygoda!
            </p>
            {/* Button section */}
            <div className="flex justify-center md:justify-start">
              <button className="primary-btn flex items-center gap-2">
                <span>
                  <FaPen />
                </span>
                Zapisz się!
              </button>
            </div>
          </div>
        </div>
        {/* Hero Images */}
        <div>
          <Image
            src="/HeroImg.png"
            alt="Zdjęcie główne"
            width={600}
            height={600}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
