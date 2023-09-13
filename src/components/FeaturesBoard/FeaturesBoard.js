import classes from "./FeaturesBoard.module.css";
import FeatureButton from "../UI/FeatureButton/FeatureButton";

const dummyData = [
    "All",
    "UI",
    "UX",
    "Enhancement",
    "Bug",
    "Feature",
    "Interview",
];

const FeaturesBoard = () => {
    return (
        <div className={classes["feature-board"]}>
            {dummyData.map((feature, idx) => (
                <FeatureButton title={feature} key={idx} />
            ))}
        </div>
    );
};

export default FeaturesBoard;
