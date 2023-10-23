"use client";

import useActiveSectionContext from "@/lib/activeSection";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Variants, motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import Link from "next/link";
import SlideText from "./SlideText";
import Image from "next/image";

const textVariants: Variants = {
  hidden: (direction) => ({
    opacity: 0,
    scale: 2,
    x: direction > 0 ? -100 : 0,
    y: direction > 0 ? -100 : 100,
  }),
  visible: {
    scale: 1,
    opacity: 0.8,
    x: 0,
    y: 0,
  },
};
const spanVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.175,
    },
  },
};

const Home = ({ name }: { name: string }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection } = useActiveSectionContext();
  useEffect(() => {
    if (inView) {
      setActiveSection("home");
    }
  }, [inView, setActiveSection]);
  return (
    <motion.section
      className="relative flex min-h-screen w-full snap-start flex-col items-center "
      id="home"
      ref={ref}
    >
      <SectionTitle title="Welcome to my Portfolio" />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="relative m-auto flex h-96 w-full max-w-5xl flex-col items-center space-y-2 md:space-y-5  "
      >
        <motion.h1 variants={textVariants} className="font-bold   md:text-3xl">
          My name is
        </motion.h1>
        <p className="space-x-2 text-3xl font-black  md:space-x-5 md:text-7xl">
          {name.split(" ").map((word, index) => (
            <motion.span
              className="inline-block"
              variants={spanVariants}
              key={index}
            >
              {word}
            </motion.span>
          ))}
        </p>
        <SlideText />
        <div className="absolute bottom-12 flex flex-col items-center justify-center gap-5 ">
          <Link
            href="#contact"
            className=" rounded-full border px-3 py-1 text-xl transition hover:scale-125 hover:border-red-600 hover:text-red-600"
          >
            Let's Talk
          </Link>
          <motion.div
            whileInView={{
              opacity: 0,
              y: 10,
              transition: {
                duration: 2,
                repeat: Infinity,
              },
            }}
            className="relative h-8 w-8 md:h-10 md:w-10"
          >
            <Image
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src="/assets/scroll.png"
              alt="scroll"
              fill
              priority
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Home;