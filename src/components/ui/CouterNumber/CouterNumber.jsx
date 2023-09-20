import React, { useEffect, useState } from "react";

export default function CounterNumber({ value }) {
  const [currentValue, setCurrentValue] = useState(0);
  useEffect(() => {
    const partnerSections = document.querySelectorAll(".partner-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const couter = setTimeout(() => {
              if (currentValue < value) {
                setCurrentValue(currentValue + 1);
              }
            }, 1);

            return () => {
              observer.unobserve(entry.target);
              clearTimeout(couter);
            };
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
      }
    );

    partnerSections.forEach((section) => {
      observer.observe(section);
    });
  }, [currentValue]);
  return (
    <>
      <p>{`${currentValue}+`}</p>
    </>
  );
}
