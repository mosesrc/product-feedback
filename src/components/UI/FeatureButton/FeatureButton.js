import React, { useState } from "react";
import classes from "./FeatureButton.module.css";

const FeatureButton = (props) => {
    const [activeBtn, setActiveBtn] = useState(false);

    const makeActive = () => {
        setActiveBtn((activeBtn) => !activeBtn);
    };

    return (
        <button
            className={`${classes.button} ${activeBtn && classes.active}`}
            onClick={makeActive}
        >
            {props.title}
        </button>
    );
};

export default FeatureButton;
