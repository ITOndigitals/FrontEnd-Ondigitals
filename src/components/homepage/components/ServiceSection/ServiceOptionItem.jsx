import classes from "./ServiceOptionItem.module.scss";

const ServiceOptionItem = ({ item, isActive, onChangeActiveItem }) => {
  const itemClasses = `${classes.item} ${isActive ? classes.active : ""}`;

  const changeActiveItemHandler = (itemId) => {
    onChangeActiveItem(itemId);
  };

  const activeColor = `${isActive ? item.activeColor : "transparent"}`;
  const borderColor = `${isActive ? item.activeColor : "black"}`;

  return (
    <li className={itemClasses}>
      <h3
        className={classes["item-wrapper"]}
        style={{ backgroundColor: activeColor, borderColor: borderColor }}
        onClick={changeActiveItemHandler.bind(this, item.id)}
      >
        <p className={classes["item-wrapper__name"]}>{item.name}</p>
        <div className={classes["item-wrapper__status"]}></div>
      </h3>
    </li>
  );
};

export default ServiceOptionItem;
