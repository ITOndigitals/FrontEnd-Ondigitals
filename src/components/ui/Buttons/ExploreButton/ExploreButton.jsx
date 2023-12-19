import classes from "./ExploreButton.module.scss";

const ExploreButton = ({ children }) => {
  return <p className={classes.btn}>{children}</p>;
};

export default ExploreButton;
