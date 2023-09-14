import classes from "./Tag.module.scss";
// Type is around 6 values
const Tag = ({ type, name }) => {
  return (
    <div className={`${classes.tag} ${classes[`type-${type}`]}`}>
      {name}
    </div>
  );
};

export default Tag;
