import classNames from "classnames";
import "./style.scss";

const Container = ({ parameter = "exclude", children }) => {
  // parameter -> include,excude left,right

  return <div className={classNames("container", parameter)}>{children}</div>;
};

export default Container;