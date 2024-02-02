import classes from "./AnimatedLines.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, useLayoutEffect } from "react";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

gsap.registerPlugin(ScrollTrigger);

const AnimatedLines = ({data}) => {
  if(!data){
    return null;
  }
  const ANIMATEDLIST = data.concat(data)
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-30vw",
        ease: "linear",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "bottom bottom",
          toggleActions: "play pause revert revert",
          scrub: true,
        },
      }
    );
    return () => {
      {
        /* A return function for killing the animation on component unmount */
      }
      pin.kill();
    };
  }, []);

  return (
    <div className="container overflow-hidden">
      <div className={classes["animated-lines"]} ref={sectionRef}>
        <ul className={classes["animated-lines-list"]} ref={triggerRef}>
          {ANIMATEDLIST &&ANIMATEDLIST.map((item,index) => {
            const circleClasses = `${classes["animated-lines-item-circle"]} ${
              classes[`${item.color}`]
            }`;
            return (
              <li className={classes["animated-lines-item"]} key={index}>
                <div className={circleClasses} />
                <div className={classes["animated-lines-item-content"]}>
                  {item?.textContent}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AnimatedLines;
