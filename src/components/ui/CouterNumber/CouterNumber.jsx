import React, { useEffect, useState, useRef } from "react";

export default function CounterNumber({ value, classes, threshold }) {
  const [currentValue, setCurrentValue] = useState(0);
  const classname = classes;
  const valueRef = useRef(value);
  useEffect(() => {
    const partnerSections = document.querySelectorAll(`.${classname}`);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let count = 0;
            const interval = setInterval(() => {
              if (count < valueRef.current) {
                setCurrentValue(count);
                count++;
              } else {
                clearInterval(interval);
              }
            }, 50);

            const timeout = setTimeout(() => {
              setCurrentValue(valueRef.current);
              clearInterval(interval);
            }, 3000);

            return () => {
              observer.unobserve(entry.target);
              clearInterval(interval);
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

    return () => {
      observer.disconnect();
    };
  }, [classname, threshold]);

  return (
    <>
      <p>{`${currentValue}+`}</p>
    </>
  );
}
