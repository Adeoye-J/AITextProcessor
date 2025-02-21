import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cards = [
  { id: 1, title: "Card One", color: "#FFADAD" },
  { id: 2, title: "Card Two", color: "#FFD6A5" },
  { id: 3, title: "Card Three", color: "#FDFFB6" },
  { id: 4, title: "Card Four", color: "#CAFFBF" },
];

export default function StackingCards() {
  const [visibleCount, setVisibleCount] = useState(1);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const cardHeight = 150; // Adjust this to match the height of a card
      const index = Math.min(Math.floor(scrollY / cardHeight), cards.length);
      
      if (scrollY > lastScrollY) {
        // Scrolling Down: Reveal next card
        if (index >= visibleCount) {
          setVisibleCount(index + 1);
        }
      } else {
        // Scrolling Up: Hide last card
        if (index < visibleCount - 1) {
          setVisibleCount(index);
        }
      }

      setLastScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleCount, lastScrollY]);

  return (
    <div className="relative flex flex-col items-center h-[200vh]">
      {/* Stacking Container */}
      <div className="sticky top-[20vh] w-[300px] h-[400px]">
        <AnimatePresence>
          {cards.slice(0, visibleCount).map((card, index) => (
            <motion.div
              key={card.id}
              className="absolute w-full h-full rounded-xl shadow-xl p-5 flex items-center justify-center text-xl font-bold"
              style={{ backgroundColor: card.color }}
              initial={{ y: 100, opacity: 1 }} // Start below
              animate={{ y: -index * 20, opacity: 1 }} // Move up into place
              exit={{ y: 100, opacity: 1 }} // Move back down when removed
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {card.title}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
