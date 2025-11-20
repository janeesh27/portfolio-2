"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TypingElement = ({ message, onComplete }) => {
  const [typedText, setTypedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (message) {
      setTypedText("");
      setIsComplete(false);
      let currentIndex = 0;

      const typingInterval = setInterval(() => {
        if (currentIndex < message.length) {
          setTypedText(message.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setIsComplete(true);
          if (onComplete) {
            onComplete();
          }
        }
      }, 150);

      return () => clearInterval(typingInterval);
    }
  }, [message, onComplete]);

  return (
    <motion.div
      className="inline-block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span className="font-bold">{typedText}</span>
      <AnimatePresence>
        {!isComplete && (
          <motion.span
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 0, 1] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="text-[#66FCF1] ml-1"
          >
            |
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default TypingElement;
