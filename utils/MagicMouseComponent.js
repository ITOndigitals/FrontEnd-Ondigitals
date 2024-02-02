import { useEffect } from "react";
const MagicMouse = () => {
  useEffect(() => {
    const options = {
      "outerStyle": "disable",
      "hoverEffect": "circle-move",
      "hoverItemMove": false,
      "defaultCursor": true,
      "outerWidth": 41,
      "outerHeight": 41
    };
    window.magicMouse(options);
  }, []);

  return null;
};

export default MagicMouse;
