import React, { useState } from "react";
import SelectProps from "../../models/UI/Select";
import Select from "../UI/Select";
import List from "./List";
import classes from "./PersonList.module.scss";

const PersonList: React.FC = () => {
  const [filter, setFilter] = useState("");
  const filterChangeHandler = (filterValue: string) => {
    setFilter(filterValue);
  };

  const selectFilterParams = new SelectProps(
    "Filter",
    "Filter list",
    [
      { label: "All rows", value: "all" },
      { label: "Rows with odd number value", value: "odd" },
      { label: "Rows with even number value", value: "even" },
    ],
    filterChangeHandler
  );

  return (
    <div className={classes["table__container"]}>
      <div className={classes["table__container__filter"]}>
        <Select select={selectFilterParams} />
      </div>
      <List filter={filter} />
    </div>
  );
};

export default PersonList;
