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
const DUMMY_THEME = "primary-light";

const StudyImg =
  "https://s3-alpha-sig.figma.com/img/5d4b/2a79/7666c577a2fbc182a37376e3ec5c7a77?Expires=1698019200&Signature=TyjPmPltgiRdInh8LeSeBlA0JjIT-kA-idIz6q5Ax98lkqQSchln6~AfpHXpXEdzr5kh1ZT3mD50FGd1Y1HCuBnXNhOiYfmvvmRo07X6-7JftJsq7aceO-pmEmfYVPBk~trazyhGuCufif7sbWvgnxJLASTpPPBIkIVz9gbFNiXyItWLnqai2MTGfnG-V8HsBt7kbW1mz~OpWoFXw2xBLS4HX9ODu6OqBCj2RX5JM14Mn6ZkZhKx0qRR9y3gWR1e6TzOhfZYZisdVz5jOq29OmfjK6avxBiZMm0alRsQoZ~w8tW0ckgEKDLSMHl~KYiFJ1Ir9mW86tzmS4hR~vwclA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

const CampaignResults = () => {
  const colorTheme = DUMMY_THEME;

  return (
    <section
      className={`${classes["campaign-results"]} ${classes[`${colorTheme}`]}`}
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
                <div className={classes["campaign-results-fig__circle"]}></div>
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
