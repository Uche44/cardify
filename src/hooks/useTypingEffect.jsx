// import { useState, useEffect } from "react";

// export const useTypingEffect = (texts, speed = 100, delay = 2000) => {
//   const [text, setText] = useState("");
//   const [index, setIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);
//   const [deleting, setDeleting] = useState(false);

//   useEffect(() => {
//     const currentText = texts[index];

//     if (deleting) {
//       if (charIndex > 0) {
//         setTimeout(() => setCharIndex(charIndex - 1), speed / 2);
//       } else {
//         setDeleting(false);
//         setIndex((prev) => (prev + 1) % texts.length);
//       }
//     } else {
//       if (charIndex < currentText.length) {
//         setTimeout(() => setCharIndex(charIndex + 1), speed);
//       } else {
//         setTimeout(() => setDeleting(true), delay);
//       }
//     }
//   }, [charIndex, deleting, index, texts, speed, delay]);

//   return text.slice(0, charIndex);
// };

import { useState, useEffect } from "react";

export const useTypingEffect = (
  words,
  typingSpeed = 150,
  pauseDuration = 1000
) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === words.length) return;

    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), pauseDuration);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, typingSpeed, pauseDuration]);

  useEffect(() => {
    const blinkTimeout = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);

    return () => clearTimeout(blinkTimeout);
  }, [blink]);

  return `${words[index].substring(0, subIndex)}${blink ? "|" : " "}`;
};
