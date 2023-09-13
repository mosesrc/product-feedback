import classes from "./UIRoot.module.css";
import FeatureButton from "../FeatureButton/FeatureButton";
import Button from "../Button/Button";
import GoBackButton from "../GoBackButton/GoBackButton";
import VoteButton from "../VoteButton/VoteButton";
import DropDown from "../DropDown/DropDown";

const UIRoot = () => {
    return (
        <>
            <div>
                <h1>In UI Root</h1>
                <FeatureButton />
                <Button />
                <GoBackButton />
                <VoteButton />
                <DropDown />
            </div>
        </>
    );
};

export default UIRoot;
