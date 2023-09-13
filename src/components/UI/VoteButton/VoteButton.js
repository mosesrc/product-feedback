import { ReactComponent as UpArrow } from "../../../assets/shared/icon-arrow-up.svg";
import classes from "./VoteButton.module.css";

const VoteButton = () => {
    return (
        <button className={`${classes.base} ${classes["normal-arrow"]}`}>
            <span className={classes["icon-span"]}>
                <UpArrow className={classes.icon} />
            </span>
            <span>99:state</span>
        </button>
    );
};

export default VoteButton;
