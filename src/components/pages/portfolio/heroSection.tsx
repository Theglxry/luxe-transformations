import Image from "next/image";
import React, { useEffect } from "react";
import useWindowSize from "@/hooks/useWindowSize";
import { motion, Variants, useAnimate } from "framer-motion";

const FIRST_ITEM_ID = "p_circle_parent_first_item";
const LAST_ITEM_ID = "p_circle_parent_last_item";
const PARENT_ID = "p_circle_parent";

const data = [
  {
    id: "1",
    number: "200+",
    text: "PROJECTS COMPLETED",
    bottom: null,
    zIndex: 4,
    element_id: FIRST_ITEM_ID,
  },

  {
    id: "2",
    number: "80",
    text: "AWARDS IN 2022",
    bottom: null,
    zIndex: 3,
  },

  {
    id: "3",
    number: "",
    text: "WEBY RED DOT",
    bottom: " —X2",
    zIndex: 2,
  },

  {
    id: "4",
    number: "100",
    text: "AWARDS 2023",
    bottom: " —X2",
    zIndex: 1,
    element_id: LAST_ITEM_ID,
  },
];

const parentVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren", // Start animation before children
      staggerChildren: 0.3, // Stagger child animations by 0.2 seconds
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    x: 100, // Initial position offset for stagger
  },
  visible: {
    opacity: 1,
    x: 0, // Final position after stagger

    transition: {
      duration: 1,
    },
  },
};

function HeroSection() {
  const [_index, set_index] = React.useState(0);
  const active = data[_index];

  const { md, sm } = useWindowSize();

  const [scope, animate] = useAnimate();

  const animatex = async () => {
    set_index((old) => (old === data?.length - 1 ? 0 : old + 1));
    animate(
      ".molart",
      { x: [-55, 0, 20, 0] },
      {
        ease: "easeInOut",
        type: "spring",
        bounce: 0.3,
        duration: 2,
      }
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      animatex();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      ref={scope}
      className="w-full mt-[60px] flex-col md:flex-row flex gap-[32px] justify-between">
      <div className="flex flex-col w-fit md:w-[auto]">
        <motion.h1
          initial={{ y: 150, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.4,
            },
          }}
          className="text-white font-bold font-archivo text-[clamp(44px,calc(104/1420*100vw),200px)] leading-[1.1]">
          OUR <span className="text-[#DDAE31]">SUCCESS</span>
        </motion.h1>

        <motion.h1
          initial={{ y: 150, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              type: "spring",
              delay: 0.2,
              duration: 0.5,
            },
          }}
          style={{
            WebkitTextStroke: "1px #605E60",
          }}
          className="text-[#0e0e0e] font-bold font-archivo text-[clamp(44px,calc(104/1420*100vw),200px)] leading-[1.1] text-right">
          / CASES
        </motion.h1>
      </div>

      <motion.div
        id={PARENT_ID}
        className="flex 
        items-center 
        justify-center  relative
      
      h-[189px]
      w-full
      md:h-[clamp(200px,calc(250/1420*100vw),500px)] 
      md:w-[clamp(445px,calc(445/1420*100vw),890px)] 
      ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={parentVariants}
          viewport={{ once: true }}
          className="relative h-full w-full max-w-[300px] md:max-w-full">
          {data.map((item, index) => {
            const space = sm ? 140 : md ? 100 : 65;
            const left = index === 0 ? 0 : `calc(${index * space}/1420*100vw)`;
            return (
              <motion.div
                id={item?.element_id}
                transition={{ duration: 0.1 }}
                variants={childVariants}
                key={item?.id || `${index}`}
                style={{
                  left,
                  zIndex: item?.zIndex,
                }}
                className={
                  "molart h-[100%] aspect-square border border-[#605E60] bg-[#100E10] rounded-full absolute top-0 flex items-center"
                }>
                <p
                  style={{ display: index === 0 ? undefined : "none" }}
                  className="flex flex-col mx-auto text-[clamp(14px,calc(18/1420*100vw),32px)] max-w-[116px]
               text-white font-medium">
                  {!active?.number ? null : (
                    <span className="text-[#DDAE31]">{active?.number}</span>
                  )}
                  {!active?.text ? null : <span>{active?.text}</span>}
                  {!active?.bottom ? null : (
                    <span className="text-[#a9a9a9]">{active?.bottom}</span>
                  )}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default HeroSection;
