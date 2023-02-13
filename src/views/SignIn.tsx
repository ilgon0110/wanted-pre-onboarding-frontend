import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signApi } from "../api";
import { ISignUpForm } from "./SignUp";

const SignIn = () => {
  const navigate = useNavigate();
  const initialValue = { email: "", password: "" };
  const [formValues, setFormValues] = useState<ISignUpForm>(initialValue);
  const [formError, setFormError] = useState("");
  const [accessToken, setAccessToken] = useState([]);
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await signApi
      .signIn(formValues)
      .then((res) => setAccessToken(res.data.access_token))
      .catch((error) => setFormError("잘못된 이메일이나 비밀번호입니다."));
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
    </form>
  );
};

export default SignIn;
