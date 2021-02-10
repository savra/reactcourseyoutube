import React from "react";
import classes from "./NavigationBar.module.css";

const NavigationBar = () => {
    return (
        <nav className={classes.nav}>
            <div className={`$classes.item $classes.active`}>
                <a href="">Profile</a>
            </div>
            <div className={`$classes.item $classes.active`}>
                <a href="">Message</a>
            </div>
            <div className={`$classes.item $classes.active`}>
                <a href="">News</a>
            </div>
            <div className={`$classes.item $classes.active`}>
                <a href="">Music</a>
            </div>
            <div className={`$classes.item $classes.active`}>
                <a href="">Settings</a>
            </div>
        </nav>
    );
}


export default NavigationBar;