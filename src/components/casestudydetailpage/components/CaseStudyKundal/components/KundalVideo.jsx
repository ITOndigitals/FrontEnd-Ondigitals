import CaseStudyListItemContent from "@/components/ui/CaseStudyListItem/CaseStudyListItemContent";
import classes from "./KundalVideo.module.scss";
import VideoPlayer from "@/components/ui/VideoPlayer/VideoPlayer";
import { Maven_Pro } from "next/font/google";
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

const DUMMY_INDEPTH_CONTENT = {
  title: "KOL Marketing",
  dotColor: "#3D1766",
  contentItems: [
    "KOL marketing campaign setup:",
    "Micro influencer: those who have high influence in hair caring to share relevant hair care tips and tricks",
    "Macro influencer: those who have high follower counts as to increase brand reach",
    "Booking KOL",
    "Campaign managing and reporting",
    "Middleman task handling",
  ],
};

const KundalVideo = () => {
  return (
    <section className={classes["kundal-video"]}>
      <div className="container">
        <div className={classes["grid-container"]}>
          <div className={classes["left-item"]}>
            <div className={classes["left-item__content-list"]}>
              <CaseStudyListItemContent
                content={DUMMY_INDEPTH_CONTENT}
                dotColor={DUMMY_INDEPTH_CONTENT.dotColor}
                isDark={true}
              />
            </div>
          </div>
          <div className={classes["right-item"]}>
            <VideoPlayer url="https://ondigitals.com/wp-content/uploads/huynhquy_1.mp4"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KundalVideo;
