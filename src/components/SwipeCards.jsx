import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const SwipeCards = () => {
  const [cards, setCards] = useState(cardData);

  return (
    <div className="relative w-full flex flex-col items-center h-[500px] bg-neutral-100">
      <div className="absolute top-5 text-2xl font-bold text-gray-800">
        Check Out My Projects
      </div>
      <div
        className="grid h-full w-full place-items-center"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='%23d4d4d4'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        }}
      >
        {cards.map((card) => {
          return (
            <Card key={card.id} cards={cards} setCards={setCards} {...card} />
          );
        })}
      </div>

      <div className="hidden md:absolute md:left-20 md:top-5 md:text-3xl md:font-bold md:text-gray-800">
        CHECK OUT
      </div>
      <div className="hidden md:absolute md:right-20 md:top-5 md:text-3xl md:font-bold md:text-gray-800">
        MY PROJECTS
      </div>
    </div>
  );
};

const Card = ({ id, url, title, setCards, cards }) => {
  const x = useMotionValue(0);

  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);

  const isFront = id === cards[cards.length - 1].id;

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : id % 2 ? 6 : -6;

    return `${rotateRaw.get() + offset}deg`;
  });

  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 100) {
      setCards((pv) => pv.filter((v) => v.id !== id));
    }
  };

  return (
    <motion.div
      className="relative h-60 w-64 md:h-96 md:w-72 origin-bottom rounded-lg bg-white hover:cursor-grab active:cursor-grabbing"
      style={{
        gridRow: 1,
        gridColumn: 1,
        x,
        opacity,
        rotate,
        transition: "0.125s transform",
        boxShadow: isFront
          ? "0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)"
          : undefined,
      }}
      animate={{
        scale: isFront ? 1 : 0.98,
      }}
      drag={isFront ? "x" : false}
      dragConstraints={{
        left: -100,
        right: 100,
      }}
      onDragEnd={handleDragEnd}
    >
      <img
        src={url}
        alt={title}
        className="h-full w-full object-cover rounded-lg"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
        <h2 className="text-white text-lg md:text-xl font-semibold">{title}</h2>
      </div>
    </motion.div>
  );
};

const cardData = [
  {
    id: 1,
    url: "app.jpeg",
    title: "Event-Management-App",
  },
  {
    id: 2,
    url: "pear.png",
    title: "File-Guard-Share",
  },
  {
    id: 3,
    url: "kafka.png",
    title: "RealTime TempFlow",
  },
  {
    id: 4,
    url: "hired.jpg",
    title: "HiredIn Media Website",
  },
  {
    id: 5,
    url: "/tire.png",
    title: "Tire Prognostication Precision",
  },
];

export default SwipeCards;
