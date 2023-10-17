import React from "react";
import classes from "./InDepthDetailsKLD.module.scss";
import Image from "next/image";
import { Maven_Pro } from "next/font/google";
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });
export default function InDepthDetailsKLD() {
  return (
    <section className={classes["in-depth-detail"]}>
      <div className="container">
        <div className={classes["in-depth-detail__content"]}>
          <div className={classes["in-depth-detail__content__left"]}>
            <p className={classes["in-depth-detail__content__left__title"]}>
              In-depth Details
            </p>
            <div
              style={{ fontFamily: MavenPro.style.fontFamily }}
              className={classes["in-depth-detail__content__left__text"]}
            >
              <p
                className={
                  classes["in-depth-detail__content__left__text__title"]
                }
              >
                Content Marketing
              </p>
              <div
                className={
                  classes["in-depth-detail__content__left__text__content"]
                }
              >
                On Digitals helped create content for Facebook Fanpage posts
                with these goals in mind:
                <ul>
                  <li>Boost the Fanpage’s engagement rates</li>
                  <li>Increase brand awareness</li>
                  <li>Distill the brand essence – elegance and luxury</li>
                  <li>Content planning and consultation</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={classes["in-depth-detail__content__right"]}>
            <div
              className={classes["in-depth-detail__content__right__imagephone"]}
            >
              <Image
                src="https://s3-alpha-sig.figma.com/img/3238/f9b1/bd35d6bccd8714a2cc5397528dcd1b21?Expires=1698019200&Signature=n8xQH79jOTEi0UAd5Smq-LPwNP5eG4cLHZ~2qkHwTJhj3yfYpXnJfYWH1XgssMYUGAL60K~GYcl~GZlflcioZanjYXnQVo0XVEqPSKf1gK5VsVLybJLy7J0YxWISht9lUXZzgdPwSHv5ukRQD94VP4RsrQyfRqXKwVe72xYLchKpvtT9ebWfr~Xt6Wh66wCvMclELRSnH0UgaUg7lTK6MZRYaC37IiIfh7tkPQfG7h6WWKep~YoL-ZlxB5zqMmIXrznwwNWgmq-TragdjU8uZa1yOaeDSR0sVTzXS4iyRCHBL6buI9pPU-BIQC37YrscFlYxvuAJnoJ2U8HOM-usRA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="text"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div
              className={
                classes["in-depth-detail__content__right__imagelaptop"]
              }
            >
              <Image
                src="https://s3-alpha-sig.figma.com/img/1be3/0d8a/a80e7d19a650fd324d060aba71ba0576?Expires=1698019200&Signature=aHYR-tahcvZ~sOcawC-9~lnOQl5idEH2QH1vNZ100AfSiRsKu0aA8WQPf~X0PH8h-pKmt~8j-YwVHNPIl2dI4LWazQnFPk-y6kSY8DF01AFFJFR3dvL1vwP1CiMVslQxH~uyBincm~prKkN9KPEy6oyJ~sF6k5WEWREnJgycTbbvUHLtBsnT5m~onaPRWEvvAozkzMXrOpzlY1LqTJj-lxhcQMIz999tibrPxEkP2A6nyxxffdbezwJnCHqlWzCN8HO~O17mopPZX9uIArWyl~WPRhdC3~uszT3kULMj7GCHKKB-yrvXQgCYhMWtcPszrT9slZWQyNLtrUcWc-6kRw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="text"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
