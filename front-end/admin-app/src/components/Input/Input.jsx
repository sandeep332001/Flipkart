import classes from "./input.module.scss";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.label}>{props.name}</label>
      <input
        type={props.type}
        id={props.label}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
