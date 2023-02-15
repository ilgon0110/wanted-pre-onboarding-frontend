import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { signApi } from "@api/auth";
import { ISignUpForm } from "@controllers/SignUp";

interface IValue {
  accessToken: string[];
}

interface IAction {
  signUp: (formValues: ISignUpForm) => Promise<void>;
  signIn: (formValues: ISignUpForm) => Promise<void>;
}

const initialValue: IValue = { accessToken: [] };
const initialAction: IAction = {
  signUp: async () => {},
  signIn: async () => {},
};

const authValueContext = createContext(initialValue);
const authActionsContext = createContext(initialAction);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [accessToken, setAccessToken] = useState([]);
  const actions = useMemo(
    () => ({
      async signUp(formValues: ISignUpForm) {
        await signApi.signUp(formValues);
      },
      async signIn(formValues: ISignUpForm) {
        await signApi
          .signIn(formValues)
          .then((res) => setAccessToken(res.data.access_token));
      },
    }),
    []
  );
  return (
    <authActionsContext.Provider value={actions}>
      <authValueContext.Provider value={{ accessToken }}>
        {children}
      </authValueContext.Provider>
    </authActionsContext.Provider>
  );
};

export const useAuthValue = () => {
  return useContext(authValueContext);
};

export const useAuthActions = () => {
  return useContext(authActionsContext);
};
