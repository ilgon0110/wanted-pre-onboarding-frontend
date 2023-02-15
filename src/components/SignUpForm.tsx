import React from "react";
import { Link } from "react-router-dom";
import { ISignUpForm } from "../controllers/SignUp";

interface ISignUpFormProps {
  formValues: ISignUpForm;
  formError: ISignUpForm;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isValidButton: boolean;
}

const SignUpForm = ({
  formValues,
  formError,
  handleChange,
  isValidButton,
}: ISignUpFormProps) => {
  return (
    <>
      <div>
        <input
          data-testid="email-input"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
        <span>{formError.email}</span>
      </div>
      <div>
        <input
          data-testid="password-input"
          name="password"
          value={formValues.password}
          onChange={handleChange}
        />
        <span>{formError.password}</span>
      </div>

      <button
        type="submit"
        data-testid="signup-button"
        disabled={isValidButton}
      >
        회원가입
      </button>
      <div>계정이 있으신가요?</div>
      <Link to={"/signin"}>로그인 페이지로 이동하기</Link>
    </>
  );
};

export default React.memo(SignUpForm);
