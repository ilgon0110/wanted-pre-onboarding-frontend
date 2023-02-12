import axios from "axios";
import { ISignUpForm } from "./views/SignUp";

const api = axios.create({
  baseURL: "https://pre-onboarding-selection-task.shop/",
});
export const signApi = {
  signUp: (payload: ISignUpForm) => api.post("auth/signup", payload),
};
