import classes from "./UIRoot.module.css";
import HeaderBoard from "../HeaderBoard/HeaderBoard";
import FeaturesBoard from "../FeaturesBoard/FeaturesBoard";
import RoadMapBoard from "../RoadMapBoard/RoadMapBoard";
import NavigationPanel from "../NavigationPanel/NavigationPanel";
import Feed from "../Feed/Feed";

const featuresDummyData = [
    "All",
    "UI",
    "UX",
    "Enhancement",
    "Bug",
    "Feature",
    "Interview",
];

const UIRoot = () => {
    return (
        <>
            <div className={classes["ui-root"]}>
                <div className={classes["left-side-panel"]}>
                    <HeaderBoard />
                    <FeaturesBoard featuresDummyData={featuresDummyData} />
                    <RoadMapBoard />
                </div>
                <section className={classes["right-side-section"]}>
                    <NavigationPanel />
                    <Feed featuresDummyData={featuresDummyData} />
                </section>
            </div>
        </>
    );
};

export default UIRoot;
