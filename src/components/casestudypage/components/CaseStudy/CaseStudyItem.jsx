import Image from "next/image";
import classes from "./CaseStudyItem.module.scss";
import Link from "next/link";
import { Maven_Pro } from "next/font/google";
import ExploreButton from "@/components/ui/Buttons/ExploreButton/ExploreButton";
import Tag from "@/components/ui/Tag/Tag";
import { useRouter } from "next/router";
import { localeLangButtonExplore } from "../../../../../utils/languageSlug";

const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

const CaseStudyItem = ({ item }) => {
  const { locale } = useRouter();
  const { featuredImage, categories, slug, title } = item;
  const handleUrl = (url) => {
    return locale === "en" ? `/${url}` : `/${locale}/${url}`;
  };

  return (
    <div className={`${classes.item} case-study-item`}>
      <div className={classes["item-wrapper"]}>
        <Image
          src={featuredImage?.node?.sourceUrl}
          fill
          style={{ objectFit: "cover" }}
          alt={featuredImage?.node?.altText}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
        <div className={classes["item-content"]}>
          <div>
            <p className={classes["item-content__main-title"]}>
              {title && title}
            </p>
          </div>
          <ul className={classes["tag-list"]}>
            {categories.nodes.map((item, index) => (
              <li className={classes["tag-item"]} key={index}>
                <Tag
                  backgroundColor={item.description}
                  name={item.name}
                  href={handleUrl(item.slug)}
                />
              </li>
            ))}
          </ul>
          <Link href={handleUrl(slug)} className={classes["explore-btn"]}>
            <ExploreButton>{localeLangButtonExplore[locale]}</ExploreButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyItem;
