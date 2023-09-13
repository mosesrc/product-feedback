import classes from "./DropDown.module.css";
import { ReactComponent as ArrowDown } from "../../../assets/shared/icon-arrow-down.svg";

const DropDown = () => {
    return (
        <div className={classes.dropdown}>
            <button className={classes.dropbtn}>
                <span>Sort by :</span>
                <span className={classes["dropdown-selection"]}>
                    Most Upvotes
                </span>
                <ArrowDown />
            </button>
            <div id="myDropdown" className={classes["dropdown-content"]}>
                <a href="#">Most Upvotes</a>
                <a href="#">Least Upvotes</a>
                <a href="#">Most Comments</a>
                <a href="#">Least Comments</a>
            </div>
        </div>
    );
};

export default DropDown;
