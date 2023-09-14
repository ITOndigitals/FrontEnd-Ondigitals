import classes from "./ServiceOptionItem.module.scss";

const ServiceOptionItem = ({ item, isActive, onChangeActiveItem }) => {
  const itemClasses = `${classes.item} ${isActive ? classes.active : ""} ${
    classes[`${item.activeColor}`]
  }`;

  const changeActiveItemHandler = (itemId) => {
    onChangeActiveItem(itemId);
  };

  return (
    <li className={itemClasses}>
      <button
        className={classes["item-wrapper"]}
        onClick={changeActiveItemHandler.bind(this, item.id)}
      >
        <p className={classes["item-wrapper__name"]}>{item.name}</p>
        <div className={classes["item-wrapper__status"]}></div>
      </button>
    </li>
  );
};

export default ServiceOptionItem;
