import ButtonSearch from '@/components/ui/Buttons/ButtonsSearch/ButtonSearch';
import SelectOption from '@/components/ui/SelectOption/SelectOption';
import classes from "./CaseStudiesFilters.module.scss"

const DUMMY_CATEGORIES = [
  {
    id: 1,
    name: "ALL",
  },
  {
    id: 2,
    name: "SEO",
  },
  {
    id: 3,
    name: "PPC",
  },
  {
    id: 4,
    name: "Content Marketing",
  },
  {
    id: 5,
    name: "Social Media",
  },
  {
    id: 6,
    name: "Website / App Development",
  },
  {
    id: 7,
    name: "Creative Design",
  },
];

const DUMMY_SORT_BY = [
  {
    id: 1,
    name: "Newest",
  },
  {
    id: 2,
    name: "Oldest",
  },
  {
    id: 3,
    name: "Most popular",
  },
];

const CaseStudiesFilters = ({ onSearch, color }) => {
  return (
    <>
      <div className={classes.item}>
        <SelectOption
          options={DUMMY_CATEGORIES}
          label="category"
          color={color}
        />
      </div>
      <div className={classes.item}>
        <SelectOption options={DUMMY_SORT_BY} label="sort by" color={color} />
      </div>
      <div>
        <ButtonSearch onSearch={onSearch} color={color} />
      </div>
    </>
  );
};

export default CaseStudiesFilters