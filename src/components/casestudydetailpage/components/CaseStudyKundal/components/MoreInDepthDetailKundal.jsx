import Image from "next/image";
import classes from "./MoreInDepthDetailKundal.module.scss";
import CaseStudyListItemContent from "@/components/ui/CaseStudyListItem/CaseStudyListItemContent";

const img1 =
  "https://s3-alpha-sig.figma.com/img/faf5/1e78/390efa3fb97aa2512f923510dca4bb9d?Expires=1698019200&Signature=nWMVbzVqjmMoSSUhpk7iobYfMc1e6S2~IopxQjZDjierLVdx99gMVmWuzcYKvx-9AtZZPObKZXuEfL5~w37xCxJ8NnD7lp3OXKRb2JVtxq4ibJ2oBhVDZIqQtlMOPtSoqjgzOmbLKIUMG2IXj2Cz-HSulkkwIsDwX-gxYRL3FwLmUaYB0BmnUoQJJLARGNU7C0qbGg7h1Wv9N3Qi-DFjba1JfPtymKcLbWcAFLpm2UvERd6cFEwgf2Uoc2DMvZf4eViGCc7cozSpa-pyDxCEBAUM~CQwKo9kd3c9Qu3eq38KjbfLJqNyxh19cbytxpgvf6cwZ3e7PoUnLJtTMmZJSQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

const img2 =
  "https://s3-alpha-sig.figma.com/img/b679/7849/53a6c09bd9ce3de7c4a0340bcbf4ca8f?Expires=1698019200&Signature=TNgB1j54PomXtf2jru2~3JF5Jj~W-q9J2MVnzW~z0khdyrUMQf3sSCJ0eb61AwAlf14w0vSi0L00HGArD3~ycbEWbql9ssPzjaYY8gV7IgQ5VbO5EcHO0Ifl0bTCgXDeGS641Y4SiWNZvuvmse7gQqKJ0gGGSbZ6RiAe4FxZrwBOhRySTPXnRf3NFZzdJjFZ2IzuNbWzw7iL0jACV7i8kiHZxOTMQsqi2n7-F2phJz~LMh7sQMvOaoD9a48Vv2AIuvYK6ZNSMdF46Gz7DNiSy5liLjzgzFCN~hpHZ8spdA~OBiqFx6aem3y5cgYil8a2oTBU8AhhFMIYJ4xa7x4zJQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

const img3 =
  "https://s3-alpha-sig.figma.com/img/e5a4/7660/9cde9c4a95af3a81ebbfda03e6cc4811?Expires=1698019200&Signature=hpjZfwpp4thLPkYy3Vwn9D3IDonnudSIGPWcFwZQyROUOui87bjht4bvr9fCVPvheL5DNNYmRBu5KdxwUK4q-4LDmEPJPkwV3M2FM-Cl1qK0RwwLJvah0zxmYTNu0PFfYMdpEKTu3X2cG5-Rk56rq9HkiN1hD0P1SDxIl01CjNGt8~G8khmV5HIWyMIQFCM~17L-ajb4scMbFab~VyQ86YLd2OAxltuxScKaL2740dPi7vgJ0IHCKKoT-VIGjIdEDrixffHMKGW4RbKbugeJskDFncOdTXMZ3b1MOl764GIt2URx3FfWznvPyfg1Ool4e1GSBZb2joq42ExZOjpwBQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

const DUMMY_INDEPTH_CONTENT = [
  {
    title: "Creative Design",
    dotColor: "#3D1766",
    contentItems: [
      "Product image design",
      "Post design following the brand's guidelines and agreed concepts",
      "Advertising post design",
      "Digital promotion banner design",
    ],
  },
  {
    title: "KOL Marketing",
    dotColor: "#3D1766",
    contentItems: [
      "KOL marketing campaign setup:",
      "Micro influencer: those who have high influence in hair caring to share relevant hair care tips and tricks",
      "Macro influencer: those who have high follower counts as to increase brand reach",
      "Booking KOL",
      "Campaign managing and reporting",
      "Middleman task handling",
    ],
  },
];

const MoreInDepthDetailKundal = () => {
  const content = DUMMY_INDEPTH_CONTENT;

  return (
    <section className={classes["more-indepth"]}>
      <div className="container">
        <div className={classes["more-indepth-container"]}>
          <div className={classes["more-indepth-left"]}>
            <div className={classes["more-indepth-left-img-wrapper"]}>
              <div className={classes["more-indepth-left-img-1"]}>
                <Image
                  src={img1}
                  fill
                  alt="case-study-detail"
                  style={{ objectFit: "contain" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className={classes["more-indepth-left-img-2"]}>
                <Image
                  src={img2}
                  fill
                  alt="case-study-detail"
                  style={{ objectFit: "contain" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className={classes["more-indepth-left-img-3"]}>
                <Image
                  src={img3}
                  fill
                  alt="case-study-detail"
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
          <div className={classes["more-indepth-right"]}>
            <div className={classes["more-indepth-right__content-list"]}>
              {content.map((listItem, index) => {
                return (
                  <CaseStudyListItemContent
                    content={listItem}
                    dotColor={listItem.dotColor}
                    index={index}
                    isDark={true}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreInDepthDetailKundal;
