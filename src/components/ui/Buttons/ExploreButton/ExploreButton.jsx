import classes from "./ExploreButton.module.scss";

const ExploreButton = ({children}) => {
  return (
    <div className={classes.btn}>{children}</div>
  )
}

export default ExploreButton