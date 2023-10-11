import React from "react";
import classes from "./WebsiteDesignKLD.module.scss";
import Image from "next/image";
import { Maven_Pro } from "next/font/google";
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });
export default function WebsiteDesignKLD() {
  return (
    <section className={classes["website-design"]}>
      <div className="container">
        <div className={classes["website-design__content"]}>
          <div className={classes["website-design__content__left"]}>
            <div
              style={{ fontFamily: MavenPro.style.fontFamily }}
              className={classes["website-design__content__left__text"]}
            >
              <p
                className={
                  classes["website-design__content__left__text__title"]
                }
              >
                E-commerce Website Design, Development & Maintenance
              </p>
              <div
                className={
                  classes["website-design__content__left__text__content"]
                }
              >
                To increase Kim Long Diep’s online presence and boost commercial
                sales, On Digitals developed a fully functional E-commerce
                website.
                <ul>
                  <li>Full-Stack Website Development</li>
                  <li>UX/UI Optimization</li>
                  <li>Livestream integration </li>
                  <li>Product list and Blog content update</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={classes["website-design__content__right"]}>
            <div className={classes["website-design__content__right__image"]}>
              <Image
                src="https://s3-alpha-sig.figma.com/img/e2c5/f658/2d8c1439f799c7b2a63b849817f38435?Expires=1698019200&Signature=YAwghsxW1zrtOewKoSiBTuUbz6F2oyyHBOaCcFmqyNddhqNjHk21VZE4NllLS-pW8mr-E7IvUaBz7qnn2B1ObB63b5kzDCSZihf7j85ik7SLJJuH4owmkQ9e21ZstfcZ8Dx3UgGAzr4KxL5bE9j-11ejLoqN~l5pG~1S5U2KJNFwKD3d4rFTSgtCLkY5n9qGSv92~4EGslHlhWQHgO6pTo73LqFP7r6CJEHDuXq-O0MCIEuxjps~VzATTlSNniPlBY4OJJd88KipWTP6hvmKGMc9x6RMm7gPoZ0hnm0nCVJb4-BjxOTgy3Nxg2H1BFL7rprYfR5rLqoUcqLexpP9cw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="text"
                fill
                sizes="(max-width: 800px) 100vw, (max-width: 1200px) 100vw, 100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
