import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; 

export const Example = () => {
  const navigate = useNavigate(); 

  const handleContactClick = () => {
    navigate("/contact"); 
  };

  return (
    <div
      className="max-h-fit flex justify-center items-center px-4"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='%23d4d4d4'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '32px 32px',
      }}
    >
      <div className="bg-zinc-800 rounded-lg shadow-lg p-8 max-w-xl m-12 w-full">
        <BlockInTextCard
          tag="Support"
          text={
            <>
              <strong>Have questions?</strong> I'd love to answer! Contact me...
            </>
          }
          examples={[
            "What is multithreading?",
            "What do you think about Tesla Cars?",
            "What is Virtual Memory?",
            "How are paging and segmentation different?",
          ]}
          handleContactClick={handleContactClick} 
        />
      </div>
    </div>
  );
};

const BlockInTextCard = ({ tag, text, examples, handleContactClick }) => {
  return (
    <div className="w-full space-y-6">
      <div>
        <p className="mb-1.5 text-sm font-light uppercase text-white">{tag}</p>
        <hr className="border-white" />
      </div>
      <p className="max-w-lg text-xl leading-relaxed text-white">{text}</p>
      <div>
        <Typewrite examples={examples} />
        <hr className="border-zinc-400" />
      </div>
      <button
        className="w-full rounded-full border border-white py-2 text-sm font-medium transition-colors bg-white hover:bg-zinc-800 hover:text-white"
        onClick={handleContactClick}
      >
        Contact Me!!
      </button>
    </div>
  );
};

const Typewrite = ({ examples }) => {
  const [exampleIndex, setExampleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setExampleIndex((pv) => (pv + 1) % examples.length);
    }, 5500);

    return () => clearInterval(intervalId);
  }, [examples.length]);

  return (
    <p className="mb-2.5 text-sm font-light uppercase text-white">
      <span className="inline-block size-2 bg-zinc-400" />
      <span className="ml-3">
        EXAMPLE:{" "}
        {examples[exampleIndex].split("").map((l, i) => (
          <motion.span
            initial={{
              opacity: 1,
            }}
            animate={{
              opacity: 0,
            }}
            transition={{
              delay: 5,
              duration: 0.25,
              ease: "easeInOut",
            }}
            key={`${exampleIndex}-${i}`}
            className="relative"
          >
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: i * 0.025,
                duration: 0,
              }}
            >
              {l}
            </motion.span>
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                delay: i * 0.025,
                times: [0, 0.1, 1],
                duration: 0.125,
                ease: "easeInOut",
              }}
              className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-zinc-400"
            />
          </motion.span>
        ))}
      </span>
    </p>
  );
};
