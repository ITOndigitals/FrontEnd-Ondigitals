import Image from "next/image";
import classes from "./CaseStudyItem.module.scss";
import Link from "next/link";
import { Maven_Pro } from "next/font/google";
import ExploreButton from "@/components/ui/Buttons/ExploreButton/ExploreButton";
import Tag from "@/components/ui/Tag/Tag";

const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

const CaseStudyItem = ({ item, href }) => {
  return (
    <li className={classes.item}>
      <div href={href} className={classes["item-wrapper"]}>
        <Image
          src={item.image}
          fill
          style={{ objectFit: "cover" }}
          alt="case-study-image"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <Image
          src={item.activeImage}
          className={classes["item-active"]}
          fill
          style={{ objectFit: "cover" }}
          alt="case-study-image"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className={classes["item-content"]}>
          <div>
            <p className={classes["item-content__main-title"]}>{item.name}</p>
            <p
              className={classes["item-content__year"]}
              style={{ fontFamily: MavenPro.style.fontFamily }}
            >
              {item.year}
            </p>
          </div>
          <ul className={classes["tag-list"]}>
            {item.tags.map((item, index) => (
              <Link href="#" className={classes["tag-item"]} key={index}>
                <Tag type={item.type} name={item.name} />
              </Link>
            ))}
          </ul>
          <Link href="#" className={classes["explore-btn"]}>
            <ExploreButton>Explore</ExploreButton>
          </Link>
        </div>
      </div>
    </li>
  );
};

export default CaseStudyItem;
