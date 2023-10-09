import classes from "./CampaignResults.module.scss";

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

const CampaignResults = () => {
  const theme = DUMMY_THEME;

  return (
    <section className={`${classes["campaign-results"]} ${classes[`${theme}`]}`}>
      <div className="container">
        <div className={classes["campaign-container"]}>
          <div className={classes["campaign-results-left"]}>
            <p>Campaign Results</p>
            <ul>
              {DUMMY_CAMPAIGNS.map((item) => (
                <li>
                  <p>{item.name}</p>
                  <ul>
                    {item.items.map((innerItem) => (
                      <li>{innerItem}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          <div className={classes["campaign-results-right"]}></div>
        </div>
      </div>
    </section>
  );
};

export default CampaignResults;
