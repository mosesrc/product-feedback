import Button from "../UI/Button/Button";
import { ReactComponent as GuyIcon } from "../../assets/shared/icon-guy.svg";
import { ReactComponent as PlusSign } from "../../assets/shared/icon-plus.svg";
import classes from "./NoFeedBack.module.css";

const NoFeedBack = () => {
    return (
        <div className={classes["no-feedback"]}>
            <GuyIcon />
            <h3>There is no feedback yet</h3>
            <p>
                Got a suggestion? Found a bug that needs to be squashed? We love
                hearing about new ideas to improve our app.
            </p>
            <Button
                icon={<PlusSign />}
                userClass={"btn1_purple"}
                title={"Add Feedback"}
            />
        </div>
    );
};

export default NoFeedBack;
