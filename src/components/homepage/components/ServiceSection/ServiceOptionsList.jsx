import React from "react";
import classes from "./ServiceOptionsList.module.scss";
import ServiceOptionItem from "./ServiceOptionItem";

const ServiceOptionsList = ({ items, onChangeActiveItem }) => {
  return (
    <ul className={`${classes["services"]} appear-from-down-slow`}>
      {items.map((item) => (
        <ServiceOptionItem
          item={item}
          isActive={item.isActive}
          key={item.id}
          onChangeActiveItem={onChangeActiveItem}
        />
      ))}
    </ul>
  );
};

export default ServiceOptionsList;
