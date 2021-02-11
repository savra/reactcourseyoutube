import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog + " " + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    );
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name="Sergey" id="1"/>
                <DialogItem name="Natasha" id="2"/>
                <DialogItem name="Victor" id="3"/>
                <DialogItem name="Valera" id="4"/>
            </div>
            <div className={classes.messages}>
                <Message message="Hi"/>
                <Message message="How are u?"/>
                <Message message="Why?"/>
            </div>
        </div>
    )
};

export default Dialogs;