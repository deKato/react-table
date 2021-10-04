import React, { ReactElement } from "react";
import { useState, useEffect, useCallback } from "react";
import { Person } from "../../models/Person";
import classes from "./List.module.scss";

interface PersonFilter {
  [param: string]: () => Person[];
}

const List: React.FC<{ filter: string }> = (props) => {
  const [data, setData] = useState<Person[]>();
  const [personList, setPersonList] = useState<Person[]>([]);

  const fetchNamesHandler = useCallback(async () => {
    const response = await fetch("http://localhost:3001/names");
    const data: Person[] = await response.json();
    setData(data);
  }, []);

  useEffect(() => {
    fetchNamesHandler();
  }, [fetchNamesHandler]);

  useEffect(() => {
    if (data) {
      const filterData: PersonFilter = {
        odd: () => data.filter((element: Person) => element.number % 2 !== 0),
        even: () => data.filter((element: Person) => element.number % 2 === 0),
        all: () => data,
      };
      setPersonList(filterData[props.filter] ?? data);
    }
  }, [data, props.filter]);

  const list: ReactElement[] = personList?.map((person: Person) => {
    return (
      <div
        key={`${person.name}${person.number}`}
        className={classes["table__row"]}
      >
        <span className={classes["table__row__cell"]}>{person.name}</span>
        <span className={classes["table__row__cell"]}>{person.number}</span>
      </div>
    );
  });

  return <div className={classes.table}>{list}</div>;
};

export default List;
