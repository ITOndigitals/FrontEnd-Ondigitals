import Image from "next/image";
import classes from "./KundalGallery.module.scss";

const DUMMY_GALLERY = [
  {
    image: "https://s3-alpha-sig.figma.com/img/82ca/8a24/e842ae9bf1b1097bf8453df45a3a21d9?Expires=1698019200&Signature=k1TVWYFlQcCjdV~2FTgyggsT3hZoc4f4Sss1svEDrcXPJ14OdBtY-E9~~PfQiW3WCh2Mm0Rv7-Da4D8JwsMbFxp-jM-rocJvm5bLi2uttplyviYQXcWqodkcE2MSSAEpdcD~f5SrmNwksUEzda9vQhks4mo45TWEQHWhMfBXJWKLamcKt2U-lTTgDRt-ECmhxfWv0a8694OdhzTqLvUnFoXJXP9PIsoT8eeTQ-t0VexUBnfTD8H7cEuhq7GfS2V0m9Fv~YYA5eA1E4voPnIGIKcGrxlQTy1xAUpLQ~j2-7U929vV~NygWYN8ywAbuLOixaJ4LiZTw7h8ogDSqjH5~Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    image: "https://s3-alpha-sig.figma.com/img/82ca/8a24/e842ae9bf1b1097bf8453df45a3a21d9?Expires=1698019200&Signature=k1TVWYFlQcCjdV~2FTgyggsT3hZoc4f4Sss1svEDrcXPJ14OdBtY-E9~~PfQiW3WCh2Mm0Rv7-Da4D8JwsMbFxp-jM-rocJvm5bLi2uttplyviYQXcWqodkcE2MSSAEpdcD~f5SrmNwksUEzda9vQhks4mo45TWEQHWhMfBXJWKLamcKt2U-lTTgDRt-ECmhxfWv0a8694OdhzTqLvUnFoXJXP9PIsoT8eeTQ-t0VexUBnfTD8H7cEuhq7GfS2V0m9Fv~YYA5eA1E4voPnIGIKcGrxlQTy1xAUpLQ~j2-7U929vV~NygWYN8ywAbuLOixaJ4LiZTw7h8ogDSqjH5~Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    image: "https://s3-alpha-sig.figma.com/img/82ca/8a24/e842ae9bf1b1097bf8453df45a3a21d9?Expires=1698019200&Signature=k1TVWYFlQcCjdV~2FTgyggsT3hZoc4f4Sss1svEDrcXPJ14OdBtY-E9~~PfQiW3WCh2Mm0Rv7-Da4D8JwsMbFxp-jM-rocJvm5bLi2uttplyviYQXcWqodkcE2MSSAEpdcD~f5SrmNwksUEzda9vQhks4mo45TWEQHWhMfBXJWKLamcKt2U-lTTgDRt-ECmhxfWv0a8694OdhzTqLvUnFoXJXP9PIsoT8eeTQ-t0VexUBnfTD8H7cEuhq7GfS2V0m9Fv~YYA5eA1E4voPnIGIKcGrxlQTy1xAUpLQ~j2-7U929vV~NygWYN8ywAbuLOixaJ4LiZTw7h8ogDSqjH5~Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    image: "https://s3-alpha-sig.figma.com/img/82ca/8a24/e842ae9bf1b1097bf8453df45a3a21d9?Expires=1698019200&Signature=k1TVWYFlQcCjdV~2FTgyggsT3hZoc4f4Sss1svEDrcXPJ14OdBtY-E9~~PfQiW3WCh2Mm0Rv7-Da4D8JwsMbFxp-jM-rocJvm5bLi2uttplyviYQXcWqodkcE2MSSAEpdcD~f5SrmNwksUEzda9vQhks4mo45TWEQHWhMfBXJWKLamcKt2U-lTTgDRt-ECmhxfWv0a8694OdhzTqLvUnFoXJXP9PIsoT8eeTQ-t0VexUBnfTD8H7cEuhq7GfS2V0m9Fv~YYA5eA1E4voPnIGIKcGrxlQTy1xAUpLQ~j2-7U929vV~NygWYN8ywAbuLOixaJ4LiZTw7h8ogDSqjH5~Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    image: "https://s3-alpha-sig.figma.com/img/82ca/8a24/e842ae9bf1b1097bf8453df45a3a21d9?Expires=1698019200&Signature=k1TVWYFlQcCjdV~2FTgyggsT3hZoc4f4Sss1svEDrcXPJ14OdBtY-E9~~PfQiW3WCh2Mm0Rv7-Da4D8JwsMbFxp-jM-rocJvm5bLi2uttplyviYQXcWqodkcE2MSSAEpdcD~f5SrmNwksUEzda9vQhks4mo45TWEQHWhMfBXJWKLamcKt2U-lTTgDRt-ECmhxfWv0a8694OdhzTqLvUnFoXJXP9PIsoT8eeTQ-t0VexUBnfTD8H7cEuhq7GfS2V0m9Fv~YYA5eA1E4voPnIGIKcGrxlQTy1xAUpLQ~j2-7U929vV~NygWYN8ywAbuLOixaJ4LiZTw7h8ogDSqjH5~Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    image: "https://s3-alpha-sig.figma.com/img/82ca/8a24/e842ae9bf1b1097bf8453df45a3a21d9?Expires=1698019200&Signature=k1TVWYFlQcCjdV~2FTgyggsT3hZoc4f4Sss1svEDrcXPJ14OdBtY-E9~~PfQiW3WCh2Mm0Rv7-Da4D8JwsMbFxp-jM-rocJvm5bLi2uttplyviYQXcWqodkcE2MSSAEpdcD~f5SrmNwksUEzda9vQhks4mo45TWEQHWhMfBXJWKLamcKt2U-lTTgDRt-ECmhxfWv0a8694OdhzTqLvUnFoXJXP9PIsoT8eeTQ-t0VexUBnfTD8H7cEuhq7GfS2V0m9Fv~YYA5eA1E4voPnIGIKcGrxlQTy1xAUpLQ~j2-7U929vV~NygWYN8ywAbuLOixaJ4LiZTw7h8ogDSqjH5~Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    image: "https://s3-alpha-sig.figma.com/img/82ca/8a24/e842ae9bf1b1097bf8453df45a3a21d9?Expires=1698019200&Signature=k1TVWYFlQcCjdV~2FTgyggsT3hZoc4f4Sss1svEDrcXPJ14OdBtY-E9~~PfQiW3WCh2Mm0Rv7-Da4D8JwsMbFxp-jM-rocJvm5bLi2uttplyviYQXcWqodkcE2MSSAEpdcD~f5SrmNwksUEzda9vQhks4mo45TWEQHWhMfBXJWKLamcKt2U-lTTgDRt-ECmhxfWv0a8694OdhzTqLvUnFoXJXP9PIsoT8eeTQ-t0VexUBnfTD8H7cEuhq7GfS2V0m9Fv~YYA5eA1E4voPnIGIKcGrxlQTy1xAUpLQ~j2-7U929vV~NygWYN8ywAbuLOixaJ4LiZTw7h8ogDSqjH5~Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    image: "https://s3-alpha-sig.figma.com/img/82ca/8a24/e842ae9bf1b1097bf8453df45a3a21d9?Expires=1698019200&Signature=k1TVWYFlQcCjdV~2FTgyggsT3hZoc4f4Sss1svEDrcXPJ14OdBtY-E9~~PfQiW3WCh2Mm0Rv7-Da4D8JwsMbFxp-jM-rocJvm5bLi2uttplyviYQXcWqodkcE2MSSAEpdcD~f5SrmNwksUEzda9vQhks4mo45TWEQHWhMfBXJWKLamcKt2U-lTTgDRt-ECmhxfWv0a8694OdhzTqLvUnFoXJXP9PIsoT8eeTQ-t0VexUBnfTD8H7cEuhq7GfS2V0m9Fv~YYA5eA1E4voPnIGIKcGrxlQTy1xAUpLQ~j2-7U929vV~NygWYN8ywAbuLOixaJ4LiZTw7h8ogDSqjH5~Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
];

const KundalGallery = () => {
  return (
    <section className={classes["kundal-gallery"]}>
      <div className="container">
        <ul className={classes["kundal-gallery-list"]}>
          {DUMMY_GALLERY.map((item, index) => {
            return (
              <li className={classes["kundal-gallery-item"]} key={index}>
                <Image
                  src={item.image}
                  // fill
                  width="0"
                  height="0"
                  alt="kundal-gallery-item"
                  style={{ objectFit: "contain", width: "100%", height: "auto", display: "block" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default KundalGallery;
