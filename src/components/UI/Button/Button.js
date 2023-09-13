import classes from "./Button.module.css";

const Button = (props) => {
    return (
        <button
            onClick={props.clickHandler}
            className={`${classes.base} classes.${props.userClass}`}
        >
            Button 1:state
        </button>
    );
};

export default Button;
