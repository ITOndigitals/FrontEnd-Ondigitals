import React from "react";
import classes from "./SeoContentRenault.module.scss";
import { Maven_Pro } from "next/font/google";
import Image from "next/image";

const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });
export default function SeoContentRenault() {
  return (
    <section className={classes["seo-content-renault"]}>
      <div className="container">
        <div className={classes["seo-content-renault__content"]}>
          <div className={classes["seo-content-renault__content__left"]}>
            <div
              className={
                classes["seo-content-renault__content__left__imagemain"]
              }
            >
              <Image
                src="https://s3-alpha-sig.figma.com/img/8e78/0ae4/9246092699794477508b11379174a87b?Expires=1699228800&Signature=eW7Ov6oNXvdHX~kPGBGc-WMq20x0xrpa098QidrS5Z7dfPSTWVDE5ZuzlJjviy07zY9TaadXzCZhb74h1-UeFwJMWP8S73f9GhXP8EkgR3Vd6m9yoUUeJ8nvJBiMf~1MdCGgJ3M4nFGpwg5FGDFkZQyjoNwsXpS23Z3oFRck-olrn2FOEd76sSTty3INOQtfMjvgYL1mqGGdBqrPqvVeIzVLvq9ETvC4a3D3dpy8ffJrpGV5zQmFD~W67JcCuCuFE2oT8V9AIY2u7BjfvqLm9VoiW4MFxxty6mYAGg0DRbPH7P9evxGSL-rkd5lF8TbzFhPOAjxhTzhETrPVTf9u~g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="text"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              />
              <div
                className={
                  classes[
                    "seo-content-renault__content__left__imagemain__card"
                  ]
                }
              >
                <Image
                  src="https://s3-alpha-sig.figma.com/img/46f3/f5f0/fe87b0f794128700fcd574c622d88e3d?Expires=1699228800&Signature=kmGkwRzDIviEMEYgGlhFBhztxazVjgIjjtlxeUf4IVdWe6xJMmeGvC0OXz8lThJKNl8nJKzEH06fOZgDsjHbZuJVtgSzsBrh3tAyMUHcj~ubmFxMbBF7DYU7CT-np8nPk0dH9aLceT4mHueioXEfO02O2HQr7cqtHfHLlN8QusUxNYUrntV0Ebh5c8f0MAtrZ8R-EpSvVk0r17aZXt6Xa3UAjxU16K8IM1Y6Q8ysxpqmuoMIHBM8-2hA8JFj0-xC04A3cyWOVxEZwsTBUYYm8Em3gCHzyrItqQbxMxPfkI0sbHPZV~hsfWMOm0UB32yiZXI344gGCPNzdR5AMeUBaQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt="text"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
          <div className={classes["seo-content-renault__content__right"]}>
            <div
              style={{ fontFamily: MavenPro.style.fontFamily }}
              className={classes["seo-content-renault__content__right__text"]}
            >
              <p
                className={
                  classes["seo-content-renault__content__right__text__title"]
                }
              >
                SEO Content Creation
              </p>
              <div
                className={
                  classes["seo-content-renault__content__right__text__content"]
                }
              >
                Keyword research & Content development for the arrival of 2 new
                car models: ARKANA, KAPTURE in 2 languages: English & Vietnamese
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
