import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

export default function Profile() {
    return (
        <div className={classes.content}>
            <div>
                <img src="/images/backgroundImageContent.jpg" alt=""/></div>
            <div>
                ava + desc
            </div>
            <MyPosts/>
        </div>
    );
}