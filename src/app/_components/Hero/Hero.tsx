"use client";

import React from "react";
import Image from "next/image";
import { FaPen } from "react-icons/fa";
import HeroImg from "../../assets/images/rest/HeroImg.png";
import chess from "../../../../public/Leaf.svg";
import { motion } from "motion/react";
import { FadeRight } from "@/app/utility/animation";

const Hero = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
        {/* Brand Info */}
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-10">
          <div className="text-center md:text-left space-y-6 lg:max-w-[400px]">
            <motion.h1
              variants={FadeRight(0.3)}
              initial="hidden"
              animate="visible"
              style={{ willChange: "opacity" }}
              className="text-5xl lg:text-6xl font-bold leading-relaxed font-averia"
            >
              Zdrowy,
              <br />
              Sprawny <span className="text-orange-500">Umysł</span>
            </motion.h1>
            <motion.p
              variants={FadeRight(0.6)}
              initial="hidden"
              animate="visible"
              style={{ willChange: "opacity" }}
              className="text-2xl tracking-wide"
            >
              Rusz głową i baw się świetnie!
            </motion.p>
            <motion.p
              variants={FadeRight(0.9)}
              initial="hidden"
              animate="visible"
              style={{ willChange: "opacity" }}
              className="text-gray-400"
            >
              Zapraszamy na zajęcia szachowe, gdzie nauczysz się logicznego
              myślenia, strategii i szybkiego podejmowania decyzji. Przyjdź i
              przekonaj się, że szachy to nie tylko gra, ale prawdziwa przygoda!
            </motion.p>
            {/* Button section */}
            <motion.div
              variants={FadeRight(1.2)}
              initial="hidden"
              animate="visible"
              style={{ willChange: "opacity" }}
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn flex items-center gap-2">
                <span>
                  <FaPen />
                </span>
                Zapisz się!
              </button>
            </motion.div>
          </div>
        </div>
        {/* Hero Images */}
        <div className="flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: 0.2 }}
            style={{ willChange: "opacity" }}
          >
            <Image
              src={HeroImg}
              alt="Zdjęcie główne"
              width={600}
              height={600}
              className="drop-shadow"
            />
          </motion.div>
        </div>
        {/* Leaf Image */}
        <div className="">
          {/* Rodzic: Opadanie liścia */}
          <motion.div
            initial={{ opacity: 0, y: -200, rotate: 75 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 4, delay: 0.5 }}
            className="absolute top-14 md:top-0 right-1/2 blur-sm opacity-80"
          >
            {/* Dziecko: Kołysanie i falowanie */}
            <motion.div
              animate={{
                rotate: [15, -15, 15], // Kołysanie w prawo i w lewo
                x: [0, 5, -15, 0], // Delikatne przesunięcie w poziomie
                y: [40, -3, 3, 40], // Delikatne przesunięcie w pionie
              }}
              transition={{
                duration: 15, // Cały cykl animacji trwa 3 sekundy
                repeat: Infinity, // Powtarzanie w nieskończoność
                ease: "easeInOut", // Płynny efekt falowania
              }}
            >
              <Image
                src={chess}
                alt="Opadający liść"
                width={150}
                height={150}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
