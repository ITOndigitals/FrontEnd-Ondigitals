import classes from "./CaseStudy.module.scss";
import CaseStudiesFilters from "../CaseStudiesFilters/CaseStudiesFilters";
import CaseStudyList from "./CaseStudyList";
import CustomPagination from "@/components/ui/Pagination/CustomPagination";

const DUMMY_CASE_STUDIES = [
  {
    id: 1,
    name: "kundal",
    year: 2020,
    image:
      "https://s3-alpha-sig.figma.com/img/76c7/d54a/6992bc58548933b5d3e7359e00ed0211?Expires=1699833600&Signature=Im-8OcRyX~HJpKjBYKYYlg84Z1nqP-aBz1CMMUcJsFHuZuK4Get6L75vmO72HI5W2cWmJ2NuVauv-R2sCdAzb1q8ew4idM9Rofe5vKw4eTOZf~Yp45tnuxNGj9be4RVTZHq9cVqrB3AyCFwlfk9iEbwKwZ-GTdzwHlsQs7Ya8w8o01tNNLx4R4HqTV6J2F7svWeYMJ1Y6nkwNt1O9rEI6~hjD-A8oOWv1jFAzUcdwGBlZeNER01ZOeuZO4~SHsCG2H0JVs6~fYVdtu9KK28vCo-jN3N2RGVGiY4jWJSpTgrFrg6SQVcOBBZTahBz9UmtTgZPkGRKJ-jtQY7AR8BFbg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    tags: [
      {
        name: "Content Marketing",
        type: 1,
      },
      {
        name: "Facebook Ads",
        type: 2,
      },
      {
        name: "Graphic Design",
        type: 3,
      },
      {
        name: "KOL Marketing",
        type: 4,
      },
      {
        name: "Video Marketing",
        type: 2,
      },
    ],
  },
  {
    id: 2,
    name: "renault",
    year: 2020,
    image:
      "https://s3-alpha-sig.figma.com/img/ae37/520f/d7dd53b1c29e09ee970ca9005d3b9f9e?Expires=1699833600&Signature=DnJ~kSn9VPoE5MTj4-etZFmffK~kd5vD3pjhu8OLHyteKj4z53QPIS7PSxlAPOylvxBIqVipfJ5U3Okx02No9KlyJIytZkVITUNQPUDxFEyOuU-IF5Mfsl8JwZRyAfkRhd3FinOphk-yufc3ITGKDp3REsmTMCMLe-wiveE5UihoojanbOxPqjnlPWE~I9nXI8RiFEPPdvx-hNPQZ-K36f3Mp1~4zVwqYZmO27lWehff0AbOiAkrdLhC50h7iNKUuFxqtzgcvNcnxEzIfpyJjvOv9DU1dL-vwSTIdKGyYORwhYJYWvTuYOgQxwnv~ljdGtE-eWZZ6WWOgU8FFp7I5A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    tags: [
      {
        name: "Content Marketing",
        type: 1,
      },
      {
        name: "Facebook Ads",
        type: 2,
      },
      {
        name: "Graphic Design",
        type: 3,
      },
      {
        name: "KOL Marketing",
        type: 4,
      },
      {
        name: "Video Marketing",
        type: 2,
      },
    ],
  },
  {
    id: 3,
    name: "kim long diep",
    image:
      "https://s3-alpha-sig.figma.com/img/c3bb/c838/e8b8f46efb39a659d70a636c9c3d4584?Expires=1699833600&Signature=I8krnkKehL67U5idH4WR7qjKdjg9CSLDvvPhnU8sRcFx5InZmo7a7-kvg~XaLmVi6z1ive78XE~vnd1I~S4MxbpefKPNEIgmYu3LBnVmUV4Z6rFfRDO9~jlwDrsw5474fHKK0y0J-ud3gqmAtZ4WI1mmHTf3biSDne0uoo79F3E6O03-yZCQ-Ykz6krHO2CgHdQYJOACzGcF0Ev5glr9497Pb8s2ItgQscuPWemo5bgATkF4B~ySJivn4BuabBgAU17ofNoJUfjdIyrdmrstE2F6zUClorgtKD~HYxzxblxiuV822IVQvMGCFAaYTAh3MmGI1MK88uO9NfOIzVWqHA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    year: 2020,
    tags: [
      {
        name: "Content Marketing",
        type: 1,
      },
      {
        name: "Facebook Ads",
        type: 2,
      },
      {
        name: "Graphic Design",
        type: 3,
      },
      {
        name: "KOL Marketing",
        type: 4,
      },
      {
        name: "Video Marketing",
        type: 2,
      },
    ],
  },
  {
    id: 4,
    name: "ducati",
    image:
      "https://s3-alpha-sig.figma.com/img/ea73/39e1/d0ae8df3725ce6b9ac91e2eebb47760a?Expires=1699833600&Signature=Cmu5RZ740SeQ8X1bxJF4Doi~rEbmQXTpy3cfcVMdpfbuDxfg8u1vCozeLWU6tqoFq0MSb6m0ORmoscfwV4jBlqxI~ltluV-mGaMjbLdIUHqft4~7zTlamehIImPqiJW3ObFylS8VHESGBStVu4QD41tq3D9OWWCKGbbSIwKNXkb916rfh5CCEWoD6PkHZvdIT8RHDW7RWPBxpVjux1IFedxKA-NHTv9CAO5oCYAS0WFWsrKXvCcODHQUaMQq1NiyO5h4o3UsZAQLRL7TL3dtyYR-c8IhWTTmsPDeaerPELsD1~OMYStssFaKH8M1emIRcxbnvPLAkBIXCMGxAZ3SeA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    year: 2020,
    tags: [
      {
        name: "Content Marketing",
        type: 1,
      },
      {
        name: "Facebook Ads",
        type: 2,
      },
      {
        name: "Graphic Design",
        type: 3,
      },
      {
        name: "KOL Marketing",
        type: 4,
      },
      {
        name: "Video Marketing",
        type: 2,
      },
    ],
  },
  {
    id: 5,
    name: "passion",
    image:
      "https://s3-alpha-sig.figma.com/img/302f/4cbf/7348a358d2fe9c6b872189bb36b7c98a?Expires=1700438400&Signature=jxkH0zQF3WL2AezOA12SAFye2ZjoayvGIXllrwqSKr-CMFQHBE2gz-TGOtwnJUy6cOqjfrBJ9-2T3hHwPPR~1ZpRM6H9Mw-h2aLdIliQ6CtRl3zzooNBidZmh1BHgjcR84UHzcCpCZ9c~FvX4JO8Yu~8gCi6Q1IbW-H392nBP4Pk4dnqdMd9PtkNAXV2luKUDMK3kMmuv5Y0ewQ7o4z8tLUfuGClzvDMMW98b7Zs5gZQR1yprRe2ZCcxbrNM~KYAFwFjGfOev~RXA5tdEPq~hFJ-AgEZ-L338uYJLLRlYZC0au~-mIvp0XTuxlD1JY3Ou77pk4uYeySb3btoTnuqQA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    tags: [
      {
        name: "Content Marketing",
        type: 1,
      },
      {
        name: "Facebook Ads",
        type: 2,
      },
      {
        name: "Graphic Design",
        type: 3,
      },
      {
        name: "KOL Marketing",
        type: 4,
      },
      {
        name: "Video Marketing",
        type: 2,
      },
    ],
  },
   {
    id: 6,
    name: "korice",
    image:
      "https://s3-alpha-sig.figma.com/img/c6b7/4e73/bab2bc2fb354cd389b25661f9ab42e53?Expires=1700438400&Signature=i3v9-EayVN5wnzwQzZs8ZfUTTDTjCrTmCZpUZfC5-obc1lYjLftbrgSik-G9BEoG-emsP5Vtyh77qh97pocrewH1TKJpzlgUxg9Nlabg0rurLclzQ35-rBpmwkJIIhg4kqI8fiko7YvNHtsCycyyAs9mVpjOO9SIBmc~Bo58FuBBB8WTJeF1uKzpDKs6lpBjCwPeHc-KNqIn4mhm4byrB9y7OcVKDO6vYCvBSlNpHq45qV9POsvE3ztdpfCZkPTPYvvS~kCWIVt-2FuTIvMuk~lA3pqi9JcjLLW9UYAmOIkwFcZpkGEKzDkMmooRLX2KssJ6ePClDkXfa1srcdKQ2Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    year: 2020,
    tags: [
      {
        name: "Content Marketing",
        type: 1,
      },
      {
        name: "Facebook Ads",
        type: 2,
      },
      {
        name: "Graphic Design",
        type: 3,
      },
      {
        name: "KOL Marketing",
        type: 4,
      },
      {
        name: "Video Marketing",
        type: 2,
      },
    ],
  },
  {
    id: 7,
    name: "TPCLOUND",
    image:
      "https://s3-alpha-sig.figma.com/img/8c02/8e6b/e64a7d44775febde9e1f7edadb0d6e1f?Expires=1700438400&Signature=Vr1i8dHBbhC~BzVrFCGz7Jfw0~5gGC7CjLXYRVnHb-PRaejk8ZB~ErXZNFJrOcuTHD2GmvwLimhOM7BserpkHXyz1XoBH~8GnCrOziIU5BDlIb7wlRrEQAcFzvo4SxA1Ak62TSmgCA6S-Zt~B46bQyj9CiNv~L80v9TcTBh18n5NPMGWwneWCIeLy7LATP1F4w9tswXGpBmoCeQ9H2KXU2VxpVwCuYcJYGmHzotXlTxMyVaqaQYQRL~L6UIPv7rfU~7tEUaHa89byNJSE30rpIYsV~5XMFV9Wvl2kbNjlp7bnJXOBaeg--4JEoTRdm3oUvicA3CfQFpOZy9inv9AEQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    year: 2020,
    tags: [
      {
        name: "Content Marketing",
        type: 1,
      },
      {
        name: "Facebook Ads",
        type: 2,
      },
      {
        name: "Graphic Design",
        type: 3,
      },
      {
        name: "KOL Marketing",
        type: 4,
      },
      {
        name: "Video Marketing",
        type: 2,
      },
    ],
  },
  {
    id: 8,
    name: "BENTLKEY",
    image:
      "https://s3-alpha-sig.figma.com/img/c981/c94e/893d60da9d6a9178262058daa5799fa2?Expires=1700438400&Signature=REgu9AV-jWEubo1T9osPO~CSvh9iFuDZ0rrIeG5GHW~oAOpd3jy6QNLLYgBFXYGBjvX~MSzOhqrPLttvtH6QJcW5G0rH~VkBt4p1QOZ9TIxLwp8aqRcAOE~F26vF0JH6T8FGxXeGP~Oxad57iFc6Up8ah5UYpzhvvjKVVsKGr-Hr7KAvPiPuCbCTYcwhn0dGJf30YW5SlTxZcR-w~9WbSRlxO8UtlHOZa3lSK~cgtF0V3g~I6pJB8L1d3-JwDbXDlLJi7vCYJJDwJMCIarbNW6SO0PFPAobgJzocYyCf8hS43e~oKPSWKkt5eBrcPwQDNBXOK9JBLz~ik~kqYOUF0Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    year: 2020,
    tags: [
      {
        name: "Content Marketing",
        type: 1,
      },
      {
        name: "Facebook Ads",
        type: 2,
      },
      {
        name: "Graphic Design",
        type: 3,
      },
      {
        name: "KOL Marketing",
        type: 4,
      },
      {
        name: "Video Marketing",
        type: 2,
      },
    ],
  },
];

export default function CaseStudy() {
  const onSearchHandler = (searchKeyword) => {
    console.log(searchKeyword);
  };

  const changePageHandler = (page) => {
    console.log(page)
  }

  return (
    <section className={classes["case-study"]}>
      <div className="container">
        <div className={classes["case-study-main"]}>
          <div className={classes["case-study-main-head"]}>
            <p className={classes["case-study-main-head__content"]}>
            Explore our Works
            </p>
            <div className={classes["case-study-main-head__filter-wrapper"]}>
              <CaseStudiesFilters onSearch={onSearchHandler} color="white" />
            </div>
          </div>
          <div className={classes["case-study-main-content"]}>
            <CaseStudyList items={DUMMY_CASE_STUDIES} />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "60px",  
              marginBottom: "30px",
            }}
          >
            <CustomPagination onChangePage={changePageHandler} isLight/>
          </div>
        </div>
      </div>
    </section>
  );
}
