import classes from "./UIRoot.module.css";
import HeaderBoard from "../HeaderBoard/HeaderBoard";
import FeaturesBoard from "../FeaturesBoard/FeaturesBoard";

const UIRoot = () => {
    return (
        <>
            <div className={classes["ui-root"]}>
                <HeaderBoard />
                <FeaturesBoard />
            </div>
        </>
    );
};

export default UIRoot;
