import { useEffect, useState } from "react";
import classes from "./IntroAboutUs.module.scss";

const IntroAboutUs = () => {
  const [mousePosition, setMousePosition] = useState({ x: "50%", y: "50%" });

  useEffect(() => {
    //Xác định tọa độ y điểm trên cùng của section và tọa độ điểm
    //y cuối cùng của section để đảm bảo backdrop không chạy ra ngoài
    const handleMouseMove = (event) => {
      const xPoint = event.clientX;
      const yPoint = event.clientY;

      setMousePosition({ x: xPoint, y: yPoint });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className={`${classes.intro} intro`}>
      <div
        className={classes["cursor-backdrop"]}
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      ></div>
      <div className="container"></div>
    </div>
  );
};

export default IntroAboutUs;
