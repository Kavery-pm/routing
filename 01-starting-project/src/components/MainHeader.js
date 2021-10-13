import { Link, NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <nav className={classes.header}>
      <ul>
        <li>
          <NavLink activeClassName={classes.active}  to="/welcome">Welcome</NavLink>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </nav>
  );
};
export default MainHeader;
