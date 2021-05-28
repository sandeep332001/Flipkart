import React from "react";
import Input from "../../components/Input/Input";
import classes from "./signup.module.scss";
const SignUp = () => {
  return (
    <div className={`${classes["sign-up"]}`}>
      <form>
        <div className={classes.fullname}>
          <Input
            label="firstName"
            type="text"
            placeholder="First Name"
            name="First Name"
          />
          <Input
            label="lastName"
            type="text"
            placeholder="Last Name"
            name="Last Name"
          />
        </div>
        <Input
          label="mail"
          type="email"
          placeholder="Enter email"
          name="Email address"
        />
        <p>We'll never share your email with anyone else</p>
        <Input
          label="password"
          type="password"
          placeholder="Password"
          name="Password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
