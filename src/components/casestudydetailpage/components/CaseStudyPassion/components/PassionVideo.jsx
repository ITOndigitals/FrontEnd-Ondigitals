import CaseStudyListItemContent from "@/components/ui/CaseStudyListItem/CaseStudyListItemContent";
import classes from "./PassionVideo.module.scss";
import VideoPlayer from "@/components/ui/VideoPlayer/VideoPlayer";

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

const PassionVideo = () => {
  const content = DUMMY_INDEPTH_CONTENT;

  return (
    <section className={classes["passion-video"]}>
      <div className="container">
        <div className={classes["passion-video-container"]}>
          <div className={classes["passion-video__left"]}>
            <div className={classes["passion-video__left-content"]}>
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
          <div className={classes["passion-video__right"]}>
            <VideoPlayer url="https://ondigitals.com/wp-content/uploads/huynhquy_1.mp4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PassionVideo;
