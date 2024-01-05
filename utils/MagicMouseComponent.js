import { useEffect } from "react";
const MagicMouse = () => {
  useEffect(() => {
    const options = {
      outerStyle: "circle-basic",
      hoverEffect: "pointer-overlay",
      hoverItemMove: true,
      defaultCursor: false,
      outerWidth: 30,
      outerHeight: 30,
    };
    window.magicMouse(options);
  }, []);

  return null;
};

export default MagicMouse;
