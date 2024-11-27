"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import type { StaticImageData } from "next/image";
import Brain from "../../../../public/brain2.svg";
import Creative from "../../../../public/creative2.svg";
import Strategy from "../../../../public/strategy2.svg";
import Kids from "../../../../public/kids.svg";

interface SkillDataInter {
  id: number;
  title: string;
  link: string;
  description: string;
  img: StaticImageData;
  gradientColor: string;
}

const SkillData: SkillDataInter[] = [
  {
    id: 1,
    title: "Trening dla mózgu",
    link: "/",
    description:
      "Szachy to gimnastyka dla umysłu. Poprawiają pamięć, koncentrację i zdolność logicznego myślenia. Regularna gra w szachy może nawet zwiększyć inteligencję!",
    img: Brain,
    gradientColor: "from-red-500",
  },
  {
    id: 2,
    title: "Rozwój kreatywności",
    link: "/",
    description:
      "Każda partia szachowa to nowe wyzwanie, które wymaga nieszablonowego myślenia. Szachy uczą znajdować nietypowe rozwiązania i wychodzić poza schematy.",
    img: Creative,
    gradientColor: "from-green-500",
  },
  {
    id: 3,
    title: "Umiejętność podejmowania decyzji",
    link: "/",
    description:
      "W szachach każda decyzja ma swoje konsekwencje. Grając, uczysz się analizować różne warianty i wybierać najlepsze rozwiązanie, co przekłada się na lepsze podejmowanie decyzji w życiu codziennym.",
    img: Strategy,
    gradientColor: "from-blue-500",
  },
  {
    id: 4,
    title: "Kształtowanie kompetencji społecznych",
    link: "/",
    description:
      "Szachy to nie tylko gra dla jednego. To także świetna okazja do nawiązywania nowych znajomości, rywalizacji w zdrowej atmosferze i nauki szacunku dla przeciwnika.",
    img: Kids,
    gradientColor: "from-yellow-500",
  },
];

const Menus = () => {
  return (
    <section>
      <div className="container min-h-[550px]">
        {/* <motion.h1
          className="text-2xl font-bold text-center pb-10 uppercase"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          Korzyści
        </motion.h1> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SkillData.map((skill) => (
            <motion.div
              key={skill.id}
              className="p-4 border-none rounded-lg relative group overflow-hidden"
              initial={{ opacity: 0, scale: 0.3 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{
                scale: 1.0, // Powiększenie całej karty
                boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Gradient na całą kartę */}
              <div
                className={`absolute inset-0 bg-gradient-to-t ${skill.gradientColor} via-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
              ></div>

              {/* Obrazek */}
              <motion.div
                className="flex items-center justify-center"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src={skill.img}
                  alt={skill.title}
                  width={100}
                  height={100}
                  className="relative z-10"
                />
              </motion.div>

              {/* Tytuł */}
              <h2 className="text-2xl font-semibold mt-4 mb-4 font-averia text-center">
                {skill.title}
              </h2>

              {/* Opis */}
              <motion.p
                className="text-lg text-center font-caveat text-gray-600 font-semibold"
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {skill.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menus;
