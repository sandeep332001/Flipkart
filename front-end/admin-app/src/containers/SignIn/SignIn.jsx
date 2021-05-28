import Input from "../../components/Input/Input";
import classes from "./signin.module.scss";
const SignIn = () => {
  return (
    <div className={`${classes["sign-in"]}`}>
      <form>
        <Input
          label="mail"
          type="email"
          placeholder="Enter email"
          name="Email address"
        />

        <p>We'll never share your email with anyone else</p>
        <div>
          <Input
            label="password"
            placeholder="Password"
            name="Password"
            type="password"
          />
        </div>

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
