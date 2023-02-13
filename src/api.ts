import axios from "axios";
import { ISignUpForm } from "./views/SignUp";

const api = axios.create({
  baseURL: "https://pre-onboarding-selection-task.shop/",
});

export const signApi = {
  signUp: (payload: ISignUpForm) => {
    return api.post("auth/signup", payload, {
      headers: { "Content-Type": "application/json" },
    });
  },
  signIn: (payload: ISignUpForm) => {
    return api.post("auth/signin", payload, {
      headers: { "Content-Type": "application/json" },
    });
  },
};
