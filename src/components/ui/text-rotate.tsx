"use client";

import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
import {
  AnimatePresence,
  motion,
  type AnimatePresenceProps,
  type MotionProps,
  type Transition,
} from "motion/react";

import { cn } from "@/lib/utils";

interface TextRotateProps {
  texts: string[];
  rotationInterval?: number;
  initial?: MotionProps["initial"];
  animate?: MotionProps["animate"];
  exit?: MotionProps["exit"];
  animatePresenceMode?: AnimatePresenceProps["mode"];
  animatePresenceInitial?: boolean;
  staggerDuration?: number;
  staggerFrom?: "first" | "last" | "center" | number | "random";
  transition?: Transition;
  loop?: boolean;
  auto?: boolean;
  splitBy?: "words" | "characters" | "lines" | string;
  onNext?: (index: number) => void;
  mainClassName?: string;
  splitLevelClassName?: string;
  elementLevelClassName?: string;
}

export interface TextRotateRef {
  next: () => void;
  previous: () => void;
  jumpTo: (index: number) => void;
  reset: () => void;
}

interface WordObject {
  characters: string[];
  needsSpace: boolean;
}

const TextRotate = forwardRef<TextRotateRef, TextRotateProps>(
  (
    {
      texts,
      transition = { type: "spring", damping: 25, stiffness: 300 },
      initial = { y: "100%", opacity: 0 },
      animate = { y: 0, opacity: 1 },
      exit = { y: "-120%", opacity: 0 },
      animatePresenceMode = "wait",
      animatePresenceInitial = false,
      rotationInterval = 2000,
      staggerDuration = 0,
      staggerFrom = "first",
      loop = true,
      auto = true,
      splitBy = "characters",
      onNext,
      mainClassName,
      splitLevelClassName,
      elementLevelClassName,
      ...props
    },
    ref,
  ) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    const splitIntoCharacters = (text: string): string[] => {
      if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
        const segmenter = new Intl.Segmenter("en", {
          granularity: "grapheme",
        });
        return Array.from(segmenter.segment(text), ({ segment }) => segment);
      }

      return Array.from(text);
    };

    const elements = useMemo(() => {
      const currentText = texts[currentTextIndex] ?? "";

      if (splitBy === "characters") {
        return currentText.split(" ").map((word, index, words) => ({
          characters: splitIntoCharacters(word),
          needsSpace: index !== words.length - 1,
        }));
      }

      if (splitBy === "words") {
        return currentText.split(" ");
      }

      if (splitBy === "lines") {
        return currentText.split("\n");
      }

      return currentText.split(splitBy);
    }, [texts, currentTextIndex, splitBy]);

    const getStaggerDelay = useCallback(
      (index: number, totalCharacters: number) => {
        if (staggerFrom === "first") return index * staggerDuration;
        if (staggerFrom === "last") {
          return (totalCharacters - 1 - index) * staggerDuration;
        }
        if (staggerFrom === "center") {
          const center = Math.floor(totalCharacters / 2);
          return Math.abs(center - index) * staggerDuration;
        }
        if (staggerFrom === "random") {
          const randomIndex = Math.floor(Math.random() * totalCharacters);
          return Math.abs(randomIndex - index) * staggerDuration;
        }
        return Math.abs(staggerFrom - index) * staggerDuration;
      },
      [staggerFrom, staggerDuration],
    );

    const handleIndexChange = useCallback(
      (newIndex: number) => {
        setCurrentTextIndex(newIndex);
        onNext?.(newIndex);
      },
      [onNext],
    );

    const next = useCallback(() => {
      const nextIndex =
        currentTextIndex === texts.length - 1
          ? loop
            ? 0
            : currentTextIndex
          : currentTextIndex + 1;

      if (nextIndex !== currentTextIndex) {
        handleIndexChange(nextIndex);
      }
    }, [currentTextIndex, texts.length, loop, handleIndexChange]);

    const previous = useCallback(() => {
      const previousIndex =
        currentTextIndex === 0
          ? loop
            ? texts.length - 1
            : currentTextIndex
          : currentTextIndex - 1;

      if (previousIndex !== currentTextIndex) {
        handleIndexChange(previousIndex);
      }
    }, [currentTextIndex, texts.length, loop, handleIndexChange]);

    const jumpTo = useCallback(
      (index: number) => {
        const validIndex = Math.max(0, Math.min(index, texts.length - 1));
        if (validIndex !== currentTextIndex) {
          handleIndexChange(validIndex);
        }
      },
      [texts.length, currentTextIndex, handleIndexChange],
    );

    const reset = useCallback(() => {
      if (currentTextIndex !== 0) {
        handleIndexChange(0);
      }
    }, [currentTextIndex, handleIndexChange]);

    useImperativeHandle(
      ref,
      () => ({
        next,
        previous,
        jumpTo,
        reset,
      }),
      [next, previous, jumpTo, reset],
    );

    useEffect(() => {
      if (!auto || texts.length < 2) return;

      const intervalId = window.setInterval(next, rotationInterval);
      return () => window.clearInterval(intervalId);
    }, [next, rotationInterval, auto, texts.length]);

    return (
      <motion.span
        className={cn("flex flex-wrap whitespace-pre-wrap", mainClassName)}
        {...props}
        layout
        transition={transition}
      >
        <span className="sr-only">{texts[currentTextIndex]}</span>

        <AnimatePresence
          mode={animatePresenceMode}
          initial={animatePresenceInitial}
        >
          <motion.span
            key={currentTextIndex}
            className={cn(
              "flex flex-wrap",
              splitBy === "lines" && "w-full flex-col",
            )}
            layout
            aria-hidden="true"
          >
            {(splitBy === "characters"
              ? (elements as WordObject[])
              : (elements as string[]).map((element, index) => ({
                  characters: [element],
                  needsSpace: index !== elements.length - 1,
                }))
            ).map((word, wordIndex, words) => {
              const previousCharactersCount = words
                .slice(0, wordIndex)
                .reduce(
                  (sum, previousWord) =>
                    sum + previousWord.characters.length,
                  0,
                );
              const totalCharacters = words.reduce(
                (sum, currentWord) => sum + currentWord.characters.length,
                0,
              );

              return (
                <span
                  key={`${word.characters.join("")}-${wordIndex}`}
                  className={cn("inline-flex", splitLevelClassName)}
                >
                  {word.characters.map((character, characterIndex) => (
                    <motion.span
                      initial={initial}
                      animate={animate}
                      exit={exit}
                      key={`${character}-${characterIndex}`}
                      transition={{
                        ...transition,
                        delay: getStaggerDelay(
                          previousCharactersCount + characterIndex,
                          totalCharacters,
                        ),
                      }}
                      className={cn("inline-block", elementLevelClassName)}
                    >
                      {character}
                    </motion.span>
                  ))}
                  {word.needsSpace && (
                    <span className="whitespace-pre"> </span>
                  )}
                </span>
              );
            })}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    );
  },
);

TextRotate.displayName = "TextRotate";

export { TextRotate };
