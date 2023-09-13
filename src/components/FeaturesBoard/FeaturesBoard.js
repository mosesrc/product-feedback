import classes from "./FeaturesBoard.module.css";
import FeatureButton from "../UI/FeatureButton/FeatureButton";

const FeaturesBoard = (props) => {
    return (
        <div className={classes["feature-board"]}>
            {props.featuresDummyData.map((feature, idx) => (
                <FeatureButton title={feature} key={idx} />
            ))}
        </div>
    );
};

export default FeaturesBoard;
