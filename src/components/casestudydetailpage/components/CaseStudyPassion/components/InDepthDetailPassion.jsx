import CaseStudyListItemContent from "@/components/ui/CaseStudyListItem/CaseStudyListItemContent";
import classes from "./InDepthDetailPassion.module.scss";

const bgImage =
  "https://s3-alpha-sig.figma.com/img/297f/12ec/80885769d3969870c285bf0de03ad8ea?Expires=1698624000&Signature=ZhF0Fxexf6vThwpiMGXHmu2bIcJIOkXF5jahaZy2vWTyYvc-mo7E61u0L9233rrWpziuvACrKMFGFER-zhGgcfO6t04rUQPRS0u9cDcaSzOaPktB~8AeshFfpF15ZeDXpLUcM7OcesbPhltYOlN~i9AAwpgcdd4mei~ixdVCLmoDcFEm1mACmUWUGEL9bYm33Dbmsp3mhdmIQZNC8gL49wSEiXjoSF2grs9RiDpA54itnTzwHKHw-ZLydmUBW8yIjFBg1-wZ~gSCtlLe0NhD4soAPrCwfYz2hM~yBjh22~yKcf~-8YK3EyHSxyv7~jIrmaj0dlHrIYvtpIrUD9SsSA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

const DUMMY_INDEPTH_CONTENT = [
  {
    title: "Creative Design",
    dotColor: "#3D1766",
    contentItems: [
      "Product image design",
      "Post design following the brand's guidelines and agreed concepts",
      "Advertising post design",
      "Digital promotion banner design",
    ],
  },
];

const InDepthDetailPassion = () => {
  const content = DUMMY_INDEPTH_CONTENT;

  return (
    <section
      className={classes["passion-in-depth"]}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "center top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className={classes["passion-in-depth-container"]}>
          <div className={classes["passion-in-depth-container-left"]}></div>
          <div className={classes["passion-in-depth-container-right"]}>
            <p className={classes["passion-in-depth-container-right__header"]}>
              In-depth Details
            </p>
            <div
              className={
                classes["passion-in-depth-container-right__content-list"]
              }
            >
              {content.map((listItem, index) => {
                return (
                  <CaseStudyListItemContent
                    content={listItem}
                    dotColor={listItem.dotColor}
                    index={index}
                    isDark={false}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InDepthDetailPassion;
