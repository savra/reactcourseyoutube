import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

export default function Profile() {
    return (
        <div>
            <div>
                <img src="/images/backgroundImageContent.jpg" alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    );
}