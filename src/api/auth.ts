import { ISignUpForm } from "@controllers/SignUp";
import { authApi } from "./index";

export const signApi = {
  signUp: (payload: ISignUpForm) => {
    return authApi.post("auth/signup", payload, {
      headers: { "Content-Type": "application/json" },
    });
  },
  signIn: (payload: ISignUpForm) => {
    return authApi.post("auth/signin", payload, {
      headers: { "Content-Type": "application/json" },
    });
  },
};
