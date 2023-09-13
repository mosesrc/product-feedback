import classes from "./Feed.module.css";
import NoFeedBack from "../NoFeedBack/NoFeedBack";
import Review from "../Review/Review";

const featuresDummyData = [
    "All",
    "UI",
    "UX",
    "Enhancement",
    "Bug",
    "Feature",
    "Interview",
];

// const feedbackDummyData = [
//     {
//         title: "Add tags for solutions",
//         categoryFeature: featuresDummyData[3],
//         details: "Easier to search for solutions based on a specific stack.",
//         votes: 112,
//         comments: [
//             { user: "a", description: "Great Job!" },
//             { user: "b", description: "Nice Work!" },
//         ],
//     },
//     {
//         title: "Add a dark theme option",
//         categoryFeature: featuresDummyData[5],
//         details:
//             "It would help people with light sensitivities and who prefer dark mode.",
//         votes: 99,
//         comments: [
//             { user: "a", description: "Great Job!" },
//             { user: "b", description: "Nice Work!" },
//             { user: "x", description: "Nice Work!" },
//             { user: "z", description: "Great Job!" },
//         ],
//     },
//     {
//         title: "Q&A within the challenge hubs",
//         categoryFeature: featuresDummyData[5],
//         details: "Challenge-specific Q&A would make for easy reference.",
//         votes: 65,
//         comments: [{ user: "d", description: "It is great start! Wonderful!" }],
//     },
// ];

const feedbackDummyData = [];

const Feed = (props) => {
    return (
        <div className={classes.feed}>
            {feedbackDummyData.length === 0 ? (
                <NoFeedBack />
            ) : (
                feedbackDummyData.map((review, idx) => (
                    <Review key={idx} review={review} />
                ))
            )}
        </div>
    );
};

export default Feed;
