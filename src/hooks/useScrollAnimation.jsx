// import { useEffect } from "react";

// const useScrollAnimation = () => {
//   useEffect(() => {
//     const elements = document.querySelectorAll(".fade-in");

//     const handleScroll = () => {
//       elements.forEach((el) => {
//         const rect = el.getBoundingClientRect();
//         if (rect.top < window.innerHeight * 0.9) {
//           el.classList.add("show");
//         }
//       });
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll(); // Run on initial load
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
// };

// export default useScrollAnimation;
import { useEffect } from "react";

const useScrollAnimation = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-element");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("float-in");
            observer.unobserve(entry.target); // Stop observing once animated
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect(); // Cleanup observer on unmount
  }, []);
};

export default useScrollAnimation;