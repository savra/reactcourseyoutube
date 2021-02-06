import React from "react";
import classes from "./Profile.module.css";

export default function Profile() {
    return (
        <div className={classes.content}>
            <div>
                <img src="\images\backgroundImageContent.jpg" alt=""/></div>
            <div>
                ava + desc
            </div>
            <div className={classes.posts}>
                My posts
                <div className={classes.item}>
                    New post
                </div>
                <div className={classes.item}>
                    New post
                </div>
                <div className={classes.item}>
                    Post1
                </div>
                <div className={classes.item}>
                    Post2
                </div>
            </div>
        </div>
    );
}