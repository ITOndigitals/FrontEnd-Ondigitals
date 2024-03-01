import React from "react";
import classes from "./NeedHelpDigitalGrowth.module.scss";
import Button from "../Buttons/Button/Button";
import { ArrowRight } from "../Icons/ListIcon";
import { useRouter } from "next/router";
import { Maven_Pro } from "next/font/google";
import { languagePathsContact } from "../../../../utils/languageSlug";
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

export default function NeedHelpDigitalGrowth() {
  const { locale } = useRouter();
  return (
    <section className={classes["help-digital-growth-main"]}>
      <div className="container">
        <div className={classes["help-digital-growth-main__content"]}>
          <div className={classes["help-digital-growth-main__content__title"]}>
            NEED HELP <br />
            with digital growth?
          </div>
          <div
            style={{ fontFamily: MavenPro.style.fontFamily }}
            className={classes["help-digital-growth-main__content__text"]}
          >
            Tell us about your business challenge and let's discuss together
          </div>
          <div className={classes["help-digital-growth-main__content__button"]}>
            <Button
              href={languagePathsContact[locale]}
              className="btn-contact-form"
              RightIcon={<ArrowRight width={24} height={24} color="#FFF" />}
            >
              Send us a message
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
