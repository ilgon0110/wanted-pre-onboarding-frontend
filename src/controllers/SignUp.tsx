import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthActions } from "@contexts/authContext";
import SignUpForm from "@components/SignUpForm";

export interface ISignUpForm {
  email: string;
  password: string;
}

const SignUp = () => {
  const { signUp } = useAuthActions();
  const navigate = useNavigate();
  const initialValue = { email: "", password: "" };
  const [formValues, setFormValues] = useState<ISignUpForm>(initialValue);
  const [formError, setFormError] = useState<ISignUpForm>(initialValue);
  const [isSignUp, SetisSignUp] = useState(false);
  const [isValidButton, setIsValidButton] = useState(true);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    signUp(formValues).then(() => SetisSignUp(true));
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
    setFormError(error);
    if (
      Object.values(error).every((msg) => msg.length === 0) &&
      formValues.email !== "" &&
      formValues.password !== ""
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
      <SignUpForm
        formValues={formValues}
        formError={formError}
        isValidButton={isValidButton}
        handleChange={handleChange}
      />
    </form>
  );
};

export default SignUp;
