
import { useEffect } from "react";

const useScrollAnimation = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-element");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("float-in");
            observer.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0 }

      // Trigger when 10% of the element is visible(i changed to zero)
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

export default useScrollAnimation;
