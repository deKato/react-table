import { ButtonProps } from "../../models/UI/Button";
import classes from "./Button.module.scss";

interface Sizes {
  [key: string]: string;
}

const Button = (props: ButtonProps) => {
  const sizes: Sizes = {
    large: classes["button--large"],
  };

  const size = props.size && sizes[props.size] ? sizes[props.size] : "";
  const buttonClasses = `${classes.button} ${size}`;
  return <button className={buttonClasses}>{props.text}</button>;
};

export default Button;
