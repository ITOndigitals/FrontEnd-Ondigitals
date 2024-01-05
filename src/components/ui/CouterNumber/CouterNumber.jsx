import React, { useEffect, useState } from "react";

export default function CounterNumber({ value, classes, threshold }) {
  const classname = classes;
  const [currentValue, setCurrentValue] = useState(0);
  useEffect(() => {
    const partnerSections = document.querySelectorAll(`.${classname}`);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const couter = setTimeout(() => {
              if (currentValue < value) {
                setCurrentValue(currentValue + 1);
              }
            }, 1);
            const timeout = setTimeout(() => {
              setCurrentValue(value);
            }, 2000);
            return () => {
              observer.unobserve(entry.target);
              clearTimeout(couter);
              clearTimeout(timeout);
            };
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: threshold || 0.2,
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
