import React from "react";
import { motion, AnimatePresence } from "motion/react";

// Definiowanie typu dla propsów
interface ResponsiveMenuProps {
  open: boolean;
}

// Komponent ResponsiveMenu
const ResponsiveMenu: React.FC<ResponsiveMenuProps> = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <div className="text-xl font-semibold uppercase bg-primary text-white py-10 m-6 rounded-3xl">
            <ul className="flex flex-col items-center gap-10">
              <li className="hover:text-amber-400 cursor-pointer">Home</li>
              <li className="hover:text-amber-400 cursor-pointer">Plans</li>
              <li className="hover:text-amber-400 cursor-pointer">Contact</li>
              <li className="hover:text-amber-400 cursor-pointer">History</li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
