import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./header.module.scss";
const Header = () => {
  const [tab, setTab] = useState(0);
  return (
    <div className={classes.header}>
      <h2>
        <Link to="/" className={classes.link} onClick={() => setTab(0)}>
          Admin DashBoard
        </Link>
      </h2>
      <ul>
        <Link to="/signin" className={classes.link} onClick={() => setTab(1)}>
          <li className={tab === 1 ? classes.select : classes.default}>
            Sign In
          </li>
        </Link>
        <Link to="/signup" className={classes.link} onClick={() => setTab(2)}>
          <li className={tab === 2 ? classes.select : classes.default}>
            Sign Up
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
