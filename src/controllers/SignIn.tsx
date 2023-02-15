import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SignInForm from "@components/SignInForm";
import { useAuthActions, useAuthValue } from "@contexts/authContext";
import { ISignUpForm } from "@controllers/SignUp";

const SignIn = () => {
  const navigate = useNavigate();
  const { accessToken } = useAuthValue();
  const { signIn } = useAuthActions();
  const initialValue = { email: "", password: "" };
  const [formValues, setFormValues] = useState<ISignUpForm>(initialValue);
  const [formError, setFormError] = useState("");
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    signIn(formValues).catch((error) => {
      setFormError(error.response.data.message);
    });
  };

  useEffect(() => {
    if (accessToken.length) {
      localStorage.setItem("access_token", JSON.stringify(accessToken));
      navigate("/todo");
    }
  }, [accessToken, navigate]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormError("");
    setFormValues({ ...formValues, [name]: value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <SignInForm
        formValues={formValues}
        formError={formError}
        handleChange={handleChange}
      />
    </form>
  );
};

export default SignIn;
