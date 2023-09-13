import DropDown from "../UI/DropDown/DropDown";
import Button from "../UI/Button/Button";

import classes from "./NavigationPanel.module.css";
import { ReactComponent as LightBulb } from "../../assets/shared/icon-bulb.svg";
import { ReactComponent as PlusSign } from "../../assets/shared/icon-plus.svg";

const NavigationPanel = () => {
    return (
        <div className={classes["nav-panel"]}>
            <div className={classes["nav-left-side"]}>
                <div className={classes["nav-left-side-mini"]}>
                    <LightBulb />
                    <p>numof Suggestions</p>
                </div>

                <DropDown />
            </div>
            <div>
                <Button
                    icon={<PlusSign />}
                    userClass={"btn1_purple"}
                    title={"Add Feedback"}
                />
            </div>
        </div>
    );
};

export default NavigationPanel;
