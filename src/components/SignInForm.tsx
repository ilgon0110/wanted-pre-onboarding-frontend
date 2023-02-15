import { Link } from "react-router-dom";
import { ISignUpForm } from "../controllers/SignUp";

interface ISignInFormProps {
  formValues: ISignUpForm;
  formError: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SignInForm = ({
  formValues,
  formError,
  handleChange,
}: ISignInFormProps) => {
  return (
    <>
      <div>
        <input
          data-testid="email-input"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          data-testid="password-input"
          name="password"
          value={formValues.password}
          onChange={handleChange}
        />
      </div>
      <div>{formError}</div>
      <button type="submit" data-testid="signin-button">
        로그인
      </button>
      <div>계정이 없으신가요?</div>
      <Link to={"/signup"}>회원가입 페이지로 이동하기</Link>
    </>
  );
};

export default SignInForm;
