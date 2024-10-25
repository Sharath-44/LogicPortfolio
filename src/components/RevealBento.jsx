import React, { useState } from "react";
import Confetti from "react-confetti"; // Import Confetti
import { motion } from "framer-motion"; // For button animations
import { FiMapPin } from "react-icons/fi";
import { BsGithub, BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { twMerge } from "tailwind-merge";

export const RevealBento = () => {
  return (
    <div className="min-h-screen bg-zinc-900 px-4 py-12 text-zinc-50">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
        <LocationBlock />
        <QuestionBlock /> {/* Updated Component */}
      </motion.div>
    </div>
  );
};

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    <img
      src="/Sharu.png"
      alt="avatar"
      className="mb-4 size-16 rounded-full"
    />
    <h1 className="mb-12 text-4xl font-medium leading-tight">
      Hi, I'm Sharath.{" "}
      <span className="text-zinc-400">
        I built this cool website using ReactJS and Tailwind CSS.
      </span>
    </h1>
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-zinc-900 md:col-span-3"
    >
      <a
        href="https://github.com/Sharath-44"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <BsGithub />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-blue-500 md:col-span-3"
    >
      <a
        href="https://www.linkedin.com/in/sharath-m-s-38317b220/"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <BsLinkedin />
      </a>
    </Block>
    <Block
  whileHover={{
    rotate: "2.5deg",
    scale: 1.1,
  }}
  className="col-span-6 bg-gradient-to-r from-zinc-900 to-yellow-400 md:col-span-3" // LeetCode color gradient
>
  <a
    href="https://leetcode.com/u/Sharath44/" // Add the LeetCode profile link here
    className="grid h-full place-content-center text-3xl text-white"
  >
    <img src="\LeetCode.png" alt="LeetCode" className="h-8 w-8" /> {/* LeetCode logo */}
  </a>
</Block>


    <Block
  whileHover={{
    rotate: "-2.5deg",
    scale: 1.1,
  }}
  className="col-span-6 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-600 md:col-span-3" 
>
  <a
    href="https://www.instagram.com/sharxth4/profilecard/?igsh=dHgxaDR2cjF1eTEz "
    className="grid h-full place-content-center text-3xl text-white" 
  >
    <BsInstagram />
  </a>
</Block>

  </>
);

const AboutBlock = () => (
  <Block className="col-span-12 text-3xl leading-snug">
    <p>
      My passion is building cool stuff.{" "}
      <span className="text-zinc-400">
        Deep Learning Enthusiast 🧠 | Flutter Developer 🦋 | Full Stack Web Developer 🌐 | Exploring Tech Intersections | Football ⚽ & Racing Car 🏎️ Aficionado
      </span>
    </p>
  </Block>
);

const LocationBlock = () => (
  <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
    <FiMapPin className="text-7xl" />
    <p className="text-center text-3xl text-zinc-400">Bangalore, India</p>
  </Block>
);

// Updated Question Block Component
const QuestionBlock = () => {
  const [isCorrect, setIsCorrect] = useState(null); // null for no answer yet
  const [showConfetti, setShowConfetti] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [shakingAnswerIndex, setShakingAnswerIndex] = useState(null); // Store the index of the shaking answer

  const handleAnswer = (isAnswerCorrect, index) => {
    setSelectedAnswerIndex(index);
    if (isAnswerCorrect) {
      setIsCorrect(true);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000); // Show confetti for 3 seconds
    } else {
      setIsCorrect(false);
      setShakingAnswerIndex(index); // Set the clicked wrong answer to shake
      setTimeout(() => setShakingAnswerIndex(null), 500); // Reset shake after 500ms
    }
  };

  const reloadQuiz = () => {
    setIsCorrect(null);
    setSelectedAnswerIndex(null);
    setShakingAnswerIndex(null);
  };

  const answers = [
    { text: "Cricket", isCorrect: false },
    { text: "Football", isCorrect: true },
    { text: "VolleyBall", isCorrect: false },
    { text: "Badminton", isCorrect: false },
  ];

  return (
    <Block className="col-span-12 md:col-span-9">
      {showConfetti && (
        <Confetti
          width={document.getElementById("quiz-container").offsetWidth}
          height={document.getElementById("quiz-container").offsetHeight}
          recycle={false}
          numberOfPieces={300}
        />
      )}
      <div id="quiz-container" className="relative p-4">
        <p className="mb-3 text-lg">What do you think is my favorite sport?</p>
        <div className="grid grid-cols-2 gap-4">
          {answers.map((answer, index) => (
            <motion.button
              key={index}
              onClick={() => handleAnswer(answer.isCorrect, index)}
              className={`rounded px-3 py-2 text-lg text-white transition-colors ${
                selectedAnswerIndex === index
                  ? isCorrect
                    ? "bg-green-500"
                    : "bg-red-500"
                  : "bg-zinc-700 hover:bg-zinc-600"
              }`}
              animate={
                shakingAnswerIndex === index
                  ? { x: [-10, 10, -10, 10, 0] }
                  : {}
              }
              transition={{ type: "spring", stiffness: 300 }}
              disabled={selectedAnswerIndex !== null} // Disable buttons after selection
            >
              {answer.text}
            </motion.button>
          ))}
        </div>

        {isCorrect === false && (
          <div className="mt-4 flex justify-center">
            Bruh Cmon
            <button
              onClick={reloadQuiz}
              className="rounded-full  px-2  text-sm text-white"
            >
              🔄
            </button>
          </div>
        )}
      </div>
    </Block>
  );
};

