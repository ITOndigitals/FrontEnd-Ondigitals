import OdsStroke from "@/components/ui/OdsStroke/OdsStroke";
import classes from "./CampaignResults.module.scss";

import { Maven_Pro } from "next/font/google";
import Image from "next/image";
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

const DUMMY_CAMPAIGNS = [
  {
    name: "Scopes of Work",
    items: ["Manage Social Media Channels", "Create content to drive sales"],
  },
  {
    name: "Scopes of Work",
    items: ["Manage Social Media Channels", "Create content to drive sales"],
  },
];
const DUMMY_BG_COLOR = "#CD0404"; //Màu nền của section
const DUMMY_CIRCLE_COLOR = "#6F1AB6"; // Màu của vòng tròn nhỏ trên khung của ảnh

const StudyImg =
  "https://s3-alpha-sig.figma.com/img/1112/0849/8c9222aef186de79b58a4b9b70c1a126?Expires=1698624000&Signature=Xxk17SAB4MkEivTtnuNJ9DjzNMI3gSLLF2Ydj~jBBMqYLdvMP31d5SsAAzMd67q3NjTuIe4-rjwurWYwmZGPnR5ndzz5Kp8dhrrnYxu71nVHgtCgOD22QKrJ~gz9SRKY3I8532hKTzEQDfNk3VJcKPSyTfdaPtzYtUeug-rZQK-kDlOrFDjowf7zhk6-5bpM4ngueLn16kmK6XtB5~TX5Bv48zZ9aFarqeCwCRf0xex7Rv7Zh~voJqLzNJgcPnPjFgmkwj4Fbs0z6a7EXPKBtqENehyxDNNwBVEwg9FjCwor055MggvC6MZnQKgsr4zLDP~Y43-LXnMOr8KUZLaYtw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

const CampaignResults = () => {
  return (
    <section
      className={classes["campaign-results"]}
      style={{ backgroundColor: DUMMY_BG_COLOR }}
    >
      <div className="container">
        <div className={classes["campaign-container"]}>
          <div className={classes["campaign-results-left"]}>
            <p className={classes["campaign-results-left__heading"]}>
              Campaign Results
            </p>
            <ul
              style={{
                fontFamily: MavenPro.style.fontFamily,
                marginBottom: "50px",
              }}
            >
              {DUMMY_CAMPAIGNS.map((item, index) => (
                <li
                  key={index}
                  className={classes["campaign-results-left-list-item"]}
                >
                  <p
                    className={
                      classes["campaign-results-left-list-item__heading"]
                    }
                  >
                    {item.name}
                  </p>
                  <ul
                    className={
                      classes["campaign-results-left-list-item__inner-list"]
                    }
                  >
                    {item.items.map((innerItem, index) => (
                      <li
                        key={index}
                        className={
                          classes[
                            "campaign-results-left-list-item__inner-list-item"
                          ]
                        }
                      >
                        <div
                          className={
                            classes[
                              "campaign-results-left-list-item__inner-list-item-dot"
                            ]
                          }
                        />
                        {innerItem}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          <div className={classes["campaign-results-right"]}>
            <div className={classes["campaign-results-fig"]}>
              <div className={classes["campaign-results-fig__stroke"]}>
                <OdsStroke width="100%" height="100%" />
                <div
                  className={classes["campaign-results-fig__circle"]}
                  style={{ color: DUMMY_CIRCLE_COLOR }}
                ></div>
              </div>
              <div className={classes["campaign-results-fig__image"]}>
                <Image
                  src={StudyImg}
                  fill
                  alt="case-study-image"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignResults;
