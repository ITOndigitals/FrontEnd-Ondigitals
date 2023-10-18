import React from "react";
import classes from "./InDepthDetailsRenault.module.scss";
import { Maven_Pro } from "next/font/google";
import Image from "next/image";

const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });
export default function InDepthDetailsRenault() {
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
                Website Design & Development
              </p>
              <div
                className={
                  classes["in-depth-detail__content__left__text__content"]
                }
              >
                <ul>
                  <li>Full-Stack Website Development</li>
                  <li>
                    UX/UI Optimization through a Vietnamese audience-oriented
                    lens
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={classes["in-depth-detail__content__right"]}>
            <div
              className={classes["in-depth-detail__content__right__imagemain"]}
            >
              <Image
                src="https://s3-alpha-sig.figma.com/img/244d/3b19/44ea4049d5718ad68853ee7bb72ff45f?Expires=1698019200&Signature=Rmg2jrv71dTyAG1MKU80qtpUrANb5c2Xx7C1cdKuHMgLbsj3rmNiMXe3SARdk4RymUYWmkWjkTZCvMYenbg59CJJon53rMpnb3BsyC-tgG1qYRdUK~gyqDn2puVsdfKp505Wv2VCHvRZXPfA3~Jw4EUhs94~iNSp5a-NMSFm7mLGzEPUNlUwmk40sGHcyPnde83e1EN13G4dnAKIq8ZAD3MMgCtB8JxXUiV3Uh8EadMJQ7OYb2qonVGngr1SsIZGcy~bcOUB61bda5Hw3e83~z3MTPnt8~Unp83nydbR7fn4-5HIo3C6KpkOChNMmtVdy2WndMLOtVVU-o4NNPo~sw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="text"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              />
              <div
                className={
                  classes["in-depth-detail__content__right__imagemain__phone"]
                }
              >
                <Image
                  src="https://s3-alpha-sig.figma.com/img/5cf0/ae4f/1523f2d15ac5855d2de8b5f038e78716?Expires=1698019200&Signature=qblIqBT-A2yrNoJSJXTf8WP7t-kqJql7zRYxiqotBr7viUNa~V7Zu2Bmg4qyfDUPwkGqT3v1tj~p-XVZkUHiQOvaunSahjPP8vkmnPvhqTSnCoST77ejEKzR~-OUN2DPNfYDi9iFQHPrYochvCtIMD6I-xjQxZmX68QHRgpZpqrA4qFRPcsLGX8AbfZdrH~o1Z5HXv66kUQ4fc31eFr90VQmxGSp6gQdE~Zt4DcWevpwxPbfLTOGUz03-nYWNN9J9qM7trTC00X10xeOq7XCR9nbjlx1ogaVgOIOVwu5bIMkyrJB837EVvmMQMnGx3ZxNFtfcpq~PX0oeLhK0nnZAg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt="text"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
