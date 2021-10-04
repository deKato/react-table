import { Link } from "react-router-dom";
import PersonList from "../components/person-list/PersonList";
import Button from "../components/UI/Button";
import classes from "./PersonListPage.module.scss";

const PersonListPage: React.FC = () => {
  return (
    <div className={classes["person-list-page"]}>
      <PersonList />
      <div className={classes["person-list-page__button"]}>
        <Link to="home">
          <Button text="Navigate back to home"></Button>
        </Link>
      </div>
    </div>
  );
};

export default PersonListPage;
