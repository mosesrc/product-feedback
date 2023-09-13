import classes from "../Review/Review.module.css";
import VoteButton from "../UI/VoteButton/VoteButton";
import FeatureButton from "../UI/FeatureButton/FeatureButton";
import { ReactComponent as CommentIcon } from "../../assets/shared/icon-comments.svg";

const Review = ({ review }) => {
    return (
        <div className={classes.review}>
            <div className={classes["first-section"]}>
                <VoteButton votes={review.votes} />
            </div>
            <div className={classes["middle-section"]}>
                <h2 className={classes.title}>{review.title}</h2>
                <p className={classes.details}>{review.details}</p>
                <div className={classes.features}>
                    <FeatureButton title={review.categoryFeature} />
                </div>
            </div>
            <div className={classes["last-section"]}>
                <CommentIcon />
                <span>{review?.comments.length}</span>
            </div>
        </div>
    );
};

export default Review;
