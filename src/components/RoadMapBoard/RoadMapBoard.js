import classes from "./RoadMapBoard.module.css";

const dummyData = {
    planned: 0,
    inProgress: 0,
    live: 0,
};

const RoadMapBoard = () => {
    return (
        <div className={classes.roadmap}>
            <div className={classes["road-nav"]}>
                <h2>Roadmap</h2>
                <a href="#nothing">View</a>
            </div>
            <div className={classes["road-list"]}>
                <ul>
                    <li className={classes["list-text"]}>
                        <div>
                            <span>Planned </span>
                            <span className={classes.data}>
                                {dummyData.planned}
                            </span>
                        </div>
                    </li>
                    <li className={classes["list-text"]}>
                        <div>
                            <span>In-Progress </span>
                            <span className={classes.data}>
                                {dummyData.inProgress}
                            </span>
                        </div>
                    </li>
                    <li className={classes["list-text"]}>
                        <div>
                            <span>Live </span>
                            <span className={classes.data}>
                                {dummyData.live}
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default RoadMapBoard;
