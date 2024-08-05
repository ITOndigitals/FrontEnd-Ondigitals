import classes from "./AnimatedLines.module.scss";
const AnimatedLines = ({ data }) => {
  if (!data) {
    return null;
  }
  const ANIMATEDLIST = data.concat(data);
  return (
    <div className="container overflow-hidden">
      <div className={classes["animated-lines"]}>
        <ul className={classes["animated-lines-list"]}>
          {ANIMATEDLIST &&
            ANIMATEDLIST.map((item, index) => {
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
