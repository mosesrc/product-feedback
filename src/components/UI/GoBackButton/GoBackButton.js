import React from "react";
import classes from "./GoBackButton.module.css";
import { ReactComponent as BackArrow } from "../../../assets/shared/icon-arrow-left.svg";

const GoBackButton = () => {
    return (
        <button className={`${classes.base} ${classes["reset-btn1"]}`}>
            <BackArrow className={classes["icon-btn1"]} /> <span>Go Back</span>
        </button>
    );
};

export default GoBackButton;
