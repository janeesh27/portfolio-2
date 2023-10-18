import React, { useState, useEffect } from "react";

const TypingElement = ({ message }) => {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    if (message) {
      let currentIndex = 0;

      const messageLength = message.length - 1;

      const typingInterval = setInterval(() => {
        setTypedText((prevTypedText) => {
          console.log(currentIndex);
          return prevTypedText + message[currentIndex];
        });
        currentIndex++;

        if (currentIndex === messageLength) {
          clearInterval(typingInterval);
        }
      }, 400);

      return () => clearInterval(typingInterval);
    }
  }, [message]);

  return <div style={{ textAlign: "center" }}>{typedText}</div>;
};

export default TypingElement;
