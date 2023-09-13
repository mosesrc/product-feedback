import { ReactComponent as UpArrow } from "../../../assets/shared/icon-arrow-up.svg";
import classes from "./VoteButton.module.css";

const VoteButton = ({ votes }) => {
    return (
        <button className={`${classes.base} ${classes["normal-arrow"]}`}>
            <span className={classes["icon-span"]}>
                <UpArrow className={classes.icon} />
            </span>
            <span>{votes}</span>
        </button>
    );
};

export default VoteButton;
