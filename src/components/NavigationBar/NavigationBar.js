import React from "react";
import classes from "./NavigationBar.module.css";
import {NavLink} from "react-router-dom";

const NavigationBar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs" activeClassName={classes.activeLink}>Message</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="">News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="">Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="">Settings</NavLink>
            </div>
        </nav>
    );
}


export default NavigationBar;