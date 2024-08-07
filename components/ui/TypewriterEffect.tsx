"use client";

import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });
  const renderWords = () => {
    return (
      <div className="leading-normal text-4xl">
        {wordsArray.map((word, idx) => {
          return (
            <>
              <div
                key={`word-${idx}`}
                className="inline-block align-middle justify-center mt-1 sm:mt-0 mr-1"
              >
                {word.text.map((char, index) => (
                  <span
                    key={`char-${index}`}
                    className={cn(
                      `dark:text-white text-white tracking-tight text-4xl`,
                      word.className
                    )}
                  >
                    {char}
                  </span>
                ))}

                &nbsp;
              </div>
              {idx === 3 && <br />}
              {idx === 7 && <br />}
            </>
          );
        })}
      </div>
    );
  };

  return (
    <div className={cn("flex space-x-1 my-6", className)}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{
          width: "0%",
        }}
        whileInView={{
          width: "fit-content",
        }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1,
        }}
      >
        <div
          className="text-4xl xl:text-5xl font-bold"
          style={{
            whiteSpace: "nowrap",
          }}
        >
          {renderWords()}{" "}
        </div>{" "}
      </motion.div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          opacity: 0,

          repeat: Infinity,
          repeatType: "reverse",
        }}
      ></motion.span>
    </div>
  );
};
