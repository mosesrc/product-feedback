import classes from "./Button.module.css";

const Button = (props) => {
    return (
        <button
            onClick={props.clickHandler}
            className={`${classes.base} ${classes[props.userClass]}`}
        >
            <span>{props.icon}</span> <span>{props.title}</span>
        </button>
    );
};

export default Button;
