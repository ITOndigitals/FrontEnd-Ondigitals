import React from "react";
import classes from "./ServiceOptionsList.module.scss";
import ServiceOptionItem from "./ServiceOptionItem";

const ServiceOptionsList = ({ items, onChangeActiveItem }) => {
  //Needs error boundaries
  return (
    <ul className={`${classes["services"]} appear-from-down-slow`}>
      {items.map((item, index) => (
        <ServiceOptionItem
          item={item}
          isActive={item.isActive}
          key={index}
          onChangeActiveItem={onChangeActiveItem}
        />
      ))}
    </ul>
  );
};

export default ServiceOptionsList;
