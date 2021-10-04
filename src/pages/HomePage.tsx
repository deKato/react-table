import { Link } from "react-router-dom";
import Button from "../components/UI/Button";
import classes from "./HomePage.module.scss";

const HomePage: React.FC = () => {
  return (
    <div className={classes.homepage}>
      <Link to="name-list">
        <Button text="Navigate to list" size="large"></Button>
      </Link>
    </div>
  );
};

export default HomePage;
