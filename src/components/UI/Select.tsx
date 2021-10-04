import React, { ReactElement } from "react";
import SelectProps, { SelectOption } from "../../models/UI/Select";
import classes from "./Select.module.scss";

const Select: React.FC<{ select: SelectProps }> = (props) => {
  const selectValueChangeHandler = (
    event: React.FormEvent<HTMLSelectElement>
  ) => {
    props.select.onValueChanged(event.currentTarget.value);
  };

  const options: ReactElement[] = props.select.options.map(
    (element: SelectOption) => (
      <option key={element.value} value={element.value}>
        {element.label}
      </option>
    )
  );

  return (
    <div>
      <div className={classes["select__label"]}>
        <label htmlFor={props.select.name}>{props.select.label}:</label>
      </div>
      <div>
        <select
          className={classes["select__element"]}
          name={props.select.name}
          id={props.select.name}
          onChange={selectValueChangeHandler}
        >
          <option disabled selected hidden>
            Select filter option
          </option>
          {options}
        </select>
      </div>
    </div>
  );
};

export default Select;
