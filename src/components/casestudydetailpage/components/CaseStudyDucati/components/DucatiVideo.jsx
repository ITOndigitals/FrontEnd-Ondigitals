import VideoPlayer from "@/components/ui/VideoPlayer/VideoPlayer";
import classes from "./DucatiVideo.module.scss";
import { Maven_Pro } from "next/font/google";
import ButtonWhiteBorder from "@/components/ui/Buttons/ButtonWhiteBorder/ButtonWhiteBorder";
import TopRightArrow from "@/components/ui/Icons/TopRightArrow";
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

const DucatiVideo = () => (
  <section className={classes["ducati-video"]}>
    <div className="container">
      <div className={classes["ducati-video-container"]}>
        <div className={classes["ducati-video-left"]}>
          <div className={classes["ducati-video-left-content-group"]}>
            <p
              style={{ fontFamily: MavenPro.style.fontFamily }}
              className={classes["ducati-video-left-content-group__main"]}
            >
              The content and visuals that are curated from a multi-angle
              viewpoint, is also the message that we want to convey to the brand
              and its audience. <br /> Take a look at our technological product
              from the Ducati Project team.
            </p>
            <ButtonWhiteBorder
              href="#"
              isInline
              RightIcon={<TopRightArrow width={24} height={24} color="white" />}
            >
              Experience now
            </ButtonWhiteBorder>
          </div>
        </div>
        <div className={classes["ducati-video-right"]}>
          <VideoPlayer url="https://ondigitals.com/wp-content/uploads/huynhquy_1.mp4" />
        </div>
      </div>
    </div>
  </section>
);

export default DucatiVideo;
