import { useEffect } from "react";

function useScrollReveal() {

  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }

      });

    }, { threshold: 0.2 });

    const elements = document.querySelectorAll(".reveal");

    elements.forEach((el) => observer.observe(el));

  }, []);
}

export default useScrollReveal;