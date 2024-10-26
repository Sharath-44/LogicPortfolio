import { FiBarChart, FiBell, FiDollarSign, FiPlay } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "./useWindowSize";
import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link

const VerticalAccordion = () => {
  const [open, setOpen] = useState(items[0].id);

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center px-4"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='%23d4d4d4'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
      }}
    >
      <h2 className="text-3xl font-bold text-zinc-800 mb-8">My Projects</h2>
      <section className="p-4 bg-zinc-800">
        <div className="flex flex-col lg:flex-row h-fit lg:h-[450px] w-full max-w-6xl mx-auto shadow overflow-hidden">
          {items.map((item) => (
            <Panel
              key={item.id}
              open={open}
              setOpen={setOpen}
              id={item.id}
              Icon={item.Icon}
              title={item.title}
              imgSrc={item.imgSrc}
              description={item.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

const Panel = ({ open, setOpen, id, Icon, title, imgSrc, description }) => {
  const { width } = useWindowSize();
  const isOpen = open === id;

  return (
    <>
      <button
        className="bg-zinc-600 hover:bg-zinc-500 transition-colors p-3 border-r-[1px] border-b-[1px] border-slate-200 flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group"
        onClick={() => setOpen(id)}
        aria-expanded={isOpen}
        aria-controls={`panel-${id}`}
      >
        <span
          className="hidden lg:block text-xl font-light text-white rotate-180"
          style={{ writingMode: "vertical-lr" }}
        >
          {title}
        </span>
        <span className="block lg:hidden text-xl font-light text-white">{title}</span>
        <div className="w-6 lg:w-full aspect-square bg-zinc-900 text-white grid place-items-center">
          <Icon />
        </div>
        <span className="w-4 h-4 bg-white group-hover:bg-slate-50 transition-colors border-r-[1px] border-b-[1px] lg:border-b-0 lg:border-t-[1px] border-slate-200 rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-20" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-full h-full overflow-hidden relative bg-black flex items-end"
            id={`panel-${id}`}
            aria-labelledby={`heading-${id}`}
          >
            <motion.div
              variants={descriptionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="px-4 py-2 bg-black/40 backdrop-blur-sm text-white"
            >
              <p>{description}</p>
              <Link
                to={`/projects/${title.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-blue-400 underline mt-2 block"
              >
                Read Detailed Overview...
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const panelVariants = {
  open: {
    width: "100%",
    height: "100%",
  },
  closed: {
    width: "0%",
    height: "100%",
  },
};

const panelVariantsSm = {
  open: {
    width: "100%",
    height: "200px",
  },
  closed: {
    width: "100%",
    height: "0px",
  },
};

const descriptionVariants = {
  open: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 0.125,
    },
  },
  closed: { opacity: 0, y: "100%" },
};

const items = [
  {
    id: 1,
    title: "Event Management App",
    Icon: FiDollarSign,
    imgSrc:
      "/eventmanagement/7.png",
    description:
      "The Event Management App is a Flutter-based application designed to streamline the creation, viewing, and management of events. It allows users to easily create events, upload images, and modify event details as needed, all within a user-friendly interface. Utilizing Flutter for cross-platform support and Appwrite for backend services, the app ensures a seamless experience for managing event data across devices.",
  },
  {
    id: 5,
    title: "Movement Based Music Recommender",
    Icon: FiBarChart,
    imgSrc:
      "musicRec/architecture.jpg",
    description:
      "Music recommendation system that leverages human movement to enhance personalization. It combines bidirectional Long Short-Term Memory (BiLSTM) and bidirectional Gated Recurrent Unit (BiGRU) networks to analyze skeletal data from input videos, capturing complex movements, gestures, and the emotional aspects of body language. The system achieves an impressive F1 score of 0.98 in music recommendations based on this skeletal data.",
  },
  {
    id: 3,
    title: "RealTime TempFlow",
    Icon: FiBell,
    imgSrc:
      "/tempflow/3.png",
    description:
      "This project leverages Apache Kafka for data ingestion, Apache Spark for stream processing, and MongoDB for data storage. The pipeline enables efficient handling of high-volume data streams, supporting real-time analytics and insights.",
  },
  {
    id: 2,
    title: "File Guard Share",
    Icon: FiPlay,
    imgSrc:
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    description:
      "File Guard Share offers a secure and reliable platform for sharing files peer-to-peer. With state-of-the-art encryption mechanisms, File Guard Share ensures that your files remain private and protected throughout the sharing process, whether it's for personal or professional use.",
  },
  {
    id: 4,
    title: "HiredIn Media Website",
    Icon: FiBarChart,
    imgSrc:
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    description:
      "A LinkedIn clone (HiredIn Media Website) built using MongoDB, ExpressJS, ReactJS, NodeJS (MERN). Has every features of LinkedIn such as posting a picture with text, like and comments, profile section including following and followers, Also group chat and solo chat features.",
  },
];

export default VerticalAccordion;
