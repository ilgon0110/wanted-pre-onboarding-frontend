import React, { useEffect, useState } from "react";
import { signApi } from "../api";
import { useNavigate } from "react-router-dom";

export interface ISignUpForm {
  email: string;
  password: string;
}

const SignUp = () => {
  const navigate = useNavigate();
  const initialValue = { email: "", password: "" };
  const [formValues, setFormValues] = useState<ISignUpForm>(initialValue);
  const [formError, setFormError] = useState<ISignUpForm>(initialValue);
  const [isSignUp, SetisSignUp] = useState(false);
  const [isValidButton, setIsValidButton] = useState(true);
  const { email, password } = formValues;
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await signApi
      .signUp(formValues)
      .then((res) => SetisSignUp(res.status === 201 ? true : false))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    if (isSignUp) navigate("/signin");
  }, [isSignUp, navigate]);

  const isValidForm = ({ email, password }: ISignUpForm) => {
    const error = { email: "", password: "" };
    const emailRegex = /.+@.+/g;
    if (!emailRegex.test(email) && email !== "") {
      error.email = "이메일 형식은 ___@___입니다";
    }
    if (password.length < 8 && password !== "") {
      error.password = "비밀번호는 8글자 이상이여야 합니다";
    }
    return error;
  };

  useEffect(() => {
    const error = isValidForm(formValues);
    const { email, password } = formValues;
    setFormError(error);
    if (
      Object.values(error).every((msg) => msg.length === 0) &&
      email !== "" &&
      password !== ""
    ) {
      setIsValidButton(false);
    } else {
      setIsValidButton(true);
    }
  }, [formValues]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          data-testid="email-input"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <span>{formError.email}</span>
      </div>
      <div>
        <input
          data-testid="password-input"
          name="password"
          value={password}
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
    </form>
  );
};

export default SignUp;
