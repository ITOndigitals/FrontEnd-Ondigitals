import React from "react";
import classes from "./ContentServiceDetail.module.scss";
import Image from "next/image";
export default function ContentServiceDetail() {
  return (
    <section className={classes["content-service-detail"]}>
      <div className="container">
        <div className={classes["content-service-detail__title"]}>
          <p className={classes["content-service-detail__title__text"]}> 
            A Vietnam-based SEO Agency with the most affordable SEO services
          </p>
        </div>
        <div className={classes["content-service-detail__content"]}>
          <div className={classes["content-service-detail__content__left"]}>
            <p>
              Whether you’re an e-commerce site looking to increase sales or you
              just want a boost in site traffic, On Digitals has got you
              covered. Our goal is not only to improve your website’s ranking to
              all search engines, but also to drive traffic that will convert
              into sales.
            </p>
          </div>
          <div className={classes["content-service-detail__content__center"]}>
            <div className={classes["content-service-detail__content__center__image"]}>
              <Image
                src="https://s3-alpha-sig.figma.com/img/ae42/2c6f/b39488a1089921a0759bf55baf19a0b0?Expires=1696809600&Signature=Ts0y4ioQL1UN5YsNCuImSXvXyneVKeuB48x8DbEWpPrXpYVsBSGZAj3Tn-icxrE3kuN0r4bPaDB3FU~MXNyAKbCju~dZCk6kCmMsd4QZM079yeVNa76rCcjuKdSDiqNkhQGZDRhjIhrdVMo8fkJOvo8IiJBXRZDrplGygnKhQTeL1FHZrohvwlr5eyStDdaUcXHZ1WSZOIinuC8pwFbCrBz~XGoDyOZOL33NPbXGabB3y9aiLWedWeL2sJ1JGDSYD~uFivTIiDzxmthwJaTSQ~6BXTYPojp1KHnudocQ0iDr5wLYc7Ba28xQVMNrG3x8qmTlT0ELHnMiWYgzPfFD-A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="ádasda"
              />
            </div>
          </div>
          <div className={classes["content-service-detail__content__right"]}>
            <p>
              We have great passion and a wealth of knowledge. This is what
              defines our innovative thinking and creativity. We make sure that
              you get the best possible results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
